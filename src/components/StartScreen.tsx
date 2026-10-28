import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Play,
  CheckCircle2,
  Clock,
  Smartphone,
  Gift,
  ChevronRight,
  Layers,
} from 'lucide-react';
import { PERSONA_TYPES, QUESTIONS } from '../data/diagnosisData';
import { PersonaType } from '../types/diagnosis';

interface StartScreenProps {
  onStart: () => void;
  onSelectPersonaPreview?: (persona: PersonaType) => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({
  onStart,
  onSelectPersonaPreview,
}) => {
  const [showCatalog, setShowCatalog] = React.useState(false);

  const evaluationAxes = [
    { num: '①', label: '初期予算感', sub: '50万〜200万円+' },
    { num: '②', label: '設営耐性', sub: '作業OK vs 手間なし重視' },
    { num: '③', label: 'エリア', sub: 'こだわりあり vs どこでもOK' },
    { num: '④', label: '物件探し耐性', sub: 'リサーチ好き vs めんどくさい' },
    { num: '⑤', label: 'リスク許容度', sub: '手堅く堅実 vs 大きく収益狙い' },
  ];

  return (
    <div className="w-full max-w-md mx-auto min-h-dvh flex flex-col justify-center gap-6 px-4 py-7 text-white">
      {/* トップ見出しエリア */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center text-center space-y-3.5"
      >
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/25 via-purple-500/25 to-pink-500/25 border border-indigo-400/40 text-indigo-200 text-sm font-bold shadow-sm">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>開業スタイル診断</span>
        </div>

        <h1 className="text-[28px] sm:text-3xl font-black tracking-tight leading-snug">
          あなたの予算×性格でわかる！
          <span className="block mt-1 bg-gradient-to-r from-amber-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
            「手放しで勝てるレンスペ開業」
          </span>
          9タイプ適性診断
        </h1>

        <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
          直感スワイプで<strong className="text-amber-300 font-black">{QUESTIONS.length}問</strong>に答えるだけ！
          <br />
          あなたに最適な開業スタイルと自動化の戦略がわかります。
        </p>
      </motion.div>

      {/* メインビジュアルカード（5つの評価軸・視認性重視の横1列リスト） */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.08 }}
        className="relative"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-40" />
        <div className="relative bg-slate-900/95 border border-slate-700/80 rounded-3xl p-5 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-sm font-black text-white">5つの評価軸で精密スコアリング</span>
            </div>
            <span className="text-xs font-bold text-indigo-300 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-500/40">
              全9タイプ判定
            </span>
          </div>

          {/* 5軸リスト（1行ずつ大きくクッキリ表示して改行崩れを完全防止） */}
          <div className="space-y-2.5">
            {evaluationAxes.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/90 border border-slate-700/80 rounded-2xl px-4 py-3 flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-sm font-black text-indigo-400">{item.num}</span>
                  <span className="text-sm sm:text-base font-black text-white">
                    {item.label}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-amber-200/95 bg-slate-950/70 px-3 py-1 rounded-xl border border-slate-700/80 text-right">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>

          {/* 特徴3点バッジ */}
          <div className="grid grid-cols-3 gap-2.5 pt-1 text-center">
            <div className="bg-slate-950/80 rounded-2xl py-2.5 px-2 border border-slate-800">
              <Clock className="w-5 h-5 text-amber-400 mx-auto mb-1" />
              <div className="text-xs sm:text-sm font-black text-white">約60秒</div>
              <div className="text-[11px] font-medium text-slate-300">全{QUESTIONS.length}問</div>
            </div>
            <div className="bg-slate-950/80 rounded-2xl py-2.5 px-2 border border-slate-800">
              <Smartphone className="w-5 h-5 text-pink-400 mx-auto mb-1" />
              <div className="text-xs sm:text-sm font-black text-white">スワイプ</div>
              <div className="text-[11px] font-medium text-slate-300">直感でサクサク</div>
            </div>
            <div className="bg-slate-950/80 rounded-2xl py-2.5 px-2 border border-slate-800">
              <Gift className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
              <div className="text-xs sm:text-sm font-black text-white">特典つき</div>
              <div className="text-[11px] font-medium text-slate-300">タイプ別戦略</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* スタートCTAボタン＆全タイプ一覧トグル */}
      <div className="space-y-3.5">
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-black text-lg sm:text-xl shadow-[0_10px_30px_rgba(99,102,241,0.45)] flex items-center justify-center gap-2.5 border border-white/20"
        >
          <Play className="w-5 h-5 fill-current" />
          <span>今すぐ無料で診断をはじめる</span>
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        <div className="flex items-center justify-center gap-5 text-xs font-medium text-slate-300">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            個人情報の入力なし
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            何度でもやり直しOK
          </span>
        </div>

        {/* 診断結果9パターンのプレビュー確認用アコーディオン */}
        {onSelectPersonaPreview && (
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setShowCatalog(!showCatalog)}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition"
            >
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>
                {showCatalog
                  ? '診断タイプ一覧を閉じる'
                  : '収録されている全9タイプの診断結果一覧を見る'}
              </span>
            </button>

            {showCatalog && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-2.5 bg-slate-900/95 border border-slate-700 rounded-2xl p-3 space-y-2 max-h-64 overflow-y-auto"
              >
                <p className="text-xs text-slate-300 mb-2 px-1">
                  ※タップすると各タイプの結果画面・LINE誘導CTAを直接プレビューできます：
                </p>
                {PERSONA_TYPES.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => onSelectPersonaPreview(p)}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 flex items-center justify-between gap-2 transition"
                  >
                    <div className="truncate">
                      <span className="text-xs font-mono font-bold text-indigo-400 mr-2">
                        {p.code}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white">{p.title}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
