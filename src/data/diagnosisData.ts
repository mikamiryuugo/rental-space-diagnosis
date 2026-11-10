import { Question, PersonaType, ScoreProfile } from '../types/diagnosis';

export const INITIAL_SCORE: ScoreProfile = {
  budget: 35,
  diy: 50,
  attachment: 50,
  search: 50,
  mindset: 50,
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'BASE 01',
    axisLabel: '① 本業の安定・覚悟',
    question: '本業の収入が安定していて、「失敗してもOK」と割り切れる？',
    subText: '事業である以上、100%の保証はありません。万が一でも生活が揺らがないかの確認です。',
    iconName: 'ShieldCheck',
    yesLabel: '割り切れる！',
    noLabel: '失敗したら困る',
    yesEffect: { budget: 15, mindset: 25 },
    noEffect: { budget: -25, mindset: -75 },
  },
  {
    id: 2,
    category: 'BUDGET 01',
    axisLabel: '① 初期予算感',
    question: '開業資金として「100万円」を用意できる？',
    subText: '実際には100万円かからないケースも多いですが、ひとつの目安として聞いています。',
    iconName: 'Wallet',
    yesLabel: '100万円OK',
    noLabel: '100万円以下',
    yesEffect: { budget: 20, mindset: 5 },
    noEffect: { budget: -20, diy: 5 },
  },
  {
    id: 3,
    category: 'BUDGET 02',
    axisLabel: '① 初期予算感（上限）',
    question: '良い物件があれば、「150万〜200万円」の投資も検討できる？',
    subText: '大型店舗での開業や、完全丸投げで立ち上げる場合の予算感です。',
    iconName: 'Coins',
    yesLabel: '150万〜OK',
    noLabel: '100万円まで',
    yesEffect: { budget: 30, mindset: 15 },
    noEffect: { budget: -15 },
  },
  {
    id: 4,
    category: 'BUDGET 03',
    axisLabel: '① スモールスタート志向',
    question: 'まずはリスクを低く、「30万〜70万円くらい」で小さく始めたい？',
    subText: '最初から大きく投資するより、まずは少額のスモールスタートで手堅く1店舗目を作りたいかの確認です。',
    iconName: 'ShieldCheck',
    yesLabel: '小さく始めたい',
    noLabel: '規模も狙いたい',
    yesEffect: { budget: -20, mindset: -10 },
    noEffect: { budget: 15, mindset: 18 },
  },
  {
    id: 5,
    category: 'AREA 01',
    axisLabel: '② エリアのこだわり',
    question: '「ここに出したい！」というこだわりのエリアがある？',
    subText: '出したい場所が決まっているか、事業と割り切って遠隔でもどこでもOKか。',
    iconName: 'MapPin',
    yesLabel: 'こだわりあり',
    noLabel: 'どこでもOK',
    yesEffect: { attachment: 35, mindset: -5 },
    noEffect: { attachment: -35, mindset: 15 },
  },
  {
    id: 6,
    category: 'SEARCH 01',
    axisLabel: '④ 物件リサーチ耐性',
    question: 'ネットで物件情報を検索したり、リサーチするのは好き？',
    subText: 'ポータルサイト等で条件に合う物件をコツコツ探す作業が「好き」か「めんどくさい」かの確認です。',
    iconName: 'Search',
    yesLabel: 'リサーチ好き',
    noLabel: 'めんどくさい',
    yesEffect: { search: 25, attachment: 5 },
    noEffect: { search: -25 },
  },
  {
    id: 7,
    category: 'STYLE 01',
    axisLabel: '⑤ 自力チャレンジ志向',
    question: '最初は時間がかかっても、「まずは自分でやってみたい」？',
    subText: 'やり方を学びながらまずは自分で動いてみたいか、最初からプロに任せて時短したいかの確認です。',
    iconName: 'Compass',
    yesLabel: '自分でやりたい',
    noLabel: 'プロに任せる',
    yesEffect: { search: 15, diy: 20 },
    noEffect: { search: -15, diy: -20 },
  },
  {
    id: 8,
    category: 'OUTSOURCE 01',
    axisLabel: '⑤ 物件探しの外注志向',
    question: '一番大変な「物件探し」は、お金がかかっても外注したい？',
    subText: 'レンスペで一番大変なのが物件探しです。自分で頑張るか、費用を払ってでもプロに探してもらうか。',
    iconName: 'HeartHandshake',
    yesLabel: '外注したい',
    noLabel: '自分で探す',
    yesEffect: { search: -45, budget: 10 },
    noEffect: { search: 25, diy: 10 },
  },
  {
    id: 9,
    category: 'OUTSOURCE 02',
    axisLabel: '⑤ 立ち上げ丸投げ志向',
    question: '物件探しから現地設営まで、「全部まるごと外注」したい？',
    subText: '現地での作業も含めてすべてプロに任せて、完成した状態のスペースを受け取りたいかどうか。',
    iconName: 'Crown',
    yesLabel: '全部丸投げ',
    noLabel: '設営は自分で',
    yesEffect: { diy: -60, search: -30, budget: 15 },
    noEffect: { diy: 25 },
  },
];

