import React, { useState } from 'react';
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

type ScreenState = 'start' | 'quiz' | 'result';

export interface AnswerRecord {
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
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  // 質問への回答処理（はい / いいえ）
  const handleAnswer = (isYes: boolean) => {
    if (screen !== 'quiz') return;
    const currentQuestion = QUESTIONS[currentIndex];
    if (!currentQuestion) {
      setScreen('result');
      return;
    }

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

    // 次の質問へ進むか、最終質問なら即座に結果画面へ遷移
    if (currentIndex + 1 < QUESTIONS.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setScreen('result');
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
        {screen === 'start' && (
          <StartScreen
            onStart={handleStart}
            onSelectPersonaPreview={handleSelectPersonaPreview}
          />
        )}

        {screen === 'quiz' && QUESTIONS[currentIndex] && (
          <SwipeCard
            question={QUESTIONS[currentIndex]}
            nextQuestion={QUESTIONS[currentIndex + 1]}
            currentIndex={currentIndex}
            totalQuestions={QUESTIONS.length}
            onAnswer={handleAnswer}
            onUndo={handleUndo}
            canUndo={history.length > 0}
          />
        )}

        {screen === 'result' && (
          <ResultScreen
            primary={activePrimary}
            secondary={activeSecondary}
            score={diagnosisResult.normalizedScore}
            history={history}
            onRestart={handleStart}
            onSwitchPersona={(persona) => {
              setCustomPrimary(persona);
              setScore(persona.targetProfile);
            }}
          />
        )}
      </main>
    </div>
  );
};

export default App;
