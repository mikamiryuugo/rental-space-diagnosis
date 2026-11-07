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
} from 'lucide-react';
import { PERSONA_TYPES, QUESTIONS } from '../data/diagnosisData';
import { PersonaType } from '../types/diagnosis';

interface StartScreenProps {
  onStart: () => void;
  onSelectPersonaPreview?: (persona: PersonaType) => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({
  onStart,
}) => {
  return (
    <div className="w-full max-w-lg mx-auto min-h-dvh flex flex-col justify-center gap-7 px-4 py-8 text-white">
      {/* トップ見出しエリア */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center text-center space-y-4"
      >
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/25 via-purple-500/25 to-pink-500/25 border border-indigo-400/40 text-indigo-200 text-sm font-bold shadow-sm">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>開業スタイル診断</span>
        </div>

        <h1 className="text-[26px] sm:text-3xl font-black tracking-tight leading-snug">
          あなたの予算×性格でわかる！
          <span className="block mt-1 bg-gradient-to-r from-amber-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
            「手放しで勝てるレンスペ開業」
          </span>
          適性診断
        </h1>

        <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed">
          直感スワイプで<strong className="text-amber-300 font-black">{QUESTIONS.length}問</strong>に答えるだけ！
          <br />
          あなたに合う開業スタイル（または見送り判定）がすぐにわかります。
        </p>
      </motion.div>

      {/* 特徴3点バッジ（パッと見で「すぐ終わる・簡単」と伝わるシンプル表示） */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.08 }}
        className="grid grid-cols-3 gap-2.5 text-center"
      >
        <div className="bg-slate-900/90 rounded-2xl py-3.5 px-2 border border-slate-800 shadow-lg">
          <Clock className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
          <div className="text-xs sm:text-sm font-black text-white">約60秒</div>
          <div className="text-[11px] font-medium text-slate-300">全{QUESTIONS.length}問</div>
        </div>
        <div className="bg-slate-900/90 rounded-2xl py-3.5 px-2 border border-slate-800 shadow-lg">
          <Smartphone className="w-5 h-5 text-pink-400 mx-auto mb-1.5" />
          <div className="text-xs sm:text-sm font-black text-white">スワイプ</div>
          <div className="text-[11px] font-medium text-slate-300">直感でサクサク</div>
        </div>
        <div className="bg-slate-900/90 rounded-2xl py-3.5 px-2 border border-slate-800 shadow-lg">
          <Gift className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
          <div className="text-xs sm:text-sm font-black text-white">全{PERSONA_TYPES.length}パターン</div>
          <div className="text-[11px] font-medium text-slate-300">本音で適性判定</div>
        </div>
      </motion.div>

      {/* スタートCTAボタン */}
      <div className="space-y-3.5">
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-black text-lg sm:text-xl shadow-[0_10px_30px_rgba(99,102,241,0.45)] flex items-center justify-center gap-2.5 border border-white/20"
        >
          <Play className="w-5 h-5 fill-current" />
          <span>今すぐ診断をはじめる</span>
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
      </div>
    </div>
  );
};