export const PERSONA_TYPES: PersonaType[] = [
  {
    id: 'small-start',
    code: 'TYPE 01',
    title: '【少額・ローリスク！スモールスタート型】',
    catchphrase: '初期費用を最小限に抑え、まずは月3〜5万円から手堅く利益を積み上げる堅実スタート型！',
    badgeText: '少額30〜70万×低リスク開業',
    budgetRange: '30万〜70万円',
    difficulty: '★★☆☆☆ (手軽)',
    expectedReturn: '想定月利 3万〜5万円前後 / 1店舗',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    accentColor: 'emerald',
    iconName: 'ShieldCheck',
    description:
      '「まずは大きなリスクを取らず、30万〜70万円くらいの少額から手堅く1店舗目を作りたい」という堅実なあなたに最適なスタイルです。ローカルエリアの家賃が安い物件や、都心ならコンパクトな小箱物件（スタジオ・サロン・小箱会議室）を選び、自分で家具や備品の設営を行うことで初期費用を最小限に抑え、まずは月3万〜5万円の手残りを着実に作ることができます。',
    strengths: [
      'スタジオ・サロン・小箱会議室などシンプルな設備に絞ることで、30万〜70万円の少額から開業可能',
      '家賃が安いローカル物件や都心の小箱物件を選ぶことで、毎月の固定費リスクを最小限に抑えて運営できる',
      '万が一のリスクを極限まで抑えながら、1店舗目の運営ノウハウを一通り身につけられる',
    ],
    weaknesses: [
      '最大の壁である「レンスペ許可物件の獲得」で、自己流だと不動産屋に断られ続けて挫折しやすい',
      '会議室やサロンは都心・駅チカ向き、地方や郊外ならレンタルスタジオ向きなど、エリアに合った用途選定が必須',
    ],
    strategy: {
      areaAndProperty:
        '都心・主要駅チカなら「会議室・サロン」、郊外や地方都市なら「レンタルスタジオ」など、エリアの需要に合った手頃な家賃の物件を選びます。',
      conceptAndSetup:
        '余計な内装費をかけず、ターゲットが必要とする実用的な備品だけに絞って自分で設営し、初期コストを最小化します。',
      operationStyle:
        '予約・決済・スマートロック連携で無人化しつつ、清掃はマニュアル化して外注スタッフに任せることで手放し運営を実現します。',
    },
    recommendedSpaceTypes: ['少額スタートのレンタルスタジオ', 'シンプル設備のレンタルサロン', 'コンパクト貸し会議室'],
    recommendedCourse: {
      name: '開業保証コース',
      badge: '少額から堅実に始めたい方に最適',
      reason:
        '初期費用を抑えて手堅く始めたいあなたには、動画教材と無制限のLINE質問相談で「失敗しない物件選びの基準」と「自社集客・自動化の型」を学びながら1店舗目を立ち上げる『開業保証コース』が最適です！',
      features: [
        '無駄な初期コストを削り、30万〜70万円で手堅く始める戦略設計',
        '候補物件が本当に利益を出せるか、契約前に現役オーナーへ無制限で相談可能',
        '1年経っても開業できない場合は無償でサポート延長される安心の「開業保証」付き',
      ],
    },
    lineBenefitHighlight: '少額＆ローリスクで手堅く始める安全開業ガイド',
    targetProfile: {
      budget: 25,
      diy: 75,
      attachment: 60,
      search: 65,
      mindset: 55,
    },
  },
  {
    id: 'standard-starter',
    code: 'TYPE 02',
    title: '【王道バランス！スタンダード開業型】',
    catchphrase: '標準的な資金で無理なくスタート！固定リピーターがつく手堅い1店舗目を作る王道モデル！',
    badgeText: '予算50〜100万×王道スタイル',
    budgetRange: '50万〜100万円',
    difficulty: '★★★☆☆ (標準)',
    expectedReturn: '想定月利 3万〜10万円 / 1店舗',
    gradient: 'from-violet-600 via-indigo-600 to-blue-600',
    accentColor: 'violet',
    iconName: 'Compass',
    description:
      '50万〜100万円前後の標準的な資金力を活かし、物件のリサーチから設営・立ち上げまでプロのサポートを受けながら着実に進める王道タイプです。【レンタルスタジオ】や【レンタルサロン・会議室】は、固定リピーターがつきやすく、都心だけでなく地方・郊外でも月3万〜10万円の安定した収益を狙えます。',
    strengths: [
      '極端に狭い物件だけでなく、リピーターがつきやすい標準サイズのスタジオ・サロン・会議室も候補に入れられる',
      '固定リピーターがつけば、毎月の売上が安定しやすい',
      '外注費をかけすぎず、プロの添削を受けながら進めることでコスパ良く優良店舗を作れる',
    ],
    weaknesses: [
      '自己流の判断だけで物件を契約してしまうと、「実は需要がない立地・用途だった」という失敗をしがち',
      'ポータルサイト頼みだと手数料がもったいないため、リピーターを直接囲い込む「自社集客」の構築がカギになる',
    ],
    strategy: {
      areaAndProperty:
        '不動産業者への正しいアプローチ方法を実践して転貸OKの物件を発掘し、契約前にプロの目線で収支シミュレーションを行います。',
      conceptAndSetup:
        '物件の立地に合わせてスタジオ・サロン・会議室などを設計し、ポータルサイトと同時に「自社予約サイト」を構築して利益率を高めます。',
      operationStyle:
        'オープン初日から予約・決済の自動化と清掃外注の仕組みを取り入れ、本業に支障が出ない手放し運営を作ります。',
    },
    recommendedSpaceTypes: ['レンタルスタジオ（ダンス・ヨガ等）', '固定客がつくレンタルサロン', '駅チカ貸し会議室'],
    recommendedCourse: {
      name: '開業保証コース',
      badge: '一番人気・王道1店舗目に最適',
      reason:
        '標準的な予算で着実に1店舗目を作りたいあなたには、現役で8〜9店舗を運営するオーナーに物件選定から立ち上げまで無制限でLINE相談できる『開業保証コース』がぴったりです！',
      features: [
        '物件の探し方・不動産業者へのアプローチ方法から学べる実践教材',
        '見つけた物件の収支シミュレーションやコンセプト設計をプロが直接フォロー',
        'ポータル手数料に依存しない「自社サイト作成＆自社集客」まで徹底伴走',
      ],
    },
    lineBenefitHighlight: '現役8店舗オーナー直伝！着実に利益を生む「王道1店舗目」構築ロードマップ',
    targetProfile: {
      budget: 55,
      diy: 70,
      attachment: 60,
      search: 75,
      mindset: 70,
    },
  },
  {
    id: 'bigbox-challenger',
    code: 'TYPE 03',
    title: '【大箱・ハイリターン挑戦型】',
    catchphrase: '資金力とオーナー胆力を活かし、大型物件で本格的な収益を狙うチャレンジャー！',
    badgeText: '本格投資×大箱・高単価狙い',
    budgetRange: '100万〜200万円前後',
    difficulty: '★★★★★ (プロ志向)',
    expectedReturn: '想定月利 5万〜25万円以上 / 1店舗',
    gradient: 'from-rose-600 via-orange-500 to-amber-500',
    accentColor: 'rose',
    iconName: 'Flame',
    description:
      '十分な自己資金と強い「自責マインド」を兼ね備えており、事業として本格的な規模のスペースに挑戦できるタイプです。少額の極小物件だけでなく、ライバルが参入しにくい「大型物件（レンタルスタジオ・貸し会議室など）」も視野に入れることで、月5万円の手堅いラインから、軌道に乗れば月20万円以上といった大きなリターンまで狙うことができます。',
    strengths: [
      '資金力とリスク許容度があるため、競合が少ない大型物件（スタジオ・貸し会議室など）も選択肢に入れられる',
      '大人数利用など単価を取りやすい物件を選べるため、1店舗あたりの収益上限を高く持てる',
      '出た利益を次の出店資金に回すことで、段階的に複数店舗へと事業を拡大できる',
    ],
    weaknesses: [
      '家賃などの固定費が高くなる分、最初の「物件選定」と「用途のマッチング」を誤るとリスクが大きい',
      '自己流で進めるよりも、現役で複数店舗を回しているプロの目利きとシミュレーションを入れる方が安全',
    ],
    strategy: {
      areaAndProperty:
        'ダンス練習やヨガ・セミナー需要があるエリアで、広さが取れるテナントや好条件の物件を慎重に見極めて選定します。',
      conceptAndSetup:
        '複数人利用でも単価が取れるレンタルスタジオや大型スペースとして設計し、ポータル対策と「自社HPからの直接予約導線」を稼働させます。',
      operationStyle:
        '清掃外注マニュアルと自動決済・スマートロックで無人化しつつ、収支を見ながら2店舗目以降の展開を狙います。',
    },
    recommendedSpaceTypes: ['大型レンタルダンススタジオ', '広めの貸し会議室・イベント会場', '複数名対応クリエイティブスタジオ'],
    recommendedCourse: {
      name: '物件探しサポートコース',
      badge: '優良物件の獲得にコミット',
      reason:
        '固定費のある大型物件に挑戦する上で命綱となる「物件選び」をプロと一緒に進め、コンセプト設計から自社集客まで着実に立ち上げる『物件探しサポートコース』（または『開業保証コース』）がベストマッチです！',
      features: [
        '現役で8〜9店舗を展開するオーナーの基準で優良物件を探索・選定',
        '立地に合ったコンセプト設計＆ポータル＋自社サイトの集客構築',
        '2店舗目・3店舗目への拡大も見据えた実践的な経営ノウハウを直接指導',
      ],
    },
    lineBenefitHighlight: '大型スタジオ＆好条件スペースのリアル実例と失敗しない物件選定基準',
    targetProfile: {
      budget: 85,
      diy: 60,
      attachment: 50,
      search: 65,
      mindset: 90,
    },
  },
  {
    id: 'property-search-outsource',
    code: 'TYPE 04',
    title: '【効率重視！物件探し外注型】',
    catchphrase: '最大の壁「物件探し」はプロに外注！設営は自分で動いて賢く時短スタート！',
    badgeText: '物件探し外注×効率立ち上げ',
    budgetRange: '100万円前後',
    difficulty: '★★★☆☆ (標準)',
    expectedReturn: '想定月利 3万〜10万円 / 1店舗＋将来の事業売却(M&A)',
    gradient: 'from-blue-600 via-indigo-600 to-violet-700',
    accentColor: 'indigo',
    iconName: 'HeartHandshake',
    description:
      '「設営や準備は自分でできるけれど、一番つまずきやすい『物件探し』はお金を払ってでもプロに任せてショートカットしたい！」という合理的なタイプです。レンタルスペースで9割の人が挫折する原因が「許可物件が見つからないこと」。その一番大変な部分だけをプロに外注することで、本業が忙しくても最短ルートで手堅い店舗をオープンできます。',
    strengths: [
      '最大の挫折ポイントである「レンスペ許可物件の探索・交渉」をプロに任せて大幅に時短できる',
      '設営作業は自分で行うため、フル丸投げよりも初期費用を抑えてスタートできる',
      'エリアにこだわらず「需要があって利益が出る場所」で探せば、さらに早く優良物件に出会える',
    ],
    weaknesses: [
      '自分でゼロから物件を探す時間を節約できる分、物件探しサポートの枠が埋まる前に早めの相談が必要',
      'オープン後の利益率を高めるため、ポータルサイトだけでなく「自社集客」の仕組みも同時に作ることが重要',
    ],
    strategy: {
      areaAndProperty:
        'プロが独自の目利きとルートで、安定需要が見込めるレンスペ可能物件を探索し、あなたに候補物件をご提案します。',
      conceptAndSetup:
        '決まった物件に合わせて「レンタルスタジオ」や「会議室・サロン」の備品リストを作成し、現地での設営を行ってオープンさせます。',
      operationStyle:
        'スマートロック連携・自動メッセージ・清掃外注マニュアルを初日から導入し、自分が現場に行かずに回る状態を作ります。',
    },
    recommendedSpaceTypes: ['プロ選定のレンタルスタジオ', '需要重視エリアの貸し会議室・サロン', 'M&A売却を見据えた堅実店舗'],
    recommendedCourse: {
      name: '物件探しサポートコース',
      badge: '物件探し外注×最短立ち上げに最適',
      reason:
        '一番大変な「物件探し」をプロに任せて時短したいあなたには、あなたに代わってレンスペ可能物件を探索・提案する『物件探しサポートコース』が最適です！',
      features: [
        '開業保証コースの全内容（教材・無制限相談・集客＆自動化フォロー）を網羅',
        'あなたに代わってプロがレンスペ可能物件を探索・ご提案',
        '自社サイト作成＆予約決済システムの自動化連携まで徹底伴走',
      ],
    },
    lineBenefitHighlight: '最大の壁「物件探し」をショートカット！勝てる物件選定＆自社集客ロードマップ',
    targetProfile: {
      budget: 65,
      diy: 55,
      attachment: 25,
      search: 20,
      mindset: 75,
    },
  },
  {
    id: 'vip-full-outsource',
    code: 'TYPE 05',
    title: '【完全丸投げ・投資家オーナー型】',
    catchphrase: '自分の時間は切り売りしない！物件探しから現地設営まで完全代行で手放しオーナーへ！',
    badgeText: '完全丸投げ×作業ゼロ',
    budgetRange: '200万円〜',
    difficulty: '★★☆☆☆ (手軽)',
    expectedReturn: '想定月利 5万〜20万円 / 1店舗（自分の作業時間ゼロ）',
    gradient: 'from-amber-500 via-yellow-500 to-orange-600',
    accentColor: 'amber',
    iconName: 'Crown',
    description:
      '本業や既存事業が忙しく、「物件を何十件も探す時間もないし、家具の組み立てやページ作成も自分でやりたくない。でも毎月利益を生む実店舗資産は持ちたい！」という投資家気質のあなた。自分でゼロから試行錯誤して時間を失うより、物件探しから現地設営・自動化設定まで全てプロに任せる【完全丸投げスタイル】が最も時間対効果が高い選択です。',
    strengths: [
      '初心者がつまずく「物件探しの難航」「コンセプトのズレ」「現地設営の手間」をすべてショートカットできる',
      '自分の貴重な本業の時間や休日を一切犠牲にせず、完成されたスペースのオーナーになれる',
      '現役で8〜9店舗を運営するプロ基準の「ポータル＋自社集客」と「清掃外注体制」が最初から手に入る',
    ],
    weaknesses: [
      '完全代行のパッケージ費用＋物件取得・設営の実費がかかるため、まとまった自己資金（余力）が必要',
      '毎月の対応枠に限りがあるため、早めの相談と枠の確保が必須になる',
    ],
    strategy: {
      areaAndProperty:
        'あなたが不動産屋を回る必要はゼロ。専門チームが独自の目利きとルートで、需要が見込めるレンスペ許可物件を探索・確保します。',
      conceptAndSetup:
        '物件の立地に合わせて勝率の高いコンセプト（レンタルスタジオ等）を設計し、備品手配から室内設営、予約ページ・自社サイト構築まで全てプロが代行します。',
      operationStyle:
        '予約・決済・スマートロックの自動化から清掃業者の手配まで完了した状態で引き渡し、手放しでの運営をスタートします。',
    },
    recommendedSpaceTypes: ['プロ完全構築レンタルスタジオ', '需要重視エリアの無人スペース', 'M&A（事業売却）も狙える資産型店舗'],
    recommendedCourse: {
      name: '丸投げコース',
      badge: '手間ゼロ・完全お任せパッケージ',
      reason:
        '「時間も余力もないけれど、手堅く回る店舗資産が欲しい」というあなたには、物件探しから現地設営・開業準備まで全てお任せできる最上位プラン『丸投げコース』が唯一無二の選択肢です！',
      features: [
        '何もしなくていい完全代行！物件探しから開業準備・現地設営まで全てプロにお任せ',
        'インスタベース等の掲載ページ作成＋手数料を抑える「自社サイト」まで構築',
        '予約・決済の完全自動化システム連携＆清掃業者の選定・外注化までフルセット',
      ],
    },
    lineBenefitHighlight: '物件探しから開業準備まで全てお任せ！「丸投げコース」のご案内',
    targetProfile: {
      budget: 90,
      diy: 10,
      attachment: 20,
      search: 15,
      mindset: 70,
    },
  },
  {
    id: 'stop-not-recommended',
    code: 'TYPE 06',
    title: '【今はやらない方がいい！本業強化＆資金作り優先タイプ】',
    catchphrase: 'なけなしの全財産で勝負するのはNG！まずは本業を強くして余剰資金を作ってから！',
    badgeText: '今は開業見送り推奨×本業・貯蓄優先',
    budgetRange: 'まずは余剰資金100万円〜の確保',
    difficulty: 'ー (今は開業見送り推奨)',
    expectedReturn: '今は開業せず、本業の収入アップ・貯蓄を最優先',
    gradient: 'from-slate-700 via-rose-900 to-slate-900',
    accentColor: 'rose',
    iconName: 'ShieldCheck',
    description:
      '初期予算が100万円以下で、かつ「絶対に失敗できない・失うと生活に困るお金」でレンタルスペースを始めようとしているなら、今は絶対にやらない方がいいです。レンタルスペースは事業である以上リスクもあり、なけなしの全財産を切り崩して一発逆転を狙うものではありません。まずは本業の収入をしっかり安定させ、「万が一うまくいかなくても大丈夫」と割り切れる余剰資金ができてから挑戦しましょう。',
    strengths: [
      '開業前に「今の資金状況やリスク許容度では危ない」と冷静に立ち止まれたこと自体が最大のリスク回避',
      '無理に借金や生活防衛資金を取り崩してスタートし、焦ってダメな物件を掴む最悪の失敗を未然に防げる',
      'まずは本業やスキルアップに集中してキャッシュフローを強くすることで、将来本当に勝てる土台が作れる',
    ],
    weaknesses: [
      '「少額ですぐに誰でも儲かる」という甘い言葉に流されて、生活費やなけなしの貯金を投じてしまうこと',
      '心の余裕・資金の余裕がない状態で始めると、少しの空室期間やトラブルでも精神的に追い詰められてしまう',
    ],
    strategy: {
      areaAndProperty:
        '今は物件を探したり契約したりする段階ではありません。焦って格安の悪条件物件に手を出すのは厳禁です。',
      conceptAndSetup:
        'まずは本業での収入アップや支出の見直しを行い、生活防衛資金とは別に「100万円以上の余剰資金」を作ることに集中します。',
      operationStyle:
        '資金と心の余裕が整うまでは開業を見送り、情報収集だけにとどめておくのが最も賢明な判断です。',
    },
    recommendedSpaceTypes: ['今は開業見送り（本業への集中）', '生活防衛資金と余剰資金の確保', '100万円以上の余剰資金ができてから再検討'],
    recommendedCourse: {
      name: 'まずは本業強化・資金作りを優先（開業見送り）',
      badge: '無理な開業はおすすめしません',
      reason:
        '当スクールでは、生活費やなけなしの全財産を切り崩してまで無理に開業することはお勧めしていません。まずは本業を強くして、万が一失敗しても良いと思える「余剰資金」ができてから、改めて一歩を踏み出しましょう！',
      features: [
        '生活防衛資金とは別に、失っても生活が揺らがない余剰資金（目安100万円〜）を貯める',
        '本業の収入基盤を強化し、精神的にも金銭的にも余裕のある状態を作る',
        '資金とマインドの準備が整ったタイミングで、改めて堅実な1店舗目を検討する',
      ],
    },
    lineBenefitHighlight: '無理な開業はNG！失敗しないための資金計画と準備の考え方',
    targetProfile: {
      budget: 15,
      diy: 30,
      attachment: 40,
      search: 30,
      mindset: 10,
    },
  },
];

