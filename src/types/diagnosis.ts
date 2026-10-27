export interface ScoreProfile {
  /** 1. 予算感 (0〜100: 50万 / 100万 / 150万 / 200万〜) */
  budget: number;
  /** 2. 作業・DIY耐性 (0〜100: プロに丸投げ vs DIY・設営が大好き) */
  diy: number;
  /** 3. エリア・物件愛着 (0〜100: 自動で儲かれば遠隔OK vs 地元・自分も使いたいこだわり) */
  attachment: number;
  /** 4. 物件探し耐性 (0〜100: 苦手・面倒 vs 内見・リサーチが楽しい) */
  search: number;
  /** 5. リスク・マインド (0〜100: 手堅く・他責傾向 vs ハイリターン・自責思考) */
  mindset: number;
}

export interface Question {
  id: number;
  category: string;
  axisLabel: string;
  question: string;
  subText: string;
  iconName: string;
  yesLabel: string;
  noLabel: string;
  /** 「はい」を選んだときの各パラメータ変動値 */
  yesEffect: Partial<ScoreProfile>;
  /** 「いいえ」を選んだときの各パラメータ変動値 */
  noEffect: Partial<ScoreProfile>;
}

export interface RecommendedCourse {
  name: '開業保証コース' | '物件探しサポートコース' | '丸投げコース';
  badge: string;
  reason: string;
  features: string[];
}

export interface PersonaType {
  id: string;
  code: string;
  title: string;
  catchphrase: string;
  badgeText: string;
  budgetRange: '30万〜50万円〜' | '50万〜100万円' | '100万円前後' | '150万円前後' | '200万円〜';
  difficulty: '★☆☆☆☆ (初心者向け)' | '★★☆☆☆ (手軽)' | '★★★☆☆ (標準)' | '★★★★☆ (本格派)' | '★★★★★ (プロ志向)';
  expectedReturn: string;
  gradient: string;
  accentColor: string;
  iconName: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  strategy: {
    areaAndProperty: string;
    conceptAndSetup: string;
    operationStyle: string;
  };
  recommendedSpaceTypes: string[];
  recommendedCourse: RecommendedCourse;
  lineBenefitHighlight: string;
  /** 理想とするスコアプロファイル（0〜100）。ユーザーのスコアとの類似度計算および優先分岐に使用 */
  targetProfile: ScoreProfile;
}
