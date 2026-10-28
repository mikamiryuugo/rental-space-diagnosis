import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  MapPin,
  Wrench,
  Settings,
  Gift,
  MessageCircle,
  RotateCcw,
  ChevronRight,
  Award,
  TrendingUp,
  Layers,
  ExternalLink,
  Crown,
} from 'lucide-react';
import { PersonaType, ScoreProfile } from '../types/diagnosis';
import { PERSONA_TYPES } from '../data/diagnosisData';
import { DynamicIcon } from './DynamicIcon';

interface ResultScreenProps {
  primary: PersonaType;
  secondary: PersonaType;
  score: ScoreProfile;
  onRestart: () => void;
  onSwitchPersona: (persona: PersonaType) => void;
}

/**
 * 公式LINEの登録URL（LPの公式LINEリンク https://lin.ee/nkBUi41 を設定済み）
 */
const OFFICIAL_LINE_URL = 'https://lin.ee/nkBUi41';

export const ResultScreen: React.FC<ResultScreenProps> = ({
  primary,
  secondary,
  score,
  onRestart,
  onSwitchPersona,
}) => {
  const [showLineModal, setShowLineModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [primary.id]);

  // 予算スコアから4段階の目安ラベルを算出
  const getBudgetLabel = (val: number) => {
    if (val >= 75) return '150万〜200万円〜（大型・丸投げOK）';
    if (val >= 55) return '100万〜150万円（中規模・物件サポート）';
    if (val >= 35) return '50万〜100万円（標準スタート）';
    return '30万〜50万円前後（スモール・DIY重視）';
  };

  const axes = [
    {
      label: '1. 予算・投資スケール',
      value: score.budget,
      leftText: '30万〜50万円少額派',
      rightText: '150万〜200万+本格派',
      badge: getBudgetLabel(score.budget),
      color: 'from-amber-400 to-orange-500',
    },
    {
      label: '2. 設営耐性',
      value: score.diy,
      leftText: '手間なし重視',
      rightText: '設営・作業OK',
      badge: score.diy >= 50 ? '設営・作業OK' : '手間なし重視',
      color: 'from-emerald-400 to-teal-500',
    },
    {
      label: '3. エリア',
      value: score.attachment,
      leftText: 'どこでもOK',
      rightText: 'こだわりあり',
      badge: score.attachment >= 50 ? 'こだわりあり' : 'どこでもOK',
      color: 'from-pink-400 to-purple-500',
    },
    {
      label: '4. 物件探し耐性',
      value: score.search,
      leftText: 'めんどくさい',
      rightText: 'リサーチ好き',
      badge: score.search >= 50 ? 'リサーチ好き' : 'めんどくさい',
      color: 'from-sky-400 to-indigo-500',
    },
    {
      label: '5. リスク許容度',
      value: score.mindset,
      leftText: '手堅く堅実',
      rightText: '大きく収益狙い',
      badge: score.mindset >= 55 ? '大きく収益狙い' : '手堅く堅実',
      color: 'from-rose-400 to-red-500',
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto min-h-dvh pb-28 px-4 pt-5 text-white space-y-6">
      {/* ヘッダーラベル */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>あなたの診断結果が確定しました！</span>
        </div>
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>もう一度診断</span>
        </button>
      </div>

      {/* メイン結果カード（ペルソナヒーロー） */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative rounded-3xl p-6 bg-gradient-to-br ${primary.gradient} shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border border-white/20`}
      >
        <div className="absolute -right-10 -top-10 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-black bg-black/30 backdrop-blur-md text-white border border-white/20">
              {primary.code} / {primary.badgeText}
            </span>
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner">
              <DynamicIcon name={primary.iconName} className="w-7 h-7" />
            </div>
          </div>

          <div>
            <p className="text-xs font-bold text-white/85 mb-1">
              あなたに最もおすすめの開業スタイルは…
            </p>
            <h1 className="text-2xl sm:text-[26px] font-black text-white leading-tight drop-shadow-sm">
              {primary.title}
            </h1>
          </div>

          <p className="text-sm font-bold text-white/95 bg-black/25 backdrop-blur-sm rounded-2xl p-3.5 border border-white/15 leading-relaxed">
            {primary.catchphrase}
          </p>

          {/* スペック3点バー */}
          <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-white/15">
              <span className="text-white/80 block text-xs mb-0.5">自己資金目安（実費）</span>
              <span className="font-black text-base text-amber-300">{primary.budgetRange}</span>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-white/15">
              <span className="text-white/80 block text-xs mb-0.5">構築・運営難易度</span>
              <span className="font-black text-sm sm:text-base text-white">{primary.difficulty}</span>
            </div>
            <div className="col-span-2 bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-white/15 flex items-center justify-between gap-2">
              <span className="text-white/90 text-xs font-bold flex items-center gap-1.5 shrink-0">
                <TrendingUp className="w-4 h-4 text-emerald-300" />
                目標リターン目安
              </span>
              <span className="font-black text-xs sm:text-sm text-emerald-300 text-right">
                {primary.expectedReturn}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* タイプの特徴・詳細解説 */}
      <div className="bg-slate-900/95 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <Sparkles className="w-5 h-5 text-indigo-400" />
          <h2 className="text-base sm:text-lg font-black text-white">このタイプの特徴と強み・注意点</h2>
        </div>

        <p className="text-sm sm:text-base text-slate-100 leading-relaxed">{primary.description}</p>

        {/* 強み */}
        <div className="bg-emerald-950/35 border border-emerald-500/30 rounded-2xl p-4 space-y-2.5">
          <h3 className="text-sm font-black text-emerald-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>あなたの強み・勝ちパターン</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-100 leading-relaxed">
            {primary.strengths.map((str, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold mt-0.5">•</span>
                <span>{str}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 陥りがちな注意点（リアルなハードル） */}
        <div className="bg-rose-950/35 border border-rose-500/30 rounded-2xl p-4 space-y-2.5">
          <h3 className="text-sm font-black text-rose-300 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <span>知っておくべきリアルなハードル・注意点</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-100 leading-relaxed">
            {primary.weaknesses.map((wk, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-rose-400 font-bold mt-0.5">•</span>
                <span>{wk}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* おすすめの具体的開業戦略 */}
      <div className="bg-slate-900/95 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <Wrench className="w-5 h-5 text-amber-400" />
          <h2 className="text-base sm:text-lg font-black text-white">あなた専用の「勝てる開業戦略」3ステップ</h2>
        </div>

        <div className="space-y-3">
          <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 space-y-1.5">
            <div className="flex items-center gap-1.5 text-sm font-black text-indigo-300">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span>STEP 1：狙うべきエリアと物件選定</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
              {primary.strategy.areaAndProperty}
            </p>
          </div>

          <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 space-y-1.5">
            <div className="flex items-center gap-1.5 text-sm font-black text-pink-300">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span>STEP 2：コンセプト設計＆自社集客の構築</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
              {primary.strategy.conceptAndSetup}
            </p>
          </div>

          <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 space-y-1.5">
            <div className="flex items-center gap-1.5 text-sm font-black text-emerald-300">
              <Settings className="w-4 h-4 text-emerald-400" />
              <span>STEP 3：完全自動化と清掃外注マニュアル化</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
              {primary.strategy.operationStyle}
            </p>
          </div>
        </div>

        {/* 相性抜群のスペースジャンル */}
        <div className="pt-1">
          <p className="text-xs font-bold text-slate-400 mb-2">
            ▼ あなたと相性抜群のスペース用途
          </p>
          <div className="flex flex-wrap gap-2">
            {primary.recommendedSpaceTypes.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-xl bg-indigo-500/15 border border-indigo-400/30 text-indigo-200 text-xs font-bold"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* あなたに最適な開業伴走サポートプラン（LPの3コースと完全連動） */}
      <div className="bg-gradient-to-b from-amber-950/40 via-slate-900 to-slate-900 border-2 border-amber-500/40 rounded-3xl p-5 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-amber-400" />
            <h2 className="text-base font-black text-white">あなたに最適な伴走サポートプラン</h2>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-500/20 text-amber-300 border border-amber-400/30">
            現役8店舗オーナー直伝
          </span>
        </div>

        <div className="bg-slate-950/80 border border-amber-500/30 rounded-2xl p-4 space-y-2.5">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="text-xs font-bold text-amber-300">
              ★ 診断結果に基づく推奨プラン
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-amber-500 text-slate-950 font-black text-[11px]">
              {primary.recommendedCourse.badge}
            </span>
          </div>

          <div className="text-xl font-black text-white">
            『{primary.recommendedCourse.name}』
          </div>

          <p className="text-xs text-slate-200 leading-relaxed">
            {primary.recommendedCourse.reason}
          </p>

          <ul className="space-y-1.5 pt-2 border-t border-slate-800 text-xs text-slate-300">
            {primary.recommendedCourse.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3コース比較ミニガイド */}
        <div className="grid grid-cols-3 gap-1.5 text-[10px]">
          {[
            { name: '開業保証コース', desc: '教材＋無制限相談＋開業まで保証' },
            { name: '物件探しサポート', desc: '上記＋プロが物件を探索・提案' },
            { name: '丸投げコース', desc: '物件探し〜開業準備まで完全代行' },
          ].map((c, idx) => {
            const isMatched = primary.recommendedCourse.name.includes(c.name);
            return (
              <div
                key={idx}
                className={`rounded-xl p-2 border flex flex-col justify-between ${
                  isMatched
                    ? 'bg-amber-500/20 border-amber-400 text-white font-bold'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="truncate font-black">{c.name}</span>
                </div>
                <span className="text-[9px] leading-tight opacity-85">{c.desc}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5つの評価軸・スコア分析グラフ */}
      <div className="bg-slate-900/95 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-base font-black text-white">あなたの5軸パラメータ分析</h2>
          <span className="text-[11px] text-slate-400">回答データに基づく診断値</span>
        </div>

        <div className="space-y-4">
          {axes.map((axis, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="font-black text-white">{axis.label}</span>
                <span className="px-2.5 py-0.5 rounded-lg bg-slate-800 text-amber-300 font-bold text-xs border border-slate-700">
                  {axis.badge}
                </span>
              </div>
              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${axis.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${axis.value}%` }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                />
              </div>
              <div className="flex justify-between text-xs font-medium text-slate-300">
                <span>{axis.leftText}</span>
                <span>{axis.rightText}</span>
              </div>
            </div>
          ))}
        </div>

        {/* サブタイプ（第2候補）の提案 */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
          <div className="space-y-0.5">
            <span className="text-[10px] text-slate-400 block">
              僅差でマッチした第2候補のスタイル：
            </span>
            <span className="text-xs font-bold text-indigo-300">{secondary.title}</span>
          </div>
          <button
            type="button"
            onClick={() => onSwitchPersona(secondary)}
            className="shrink-0 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 border border-slate-700 transition"
          >
            詳細を見る
          </button>
        </div>
      </div>

      {/* ================================================================= */}
      {/* 最終画面（CTA）の要件：公式LINE登録への強力なリード獲得セクション */}
      {/* ================================================================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative rounded-3xl p-1 bg-gradient-to-r from-[#06C755] via-emerald-400 to-teal-500 shadow-[0_15px_50px_rgba(6,199,85,0.35)]"
      >
        <div className="bg-slate-950 rounded-[22px] p-5 sm:p-6 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#06C755]/20 border border-[#06C755]/40 text-[#4ade80] text-xs font-black">
            <Gift className="w-4 h-4" />
            <span>診断完了者限定・公式LINE無料プレゼント</span>
          </div>

          <h2 className="text-lg sm:text-xl font-black text-white leading-snug">
            あなたのタイプに合った具体的な物件探しのコツや事例を
            <span className="text-[#4ade80]">LINEで無料プレゼント！</span>
          </h2>

          {/* タイプ専用の特典ハイライトボックス */}
          <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-4 space-y-2.5">
            <div className="text-xs font-black text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>{primary.title} 専用の特典＆ご案内：</span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-white bg-emerald-950/50 border border-emerald-500/30 rounded-xl p-3 leading-relaxed">
              🎁 『{primary.lineBenefitHighlight}』
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#06C755] shrink-0" />
                <span>約5分でわかる！「自動化ビジネス構築のすべて」解説漫画動画</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#06C755] shrink-0" />
                <span>半年で月利10万〜開業4ヶ月で月利20万円を達成した受講生対談事例</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#06C755] shrink-0" />
                <span>現役8店舗オーナー「さんご」による無料個別相談（プラン最終確認）案内</span>
              </li>
            </ul>
          </div>

          {/* メインCTAボタン */}
          <a
            href={OFFICIAL_LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-5 rounded-2xl bg-[#06C755] hover:bg-[#05b34c] text-white font-black text-base sm:text-lg shadow-[0_8px_25px_rgba(6,199,85,0.5)] flex items-center justify-center gap-2.5 transition transform active:scale-95 border border-white/20 animate-bounce"
            style={{ animationDuration: '2.4s' }}
          >
            <MessageCircle className="w-6 h-6 fill-current shrink-0" />
            <span>公式LINEに登録して結果の続きを見る</span>
            <ChevronRight className="w-5 h-5 shrink-0" />
          </a>

          <p className="text-center text-[11px] text-slate-400">
            ※ワンタップで友だち追加完了・あなたに最適なプラン診断や個別相談もLINEから受けられます
          </p>
        </div>
      </motion.div>

      {/* 他のタイプも見てみる（全9タイプの切替セレクター） */}
      <div className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-4 space-y-3">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span>他の診断結果パターン（全9タイプ）も比較してみる</span>
        </div>
        <div className="grid grid-cols-1 gap-1.5">
          {PERSONA_TYPES.map((p) => {
            const isCurrent = p.id === primary.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => onSwitchPersona(p)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition ${
                  isCurrent
                    ? 'bg-indigo-600/30 border border-indigo-400/50 text-white'
                    : 'bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="truncate">
                  <span className="font-mono text-[10px] text-indigo-400 mr-1.5">{p.code}</span>
                  {p.title}
                </span>
                {isCurrent ? (
                  <span className="text-[10px] bg-indigo-500 text-white px-2 py-0.5 rounded-full shrink-0">
                    表示中
                  </span>
                ) : (
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 画面下部追従型のフローティングLINE CTAバー（スマホでのCVR最大化） */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/90 backdrop-blur-md border-t border-slate-800 p-3">
        <div className="max-w-md mx-auto flex items-center justify-between gap-3">
          <div className="min-w-0">
            <span className="text-[10px] font-bold text-[#4ade80] block">
              ＼ 物件探しのコツ＆自動化事例を無料配布 ／
            </span>
            <span className="text-xs font-black text-white truncate block">
              推奨：{primary.recommendedCourse.name}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowLineModal(true)}
            className="shrink-0 py-2.5 px-4 rounded-xl bg-[#06C755] hover:bg-[#05b34c] text-white font-black text-xs shadow-lg flex items-center gap-1.5 active:scale-95 transition"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>結果の続きを見る</span>
          </button>
        </div>
      </div>

      {/* 公式LINE誘導プレビュー＆遷移モーダル */}
      {showLineModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-sm bg-slate-900 border border-slate-700 rounded-3xl p-6 space-y-4 text-white shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#06C755]/20 text-[#4ade80] text-xs font-black">
                公式LINE 友だち追加特典
              </span>
              <button
                type="button"
                onClick={() => setShowLineModal(false)}
                className="text-xs text-slate-400 hover:text-white"
              >
                閉じる ✕
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-black leading-snug">
                {primary.title} のあなたへ専用ロードマップを送付します！
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                公式LINEを追加後、あなたのタイプに合った
                <strong className="text-amber-300">「具体的な物件探しのコツ・成功事例・約5分の解説漫画動画」</strong>
                や、推奨プラン（{primary.recommendedCourse.name}）の個別相談案内をお届けします。
              </p>
            </div>

            <div className="bg-slate-950 rounded-2xl p-3.5 border border-slate-800 text-xs space-y-1.5">
              <div className="text-slate-400 font-bold">【公式LINEで受け取れる内容】</div>
              <div className="text-emerald-300 font-bold">・{primary.lineBenefitHighlight}</div>
              <div className="text-slate-300">・漫画でわかる！自動化ビジネス構築のすべて</div>
              <div className="text-slate-300">・現役オーナー「さんご」との無料個別相談（最終確認）</div>
            </div>

            <a
              href={OFFICIAL_LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-2xl bg-[#06C755] hover:bg-[#05b34c] text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg transition"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>LINEアプリを開いて特典を受け取る</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      )}
    </div>
  );
};
