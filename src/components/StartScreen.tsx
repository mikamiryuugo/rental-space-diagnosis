import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, ChevronRight } from 'lucide-react';
import { QUESTIONS } from '../data/diagnosisData';
import { PersonaType } from '../types/diagnosis';

interface StartScreenProps {
  onStart: () => void;
  onSelectPersonaPreview?: (persona: PersonaType) => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({
  onStart,
}) => {
  return (
    <div className="w-full max-w-lg mx-auto min-h-dvh flex flex-col justify-center gap-8 px-4 py-8 text-white">
      {/* トップ見出し＆リード文 */}
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
          <span className="block mt-1.5 bg-gradient-to-r from-amber-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
            「レンタルスペース開業」
          </span>
          適性診断
        </h1>

        <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
          <strong className="text-amber-300 font-black">全{QUESTIONS.length}問・約60秒！</strong>
          <br />
          直感で答えるだけで、あなたに最適な開業スタイルがわかります。
        </p>
      </motion.div>

      {/* スタートCTAボタン */}
      <motion.button
        type="button"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.06 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        onClick={onStart}
        className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-black text-lg sm:text-xl shadow-[0_10px_30px_rgba(99,102,241,0.45)] flex items-center justify-center gap-2.5 border border-white/20"
      >
        <Play className="w-5 h-5 fill-current" />
        <span>今すぐ診断をはじめる</span>
        <ChevronRight className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

