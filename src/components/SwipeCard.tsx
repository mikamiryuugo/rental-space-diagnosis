import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { Check, X, RotateCcw, Home } from 'lucide-react';
import { Question } from '../types/diagnosis';
import { DynamicIcon } from './DynamicIcon';

interface SwipeCardProps {
  question: Question;
  nextQuestion?: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (isYes: boolean) => void;
  onUndo: () => void;
  onBackToTop: () => void;
  canUndo: boolean;
}

export const SwipeCard: React.FC<SwipeCardProps> = ({
  question,
  nextQuestion,
  currentIndex,
  totalQuestions,
  onAnswer,
  onUndo,
  onBackToTop,
  canUndo,
}) => {
  const [exitX, setExitX] = useState<number | null>(null);
  const swipingQuestionIdRef = useRef<number | null>(null);

  // ドラッグ距離のトラッキング
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-220, 220], [-12, 12]);

  // スタンプ（YES / NO）の透明度とスケール
  const yesOpacity = useTransform(x, [15, 95], [0, 1]);
  const noOpacity = useTransform(x, [-15, -95], [0, 1]);
  const yesScale = useTransform(x, [15, 95], [0.8, 1.08]);
  const noScale = useTransform(x, [-15, -95], [0.8, 1.08]);

  // 質問が切り替わるたびに座標とロック状態を確実に初期化
  useEffect(() => {
    x.stop();
    x.set(0);
    setExitX(null);
    swipingQuestionIdRef.current = null;
  }, [question.id, x]);

  const triggerSwipe = (isYes: boolean) => {
    if (swipingQuestionIdRef.current === question.id) return;
    swipingQuestionIdRef.current = question.id;
    setExitX(isYes ? 380 : -380);

    window.setTimeout(() => {
      onAnswer(isYes);
    }, 160);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    const velocityThreshold = 240;

    if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
      triggerSwipe(true);
    } else if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
      triggerSwipe(false);
    } else {
      x.set(0);
    }
  };

  const progressPercentage = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full max-w-md mx-auto min-h-dvh py-5 px-4 select-none">
      {/* 上部プログレスバー＆ナビゲーション */}
      <div className="w-full space-y-2.5">
        <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-200">
          <div className="flex items-center gap-2">
            {canUndo && (
              <button
                type="button"
                onClick={onUndo}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 transition active:scale-95"
              >
                <RotateCcw className="w-4 h-4" />
                <span>1つ戻る</span>
              </button>
            )}
            <button
              type="button"
              onClick={onBackToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition active:scale-95"
            >
              <Home className="w-3.5 h-3.5" />
              <span>トップに戻る</span>
            </button>
          </div>
          <div className="flex items-baseline gap-1 font-mono text-base">
            <span className="font-black text-indigo-400">Q.{currentIndex + 1}</span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-300">{totalQuestions}</span>
          </div>
        </div>

        {/* ゲージ */}
        <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* カードスタック領域 */}
      <div className="relative w-full flex items-center justify-center my-1 min-h-[300px] sm:min-h-[330px]">
        {/* 次のカード（背面に待機してサクサク感を演出） */}
        {nextQuestion && (
          <div
            key={`next-${nextQuestion.id}`}
            className="absolute inset-0 w-full h-full bg-slate-900/90 rounded-3xl border border-slate-700/70 p-6 flex flex-col justify-center shadow-xl pointer-events-none transform translate-y-3 scale-[0.95] opacity-65"
          >
            <div className="my-auto flex flex-col items-center text-center space-y-4 opacity-40">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400">
                <DynamicIcon name={nextQuestion.iconName} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-300 leading-snug px-2">
                {nextQuestion.question}
              </h3>
            </div>
          </div>
        )}

        {/* 現在のアクティブカード */}
        <motion.div
          key={`current-${question.id}`}
          style={{ x, rotate }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.9}
          onDragEnd={handleDragEnd}
          animate={
            exitX !== null
              ? { x: exitX, opacity: 0 }
              : { x: 0, opacity: 1 }
          }
          transition={{ duration: 0.16, ease: 'easeOut' }}
          className="relative z-10 w-full h-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 rounded-3xl border-2 border-slate-700/90 p-6 flex flex-col justify-center shadow-[0_20px_50px_rgba(0,0,0,0.6)] cursor-grab active:cursor-grabbing touch-pan-y overflow-hidden"
        >
          {/* 背景の光彩エフェクト */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* スワイプ時の「YES!」「NOPE」スタンプオーバーレイ */}
          <motion.div
            style={{ opacity: yesOpacity, scale: yesScale }}
            className="absolute top-6 left-6 z-20 pointer-events-none border-4 border-emerald-400 bg-emerald-950/90 text-emerald-300 px-4 py-1.5 rounded-xl font-black text-xl tracking-wider -rotate-12 shadow-lg flex items-center gap-1.5"
          >
            <Check className="w-6 h-6 stroke-[3]" />
            <span>はい！</span>
          </motion.div>

          <motion.div
            style={{ opacity: noOpacity, scale: noScale }}
            className="absolute top-6 right-6 z-20 pointer-events-none border-4 border-rose-400 bg-rose-950/90 text-rose-300 px-4 py-1.5 rounded-xl font-black text-xl tracking-wider rotate-12 shadow-lg flex items-center gap-1.5"
          >
            <X className="w-6 h-6 stroke-[3]" />
            <span>いいえ</span>
          </motion.div>

          {/* 質問メインコンテンツ */}
          <div className="my-auto flex flex-col items-center text-center space-y-5 z-10 py-2">
            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-indigo-500/25 via-purple-500/25 to-pink-500/25 border border-indigo-400/40 flex items-center justify-center text-indigo-300 shadow-inner p-4">
              <DynamicIcon name={question.iconName} className="w-9 h-9 sm:w-10 sm:h-10" />
            </div>

            <h2 className="text-[21px] sm:text-2xl font-black text-white leading-snug tracking-tight">
              {question.question}
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-800/80 px-4 py-3 rounded-2xl border border-slate-700">
              {question.subText}
            </p>
          </div>
        </motion.div>
      </div>

      {/* 下部ワンタップ操作ボタン（1組に統一） */}
      <div className="w-full space-y-2 pt-1">
        <p className="text-center text-xs text-slate-400 font-bold">
          左右にスワイプ、または下のボタンをタップ
        </p>

        <div className="grid grid-cols-2 gap-3.5 w-full">
          <button
            type="button"
            onClick={() => triggerSwipe(false)}
            className="group relative flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl bg-slate-900 hover:bg-rose-950/80 border-2 border-rose-500/50 hover:border-rose-400 text-rose-300 font-black shadow-lg transition-all duration-150 active:scale-95"
          >
            <div className="w-8 h-8 rounded-full bg-rose-500/25 group-hover:bg-rose-500/35 flex items-center justify-center text-rose-400 shrink-0 transition">
              <X className="w-4 h-4 stroke-[3]" />
            </div>
            <div className="flex flex-col items-start leading-tight whitespace-nowrap">
              <span className="text-base sm:text-lg text-white">いいえ</span>
              <span className="text-xs text-rose-300 font-bold">{question.noLabel}</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => triggerSwipe(true)}
            className="group relative flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl bg-slate-900 hover:bg-emerald-950/80 border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-300 font-black shadow-lg transition-all duration-150 active:scale-95"
          >
            <div className="flex flex-col items-end leading-tight whitespace-nowrap">
              <span className="text-base sm:text-lg text-white">はい！</span>
              <span className="text-xs text-emerald-300 font-bold">{question.yesLabel}</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-emerald-500/25 group-hover:bg-emerald-500/35 flex items-center justify-center text-emerald-400 shrink-0 transition">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