/**
 * ユーザーの回答スコア（0〜100にクランプ済み）から最適な診断結果タイプを判定する関数
 * 明確な優先ルール＋類似度スコアで全6タイプに1対1で振り分ける
 */
export function diagnosePersona(rawScore: ScoreProfile): {
  primary: PersonaType;
  secondary: PersonaType;
  normalizedScore: ScoreProfile;
} {
  const clamp = (val: number) => Math.max(5, Math.min(95, Math.round(val)));

  const score: ScoreProfile = {
    budget: clamp(rawScore.budget),
    diy: clamp(rawScore.diy),
    attachment: clamp(rawScore.attachment),
    search: clamp(rawScore.search),
    mindset: clamp(rawScore.mindset),
  };

  // 1. 初期予算が100万円以下（budget <= 45）かつ「失敗したら困る」（mindset <= 38）場合は「TYPE 06：今はやらない方がいい」を最優先判定
  if (score.budget <= 45 && score.mindset <= 38) {
    const primary = PERSONA_TYPES.find((p) => p.id === 'stop-not-recommended')!;
    const secondary = PERSONA_TYPES.find((p) => p.id === 'small-start')!;
    return { primary, secondary, normalizedScore: score };
  }

  // 2. 最終質問（Q.9）で「全部まるごと外注したい（diy <= 25）」を選んでおり、かつ予算がある場合（budget >= 45）は「TYPE 05：完全丸投げ・投資家オーナー型」を判定
  if (score.diy <= 25 && score.budget >= 45) {
    const primary = PERSONA_TYPES.find((p) => p.id === 'vip-full-outsource')!;
    const secondary = PERSONA_TYPES.find((p) => p.id === 'property-search-outsource')!;
    return { primary, secondary, normalizedScore: score };
  }

  // 3. Q.8で「物件探しは外注したい（search <= 40）」かつ Q.9は「設営は自分で（diy > 25）」を選んでおり、予算がある場合（budget >= 45）は「TYPE 04：効率重視！物件探し外注型」を判定
  if (score.search <= 40 && score.diy > 25 && score.budget >= 45) {
    const primary = PERSONA_TYPES.find((p) => p.id === 'property-search-outsource')!;
    const secondary = PERSONA_TYPES.find((p) => p.id === 'standard-starter')!;
    return { primary, secondary, normalizedScore: score };
  }

  // 4. 予算150万円〜（budget >= 75）で大きく狙う場合は「TYPE 03：大箱・ハイリターン挑戦型」を判定
  if (score.budget >= 75) {
    const primary = PERSONA_TYPES.find((p) => p.id === 'bigbox-challenger')!;
    const secondary = PERSONA_TYPES.find((p) => p.id === 'property-search-outsource')!;
    return { primary, secondary, normalizedScore: score };
  }

  // 5. スモールスタート希望または予算30〜70万円（budget <= 45）の場合は「TYPE 01：少額・ローリスク！スモールスタート型」を判定
  if (score.budget <= 45) {
    const primary = PERSONA_TYPES.find((p) => p.id === 'small-start')!;
    const secondary = PERSONA_TYPES.find((p) => p.id === 'standard-starter')!;
    return { primary, secondary, normalizedScore: score };
  }

  // 6. それ以外（予算50〜100万円前後でまずは自分でやってみたい王道層）は「TYPE 02：王道バランス！スタンダード開業型」を判定
  const primary = PERSONA_TYPES.find((p) => p.id === 'standard-starter')!;
  const secondary = PERSONA_TYPES.find((p) => p.id === 'small-start')!;
  return { primary, secondary, normalizedScore: score };
}
