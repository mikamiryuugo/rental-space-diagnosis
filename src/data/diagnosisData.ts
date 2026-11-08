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
    axisLabel: '① 本業・余剰資金とリスク許容度',
    question: 'そもそも本業の収入が安定していて、万が一失敗しても生活に困らない「余剰資金」がありますか？',
    subText: 'レンタルスペースは事業である以上リスクもあり、なけなしの全財産でやるものではありません。「失敗してもOK」と割り切れるかの確認です。',
    iconName: 'ShieldCheck',
    yesLabel: '本業は安定・失敗しても大丈夫！',
    noLabel: '余裕はない・絶対に失敗できない',
    yesEffect: { budget: 15, mindset: 25 },
    noEffect: { budget: -25, mindset: -75 },
  },
  {
    id: 2,
    category: 'BUDGET 01',
    axisLabel: '① 初期予算感',
    question: '開業資金として「100万円」を用意することができますか？',
    subText: '物件取得費・インテリア・備品代などを含めた初期予算のイメージでお答えください。',
    iconName: 'Wallet',
    yesLabel: '100万円OK！',
    noLabel: '100万円以下で抑えたい',
    yesEffect: { budget: 25, mindset: 5 },
    noEffect: { budget: -20, diy: 5 },
  },
  {
    id: 3,
    category: 'BUDGET 02',
    axisLabel: '① 初期予算感（上限）',
    question: '良い物件や勝てるプランがあれば、「150万〜200万円以上」の投資も検討できる？',
    subText: '大型スタジオ・複数店舗展開・または完全丸投げでのスピード立ち上げを見据えた予算感。',
    iconName: 'Coins',
    yesLabel: '150万〜200万以上も可！',
    noLabel: 'まずは100万円以下が限界',
    yesEffect: { budget: 30, mindset: 10 },
    noEffect: { budget: -15 },
  },
  {
    id: 4,
    category: 'STANCE 01',
    axisLabel: '② 自力チャレンジ志向',
    question: '最初は時間がかかっても、物件探しや立ち上げを「まずは自分でやってみたい」ですか？',
    subText: 'やり方を学びながらまずは自分で動いてみたいか、最初からプロに実務を任せて時短したいかの確認です。',
    iconName: 'Compass',
    yesLabel: 'まずは自分でやってみたい！',
    noLabel: 'プロに任せて最短で進めたい',
    yesEffect: { search: 20, diy: 20 },
    noEffect: { search: -15, diy: -15 },
  },
  {
    id: 5,
    category: 'SEARCH 01',
    axisLabel: '② 物件探し耐性',
    question: 'ネットで色んな物件情報を検索したり、リサーチするのは好き？',
    subText: 'ポータルサイト等で条件に合う物件を毎日コツコツ探す作業が「好き」か「めんどくさい」かの確認です。',
    iconName: 'Search',
    yesLabel: 'リサーチ好き！',
    noLabel: 'めんどくさい',
    yesEffect: { search: 25, attachment: 5 },
    noEffect: { search: -25 },
  },
  {
    id: 6,
    category: 'OUTSOURCE 01',
    axisLabel: '② 物件探しの外注志向',
    question: '一番つまずきやすい「物件探し」は、お金がかかっても外注（プロに任せる）したい？',
    subText: 'レンスペで一番大変なのが物件探しです。ここを自分で頑張るか、費用を払ってでもプロに探してもらうか。',
    iconName: 'HeartHandshake',
    yesLabel: 'お金がかかっても物件探しは外注したい！',
    noLabel: '物件探しも自分でやって費用を抑える',
    yesEffect: { search: -30, budget: 10 },
    noEffect: { search: 25, diy: 10 },
  },
  {
    id: 7,
    category: 'OUTSOURCE 02',
    axisLabel: '⑤ 立ち上げ完全丸投げ志向',
    question: '物件探しだけでなく、家具の手配や現地での設営まで「全部まるごと外注」したい？',
    subText: '現地での作業も含めてすべてプロに任せて、完成した状態のスペースを受け取りたいかどうか。',
    iconName: 'Crown',
    yesLabel: '全部まるごと丸投げしたい！',
    noLabel: '設営や準備は自分でやる！',
    yesEffect: { diy: -30, search: -20, budget: 15 },
    noEffect: { diy: 20 },
  },
  {
    id: 8,
    category: 'AREA 01',
    axisLabel: '③ エリア',
    question: '「ここに出したい！」というこだわりのエリアがある？',
    subText: '出したい場所が決まっているか、事業と割り切って遠隔でもどこでもOKか。',
    iconName: 'MapPin',
    yesLabel: 'こだわりあり！',
    noLabel: 'どこでもOK！',
    yesEffect: { attachment: 25, mindset: -5 },
    noEffect: { attachment: -25, mindset: 10 },
  },
  {
    id: 9,
    category: 'STANCE 02',
    axisLabel: '③ ビジネス割り切り度',
    question: '場所や内装への愛着よりも、「事業として自動で儲かるかが大事」と割り切れる？',
    subText: '自分の好みや思い入れより、数字（利回り・将来の事業売却）を最優先するスタンス。',
    iconName: 'TrendingUp',
    yesLabel: '儲かるかが最優先！',
    noLabel: '愛着や好みも大事にしたい',
    yesEffect: { attachment: -20, mindset: 12 },
    noEffect: { attachment: 18 },
  },
  {
    id: 10,
    category: 'RISK 01',
    axisLabel: '④ リスク許容度',
    question: '多少のリスクを取ってでも、「月利15万〜20万円以上」を大きく狙いたい？',
    subText: 'まずは小さく手堅く月2〜5万円を稼ぐか、最初から大きく収益を狙いたいか。',
    iconName: 'Flame',
    yesLabel: '大きく収益を狙いたい！',
    noLabel: 'まずは手堅く堅実に',
    yesEffect: { mindset: 22, budget: 10 },
    noEffect: { mindset: -18 },
  },
  {
    id: 11,
    category: 'SETUP 01',
    axisLabel: '⑤ 設営耐性',
    question: '家具の組み立てなど、設営作業は苦じゃない（むしろ好き）？',
    subText: '作業OKならパーティやサロンも対応可！面倒ならダンスや会議室向き（※用途を固定しすぎると物件決定まで時間がかかります）',
    iconName: 'Hammer',
    yesLabel: '作業OK・苦にならない！',
    noLabel: '正直苦手・めんどくさい',
    yesEffect: { diy: 25, attachment: 10 },
    noEffect: { diy: -25 },
  },
  {
    id: 12,
    category: 'ACTION 01',
    axisLabel: '⑤ 開業への時間と余力',
    question: '今からすぐに開業に向けて動ける「時間」も「余力」もある？',
    subText: '日々の仕事や生活の中で、オープンに向けてすぐ行動を開始できる余裕があるかどうか。',
    iconName: 'Rocket',
    yesLabel: '時間も余力もバッチリある！',
    noLabel: '今は忙しくて余力がない',
    yesEffect: { mindset: 12, search: 10, diy: 5 },
    noEffect: { mindset: -10, search: -10, diy: -10 },
  },
];

