import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  INITIAL_SCORE,
  QUESTIONS,
  PERSONA_TYPES,
  diagnosePersona,
} from './data/diagnosisData';
import { PersonaType, ScoreProfile } from './types/diagnosis';
import { StartScreen } from './components/StartScreen';
import { SwipeCard } from './components/SwipeCard';
import { ResultScreen } from './components/ResultScreen';

type ScreenState = 'start' | 'quiz' | 'analyzing' | 'result';

interface AnswerRecord {
  questionIndex: number;
  isYes: boolean;
  previousScore: ScoreProfile;
}

export const App: React.FC = () => {
  const [screen, setScreen] = useState<ScreenState>('start');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<ScoreProfile>(INITIAL_SCORE);
  const [history, setHistory] = useState<AnswerRecord[]>([]);
  const [customPrimary, setCustomPrimary] = useState<PersonaType | null>(null);

  // 診断開始
  const handleStart = () => {
    setScore(INITIAL_SCORE);
    setCurrentIndex(0);
    setHistory([]);
    setCustomPrimary(null);
    setScreen('quiz');
  };

  // 質問への回答処理（はい / いいえ）
  const handleAnswer = (isYes: boolean) => {
    const currentQuestion = QUESTIONS[currentIndex];
    const effect = isYes ? currentQuestion.yesEffect : currentQuestion.noEffect;

    // 履歴を保存
    setHistory((prev) => [
      ...prev,
      {
        questionIndex: currentIndex,
        isYes,
        previousScore: { ...score },
      },
    ]);

    // スコアの加算・減算
    const updatedScore: ScoreProfile = {
      budget: score.budget + (effect.budget ?? 0),
      diy: score.diy + (effect.diy ?? 0),
      attachment: score.attachment + (effect.attachment ?? 0),
      search: score.search + (effect.search ?? 0),
      mindset: score.mindset + (effect.mindset ?? 0),
    };
    setScore(updatedScore);

    // 次の質問へ進むか、最終質問なら分析演出を挟んで結果画面へ
    if (currentIndex + 1 < QUESTIONS.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setScreen('analyzing');
      setTimeout(() => {
        setScreen('result');
      }, 650);
    }
  };

  // 1つ前の質問に戻る
  const handleUndo = () => {
    if (history.length === 0) return;
    const lastRecord = history[history.length - 1];
    setScore(lastRecord.previousScore);
    setCurrentIndex(lastRecord.questionIndex);
    setHistory((prev) => prev.slice(0, -1));
  };

  // トップページ等から特定のペルソナを直接プレビュー表示する場合
  const handleSelectPersonaPreview = (persona: PersonaType) => {
    setScore(persona.targetProfile);
    setCustomPrimary(persona);
    setScreen('result');
  };

  const diagnosisResult = diagnosePersona(score);
  const activePrimary = customPrimary ?? diagnosisResult.primary;
  const activeSecondary =
    activePrimary.id === diagnosisResult.secondary.id
      ? PERSONA_TYPES.find((p) => p.id !== activePrimary.id)!
      : diagnosisResult.secondary;

  return (
    <div className="min-h-dvh w-full bg-slate-950 text-white relative overflow-x-hidden">
      {/* 背景のグラデーション装飾 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-indigo-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -left-32 w-[360px] h-[360px] bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 right-0 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[110px]" />
      </div>

      <main className="relative z-10 w-full">
        <AnimatePresence mode="wait">
          {screen === 'start' && (
            <motion.div
              key="start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <StartScreen
                onStart={handleStart}
                onSelectPersonaPreview={handleSelectPersonaPreview}
              />
            </motion.div>
          )}

          {screen === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <SwipeCard
                question={QUESTIONS[currentIndex]}
                nextQuestion={QUESTIONS[currentIndex + 1]}
                currentIndex={currentIndex}
                totalQuestions={QUESTIONS.length}
                onAnswer={handleAnswer}
                onUndo={handleUndo}
                canUndo={history.length > 0}
              />
            </motion.div>
          )}

          {screen === 'analyzing' && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="min-h-dvh flex flex-col items-center justify-center px-6 text-center space-y-5"
            >
              <div className="relative w-20 h-20 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-indigo-500/30 animate-ping" />
                <div className="w-16 h-16 rounded-full border-4 border-t-indigo-400 border-r-purple-400 border-b-pink-400 border-l-transparent animate-spin" />
              </div>
              <div className="space-y-1.5">
                <p className="text-xs font-mono text-indigo-400 tracking-widest uppercase">
                  ANALYZING YOUR PROFILE...
                </p>
                <h2 className="text-xl font-black text-white">
                  5つの評価軸から最適スタイルを算出中
                </h2>
                <p className="text-xs text-slate-400">
                  予算感・DIY耐性・エリア愛着・物件探し・マインドを照合しています
                </p>
              </div>
            </motion.div>
          )}

          {screen === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <ResultScreen
                primary={activePrimary}
                secondary={activeSecondary}
                score={diagnosisResult.normalizedScore}
                onRestart={handleStart}
                onSwitchPersona={(persona) => {
                  setCustomPrimary(persona);
                  setScore(persona.targetProfile);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
