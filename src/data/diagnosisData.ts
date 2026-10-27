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
    subText: '物件取得費・家具家電・内装費を含めた初期予算のイメージでお答えください。',
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
    subText: '自分の好みや思い入れより、数字（利回り・自動化・収益性）を最優先するスタンス。',
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
    subText: '自分の生活圏・地元にこだわるか、儲かるなら全国どこでも遠隔運営OKか。',
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
    subText: '間取り図を見たり、街を歩いてお宝物件を発掘するリサーチ作業へのモチベーション。',
    iconName: 'Search',
    yesLabel: '物件探し・内見は楽しい！',
    noLabel: '面倒・できれば省きたい',
    yesEffect: { search: 28, attachment: 5 },
    noEffect: { search: -25 },
  },
  {
    id: 7,
    category: 'OUTSOURCE 01',
    axisLabel: '外注・丸投げ志向',
    question: '物件探しの手間を考えるなら、お金がかかってもプロに丸投げしたい？',
    subText: '自分の時間（時給）を最優先し、費用を払ってでもプロに優良物件の選定・紹介を任せたいか。',
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
    subText: '競合が参入しにくい中型〜大型物件や、複数店舗展開・丸投げ構築を見据えた予算感。',
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
    question: '多少のリスクを背負ってでも、都心や大箱などで「月利15万〜30万円以上」を大きく狙いたい？',
    subText: '小さく手堅く月3〜5万円を稼ぐより、インパクトのある収益を目指したいか。',
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
    subText: '価格調整や写真変更など、オーナーとして試行錯誤するマインドセットの確認です。',
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
    catchphrase: '初期費用を最小限に抑え、自分の手とセンスで高利回り空間を作るクラフトマン！',
    badgeText: '高利回り×手作り派',
    budgetRange: '50万円〜',
    difficulty: '★★☆☆☆ (手軽)',
    expectedReturn: '想定月利 4万〜8万円 / 1店舗（利回り重視）',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    accentColor: 'emerald',
    iconName: 'Hammer',
    description:
      'あなたはDIYや空間づくりへの抵抗が少なく、自分の目が行き届くエリアで堅実にスタートするのに最も向いているタイプです！業者に払う設営費を自分の行動力でカットできるため、50万〜80万円程度の低予算でも、競合に負けない魅力的なスペースを作って驚異的な投資回収率（半年〜1年以内）を叩き出せるポテンシャルがあります。',
    strengths: [
      '設営や家具組み立てを自力で行うため、初期費用を相場の半分近くに圧縮できる',
      '自分の生活圏・得意エリアで展開するため、日々のメンテナンスや備品補充が圧倒的にラク',
      '細部まで愛情を込めた空間づくりができるため、リピーターや高評価レビューがつきやすい',
    ],
    weaknesses: [
      '「自分の好み」に寄りすぎると、市場の需要（予約が入るスペック）からズレる危険がある',
      'すべて自分で抱え込みすぎると、2店舗目・3店舗目への拡大時に時間が足りなくなる',
    ],
    strategy: {
      areaAndProperty:
        '自宅から30分圏内の「主要私鉄沿線・急行停車駅」や「地方中核都市の駅徒歩5分圏内」にある、家賃5〜7万円以下のワンルーム・1K物件を狙いましょう。',
      conceptAndSetup:
        'ネット通販や量販店のコスパ家具をフル活用しつつ、アクセントクロスや間接照明で「写真映え」を演出した女子会・推し活・おうちデート向けパーティールームが鉄板です。',
      operationStyle:
        'オープン初期は自分で点検を行ってゲストの反応を肌で感じつつ、日々の清掃は近隣の清掃スタッフさんに外注化して効率よく回すスタイルが最適です。',
    },
    recommendedSpaceTypes: ['推し活・女子会ルーム', 'ボードゲーム・宅飲みスペース', '小規模撮影スタジオ'],
    lineBenefitHighlight: '低予算でも「高見え」するコスパ神家具リスト＆地元お宝物件の探し方マニュアル',
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
    catchphrase: '感情やこだわりを排し、数字と仕組みで不労所得マシンを構築するスマート起業家！',
    badgeText: '仕組み化×高効率',
    budgetRange: '150万円前後',
    difficulty: '★★★☆☆ (標準)',
    expectedReturn: '想定月利 8万〜15万円 / 1店舗（完全遠隔）',
    gradient: 'from-blue-600 via-indigo-600 to-violet-700',
    accentColor: 'indigo',
    iconName: 'TrendingUp',
    description:
      'あなたはレンタルスペースを「趣味」ではなく純粋な「高利回りスモールビジネス」として捉えられている合理的なタイプです。自分がその場所を使いたいかどうかよりも、「需要がある駅か」「競合に勝てるか」「完全遠隔で回るか」という数字ベースで判断できるため、1店舗目の仕組みを作れば2店舗・3店舗と最速でスケールできます。',
    strengths: [
      '感情に左右されず、エリアの需要データと家賃比率から「勝てる物件」を冷静に選定できる',
      '最初から自動化・外注化を前提に設計するため、本業が忙しくても副業として完全に両立できる',
      '全国どこの有望エリアでも遠隔出店できるため、物件の選択肢が圧倒的に広い',
    ],
    weaknesses: [
      '無機質すぎる空間になると価格競争に巻き込まれるため、「売れるコンセプト設計」の型を知る必要がある',
      '立ち上げ時の外注パートナー（設営・清掃）の選定をミスると初期コストが膨らみやすい',
    ],
    strategy: {
      areaAndProperty:
        '自分の居住地に関係なく、乗降客数が多いターミナル駅・オフィス街・繁華街の徒歩5分以内にある、需要が底堅いエリアをピンポイントで狙い撃ちします。',
      conceptAndSetup:
        '消耗品の補充や清掃トラブルが極めて少ない「ビジネス会議・テレワーク・面接・セミナー」複合型、またはシンプルモダンな多目的スペースが相性抜群です。',
      operationStyle:
        'スマートロック連携・自動メッセージ配信・清掃代行を初日からフル導入し、オーナーはスマホ1台で週15分の売上・価格チェックのみを行う体制を構築します。',
    },
    recommendedSpaceTypes: ['完全無人貸し会議室', 'ハイブリッド型マルチスペース', '24時間自習・コワーキング'],
    lineBenefitHighlight: '遠隔オーナー必見！週15分管理を実現する自動化ツール設定＆高収益エリア判定シート',
    targetProfile: {
      budget: 65,
      diy: 20,
      attachment: 15,
      search: 60,
      mindset: 80,
    },
  },
  {
    id: 'metro-bigbox-challenger',
    code: 'TYPE 03',
    title: '【都心・大箱ハイリターン挑戦型】',
    catchphrase: 'ライバルがひしめくブルーオーシャンを資金力と胆力で制す、高収益チャレンジャー！',
    badgeText: '月利20万超狙い×本格派',
    budgetRange: '200万円〜',
    difficulty: '★★★★★ (プロ志向)',
    expectedReturn: '想定月利 15万〜35万円 / 1店舗',
    gradient: 'from-rose-600 via-orange-500 to-amber-500',
    accentColor: 'rose',
    iconName: 'Flame',
    description:
      'あなたは十分な予算と強い「自責マインド」を兼ね備えており、小遣い稼ぎではなく事業として大きなキャッシュフローを狙える稀有なタイプです！多くの初心者が参入する「50万円のワンルーム」はあえてスルーし、参入障壁が高い「都心の中〜大型物件（30㎡〜60㎡以上）」や「特殊コンセプト物件」で圧倒的な利益を狙う戦略がハマります。',
    strengths: [
      '資金力とリスク許容度があるため、初心者が手を出せない高単価・高利益な大型案件を独占できる',
      '1店舗あたりの利益額が大きいため、少ない店舗数でも月利30万〜50万円の柱を素早く作れる',
      '経営者マインドが高く、広告運用や法人需要の取り込みなど攻めの施策をどんどん打てる',
    ],
    weaknesses: [
      '固定費（家賃）が高くなるため、最初の物件選定とコンセプト設計を誤るとダメージが大きい',
      '自己流で進めるよりも、大箱の成功事例と集客導線を知っているプロの知見を入れる方が安全',
    ],
    strategy: {
      areaAndProperty:
        '渋谷・新宿・池袋・梅田・博多などの一等地エリアで、20名〜40名収容可能なビル一室（35㎡〜）や、キッチン付き・防音仕様などの希少物件を狙います。',
      conceptAndSetup:
        '時間単価3,000円〜8,000円以上が取れる「大型懇親会・貸切パーティー」「法人セミナー会場」「本格ハウススタジオ」など、高単価コンセプトで設計します。',
      operationStyle:
        'ポータルサイト内のSEO対策・プロカメラマンによる撮影・定期清掃契約を最初から組み込み、繁忙期（歓送迎会・年末年始）に爆発的な利益を叩き出します。',
    },
    recommendedSpaceTypes: ['都心大型パーティールーム', '法人向け大型セミナールーム', '本格スチール・動画撮影スタジオ'],
    lineBenefitHighlight: '1店舗で月利25万円超え！都心・大箱スペースの実際の収支データ＆非公開物件ルート案内',
    targetProfile: {
      budget: 90,
      diy: 45,
      attachment: 45,
      search: 75,
      mindset: 95,
    },
  },
  {
    id: 'hobby-profit-hybrid',
    code: 'TYPE 04',
    title: '【趣味×実益のハイブリッド秘密基地型】',
    catchphrase: '自分も使えてお金も生み出す！憧れのサードプレイスを持つスマートオーナー！',
    badgeText: '自己利用×収益化',
    budgetRange: '50万円〜',
    difficulty: '★★☆☆☆ (手軽)',
    expectedReturn: '想定月利 3万〜7万円＋いつでも使える自分専用空間',
    gradient: 'from-fuchsia-600 via-purple-600 to-indigo-600',
    accentColor: 'purple',
    iconName: 'Sparkles',
    description:
      '「せっかく作るなら、自分や友人も使いたくなるような素敵な空間にしたい！」という熱量を持ったあなたに最適なスタイルです。本来なら毎月家賃が出ていくだけのセカンドハウスや趣味部屋を、使わない時間帯だけレンタルスペースとして貸し出すことで、「家賃タダ＋毎月数万円のプラス収益」を実現する夢のようなハイブリッド運用が可能です！',
    strengths: [
      'オーナー自身の熱量とこだわりが空間に宿るため、大手には真似できないファンがつく',
      '自分が利用するついでに清掃や整頓ができるため、管理コストとストレスがほぼゼロ',
      '「家賃以上の売上が出れば実質黒字」という感覚で始められるため、精神的なハードルが低い',
    ],
    weaknesses: [
      '趣味に走りすぎてターゲットが狭くなりすぎると、平日の稼働率が落ちやすい',
      '私物を置きすぎるとゲストの満足度低下や破損リスクにつながるため、ゾーニングの工夫が必要',
    ],
    strategy: {
      areaAndProperty:
        '自宅や職場からアクセスしやすいエリアで、少し広めの1K〜1LDKや、趣味の機材（プロジェクター、キッチン、ボドゲ、トレーニング器具等）が映える物件を選びます。',
      conceptAndSetup:
        '「自分のやりたいこと（映画鑑賞・ボドゲ・料理・撮影・音楽など）」と「世の中の検索需要」が重なるスイートスポットを見つけ、鍵付き収納で私物と貸出備品を分けます。',
      operationStyle:
        '自分が使いたい日時はカレンダーでブロックし、それ以外の空き時間をポータルサイトで自動貸出。趣味仲間からの直接予約も取り込むと手数料も節約できます。',
    },
    recommendedSpaceTypes: ['シアター＆ボドゲ秘密基地', 'キッチン付き隠れ家サロン', 'クリエイター向け撮影＆作業部屋'],
    lineBenefitHighlight: '家賃をゼロにして毎月黒字化！趣味部屋×レンスペの成功事例集＆破損防止ルールブック',
    targetProfile: {
      budget: 30,
      diy: 60,
      attachment: 95,
      search: 50,
      mindset: 55,
    },
  },
  {
    id: 'solid-small-meeting',
    code: 'TYPE 05',
    title: '【超・堅実派！スモール会議室型】',
    catchphrase: 'トラブル最小・手間最小！低予算＆ローリスクで手堅く積み上げるディフェンシブ型！',
    badgeText: '低リスク×管理ラク',
    budgetRange: '50万円〜',
    difficulty: '★☆☆☆☆ (初心者向け)',
    expectedReturn: '想定月利 3万〜6万円 / 1店舗（超安定稼働）',
    gradient: 'from-slate-700 via-cyan-800 to-teal-800',
    accentColor: 'cyan',
    iconName: 'ShieldCheck',
    description:
      '「大きなリスクは取りたくない」「DIYや凝ったインテリア作り、ゴミだらけの清掃も避けたい」という堅実なあなたには、スモール貸し会議室・テレワークスペース型がベストマッチです！パーティー系に比べて初期の家具代が圧倒的に安く、利用者のマナーも良いため、クレームや荒らされるリスクを最小限に抑えて手堅く運営できます。',
    strengths: [
      '机・椅子・モニター・Wi-Fiなど最小限の設備で開業できるため、初期費用と設営の手間が最小クラス',
      '飲酒や騒音トラブルがほぼ起きず、ゴミ持ち帰りルールも徹底しやすいので管理ストレスがない',
      '平日日中のビジネス需要（Web面接・商談・テレワーク）を取り込めるため、安定した稼働が見込める',
    ],
    weaknesses: [
      '1時間あたりの単価は低めなため、1店舗で月20万円などの爆発的な利益は出にくい',
      '立地（駅からの距離）が遠いとビジネス層に選ばれないため、駅チカ物件の選定が絶対条件',
    ],
    strategy: {
      areaAndProperty:
        'オフィス街や主要ターミナル駅の「徒歩3分以内」にある、家賃5〜6万円以下の極小ワンルーム・事務所仕様物件を厳選します（狭くても駅近が正義です）。',
      conceptAndSetup:
        '余計な装飾は省き、「高速Wi-Fi」「大型モニター」「座り心地の良いチェア」「リングライト」など、ビジネスマンが本当に求める機能性に全振りします。',
      operationStyle:
        '毎回清掃が不要な「セルフクリーニング方式」を採用し、週1〜2回の定期点検のみで完全放置に近い安定運用を実現します。',
    },
    recommendedSpaceTypes: ['駅チカ完全個室テレワークブース', '4〜8名用スモール貸し会議室', 'Web面接・オンライン配信特化部屋'],
    lineBenefitHighlight: '荒れない・汚れない！初期費用50万円以下で作る「超堅実スモール会議室」完全設計テンプレート',
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
    catchphrase: '自分の時間は1秒も切り売りしない！プロの構築代行で最短・最速オーナーへ！',
    badgeText: '完全丸投げ×時短投資',
    budgetRange: '200万円〜',
    difficulty: '★★☆☆☆ (手軽)',
    expectedReturn: '想定月利 8万〜20万円 / 1店舗（労働時間ゼロ）',
    gradient: 'from-amber-500 via-yellow-500 to-orange-600',
    accentColor: 'amber',
    iconName: 'Crown',
    description:
      '本業でしっかり収入があり、「物件を何十件も検索する時間もないし、家具の組み立てもやりたくない。でも有望な実物資産・副収入の柱は持ちたい！」という投資家気質のあなた。自分でゼロから試行錯誤するよりも、物件選定・内装コーディネート・設営・集客ページ作成までをプロに丸投げ（構築代行）するのが最もROI（投資対効果）が高い選択です。',
    strengths: [
      '初心者が陥りがちな「物件選びの失敗」「売れない内装」「オープンまでの遅延」を100%回避できる',
      '自分の貴重な時間や休日を一切犠牲にせず、完成された「稼ぐスペース」のオーナーになれる',
      '初月からプロの集客ノウハウが詰まった状態でスタートできるため、立ち上がりが圧倒的に早い',
    ],
    weaknesses: [
      '自力でDIYするよりも初期投資額（代行費用含む）がかかるため、150万〜200万円以上の資金余力が必要',
      '信頼できる実績豊富なコンサル・構築代行パートナーを見極めることが最大のカギになる',
    ],
    strategy: {
      areaAndProperty:
        '独自の非公開物件ルートやレンスペ許可物件リストを持つ専門チームに依頼し、一般のポータルサイトに出回る前の優良物件を押さえます。',
      conceptAndSetup:
        '市場調査から逆算した「今もっとも予約が入るトレンド内装」をプロのコーディネーターと設営部隊に一任し、ホテルライクな高品質空間を完成させます。',
      operationStyle:
        'オープン後の清掃・ゲスト対応・価格調整のサポート体制まで整え、あなたは毎月の収支レポートを確認するだけの純粋なオーナー業に専念します。',
    },
    recommendedSpaceTypes: ['プロ監修トレンド女子会スペース', '一等地ハイグレード会議室', '複数店舗パッケージ投資'],
    lineBenefitHighlight: '【審査制】物件紹介から設営・集客までフルパッケージ！「丸投げ構築代行」の特別案内枠',
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
    title: '【トレンド特化・美容＆クリエイターサロン型】',
    catchphrase: 'センスと市場リサーチ力を武器に、リピーター続出の特化型スペースを作る仕掛け人！',
    badgeText: 'リピート率◎×高単価',
    budgetRange: '100万円前後',
    difficulty: '★★★☆☆ (標準)',
    expectedReturn: '想定月利 6万〜12万円 / 1店舗（安定リピート）',
    gradient: 'from-pink-500 via-rose-500 to-purple-600',
    accentColor: 'pink',
    iconName: 'HeartHandshake',
    description:
      '空間へのこだわりとビジネス感覚のバランスが絶妙なあなたには、フリーランスの美容師・ネイリスト・エステティシャン・パーソナルトレーナー・撮影クリエイターなどに場所を貸す「BtoB / 専門職向けレンタルサロン・スタジオ型」がぴったりです！一度気に入ってもらえれば毎週・毎月固定で予約が入るため、売上が非常に安定します。',
    strengths: [
      '利用者が「仕事」で使うプロや大人女性が多いため、部屋を驚くほど綺麗に使ってもらえる',
      '1人の固定リピーターが月2〜4万円分を継続予約してくれるため、集客の波が少ない',
      '騒音やゴミの問題がほぼ皆無で、普通のマンション一室でも大家さんの許可が下りやすい',
    ],
    weaknesses: [
      '施術ベッドや専用照明など、ターゲットの職種に合わせた正しい備品選定の知識が必要',
      '認知されるまでに1〜2ヶ月かかることがあるため、SNSやLINE公式アカウントでのリピート導線が効果的',
    ],
    strategy: {
      areaAndProperty:
        '女性やクリエイターが通いやすい、おしゃれな街や主要駅から徒歩5〜7分圏内の、清潔感あるマンション（エレベーター付き・オートロック可）を選びます。',
      conceptAndSetup:
        '「韓国風ナチュラル」「ホテルライク」など統一感のある内装に、昇降式施術ベッド・ワゴン・女優ミラーなどを揃え、サロンワーカーがそのまま開業できる環境を整えます。',
      operationStyle:
        'ポータルサイトで新規集客しつつ、室内POPから定期利用プランへ誘導することで、プラットフォーム手数料を抑えた高利益な固定ファン化を実現します。',
    },
    recommendedSpaceTypes: ['レンタルエステ・リラクサロン', 'パーソナルジム・ピラティススタジオ', '自然光ハウススタジオ'],
    lineBenefitHighlight: '固定リピーターで毎月安定！レンタルサロン＆スタジオの必須備品リストと許可物件の通し方',
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
    title: '【お宝物件ハンター・多店舗ドミナント拡大タイプ】',
    catchphrase: '圧倒的なリサーチ力と行動力で、お宝物件を次々と収益化するエリア制覇オーナー！',
    badgeText: '行動力抜群×多店舗向き',
    budgetRange: '100万円前後',
    difficulty: '★★★★☆ (本格派)',
    expectedReturn: '想定月利 8万〜15万円 × 複数店舗展開',
    gradient: 'from-violet-600 via-indigo-600 to-blue-600',
    accentColor: 'violet',
    iconName: 'Compass',
    description:
      'レンタルスペース事業において最も重要なスキルである「物件探し・内見のフットワーク」と「自責の行動力」を両方持っている、まさに天性のレンスペ向き人材です！多くの人が面倒がる不動産屋開拓や現地リサーチを楽しめるあなたは、相場より安いお宝物件を引き当て、特定エリアで一気に3〜5店舗へ拡大するドミナント戦略が最大の武器になります。',
    strengths: [
      'レンスペ成功の8割を決める「物件探し」を楽しめるため、ライバルが見落とす高利回り物件を発掘できる',
      '不動産屋との信頼関係（業者開拓）を築くのが得意で、2店舗目以降は向こうから未公開物件が集まるようになる',
      'DIYと外注の使い分けが上手く、100万円前後の予算で最もコスパ良く店舗数を増やせる',
    ],
    weaknesses: [
      '行動力がある分、感覚だけで飛びつくと「実は競合過多だった」という罠にハマることがある',
      '正しいエリア分析・収支シミュレーションの基準を持つだけで、勝率がほぼ100%に跳ね上がる',
    ],
    strategy: {
      areaAndProperty:
        '1つの路線やエリアに絞って徹底的にリサーチし、地元の地場不動産屋へ直接ヒアリングして「転貸（サブリース）OK」のお宝物件を引き出します。',
      conceptAndSetup:
        '同じビルや近隣駅で「会議室」「パーティールーム」「撮影スタジオ」などコンセプトを分けて複数出店し、相互送客と清掃効率化（ドミナント）を図ります。',
      operationStyle:
        '1店舗目で立ち上げの型をマスターしたら、同じエリアで2店舗目・3店舗目を横展開し、1年以内に月利30万〜50万円のポートフォリオを構築します。',
    },
    recommendedSpaceTypes: ['エリア独占ドミナント展開', '高利回り築古リノベスペース', 'コンセプト別マルチ展開'],
    lineBenefitHighlight: '不動産屋から未公開の「レンスペ許可物件」がどんどん届く！禁断の業者開拓トークスクリプト',
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
    title: '【まずはマインドセット＆基礎固め見直し型】',
    catchphrase: '焦って物件を借りる前にストップ！正しい知識と「負けない基準」を知れば不安は消える！',
    badgeText: '失敗回避×基礎マスター',
    budgetRange: '50万円〜',
    difficulty: '★☆☆☆☆ (初心者向け)',
    expectedReturn: 'まずは知識武装で「赤字リスク0」のスタートへ',
    gradient: 'from-teal-600 via-emerald-600 to-green-700',
    accentColor: 'teal',
    iconName: 'Lightbulb',
    description:
      '正直にお伝えすると、今のまま勢いだけで物件を契約してしまうのは少し危険かもしれません！「絶対に失敗したくない」「でも作業や物件探しも大変そう…」という慎重さと不安がまだ強い状態です。しかし、これは決して悪いことではありません。多くの人が失敗するのは「勝てる物件の基準」を知らないから。まずは少額・低リスクで勝てる正しい知識とマインドセットを手に入れることから始めましょう！',
    strengths: [
      'リスクに対して慎重なため、無謀な高家賃物件に飛びついて大怪我をする心配がない',
      '自分の現在地を客観的に把握できているため、プロの型を素直に学べば着実に成果を出せる',
      '最初から「どういう仕組みなら自分が続けられるか」を冷静に設計できる',
    ],
    weaknesses: [
      '「絶対に失敗しない保証」を求めすぎると、いつまでも1歩目を踏み出せなくなる',
      'レンタルスペースは「オーナー業（事業）」であるため、最低限の意思決定やプロへの相談は必要',
    ],
    strategy: {
      areaAndProperty:
        'いきなり物件を借りるのではなく、まずは実際の成功事例や「黒字になっている物件の家賃・立地条件」のデータを5〜10件見比べて目を養いましょう。',
      conceptAndSetup:
        '作業負担やトラブルが最も少ない「スモール会議室」や、プロが物件選定から伴走してくれるサポートプランを活用して、ハードルを極限まで下げるのが正解です。',
      operationStyle:
        'まずは公式LINEで配布している「失敗しないための開業ロードマップ」と「収支シミュレーター」を受け取り、具体的な数字で安心感を得ることからスタートしてください！',
    },
    recommendedSpaceTypes: ['超少額スタートのミニマム会議室', 'プロ伴走型の安心開業プラン', 'まずは事例研究＆シミュレーション'],
    lineBenefitHighlight: '初心者でも赤字を徹底回避！「失敗する物件の共通点ワースト5」＆安心開業ロードマップ',
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

  // 1. リスク許容度・自責マインドが著しく低い場合は「まずはマインドセット見直し型」を最優先で提案
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
