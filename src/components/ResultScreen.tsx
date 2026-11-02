import React, { useEffect } from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  RotateCcw,
  Award,
  TrendingUp,
  Crown,
} from 'lucide-react';
import { PersonaType, ScoreProfile } from '../types/diagnosis';
import { DynamicIcon } from './DynamicIcon';
import { AnswerRecord } from '../App';

interface ResultScreenProps {
  primary: PersonaType;
  secondary: PersonaType;
  score: ScoreProfile;
  history: AnswerRecord[];
  onRestart: () => void;
  onSwitchPersona: (persona: PersonaType) => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  primary,
  onRestart,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [primary.id]);

  return (
    <div className="w-full max-w-lg mx-auto min-h-dvh pb-10 px-4 pt-5 text-white space-y-5">
      {/* ヘッダーラベル */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>診断結果</span>
        </div>
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>もう一度診断する</span>
        </button>
      </div>

      {/* ① メイン結果カード（ペルソナヒーロー） */}
      <div
        className={`relative rounded-3xl p-5 sm:p-6 bg-gradient-to-br ${primary.gradient} shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border border-white/20`}
      >
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-3.5">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-black bg-black/30 backdrop-blur-md text-white border border-white/20">
              {primary.badgeText}
            </span>
            <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner">
              <DynamicIcon name={primary.iconName} className="w-6 h-6" />
            </div>
          </div>

          <div>
            <p className="text-xs font-bold text-white/85 mb-0.5">
              あなたに最適な開業スタイルは…
            </p>
            <h1 className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-sm">
              {primary.title}
            </h1>
          </div>

          <p className="text-xs sm:text-sm font-bold text-white/95 bg-black/25 backdrop-blur-sm rounded-2xl p-3 border border-white/15 leading-relaxed">
            {primary.catchphrase}
          </p>

          {/* スペックバー */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-2.5 border border-white/15">
              <span className="text-white/80 block text-[11px]">自己資金目安（実費）</span>
              <span className="font-black text-sm sm:text-base text-amber-300">
                {primary.budgetRange}
              </span>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-2.5 border border-white/15">
              <span className="text-white/80 block text-[11px] flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-300" />
                目標リターン目安
              </span>
              <span className="font-black text-xs sm:text-sm text-emerald-300">
                {primary.expectedReturn.replace(' / 1店舗', '')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ② タイプの特徴・強み・注意点 */}
      <div className="bg-slate-900/95 border border-slate-800 rounded-3xl p-5 space-y-3.5 shadow-xl">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2.5">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm sm:text-base font-black text-white">
            あなたの特徴と勝ちパターン
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
          {primary.description}
        </p>

        {/* 強み */}
        <div className="bg-emerald-950/35 border border-emerald-500/30 rounded-2xl p-3.5 space-y-1.5">
          <h3 className="text-xs sm:text-sm font-black text-emerald-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>強み・向いている戦い方</span>
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-100 leading-relaxed">
            {primary.strengths.slice(0, 2).map((str, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold">•</span>
                <span>{str}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 注意点 */}
        <div className="bg-rose-950/35 border border-rose-500/30 rounded-2xl p-3.5 space-y-1.5">
          <h3 className="text-xs sm:text-sm font-black text-rose-300 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>気をつけるべきポイント</span>
          </h3>
          <p className="text-xs text-slate-100 leading-relaxed">
            • {primary.weaknesses[0]}
          </p>
        </div>

        {/* 相性抜群のスペースジャンル */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {primary.recommendedSpaceTypes.map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-lg bg-indigo-500/15 border border-indigo-400/30 text-indigo-200 text-xs font-bold"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* ③ あなたに最適なサポートプラン */}
      <div className="bg-gradient-to-b from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/40 rounded-3xl p-4 sm:p-5 space-y-3 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Crown className="w-4 h-4 text-amber-400" />
            <h2 className="text-sm sm:text-base font-black text-white">
              あなたにおすすめのサポートコース
            </h2>
          </div>
          <span className="px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 font-black text-[11px]">
            {primary.recommendedCourse.badge}
          </span>
        </div>

        <div className="bg-slate-950/80 border border-amber-500/30 rounded-2xl p-3.5 space-y-2">
          <div className="text-lg font-black text-amber-300">
            『{primary.recommendedCourse.name}』
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">
            {primary.recommendedCourse.reason}
          </p>
        </div>
      </div>

      {/* もう一度診断するボタン */}
      <button
        type="button"
        onClick={onRestart}
        className="w-full py-3.5 px-5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-sm flex items-center justify-center gap-2 transition active:scale-95"
      >
        <RotateCcw className="w-4 h-4" />
        <span>最初からもう一度診断する</span>
      </button>
    </div>
  );
};