export const PERSONA_TYPES: PersonaType[] = [
  {
    id: 'local-diy-small',
    code: 'TYPE 01',
    title: '【地方・スモールスタート型】',
    catchphrase: '初期費用を最小限に抑え、まずは月2〜3万円から手堅く利益を積み上げる堅実スタート型！',
    badgeText: '少額×手堅くスタート',
    budgetRange: '30万〜50万円〜',
    difficulty: '★★☆☆☆ (手軽)',
    expectedReturn: '想定月利 2万〜5万円前後 / 1店舗',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    accentColor: 'emerald',
    iconName: 'Hammer',
    description:
      '初期費用を抑えつつ、自分の目が行き届く地方・郊外エリアなどで小さく手堅くスタートするのに向いているタイプです。自分で家具や備品の設営を行うことで初期コストを抑え、大きなリターンを狙うよりも、まずは月2〜3万円から着実に手残りを増やしていく堅実な戦い方が合っています。地方や郊外で始める場合は、都心依存度が高いパーティールーム等ではなく「レンタルスタジオ（ダンス・ヨガ等）」を狙うのが鉄則です。',
    strengths: [
      '家具や備品の設営を自力で行うため、初期コストを抑えて小さく始められる',
      '自分の生活圏・得意エリアで展開でき、地域の需要に合わせた堅実な運営ができる',
      '1店舗目で立ち上げの型を身につければ、無理のない範囲で少しずつ店舗を増やせる',
    ],
    weaknesses: [
      '最大の壁である「レンスペ許可物件の獲得」で自己流だと不動産屋に断られ続けて挫折しやすい',
      '郊外・地方でパーティールームや会議室を作ると集客に苦戦するため、エリアに合った用途選定が必須',
    ],
    strategy: {
      areaAndProperty:
        '郊外や地方都市なら「レンタルスタジオ（ダンス・ピラティス等）」向きの物件など、エリア特性と用途を一致させて選定します。',
      conceptAndSetup:
        '鏡やフロアシート、照明などをコスパ良く設営し、ポータルサイトだけでなく「自社サイト（自社集客）」も最初から用意して手数料負けを防ぎます。',
      operationStyle:
        '予約・決済・スマートロック連携で無人化しつつ、日々の清掃はマニュアル化して外注スタッフに任せることで、手放し運営の仕組みを作ります。',
    },
    recommendedSpaceTypes: ['地域密着レンタルダンススタジオ', 'ヨガ・ピラティススタジオ', '少額スタートの特化型スペース'],
    recommendedCourse: {
      name: '開業保証コース',
      badge: '一番人気・自力行動派に最適',
      reason:
        '自分で設営や行動ができるあなたには、動画教材と無制限のLINE質問相談で「物件選びの基準」と「自社集客・自動化の型」を学びながら手堅く1店舗目を立ち上げる『開業保証コース』が最適です！',
      features: [
        '実践スライド＆動画教材＋現役オーナーへのLINE質問相談が無制限',
        '妥協しない物件選定サポート＆物件に合わせたコンセプト設計',
        '1年経っても開業できない場合は無償延長される安心の「開業保証」付き',
      ],
    },
    lineBenefitHighlight: '無駄な初期コストを削る設営ノウハウ＆「地方・郊外でも勝てるレンタルスタジオ」戦略ガイド',
    targetProfile: {
      budget: 25,
      diy: 85,
      attachment: 80,
      search: 65,
      mindset: 65,
    },
  },
  {
    id: 'auto-business-investor',
    code: 'TYPE 02',
    title: '【エリアどこでも・ビジネス割り切り型】',
    catchphrase: '出したい場所へのこだわりを捨て、全国どこでも「需要がある立地」で手堅く狙う合理派オーナー！',
    badgeText: 'エリア不問×合理派スタイル',
    budgetRange: '100万円前後',
    difficulty: '★★★☆☆ (標準)',
    expectedReturn: '想定月利 3万〜10万円 / 1店舗＋将来の事業売却(M&A)',
    gradient: 'from-blue-600 via-indigo-600 to-violet-700',
    accentColor: 'indigo',
    iconName: 'TrendingUp',
    description:
      '「自宅の近く」や「自分の好きな街」といったエリアへのこだわりを持たず、純粋に「需要があって利益が出る場所ならどこでもOK」とビジネスとして割り切れる合理的なタイプです。エリアを限定しないため、全国の中から家賃と需要のバランスが良い物件を冷静に選ぶことができ、着実な毎月の利益と将来のM&A（事業売却）を見据えた店舗運営が可能です。',
    strengths: [
      'エリアに縛られないため、需要データと家賃比率だけで「負けない物件」を冷静に選べる',
      '遠隔地でも清掃外注と無人運営の仕組みで現場に行くことなく回せる',
      '黒字化した店舗を育てた後、事業ごと他者に売却（M&A）する出口戦略も描ける',
    ],
    weaknesses: [
      '本業が忙しい中で「許可物件をゼロから探す時間」に足を取られると、スタートが遅れやすい',
      'ポータルサイト掲載だけでは手数料を取られ続けるため、手数料に依存しない「自社集客」の仕組みが不可欠',
    ],
    strategy: {
      areaAndProperty:
        '居住地に関係なく、安定需要が見込める「レンタルスタジオ適性エリア」や「主要駅徒歩圏内」など、数字が見込める物件を押さえます。',
      conceptAndSetup:
        '備品の破損やトラブルが極めて少ない「レンタルスタジオ」や「シンプル会議室」を選定し、自社予約サイトを同時構築して利益率を確保します。',
      operationStyle:
        'スマートロック連携・自動メッセージ・清掃業者の選定と外注マニュアル化を初日から導入し、遠隔でも自分が動かずに回る状態を作ります。',
    },
    recommendedSpaceTypes: ['需要重視エリアのレンタルスタジオ', '主要駅チカの貸し会議室', 'M&A売却を見据えた堅実店舗'],
    recommendedCourse: {
      name: '物件探しサポートコース',
      badge: 'エリア不問×最短立ち上げに最適',
      reason:
        'エリアにこだわらず合理的に進めたいあなたには、最大のボトルネックである「物件探し」をプロに任せて全国の候補物件から提案を受けられる『物件探しサポートコース』が最適です！',
      features: [
        '開業保証コースの全内容（教材・無制限相談・集客＆自動化フォロー）を網羅',
        'あなたに代わってプロがレンスペ可能物件を探索・ご提案',
        '自社サイト作成＆予約決済システムの自動化連携まで徹底伴走',
      ],
    },
    lineBenefitHighlight: '遠隔でも着実に利益を作る！勝てるエリア選定＆自社集客の仕組み化ロードマップ',
    targetProfile: {
      budget: 65,
      diy: 25,
      attachment: 15,
      search: 45,
      mindset: 80,
    },
  },
  {
    id: 'metro-bigbox-challenger',
    code: 'TYPE 03',
    title: '【都心・大箱ハイリターン挑戦型】',
    catchphrase: '資金力とオーナー胆力を活かし、広めのスタジオや好立地物件で本格的な収益を狙うチャレンジャー！',
    badgeText: '本格投資×大箱・好立地狙い',
    budgetRange: '150万円前後',
    difficulty: '★★★★★ (プロ志向)',
    expectedReturn: '想定月利 5万〜25万円以上 / 1店舗',
    gradient: 'from-rose-600 via-orange-500 to-amber-500',
    accentColor: 'rose',
    iconName: 'Flame',
    description:
      '十分な自己資金と強い「自責マインド」を兼ね備えており、事業として本格的な規模のスペースに挑戦できるタイプです。少額の極小物件だけでなく、ライバルが参入しにくい「広めのレンタルスタジオ」や「都心部の好立地物件」も視野に入れることで、月5万円の手堅いラインから、軌道に乗れば月20万円以上といった大きなリターンまで狙うことができます。',
    strengths: [
      '資金力とリスク許容度があるため、競合が少ない広めのスタジオや好立地案件も選択肢に入れられる',
      '大人数利用など単価を取りやすい物件を選べるため、1店舗あたりの収益上限を高く持てる',
      '出た利益を次の出店資金に回すことで、段階的に複数店舗へと事業を拡大できる',
    ],
    weaknesses: [
      '家賃などの固定費が高くなる分、最初の「物件選定」と「用途のマッチング」を誤るとリスクが大きい',
      '自己流で進めるよりも、現役で複数店舗を回しているプロの目利きとシミュレーションを入れる方が安全',
    ],
    strategy: {
      areaAndProperty:
        'ダンス練習やヨガ・セミナー需要があるエリアで、広さが取れるテナントや駅チカの物件を慎重に見極めて選定します。',
      conceptAndSetup:
        '複数人利用でも単価が取れるレンタルスタジオや大型スペースとして設計し、ポータル対策と「自社HPからの直接予約導線」を稼働させます。',
      operationStyle:
        '清掃外注マニュアルと自動決済・スマートロックで無人化しつつ、収支を見ながら2店舗目以降の展開を狙います。',
    },
    recommendedSpaceTypes: ['大型レンタルダンススタジオ', '都心貸し会議室・イベント会場', '複数名対応クリエイティブスタジオ'],
    recommendedCourse: {
      name: '物件探しサポートコース',
      badge: '優良物件の獲得にコミット',
      reason:
        '固定費のある物件に挑戦する上で命綱となる「物件選び」をプロと一緒に進め、コンセプト設計から自社集客まで着実に立ち上げる『物件探しサポートコース』（または『丸投げコース』）がベストマッチです！',
      features: [
        '現役で8〜9店舗を展開するオーナーの基準で物件を探索・提案',
        '立地に合ったコンセプト設計＆ポータル＋自社サイトの集客構築',
        '2店舗目・3店舗目への拡大も見据えた実践的な経営ノウハウを直接指導',
      ],
    },
    lineBenefitHighlight: '大型スタジオ＆好立地スペースのリアル実例と失敗しない物件選定基準',
    targetProfile: {
      budget: 85,
      diy: 45,
      attachment: 45,
      search: 65,
      mindset: 95,
    },
  },
  {
    id: 'solid-small-meeting',
    code: 'TYPE 04',
    title: '【超・堅実派！ローリスク会議室・サロン・スタジオ型】',
    catchphrase: 'トラブル最小・初期費用最小！少額から手堅くストック収入を積み上げる堅実型！',
    badgeText: '低リスク×安定重視',
    budgetRange: '30万〜50万円〜',
    difficulty: '★☆☆☆☆ (初心者向け)',
    expectedReturn: '想定月利 2万〜8万円 / 1店舗（安定稼働）',
    gradient: 'from-slate-700 via-cyan-800 to-teal-800',
    accentColor: 'cyan',
    iconName: 'ShieldCheck',
    description:
      '「大きなリスクは避けたい」「ゲストとのトラブル対応も極力減らしたい」という堅実なあなたには、【貸し会議室】【レンタルサロン】【レンタルスタジオ】がベストマッチです！飲食や飲酒を伴わない用途に絞ることで、部屋が荒れるリスクやクレームを極限までゼロに近づけて手放し運営できます。',
    strengths: [
      '机とモニター（会議室）、施術ベッド（サロン）、鏡とスピーカー（スタジオ）などシンプルな設備で30万〜50万円台から開業可能',
      '飲酒・騒音・ゴミ放置などのトラブルがほぼ起きず、清掃や管理のストレスが最小限で済む',
      '本業の収入にプラスして「毎月着実に口座へ入る副収入」を最も低リスクに作れる',
    ],
    weaknesses: [
      '注意：貸し会議室やサロン・パーティールームは立地依存度が高いため、地方や郊外で出す場合はレンタルスタジオを選ぶなどエリアに合った用途選定が必須',
      '安全志向だからこそ、最初の「物件選びの基準」と「事前シミュレーション」をプロと確認することが重要',
    ],
    strategy: {
      areaAndProperty:
        '都心部・主要駅チカならコンパクト物件で「会議室」や「レンタルサロン」、郊外・地方エリアなら「レンタルスタジオ」を厳選します。',
      conceptAndSetup:
        '余計なインテリア代を削ぎ落とし、ターゲットが必要とする機能性（施術ベッド・鏡・モニター等）に絞って初期コストを最小化します。',
      operationStyle:
        '予約から決済・鍵の受け渡しまで自動化し、清掃も外注マニュアル化することで、オーナーが現場へ駆けつけることなく安定稼働させます。',
    },
    recommendedSpaceTypes: ['レンタルサロン（エステ・整体等）', '都心駅チカ貸し会議室', 'シンプル設備のレンタルスタジオ'],
    recommendedCourse: {
      name: '開業保証コース',
      badge: '失敗したくない堅実派の一番人気',
      reason:
        '「絶対に大怪我をしたくない」という堅実なあなたには、事前の緻密な収益シミュレーションと物件選定サポート、さらに開業できるまで保証がつく『開業保証コース』が最も安心・確実です！',
      features: [
        '無駄な初期コストを極限まで削り、30万〜100万円以内で手堅く始める戦略設計',
        '都心・郊外それぞれのエリア特性に合わせた「負けない用途選定」を直接指導',
        '条件を満たせば2年目以降も開業まで無償でサポート延長される安心保証',
      ],
    },
    lineBenefitHighlight: '少額＆ローリスクで手堅く始める安全開業ガイド',
    targetProfile: {
      budget: 20,
      diy: 20,
      attachment: 35,
      search: 40,
      mindset: 40,
    },
  },
  {
    id: 'vip-full-outsource',
    code: 'TYPE 05',
    title: '【VIP丸投げ・完全投資家オーナー型】',
    catchphrase: '自分の時間は切り売りしない！プロの完全代行で手間なく手放しオーナーへ！',
    badgeText: '完全丸投げ×作業ゼロ',
    budgetRange: '200万円〜',
    difficulty: '★★☆☆☆ (手軽)',
    expectedReturn: '想定月利 5万〜20万円 / 1店舗（自分の作業時間ゼロ）',
    gradient: 'from-amber-500 via-yellow-500 to-orange-600',
    accentColor: 'amber',
    iconName: 'Crown',
    description:
      '本業や既存事業が忙しく、「物件を何十件も探す時間もないし、家具の組み立てやページ作成も自分でやりたくない。でも毎月利益を生む実店舗資産は持ちたい！」という投資家気質のあなた。自分でゼロから試行錯誤して時間を失うより、物件探しから開業準備・自動化設定まで全てプロに任せる【丸投げスタイル】が最も時間対効果が高い選択です。',
    strengths: [
      '初心者が9割つまずく「物件探しの難航」「コンセプトのズレ」「設営の遅れ」をすべてショートカットできる',
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
        '「時間も余力もないけれど、手堅く回る店舗資産が欲しい」というあなたには、物件探しから開業準備まで全てお任せできる最上位プラン『丸投げコース』（または『物件探しサポートコース』）が唯一無二の選択肢です！',
      features: [
        '何もしなくていい完全代行！物件探しから開業準備・設営まで全てプロにお任せ',
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
    id: 'trend-beauty-salon',
    code: 'TYPE 06',
    title: '【地域独占・特化型レンタルスタジオオーナー型】',
    catchphrase: '郊外・地方でも手堅い需要！固定リピーターが集まるスタジオ運営スタイル！',
    badgeText: 'リピート重視×郊外でも対応可',
    budgetRange: '50万〜100万円',
    difficulty: '★★★☆☆ (標準)',
    expectedReturn: '想定月利 3万〜15万円 / 1店舗（安定ストック収益）',
    gradient: 'from-pink-500 via-rose-500 to-purple-600',
    accentColor: 'pink',
    iconName: 'HeartHandshake',
    description:
      '堅実なビジネス感覚を持ったあなたには、現役オーナー・さんご自身も8〜9店舗を展開している【レンタルスタジオ（ダンス・ヨガ・ピラティス・武道・教室利用等）】が最もおすすめです。都心部に依存するパーティールームや会議室と違い、レンタルスタジオは地方や郊外でも需要があり、教室の先生などの固定リピーターがつくことで月3万円〜の安定収益を着実に狙えます。',
    strengths: [
      '都心の一等地でなくても、郊外や地方都市で月利3万〜10万円前後の着実な収益化が見込める',
      'ダンス練習やヨガ教室など「毎週決まった曜日に使う固定客（リピーター）」がつきやすく、売上が安定しやすい',
      '飲食を伴わないため部屋が汚れにくく、備品の買い替えもほぼ不要で長期的に維持しやすい',
    ],
    weaknesses: [
      '音の響きや床材、鏡のサイズなど「スタジオ特有の物件選びと設備のツボ」を知らないと選ばれない',
      'ポータルサイト頼みだと手数料がもったいないため、定期利用者を直接囲い込む「自社集客」がカギになる',
    ],
    strategy: {
      areaAndProperty:
        '乗降客数や周辺のスクール需要を分析し、音出しや振動に配慮できるテナント・地下や1階物件・事務所物件などを選定します。',
      conceptAndSetup:
        '大型ミラー、フロア材、音響、照明など、ダンサーやインストラクターが継続利用しやすい実用的な空間を作ります。',
      operationStyle:
        'ポータルサイトで新規認知を取りつつ、自社予約サイトへ誘導して手数料を抑え、清掃外注とスマートロックで手放し運営を実現します。',
    },
    recommendedSpaceTypes: ['ダンス・K-POP練習スタジオ', 'ヨガ・ピラティス・フィットネススタジオ', '定期スクール向けカルチャースタジオ'],
    recommendedCourse: {
      name: '開業保証コース',
      badge: '現役8〜9店舗スタジオオーナー直伝',
      reason:
        '現在進行形でレンタルスタジオを多数手放し運営している「さんご」の生きた一次情報をそのまま学べる『開業保証コース』（物件探しも任せるなら『物件探しサポートコース』）が相性抜群です！',
      features: [
        '現役で8〜9店舗のレンタルスタジオを運営するオーナーが直接指導・徹底伴走',
        '地方・郊外でも戦えるスタジオ物件の見極め方から鏡・床材の導入まで網羅',
        'ポータル手数料に依存しない「自社サイト作成＆自社集客」まで手厚くフォロー',
      ],
    },
    lineBenefitHighlight: '現役8店舗スタジオオーナー直伝！郊外・地方でも着実に利益を生む「スタジオ構築法」',
    targetProfile: {
      budget: 55,
      diy: 55,
      attachment: 75,
      search: 65,
      mindset: 65,
    },
  },
  {
    id: 'treasure-hunter-multi',
    code: 'TYPE 07',
    title: '【お宝物件ハンター・多店舗＆M&A拡大タイプ】',
    catchphrase: '最大の壁「物件探し」を突破し、複数店舗と事業売却で着実に資産を広げる開拓者！',
    badgeText: 'リサーチ力◎×多店舗・M&A向き',
    budgetRange: '100万円前後',
    difficulty: '★★★★☆ (本格派)',
    expectedReturn: '想定月利 3万〜10万円 × 複数店舗 ＋ 事業売却益',
    gradient: 'from-violet-600 via-indigo-600 to-blue-600',
    accentColor: 'violet',
    iconName: 'Compass',
    description:
      'レンタルスペースで9割の人が挫折する最大のハードル「物件探し・リサーチ・業者開拓」を苦にせず楽しめるあなたは、レンスペオーナーとしての高い適性を持っています。正しい「不動産業者へのアプローチ手法」と「物件の選定基準」を身につければ、1店舗あたり月3万〜10万円の手堅い店舗を複数作ったり、育てた黒字店舗をM&A（事業売却）してまとまった利益を得る展開も狙えます。',
    strengths: [
      '最大の参入障壁である「転貸（レンスペ）許可物件の発掘」を自力で進められるため、好条件の物件に出会いやすい',
      '1店舗目で自動化と自社集客の型をマスターすれば、同じ要領で2店舗・3店舗と収益の柱を増やせる',
      '利益が出る店舗を他者に売却（M&A）する出口戦略も選べるため、事業としての拡張性が高い',
    ],
    weaknesses: [
      '行動力がある分、自己流の基準で物件を契約してしまうと「実は需要がない立地・用途だった」という失敗をしがち',
      '契約前に必ず「プロの目線での物件選定チェック」と「詳細な収益シミュレーション」を通すことが鉄則',
    ],
    strategy: {
      areaAndProperty:
        '「不動産業者への正しいアプローチ手法」を駆使して、一般の検索だけでは出てこない転貸OKの物件を引き出します。',
      conceptAndSetup:
        '見つけた物件のエリア特性に合わせて「スタジオ」や「会議室・サロン・パーティー」を最適に当てはめ、自社サイトとポータルの両輪で集客します。',
      operationStyle:
        '1店舗目から予約・決済・清掃外注をマニュアル化して手放し状態を作り、出た利益を元手に2店舗目の物件開拓へ進みます。',
    },
    recommendedSpaceTypes: ['好条件テナントのスタジオ化', '複数店舗のドミナント展開', 'M&A売却を見据えた黒字パッケージ店舗'],
    recommendedCourse: {
      name: '開業保証コース',
      badge: '業者開拓ノウハウ×プロの物件目利き',
      reason:
        '自分でリサーチして動けるあなたには、「不動産業者へのアプローチ手法」を学びながら、見つけた物件を現役オーナーに無制限で相談・ジャッジしてもらえる『開業保証コース』が最強の武器になります！',
      features: [
        '門前払いされない「不動産業者へのアプローチ手法」の伝授とプロ目線での物件選定',
        '無制限のLINE質問相談で、候補物件の収支シミュレーションや交渉をいつでも相談可能',
        '複数店舗展開や将来の事業売却（M&A）も見据えた実践的な経営ノウハウを吸収できる',
      ],
    },
    lineBenefitHighlight: '最大の壁「物件探しの難航」を突破する！不動産業者へのアプローチ手法',
    targetProfile: {
      budget: 55,
      diy: 65,
      attachment: 50,
      search: 95,
      mindset: 85,
    },
  },
  {
    id: 'mindset-reset-starter',
    code: 'TYPE 08',
    title: '【まずは不安解消・徹底伴走スタート型】',
    catchphrase: '一人で悩んで立ち止まるのは今日で終わり！プロの徹底伴走と開業保証で着実に1店舗目へ！',
    badgeText: '失敗回避×開業保証向き',
    budgetRange: '30万〜50万円〜',
    difficulty: '★☆☆☆☆ (初心者向け)',
    expectedReturn: 'まずは月利 2万〜8万円の「負けない1店舗目」を構築',
    gradient: 'from-teal-600 via-emerald-600 to-green-700',
    accentColor: 'teal',
    iconName: 'Lightbulb',
    description:
      '「興味はあるけれど、もし売上が上がらなかったらどうしよう…」「物件探しも作業も一人でできるか不安…」と感じているあなた。その慎重さは、ビジネスにおいて大切なリスク管理能力です。レンタルスペースは適当にやっても稼げる甘い世界ではありませんが、逆に言えば【事前の対策】と【プロの伴走】さえあれば、少額・低リスクから手堅く月数万円の収益を作ることができます。',
    strengths: [
      'リスクに対して慎重なため、自己流で無謀な物件に飛びついて大きな損失を出す失敗を防げる',
      '最初から「プロに相談しながら正しい手順で進める」ことで、初心者でも着実に1店舗目を形にできる',
      '無人運営の仕組みと清掃外注を正しく組めば、クレームやトラブルで時間を奪われる不安も解消できる',
    ],
    weaknesses: [
      '一人でネットの情報だけを集めて悩んでいると、気づけば1年が過ぎてしまい何も変わらないままになりやすい',
      '自分の資金や状況で「どのやり方・どのプランなら無理なく勝てるか」を一度プロと直接すり合わせることが不可欠',
    ],
    strategy: {
      areaAndProperty:
        'まずは自己資金（30万〜100万円程度）に合わせて詳細な収益シミュレーションを実施し、無理のない家賃・初期費用の物件だけを候補にします。',
      conceptAndSetup:
        'トラブルが極めて少なく安定しやすい「レンタルスタジオ」などを軸に、最初からプロのロードマップ教材とフォローに沿って1ステップずつ準備します。',
      operationStyle:
        '疑問や不安が出たらすぐにLINEで質問して解消し、予約自動化と清掃外注を導入して着実に1店舗目を稼働させます。',
    },
    recommendedSpaceTypes: ['少額30万円台からのミニマムスペース', 'トラブル最小のレンタルスタジオ', 'プロ伴走での安心1店舗目構築'],
    recommendedCourse: {
      name: '開業保証コース',
      badge: '絶対に失敗したくない方向け・開業保証付き',
      reason:
        '不安を解消して着実に1店舗目を持ちたいあなたには、無制限の質問相談と、万が一1年で開業できなくても無償でサポート期間を延長する『開業保証コース』（物件探しも不安なら『物件探しサポートコース』）が最適です！',
      features: [
        '「疑問や不安はいつでもLINEで気軽に質問」できる絶対につまずかせない徹底伴走',
        '月報提出で1年経っても開業できない場合は「開業まで無償でサポート延長」の保証付き',
        '契約前に現在の状況や自己資金を伺い、無理のない計画を立てる「無料個別相談」をご用意',
      ],
    },
    lineBenefitHighlight: '失敗リスクを最小化する「3つのハードル突破法」',
    targetProfile: {
      budget: 55,
      diy: 25,
      attachment: 40,
      search: 20,
      mindset: 30,
    },
  },
  {
    id: 'stop-not-recommended',
    code: 'TYPE 09',
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
 * 特徴的な条件分岐（優先ルール）＋5軸の重み付きユークリッド距離で全9タイプに高精度に振り分ける
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

  // 1. 初期予算が100万円以下（budget <= 45）かつ「失敗しても良いと思えない／本業・余剰資金に余裕がない」（mindset <= 38）場合は「今はやらない方がいい」を最優先で判定
  if (score.budget <= 45 && score.mindset <= 38) {
    const primary = PERSONA_TYPES.find((p) => p.id === 'stop-not-recommended')!;
    const secondary = PERSONA_TYPES.find((p) => p.id === 'mindset-reset-starter')!;
    return { primary, secondary, normalizedScore: score };
  }

  // 2. 予算には余裕があるが慎重派・不安が強い場合は「まずは不安解消・徹底伴走スタート型」を提案
  if (score.mindset <= 35 && score.budget > 45) {
    const primary = PERSONA_TYPES.find((p) => p.id === 'mindset-reset-starter')!;
    const secondary = PERSONA_TYPES.find((p) => p.id === 'solid-small-meeting')!;
    return { primary, secondary, normalizedScore: score };
  }

  // 2. 各ペルソナとの類似度スコアを計算（距離が小さいほどマッチ度が高い）
  const ranked = PERSONA_TYPES.map((persona) => {
    const t = persona.targetProfile;
    let distance =
      Math.pow(score.budget - t.budget, 2) * 1.35 +
      Math.pow(score.diy - t.diy, 2) * 1.2 +
      Math.pow(score.attachment - t.attachment, 2) * 1.15 +
      Math.pow(score.search - t.search, 2) * 1.15 +
      Math.pow(score.mindset - t.mindset, 2) * 1.25;

    // 特定パターンのボーナス補正（より納得感のある振り分けにするため）
    if (persona.id === 'vip-full-outsource' && score.budget >= 70 && score.diy <= 30 && score.search <= 35) {
      distance *= 0.55;
    }
    if (persona.id === 'metro-bigbox-challenger' && score.budget >= 75 && score.mindset >= 80) {
      distance *= 0.6;
    }
    if (persona.id === 'local-diy-small' && score.budget <= 45 && score.diy >= 65 && score.attachment >= 60) {
      distance *= 0.6;
    }
    if (persona.id === 'auto-business-investor' && score.attachment <= 30 && score.mindset >= 60) {
      distance *= 0.65;
    }
    if (persona.id === 'solid-small-meeting' && score.budget <= 40 && score.diy <= 40 && score.mindset >= 29 && score.mindset <= 60) {
      distance *= 0.6;
    }
    if (persona.id === 'treasure-hunter-multi' && score.search >= 80 && score.mindset >= 70) {
      distance *= 0.65;
    }
    if (persona.id === 'mindset-reset-starter' && score.mindset <= 35) {
      distance *= 0.65;
    }

    return { persona, distance };
  }).sort((a, b) => a.distance - b.distance);

  return {
    primary: ranked[0].persona,
    secondary: ranked[1].persona,
    normalizedScore: score,
  };
}
