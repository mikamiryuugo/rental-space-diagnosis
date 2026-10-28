import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { Check, X, RotateCcw, Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';
import { Question } from '../types/diagnosis';
import { DynamicIcon } from './DynamicIcon';

interface SwipeCardProps {
  question: Question;
  nextQuestion?: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (isYes: boolean) => void;
  onUndo: () => void;
  canUndo: boolean;
}

export const SwipeCard: React.FC<SwipeCardProps> = ({
  question,
  nextQuestion,
  currentIndex,
  totalQuestions,
  onAnswer,
  onUndo,
  canUndo,
}) => {
  const [exitX, setExitX] = useState<number | null>(null);

  // ドラッグ距離のトラッキング
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-220, 220], [-14, 14]);
  const cardOpacity = useTransform(x, [-280, -180, 0, 180, 280], [0.5, 1, 1, 1, 0.5]);

  // スタンプ（YES / NO）の透明度とスケール
  const yesOpacity = useTransform(x, [15, 110], [0, 1]);
  const noOpacity = useTransform(x, [-15, -110], [0, 1]);
  const yesScale = useTransform(x, [15, 110], [0.8, 1.08]);
  const noScale = useTransform(x, [-15, -110], [0.8, 1.08]);

  // 背景カードのスケール（ドラッグ中に後ろのカードが浮き上がる演出）
  const nextCardScale = useTransform(x, [-160, 0, 160], [1, 0.94, 1]);
  const nextCardOpacity = useTransform(x, [-160, 0, 160], [1, 0.65, 1]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 85;
    const velocityThreshold = 450;

    if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
      triggerSwipe(true);
    } else if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
      triggerSwipe(false);
    }
  };

  const triggerSwipe = (isYes: boolean) => {
    if (exitX !== null) return;
    setExitX(isYes ? 420 : -420);
    setTimeout(() => {
      onAnswer(isYes);
      setExitX(null);
      x.set(0);
    }, 190);
  };

  const progressPercentage = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full max-w-md mx-auto min-h-dvh py-5 px-4 select-none">
      {/* 上部プログレスバー＆ナビゲーション */}
      <div className="w-full space-y-2.5">
        <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-200">
          <div className="flex items-center gap-2">
            {canUndo ? (
              <button
                type="button"
                onClick={onUndo}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 transition active:scale-95"
              >
                <RotateCcw className="w-4 h-4" />
                <span>1つ戻る</span>
              </button>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/25 text-indigo-200 border border-indigo-400/40">
                <Sparkles className="w-4 h-4" />
                <span>直感スワイプ診断</span>
              </span>
            )}
          </div>
          <div className="flex items-baseline gap-1 font-mono text-base">
            <span className="font-black text-indigo-400">Q.{currentIndex + 1}</span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-300">{totalQuestions}</span>
          </div>
        </div>

        {/* ゲージ */}
        <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* カードスタック領域 */}
      <div className="relative w-full flex items-center justify-center my-1 min-h-[390px] sm:min-h-[420px]">
        {/* 次のカード（背面に待機してサクサク感を演出） */}
        {nextQuestion && (
          <motion.div
            key={`next-${nextQuestion.id}`}
            style={{ scale: nextCardScale, opacity: nextCardOpacity }}
            className="absolute inset-0 w-full h-full bg-slate-900/90 rounded-3xl border border-slate-700/70 p-6 flex flex-col justify-between shadow-xl pointer-events-none transform translate-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-400 border border-slate-700">
                {nextQuestion.axisLabel}
              </span>
              <span className="text-xs font-mono text-slate-500">{nextQuestion.category}</span>
            </div>
            <div className="my-auto flex flex-col items-center text-center space-y-4 opacity-40">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400">
                <DynamicIcon name={nextQuestion.iconName} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-300 leading-snug px-2">
                {nextQuestion.question}
              </h3>
            </div>
            <div className="h-12" />
          </motion.div>
        )}

        {/* 現在のアクティブカード */}
        <motion.div
          key={`current-${question.id}`}
          style={{ x, rotate, opacity: cardOpacity }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.85}
          onDragEnd={handleDragEnd}
          animate={
            exitX !== null
              ? { x: exitX, opacity: 0, rotate: exitX > 0 ? 18 : -18 }
              : { x: 0, opacity: 1, rotate: 0 }
          }
          transition={{ type: 'spring', stiffness: 340, damping: 26 }}
          className="relative z-10 w-full h-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 rounded-3xl border-2 border-slate-700/90 p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] cursor-grab active:cursor-grabbing touch-pan-y overflow-hidden"
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

          {/* カードヘッダー */}
          <div className="flex items-center justify-between z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-indigo-500/20 text-indigo-200 border border-indigo-400/40">
              <span>{question.axisLabel}</span>
            </span>
            <span className="text-xs font-mono font-semibold text-slate-400 tracking-wider">
              {question.category}
            </span>
          </div>

          {/* 質問メインコンテンツ */}
          <div className="my-auto flex flex-col items-center text-center space-y-5 z-10 py-4">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500/25 via-purple-500/25 to-pink-500/25 border border-indigo-400/40 flex items-center justify-center text-indigo-300 shadow-inner">
              <DynamicIcon name={question.iconName} className="w-10 h-10" />
            </div>

            <h2 className="text-[22px] sm:text-2xl font-black text-white leading-snug tracking-tight">
              {question.question}
            </h2>

            <p className="text-sm text-slate-200 leading-relaxed bg-slate-800/80 px-4 py-3.5 rounded-2xl border border-slate-700">
              {question.subText}
            </p>
          </div>

          {/* カード下部のスワイプガイド */}
          <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-slate-800 text-xs sm:text-sm font-bold z-10">
            <div className="flex items-center gap-1.5 text-rose-200 bg-rose-950/40 border border-rose-500/30 rounded-xl px-3 py-2.5">
              <ArrowLeft className="w-4 h-4 shrink-0 text-rose-400" />
              <span className="truncate">{question.noLabel}</span>
            </div>
            <div className="flex items-center justify-end gap-1.5 text-emerald-200 bg-emerald-950/40 border border-emerald-500/30 rounded-xl px-3 py-2.5 text-right">
              <span className="truncate">{question.yesLabel}</span>
              <ArrowRight className="w-4 h-4 shrink-0 text-emerald-400" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* 下部ワンタップ操作ボタン */}
      <div className="w-full space-y-2.5 pt-1">
        <p className="text-center text-xs text-slate-300 font-bold">
          左右にスワイプ、または下のボタンをタップ
        </p>

        <div className="grid grid-cols-2 gap-4 w-full">
          <button
            type="button"
            onClick={() => triggerSwipe(false)}
            className="group relative flex items-center justify-center gap-3 py-4 px-5 rounded-2xl bg-slate-900 hover:bg-rose-950/80 border-2 border-rose-500/50 hover:border-rose-400 text-rose-300 font-black text-base shadow-lg transition-all duration-150 active:scale-95"
          >
            <div className="w-9 h-9 rounded-full bg-rose-500/25 group-hover:bg-rose-500/35 flex items-center justify-center text-rose-400 transition">
              <X className="w-5 h-5 stroke-[3]" />
            </div>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-lg text-white">いいえ</span>
              <span className="text-xs text-rose-300 font-medium">左スワイプ</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => triggerSwipe(true)}
            className="group relative flex items-center justify-center gap-3 py-4 px-5 rounded-2xl bg-slate-900 hover:bg-emerald-950/80 border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-300 font-black text-base shadow-lg transition-all duration-150 active:scale-95"
          >
            <div className="flex flex-col items-end leading-tight">
              <span className="text-lg text-white">はい！</span>
              <span className="text-xs text-emerald-300 font-medium">右スワイプ</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-emerald-500/25 group-hover:bg-emerald-500/35 flex items-center justify-center text-emerald-400 transition">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
