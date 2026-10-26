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
import { PERSONA_TYPES } from '../data/diagnosisData';
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

  return (
    <div className="w-full max-w-md mx-auto min-h-dvh flex flex-col justify-between px-4 py-6 text-white">
      {/* トップバッジ */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center text-center space-y-3"
      >
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-indigo-400/40 text-indigo-300 text-xs font-bold shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>2026年最新版・レンタルスペース開業スタイル診断</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
          あなたの予算×性格でわかる！
          <span className="block mt-1 bg-gradient-to-r from-amber-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
            「勝てるレンスペ開業」
          </span>
          9タイプ適性診断
        </h1>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
          「興味はあるけど、自分にはどんなやり方が合ってる？」
          <br />
          直感スワイプで10問に答えるだけで、あなたに最適な開業スタイルと成功戦略がわかります！
        </p>
      </motion.div>

      {/* メインビジュアルカード（Tinder風プレビュー演出） */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="my-5 relative"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-40 animate-pulse" />
        <div className="relative bg-slate-900/95 border border-slate-700/80 rounded-3xl p-5 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold text-slate-200">5つの評価軸で精密スコアリング</span>
            </div>
            <span className="text-[11px] font-mono text-indigo-400 bg-indigo-950/70 px-2.5 py-0.5 rounded-full border border-indigo-500/30">
              全9タイプ判定
            </span>
          </div>

          {/* 5軸のチップ */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            {[
              { label: '① 初期予算感', sub: '50万〜200万円+' },
              { label: '② 作業・DIY耐性', sub: '自力設営 vs 丸投げ' },
              { label: '③ エリア・空間愛着', sub: '秘密基地 vs 完全遠隔' },
              { label: '④ 物件探し耐性', sub: '内見好き vs 時短重視' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-2.5 flex flex-col"
              >
                <span className="font-bold text-indigo-300">{item.label}</span>
                <span className="text-[11px] text-slate-400 mt-0.5">{item.sub}</span>
              </div>
            ))}
            <div className="col-span-2 bg-slate-800/80 border border-slate-700/60 rounded-xl p-2.5 flex items-center justify-between">
              <span className="font-bold text-indigo-300">⑤ リスク・オーナーマインド</span>
              <span className="text-[11px] text-slate-400">手堅く堅実 vs 大箱ハイリターン</span>
            </div>
          </div>

          {/* 特徴3点 */}
          <div className="grid grid-cols-3 gap-2 pt-1 text-center">
            <div className="bg-slate-950/60 rounded-xl py-2 px-1 border border-slate-800">
              <Clock className="w-4 h-4 text-amber-400 mx-auto mb-1" />
              <div className="text-[11px] font-bold text-white">所要時間60秒</div>
              <div className="text-[10px] text-slate-400">全10問</div>
            </div>
            <div className="bg-slate-950/60 rounded-xl py-2 px-1 border border-slate-800">
              <Smartphone className="w-4 h-4 text-pink-400 mx-auto mb-1" />
              <div className="text-[11px] font-bold text-white">スワイプ操作</div>
              <div className="text-[10px] text-slate-400">直感でサクサク</div>
            </div>
            <div className="bg-slate-950/60 rounded-xl py-2 px-1 border border-slate-800">
              <Gift className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
              <div className="text-[11px] font-bold text-white">診断特典つき</div>
              <div className="text-[10px] text-slate-400">タイプ別戦略書</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* スタートCTAボタン＆全タイプ一覧トグル */}
      <div className="space-y-3">
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-black text-lg shadow-[0_10px_30px_rgba(99,102,241,0.45)] flex items-center justify-center gap-2.5 border border-white/20"
        >
          <Play className="w-5 h-5 fill-current" />
          <span>今すぐ無料で診断をはじめる</span>
          <ChevronRight className="w-5 h-5" />
        </motion.button>

        <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400">
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            個人情報の入力なし
          </span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            何度でもやり直しOK
          </span>
        </div>

        {/* 診断結果9パターンのプレビュー確認用アコーディオン */}
        {onSelectPersonaPreview && (
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setShowCatalog(!showCatalog)}
              className="w-full py-2 px-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 text-xs font-medium flex items-center justify-center gap-1.5 transition"
            >
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
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
                className="mt-2 bg-slate-900/95 border border-slate-800 rounded-2xl p-3 space-y-1.5 max-h-60 overflow-y-auto"
              >
                <p className="text-[11px] text-slate-400 mb-2 px-1">
                  ※タップすると各タイプの結果画面・LINE誘導CTAを直接プレビューできます：
                </p>
                {PERSONA_TYPES.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => onSelectPersonaPreview(p)}
                    className="w-full text-left px-3 py-2 rounded-xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 flex items-center justify-between gap-2 transition"
                  >
                    <div className="truncate">
                      <span className="text-[10px] font-mono text-indigo-400 mr-1.5">
                        {p.code}
                      </span>
                      <span className="text-xs font-bold text-slate-200">{p.title}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
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
