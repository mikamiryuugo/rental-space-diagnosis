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
    category: 'BUDGET 01',
    axisLabel: '初期投資・予算感',
    question: '開業資金として「100万円」を用意することができますか？',
    subText: '物件取得費・インテリア・備品代などを含めた初期予算のイメージでお答えください。',
    iconName: 'Wallet',
    yesLabel: '100万円OK！',
    noLabel: '50万円前後で抑えたい',
    yesEffect: { budget: 25, mindset: 5 },
    noEffect: { budget: -20, diy: 5 },
  },
  {
    id: 2,
    category: 'WORK & DIY 01',
    axisLabel: '作業・DIY耐性',
    question: '家具組み立てなど、DIYや設営作業は苦じゃない（むしろ好き）？',
    subText: '自分でドライバーを握ったり、インテリアを配置したりする作業への耐性です。',
    iconName: 'Hammer',
    yesLabel: '好き・苦にならない！',
    noLabel: '正直苦手・やりたくない',
    yesEffect: { diy: 25, attachment: 10 },
    noEffect: { diy: -25 },
  },
  {
    id: 3,
    category: 'CONCEPT 01',
    axisLabel: '空間へのこだわり',
    question: '「自分でも使いたい！」と思えるような、こだわりの空間を作りたい？',
    subText: '自分の趣味やセンスを反映した秘密基地・サードプレイスを作りたいかどうか。',
    iconName: 'Sparkles',
    yesLabel: 'こだわりたい・使いたい！',
    noLabel: '自分の好みはこだわらない',
    yesEffect: { attachment: 22, diy: 10 },
    noEffect: { attachment: -15 },
  },
  {
    id: 4,
    category: 'STANCE 01',
    axisLabel: 'ビジネス割り切り度',
    question: '内装への愛着よりも、「事業として自動で儲かるかが大事」と割り切れる？',
    subText: '自分の好みや思い入れより、数字（利回り・自動化・将来の事業売却）を最優先するスタンス。',
    iconName: 'TrendingUp',
    yesLabel: '自動で儲かるかが最優先！',
    noLabel: '愛着や好みも大事にしたい',
    yesEffect: { attachment: -18, mindset: 12 },
    noEffect: { attachment: 15 },
  },
  {
    id: 5,
    category: 'AREA 01',
    axisLabel: '遠隔エリア耐性',
    question: '利益が出る優良物件なら、自宅から遠い「遠隔エリア」での出店でも全く問題ない？',
    subText: '自分の生活圏・地元にこだわるか、儲かるなら全国どこでも手放しで遠隔運営OKか。',
    iconName: 'MapPin',
    yesLabel: '遠隔でも儲かればOK！',
    noLabel: '自分が通える範囲がいい',
    yesEffect: { attachment: -20, mindset: 8 },
    noEffect: { attachment: 20 },
  },
  {
    id: 6,
    category: 'SEARCH 01',
    axisLabel: '物件探し耐性',
    question: '休日にポータルサイトを見たり、不動産屋を回って内見に行くのは楽しいと感じる？',
    subText: '最大の壁になりやすい「レンスペ許可物件の発掘・業者開拓」を自分で楽しめるかどうか。',
    iconName: 'Search',
    yesLabel: '物件探し・内見は楽しい！',
    noLabel: '面倒・できれば省きたい',
    yesEffect: { search: 28, attachment: 5 },
    noEffect: { search: -25 },
  },
  {
    id: 7,
    category: 'OUTSOURCE 01',
    axisLabel: '物件探しの外注志向',
    question: '物件探しの手間を考えるなら、お金がかかってもプロに丸投げしたい？',
    subText: '自分の時間（時給）を最優先し、費用を払ってでもプロに優良物件の探索・提案を任せたいか。',
    iconName: 'Crown',
    yesLabel: 'プロに任せて時短したい！',
    noLabel: '自分で探して費用を抑える',
    yesEffect: { diy: -20, search: -25, budget: 10 },
    noEffect: { diy: 15, search: 20 },
  },
  {
    id: 8,
    category: 'BUDGET 02',
    axisLabel: '予算上限・スケール感',
    question: '良い物件や勝てるプランがあれば、「150万〜200万円以上」の投資も検討できる？',
    subText: '大型スタジオ・複数店舗展開・または完全丸投げでのスピード立ち上げを見据えた予算感。',
    iconName: 'Coins',
    yesLabel: '150万〜200万以上も可！',
    noLabel: 'まずは100万円以下が限界',
    yesEffect: { budget: 30, mindset: 10 },
    noEffect: { budget: -15 },
  },
  {
    id: 9,
    category: 'RISK 01',
    axisLabel: 'リスク・リターン志向',
    question: '多少のリスクを背負ってでも、都心や大型案件などで「月利15万〜20万円以上」を大きく狙いたい？',
    subText: '小さく手堅く月3〜5万円を稼ぐより、インパクトのあるストック収益を目指したいか。',
    iconName: 'Flame',
    yesLabel: '大きくリターンを狙いたい！',
    noLabel: 'まずは手堅く小さく始めたい',
    yesEffect: { mindset: 22, budget: 10 },
    noEffect: { mindset: -18 },
  },
  {
    id: 10,
    category: 'MINDSET 01',
    axisLabel: 'オーナーマインド（自責思考）',
    question: 'もし売上が伸び悩んでも「すべて自分の経営判断（自責）」と割り切って改善を楽しめる？',
    subText: 'ポータル頼みではなく自社集客や改善など、事業オーナーとして向き合うマインドセットの確認です。',
    iconName: 'ShieldCheck',
    yesLabel: '自責で改善していける！',
    noLabel: '絶対に失敗したくない・不安',
    yesEffect: { mindset: 28 },
    noEffect: { mindset: -30 },
  },
  {
    id: 11,
    category: 'ACTION 01',
    axisLabel: '開業への時間と余力',
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
    title: '【地元密着・DIYスモールスタート型】',
    catchphrase: '初期費用を最小限に抑え、自分の行動力で高利回り空間を作るクラフトマン！',
    badgeText: '高利回り×手作り派',
    budgetRange: '30万〜50万円〜',
    difficulty: '★★☆☆☆ (手軽)',
    expectedReturn: '想定月利 4万〜10万円 / 1店舗（高利回り重視）',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    accentColor: 'emerald',
    iconName: 'Hammer',
    description:
      'あなたはDIYや設営作業への抵抗が少なく、自分の目が行き届くエリアで堅実にスタートするのに最も向いているタイプです！業者に払う設営費を自分の行動力でカットできるため、初期費用を極限まで削りながら、半年〜1年以内の早期回収を狙えるポテンシャルがあります。地方や郊外で始める場合は、都心依存度が高いパーティールーム等ではなく「レンタルスタジオ（ダンス・ヨガ等）」を狙うのが鉄則です！',
    strengths: [
      '設営や家具組み立てを自力で行うため、無駄な初期コストを極限まで圧縮できる',
      '自分の生活圏・得意エリアで展開でき、地域の需要に合わせた空間づくりができる',
      '1店舗目で立ち上げの型を身につければ、2店舗目以降も低コストで増やせる',
    ],
    weaknesses: [
      '最大の壁である「レンスペ許可物件の獲得」で自己流だと不動産屋に断られ続けて挫折しやすい',
      '郊外・地方でパーティールームや会議室を作ると集客に苦戦するため、エリアに合った用途選定が必須',
    ],
    strategy: {
      areaAndProperty:
        '郊外や地方都市なら「レンタルスタジオ（ダンス・ピラティス等）」向きの広さがある物件、都心部なら駅近のワンルームなど、エリア特性と用途を一致させて選定します。',
      conceptAndSetup:
        '大型鏡やフロアシート、照明などをコスパ良く自力設営し、ポータルサイトだけでなく「自社サイト（自社集客）」も最初から用意して手数料負けを防ぎます。',
      operationStyle:
        '予約・決済・スマートロック連携で無人化しつつ、日々の清掃はマニュアル化して外注スタッフに任せることで、手放し運営の仕組みを完成させます。',
    },
    recommendedSpaceTypes: ['地域密着レンタルダンススタジオ', 'ヨガ・ピラティススタジオ', '都心近郊なら推し活・撮影スペース'],
    recommendedCourse: {
      name: '開業保証コース',
      badge: '一番人気・自力行動派に最適',
      reason:
        '自分で設営や行動ができるあなたには、動画教材と無制限のLINE質問相談で「物件選びの基準」と「自社集客・自動化の型」を学びながら確実に1店舗目を立ち上げる『開業保証コース』が最もコスパ抜群です！',
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
    title: '【完全自動化・ビジネス割り切り投資型】',
    catchphrase: '感情やこだわりを排し、数字と仕組みで手放し資産を構築するスマート起業家！',
    badgeText: '仕組み化×完全遠隔',
    budgetRange: '100万円前後',
    difficulty: '★★★☆☆ (標準)',
    expectedReturn: '想定月利 8万〜15万円 / 1店舗＋将来の事業売却(M&A)',
    gradient: 'from-blue-600 via-indigo-600 to-violet-700',
    accentColor: 'indigo',
    iconName: 'TrendingUp',
    description:
      'あなたはレンタルスペースを「趣味」ではなく純粋な「実店舗型の自動化ビジネス」として捉えられている合理的なタイプです。自分がその場所を使いたいかどうかや自宅からの近さよりも、「需要がある立地か」「完全自動で回るか」「将来M&Aで事業売却できるか」という数字ベースで判断できるため、本業と両立しながら最短で資産を築けます。',
    strengths: [
      '感情に左右されず、エリアの需要データと家賃比率から「勝てる物件」を冷静に判断できる',
      '予約・決済・鍵の受け渡し・清掃外注まで完全自動化を前提に組むため、現場に行く必要がゼロ',
      '利益が出る店舗を作った後、事業ごと他者に売却（M&A）してまとまったキャッシュを得る出口戦略も描ける',
    ],
    weaknesses: [
      '本業が忙しい中で「許可物件をゼロから探す時間」に足を取られると、スタートが遅れやすい',
      'ポータルサイト掲載だけでは手数料を取られ続けるため、手数料に依存しない「自社集客」の仕組みが不可欠',
    ],
    strategy: {
      areaAndProperty:
        '居住地に関係なく、安定需要が見込める「レンタルスタジオ適性エリア」や「都心ターミナル駅徒歩5分圏内」など、数字が出る物件をピンポイントで押さえます。',
      conceptAndSetup:
        '備品の破損やトラブルが極めて少ない「レンタルスタジオ」や「シンプル会議室」を選定し、自社予約サイトを同時構築して高利益率体質を作ります。',
      operationStyle:
        'スマートロック連携・自動メッセージ・清掃業者の選定と外注マニュアル化を初日から導入し、24時間365日自分が動かなくても売上が立つ状態を作ります。',
    },
    recommendedSpaceTypes: ['完全無人レンタルスタジオ', '都心型セルフ貸し会議室', 'M&A売却を見据えた高収益店舗'],
    recommendedCourse: {
      name: '物件探しサポートコース',
      badge: '時短×確実性重視の副業家に最適',
      reason:
        '合理的に自動化資産を作りたいあなたには、最大のボトルネックである「物件探し」をプロに任せて時間を買い、最短ルートで手放し店舗を構築できる『物件探しサポートコース』が最適です！',
      features: [
        '開業保証コースの全内容（教材・無制限相談・集客＆自動化フォロー）を網羅',
        'あなたに代わってプロが優良なレンスペ可能物件を探索・ご提案',
        '自社サイト作成＆予約決済システムの完全自動化連携まで徹底伴走',
      ],
    },
    lineBenefitHighlight: '現場労働ゼロで月利10万〜20万円！手放し自動化システム構築＆自社集客の仕組み化ロードマップ',
    targetProfile: {
      budget: 65,
      diy: 20,
      attachment: 15,
      search: 45,
      mindset: 80,
    },
  },
  {
    id: 'metro-bigbox-challenger',
    code: 'TYPE 03',
    title: '【都心・大箱ハイリターン挑戦型】',
    catchphrase: '資金力とオーナー胆力を武器に、1店舗で月利20万円超を狙う本格チャレンジャー！',
    badgeText: '月利20万超狙い×本格派',
    budgetRange: '150万円前後',
    difficulty: '★★★★★ (プロ志向)',
    expectedReturn: '想定月利 15万〜25万円以上 / 1店舗',
    gradient: 'from-rose-600 via-orange-500 to-amber-500',
    accentColor: 'rose',
    iconName: 'Flame',
    description:
      'あなたは十分な予算と強い「自責マインド」を兼ね備えており、小遣い稼ぎではなく事業として大きなキャッシュフローを狙えるタイプです！少額の極小物件はあえてスルーし、ライバルが参入しにくい「大型レンタルスタジオ」や「都心部の好立地物件」を仕掛けることで、開業4ヶ月で月利20万円を達成した事例のようなハイリターンを狙えます。',
    strengths: [
      '資金力とリスク許容度があるため、競合が少ない広めのスタジオや一等地案件を独占できる',
      '1店舗あたりの利益額が大きいため、少ない店舗数でも毎月15万〜20万円以上の柱を素早く作れる',
      '出た利益をそのまま2店舗目・3店舗目の出店資金に回すことで、複利で事業を急拡大できる',
    ],
    weaknesses: [
      '家賃などの固定費が高くなるため、最初の「物件選定」と「用途のマッチング」を誤るとダメージが大きい',
      '自己流で進めるよりも、現役で複数店舗を回しているプロの一次情報と物件目利きを入れる方が圧倒的に安全',
    ],
    strategy: {
      areaAndProperty:
        '大人数のダンス練習やヨガ・セミナー需要が集中するエリアで、柱がなく天井高が取れる広めのテナントや、都心駅チカの希少物件を狙い撃ちします。',
      conceptAndSetup:
        '大人数利用でも単価が取れる本格レンタルスタジオや大型スペースとして設計し、ポータルSEO対策と「自社HPからの直接予約導線」を最初からフル稼働させます。',
      operationStyle:
        '清掃外注マニュアルと自動決済・スマートロックで完全無人化しつつ、浮いた時間と利益を使って次の出店やM&A展開へ攻め続けます。',
    },
    recommendedSpaceTypes: ['大型レンタルダンススタジオ', '都心ハイグレード貸し会議室・会場', '複数名対応クリエイティブスタジオ'],
    recommendedCourse: {
      name: '物件探しサポートコース',
      badge: '高収益物件の獲得にコミット',
      reason:
        '大きなリターンを狙う上で命綱となる「勝てる優良物件の獲得」をプロと一緒に進め、コンセプト設計から自社集客まで一気に立ち上げる『物件探しサポートコース』（または『丸投げコース』）がベストマッチです！',
      features: [
        '現役で8〜9店舗を展開するオーナーの基準で優良物件を探索・提案',
        '高単価・高稼働を実現するコンセプト設計＆ポータル＋自社サイトのW集客構築',
        '2店舗目・3店舗目への拡大も見据えた実践的な経営ノウハウを直接指導',
      ],
    },
    lineBenefitHighlight: '【開業4ヶ月で月利20万円達成】大型スタジオ＆高収益スペースのリアル実例と物件選定基準',
    targetProfile: {
      budget: 85,
      diy: 45,
      attachment: 45,
      search: 65,
      mindset: 95,
    },
  },
  {
    id: 'hobby-profit-hybrid',
    code: 'TYPE 04',
    title: '【趣味×実益のハイブリッド秘密基地型】',
    catchphrase: '自分も使えて毎月利益も生み出す！空間資産を持つスマートオーナー！',
    badgeText: '自己利用×収益化',
    budgetRange: '50万〜100万円',
    difficulty: '★★☆☆☆ (手軽)',
    expectedReturn: '想定月利 5万〜10万円＋いつでも使える自分専用スタジオ',
    gradient: 'from-fuchsia-600 via-purple-600 to-indigo-600',
    accentColor: 'purple',
    iconName: 'Sparkles',
    description:
      '「せっかく作るなら、自分でも使いたくなるようなこだわりの空間にしたい！」という熱量を持ったあなたに最適なスタイルです。ダンスやトレーニング、撮影や趣味の部屋を、自分が使わない時間帯はレンタルスペースとして自動貸出することで、「家賃タダ＋毎月数万〜10万円のストック収益」を生み出す夢のような空間資産が作れます！',
    strengths: [
      '利用者目線のこだわりが空間に宿るため、リピーター（定期利用の先生やファン）がつきやすい',
      '自分が使うついでに室内の様子もチェックできるため、愛着を持って楽しく運営できる',
      'AIには決して代替できない「人が集い、活動するリアルな空間資産」を自分の城として持てる',
    ],
    weaknesses: [
      '「自分の好み」だけに走りすぎて市場の検索需要からズレると、空き時間の稼働率が落ちてしまう',
      '特に郊外や地元で展開する場合、需要の薄い用途を選ぶと失敗するため、プロのコンセプト設計が必須',
    ],
    strategy: {
      areaAndProperty:
        '自宅や生活圏からアクセスしやすいエリアで、郊外でも安定して需要がある「レンタルスタジオ（ダンス・ヨガ・トレーニング・音楽等）」向きの物件を選びます。',
      conceptAndSetup:
        '「自分が使いたい設備」と「地域で検索されている需要」が重なるコンセプトを設計し、自社サイトを作って地域の教室主催者やリピーターを直接集客します。',
      operationStyle:
        '自分が使う日時はカレンダーでブロックし、空き時間は予約システムとスマートロックで24時間自動貸出。清掃も外注化してストレスゼロで運用します。',
    },
    recommendedSpaceTypes: ['プライベート兼ダンス・ヨガスタジオ', 'パーソナルトレーニング＆ピラティス', '撮影・配信・クリエイター基地'],
    recommendedCourse: {
      name: '開業保証コース',
      badge: 'こだわり空間×確実な収益化を両立',
      reason:
        'あなたの空間へのこだわりを活かしつつ、「独りよがりにならず確実に稼げるコンセプト設計」と「物件選定・自動化の仕組み」をプロが徹底伴走する『開業保証コース』がぴったりです！',
      features: [
        'あなたの理想と市場需要を両立させる「負けない物件選定＆コンセプト設計」',
        'ポータルサイト＋自社サイト作成サポートで地域のリピーターを独占',
        '疑問や不安はいつでもLINEで無制限に相談でき、開業まで徹底伴走',
      ],
    },
    lineBenefitHighlight: 'こだわり空間で毎月安定収益！地域で愛されるレンタルスタジオのコンセプト設計＆事例集',
    targetProfile: {
      budget: 35,
      diy: 60,
      attachment: 95,
      search: 50,
      mindset: 55,
    },
  },
  {
    id: 'solid-small-meeting',
    code: 'TYPE 05',
    title: '【超・堅実派！ローリスク会議室＆スタジオ型】',
    catchphrase: 'トラブル最小・初期費用最小！少額から手堅くストック収入を積み上げる堅実型！',
    badgeText: '低リスク×安定重視',
    budgetRange: '30万〜50万円〜',
    difficulty: '★☆☆☆☆ (初心者向け)',
    expectedReturn: '想定月利 3万〜8万円 / 1店舗（超安定稼働）',
    gradient: 'from-slate-700 via-cyan-800 to-teal-800',
    accentColor: 'cyan',
    iconName: 'ShieldCheck',
    description:
      '「多額の借金や大きなリスクは避けたい」「凝ったDIYやゲストとのトラブル対応もやりたくない」という堅実なあなたには、シンプルな設備で始められる【レンタルスタジオ】または【都心駅チカの貸し会議室】がベストマッチです！飲食や飲酒を伴わない用途に絞ることで、部屋が荒れるリスクやクレームを極限までゼロに近づけて手放し運営できます。',
    strengths: [
      '鏡とスピーカー（スタジオ）や、机とモニター（会議室）などシンプルな設備で30万〜50万円台からでも開業可能',
      '飲酒・騒音・ゴミ放置などのトラブルがほぼ起きず、清掃外注と自動化システムで深夜対応なども一切なし',
      '本業の収入にプラスして「毎月着実に口座へ入るストック収入」を最も低リスクに作れる',
    ],
    weaknesses: [
      '注意：貸し会議室やパーティールームは都心部への依存度が高いため、地方や郊外でやると失敗しやすい（郊外ならスタジオ一択！）',
      '安全志向だからこそ、最初の「物件選びの基準」と「事前シミュレーション」をプロと確認することが重要',
    ],
    strategy: {
      areaAndProperty:
        '都心部なら主要駅徒歩3〜5分以内のコンパクト物件で「会議室」、郊外・地方エリアなら駅近または駐車場近隣の物件で「レンタルスタジオ」を厳選します。',
      conceptAndSetup:
        '余計なインテリア代を削ぎ落とし、ターゲットが必要とする機能性（大型鏡・音響、または高速Wi-Fi・モニター）に絞って初期コストを最小化します。',
      operationStyle:
        '予約から決済・鍵の受け渡しまで完全自動化し、清掃も外注マニュアル化することで、オーナーが現場へ駆けつけることなく安定稼働させます。',
    },
    recommendedSpaceTypes: ['シンプル設備のレンタルスタジオ', '都心駅チカ貸し会議室', '少額スタートのテレワーク・練習スペース'],
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
    lineBenefitHighlight: '【初期費用30万円台で月3〜5万円達成の実例も】少額＆ローリスクで手堅く始める安全開業ガイド',
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
    code: 'TYPE 06',
    title: '【VIP丸投げ・完全投資家オーナー型】',
    catchphrase: '自分の時間は1秒も切り売りしない！プロの完全代行で最短・手放しオーナーへ！',
    badgeText: '完全丸投げ×労働ゼロ',
    budgetRange: '200万円〜',
    difficulty: '★★☆☆☆ (手軽)',
    expectedReturn: '想定月利 10万〜20万円 / 1店舗（自分の作業時間ゼロ）',
    gradient: 'from-amber-500 via-yellow-500 to-orange-600',
    accentColor: 'amber',
    iconName: 'Crown',
    description:
      '本業や既存事業が忙しく、「物件を何十件も探す時間もないし、家具の組み立てやページ作成も自分でやりたくない。でも毎月利益を生む実店舗資産は持ちたい！」という投資家気質のあなた。自分でゼロから試行錯誤して時間を失うより、物件探しから開業準備・自動化設定まで全てプロに任せる【丸投げスタイル】が最も投資対効果（ROI）が高い選択です！',
    strengths: [
      '初心者が9割つまずく「物件探しの難航」「コンセプトのズレ」「設営の遅れ」を100%ショートカットできる',
      '自分の貴重な本業の時間や休日を一切犠牲にせず、完成された「自動収益スペース」のオーナーになれる',
      '現役で8〜9店舗を運営するプロ基準の「ポータル＋自社集客」と「清掃外注体制」が最初から手に入る',
    ],
    weaknesses: [
      '完全代行のパッケージ費用＋物件取得・設営の実費がかかるため、まとまった自己資金（余力）が必要',
      '毎月の対応枠に限りがあるため、早めの個別相談と枠の確保が必須になる',
    ],
    strategy: {
      areaAndProperty:
        'あなたが不動産屋を回る必要はゼロ。専門チームが独自の目利きとルートで、高利回りが見込める優良なレンスペ許可物件を探索・確保します。',
      conceptAndSetup:
        '物件の立地に合わせて最も勝率の高いコンセプト（レンタルスタジオ等）を設計し、備品手配から室内設営、予約ページ・自社サイト構築まで全てプロが代行します。',
      operationStyle:
        '予約・決済・スマートロックの完全自動化から清掃業者の手配まで完了した状態で引き渡し。あなたは手放しで毎月の収益を受け取るだけです。',
    },
    recommendedSpaceTypes: ['プロ完全構築レンタルスタジオ', '高収益エリアの完全無人スペース', 'M&A（事業売却）も狙える資産型店舗'],
    recommendedCourse: {
      name: '丸投げコース',
      badge: '手間ゼロ・完全お任せパッケージ',
      reason:
        '「時間も余力もないけれど、確実に稼げる店舗資産が欲しい」というあなたには、物件探しから開業準備まで全てお任せできる最上位プラン『丸投げコース』（または『物件探しサポートコース』）が唯一無二の選択肢です！',
      features: [
        '何もしなくていい完全代行！物件探しから開業準備・設営まで全てプロにお任せ',
        'インスタベース等の掲載ページ作成＋手数料を抑える「自社サイト」まで構築',
        '予約・決済の完全自動化システム連携＆清掃業者の選定・外注化までフルセット',
      ],
    },
    lineBenefitHighlight: '【毎月枠数限定】物件探しから開業準備まで全てお任せ！「丸投げコース」の優先案内＆個別相談枠',
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
    code: 'TYPE 07',
    title: '【地域独占・特化型レンタルスタジオオーナー型】',
    catchphrase: '郊外・地方でも無類の強さ！固定リピーターが集まるスタジオ資産の仕掛け人！',
    badgeText: 'リピート率◎×郊外でも勝てる',
    budgetRange: '50万〜100万円',
    difficulty: '★★★☆☆ (標準)',
    expectedReturn: '想定月利 8万〜15万円 / 1店舗（安定ストック収益）',
    gradient: 'from-pink-500 via-rose-500 to-purple-600',
    accentColor: 'pink',
    iconName: 'HeartHandshake',
    description:
      '空間づくりへの関心と堅実なビジネス感覚のバランスが絶妙なあなたには、現役オーナー・さんご自身も8〜9店舗を展開して圧倒的な実績を出している【レンタルスタジオ（ダンス・ヨガ・ピラティス・武道・教室利用等）】が最もおすすめです！都心部に依存するパーティールームや会議室と違い、レンタルスタジオは地方や郊外でも強い需要があり、教室の先生などの固定リピーターがつくため売上が抜群に安定します。',
    strengths: [
      '都心の一等地でなくても、郊外や地方都市で十分に月利10万円前後の収益化が見込める',
      'ダンス練習やヨガ教室など「毎週決まった曜日に使う固定客（リピーター）」がつきやすく、収益が安定する',
      '飲食を伴わないため部屋が汚れにくく、家具の買い替えもほぼ不要で長期的に高利益を維持できる',
    ],
    weaknesses: [
      '音の響きや床材、鏡のサイズなど「スタジオ特有の物件選びと設備のツボ」を知らないと選ばれない',
      'ポータルサイト頼みだと手数料がもったいないため、定期利用者を直接囲い込む「自社集客」がカギになる',
    ],
    strategy: {
      areaAndProperty:
        '乗降客数や周辺のスクール需要を分析し、音出しや振動に配慮できるテナント・地下や1階物件・事務所物件などをプロの目利きで選定します。',
      conceptAndSetup:
        '大型ミラー、フロア材、音響、調光ライトなど、ダンサーやインストラクターが「ここで毎週レッスンしたい！」と思うツボを押さえた空間を作ります。',
      operationStyle:
        'ポータルサイトで新規認知を取りつつ、自社予約サイト（LINE連携等）へ誘導して手数料をカットし、清掃外注とスマートロックで完全手放し運営を実現します。',
    },
    recommendedSpaceTypes: ['ダンス・K-POP練習スタジオ', 'ヨガ・ピラティス・フィットネススタジオ', '定期スクール向けカルチャースタジオ'],
    recommendedCourse: {
      name: '開業保証コース',
      badge: '現役8〜9店舗スタジオオーナー直伝',
      reason:
        '現在進行形でレンタルスタジオを多数手放し運営している「さんご」の生きた一次情報をそのままインストールできる『開業保証コース』（物件探しも任せるなら『物件探しサポートコース』）が相性抜群です！',
      features: [
        '現役で8〜9店舗のレンタルスタジオを運営するオーナーが直接指導・徹底伴走',
        '地方・郊外でも勝てるスタジオ物件の見極め方から鏡・床材の導入まで完全網羅',
        'ポータル手数料に依存しない「自社サイト作成＆自社集客」まで手厚くフォロー',
      ],
    },
    lineBenefitHighlight: '現役8店舗スタジオオーナー直伝！郊外・地方でも月利10万〜20万円を生む「勝てるスタジオ構築法」',
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
    code: 'TYPE 08',
    title: '【お宝物件ハンター・多店舗＆M&A拡大タイプ】',
    catchphrase: '最初で最大の壁「物件探し」を突破し、複数店舗と事業売却で大きな資産を築く開拓者！',
    badgeText: '行動力抜群×多店舗・M&A向き',
    budgetRange: '100万円前後',
    difficulty: '★★★★☆ (本格派)',
    expectedReturn: '想定月利 10万円前後 × 複数店舗 ＋ 事業売却益',
    gradient: 'from-violet-600 via-indigo-600 to-blue-600',
    accentColor: 'violet',
    iconName: 'Compass',
    description:
      'レンタルスペースで9割の人が挫折する最大のハードル「物件探し・内見・業者開拓」を自分の足で楽しめるあなたは、まさに天性のレンスペオーナー適性を持っています！正しい「不動産業者へのアプローチ手法」と「勝てる物件の選定基準」さえインストールすれば、お宝物件を次々と発掘し、1年で複数店舗の展開や、育てた黒字店舗をM&A（事業売却）してまとまったキャッシュを得ることも可能です！',
    strengths: [
      '最大の参入障壁である「転貸（レンスペ）許可物件の発掘」を楽しめるため、ライバルが真似できない高利回り店を作れる',
      '1店舗目で自動化と自社集客の型をマスターすれば、同じ要領で2店舗・3店舗とストック収入を倍増できる',
      '利益が出る店舗を他者に売却（M&A）する出口戦略も選べるため、資産形成のスピードが圧倒的に早い',
    ],
    weaknesses: [
      '行動力がある分、自己流の基準で物件を契約してしまうと「実は需要がない立地・用途だった」という失敗をしがち',
      '契約前に必ず「プロの目線での物件選定チェック」と「詳細な収益シミュレーション」を通すことが鉄則',
    ],
    strategy: {
      areaAndProperty:
        '「不動産業者への正しいアプローチ手法」を駆使して、一般の検索だけでは出てこない転貸OKの掘り出し物物件を引き出します。',
      conceptAndSetup:
        '見つけた物件のエリア特性に合わせて「スタジオ」や「会議室・パーティー」を最適に当てはめ、自社サイトとポータルの両輪で早期黒字化させます。',
      operationStyle:
        '1店舗目から予約・決済・清掃外注を100%マニュアル化して手放し状態を作り、出た利益を元手に2店舗目の物件開拓へ進みます。',
    },
    recommendedSpaceTypes: ['高利回りお宝テナントのスタジオ化', '1年で2〜3店舗のドミナント展開', 'M&A売却を見据えた黒字パッケージ店舗'],
    recommendedCourse: {
      name: '開業保証コース',
      badge: '業者開拓ノウハウ×プロの物件目利き',
      reason:
        '自分で動けるフットワークを持ったあなたには、「不動産業者へのアプローチ手法」を学びながら、見つけた物件を現役オーナーに無制限で相談・ジャッジしてもらえる『開業保証コース』が最強の武器になります！',
      features: [
        '門前払いされない「不動産業者へのアプローチ手法」の伝授とプロ目線での物件選定',
        '無制限のLINE質問相談で、候補物件の収支シミュレーションや交渉をいつでも相談可能',
        '複数店舗展開や将来の事業売却（M&A）も見据えた生きた経営ノウハウを吸収できる',
      ],
    },
    lineBenefitHighlight: '最大の壁「物件探しの難航」を突破する！不動産業者への禁断アプローチ手法＆1年で2店舗達成事例',
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
    code: 'TYPE 09',
    title: '【まずは不安解消・徹底伴走スタート型】',
    catchphrase: '一人で悩んで立ち止まるのは今日で終わり！プロの徹底伴走と開業保証で着実に1店舗目へ！',
    badgeText: '失敗回避×開業保証向き',
    budgetRange: '30万〜50万円〜',
    difficulty: '★☆☆☆☆ (初心者向け)',
    expectedReturn: 'まずは月利 3万〜10万円の「負けない1店舗目」を構築',
    gradient: 'from-teal-600 via-emerald-600 to-green-700',
    accentColor: 'teal',
    iconName: 'Lightbulb',
    description:
      '「興味はあるけれど、もし売上が上がらなかったらどうしよう…」「物件探しも作業も一人でできるか不安…」と感じているあなた。その慎重さは、ビジネスにおいて大切なリスク管理能力です！レンタルスペースは適当にやっても稼げる甘い世界ではありませんが、逆に言えば【事前の対策】と【プロの伴走】さえあれば、初期費用30万〜100万円程度の少額・低リスクから安全に自動化収益を作ることができます。',
    strengths: [
      'リスクに対して慎重なため、自己流で無謀な物件に飛びついて数十万円の損失を出す失敗を防げる',
      '最初から「プロに相談しながら正しい手順で進める」ことで、初心者でも着実に1店舗目を形にできる',
      '自動化システムと清掃外注を正しく組めば、クレームやトラブルで時間を奪われる不安も解消できる',
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
        '疑問や不安が出たらすぐにLINEで質問して解消し、予約自動化と清掃外注を導入して「本当に何もしなくても毎月口座に入金がある状態」を体験します。',
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
    lineBenefitHighlight: 'まずは約5分の漫画動画で全体像がわかる！失敗リスクをゼロにする「3つのハードル突破法」＆個別相談案内',
    targetProfile: {
      budget: 25,
      diy: 25,
      attachment: 40,
      search: 20,
      mindset: 15,
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

  // 1. リスク許容度・自責マインドが著しく低い場合は「まずは不安解消・徹底伴走スタート型」を最優先で提案
  if (score.mindset <= 28 && score.budget <= 45) {
    const primary = PERSONA_TYPES.find((p) => p.id === 'mindset-reset-starter')!;
    const secondary = PERSONA_TYPES.find((p) => p.id === 'solid-small-meeting')!;
    return { primary, secondary, normalizedScore: score };
  }

  // 2. 各ペルソナとの類似度スコアを計算（距離が小さいほどマッチ度が高い）
  const ranked = PERSONA_TYPES.map((persona) => {
    const t = persona.targetProfile;
    // 予算・DIY・愛着・物件探し・マインドの重み付き二乗誤差
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
    if (persona.id === 'local-diy-small' && score.budget <= 45 && score.diy >= 70 && score.attachment >= 65) {
      distance *= 0.6;
    }
    if (persona.id === 'auto-business-investor' && score.attachment <= 30 && score.diy <= 40 && score.mindset >= 60) {
      distance *= 0.65;
    }
    if (persona.id === 'hobby-profit-hybrid' && score.attachment >= 80 && score.budget <= 55) {
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
