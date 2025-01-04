export default {
  title: '財団メンバー',
  date: '日付',
  amount: '金額',
  donor: '寄付者',
  purpose: '目的',
  status: 'ステータス',
  total: '合計 {{total}} 件',
  
  // Header
  daoTitle: 'DAO',
  governanceTitle: 'ガバナンス',
  
  // Error messages
  loadError: '読み込みに失敗しました',
  invalidPublicKey: '無効な財団アドレス',
  
  // Stats
  totalMembers: '総メンバー数',
  totalNftAirdrops: '総 NFT エアドロップ数',
  totalVotes: '総投票権',

  // Rules Modal
  rulesTitle: '財団参加規則',
  importantNotice: '<span class="text-[#FFAC03] font-bold">重要なお知らせ：</span>個人ウォレットアドレスを使用して寄付を行ってください。取引所のアドレスは使用しないでください。NFT エアドロップはウォレットアドレスに紐付けられ、後で変更することはできません。',
  
  // NFT Airdrop Rules
  nftAirdropRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">NFT エアドロップ規則</span>',
  recommended: '',
  nftAirdropRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">50 USD</span> または <span class="text-[#9945FF] font-medium">0.2 SOL</span> または <span class="text-[#FFAC03] font-medium">10,000 MINIDOGE</span> の寄付 = 1 NFT エアドロップ</div>',
  nftAirdropRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>最初の <span class="text-[#FFAC03] font-medium">100</span> アドレスは追加で <span class="text-[#FFAC03] font-medium">2</span> NFT エアドロップを獲得</div>',
  nftAirdropRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">101-500</span> 番目のアドレスは追加で <span class="text-[#FFAC03] font-medium">1</span> NFT エアドロップを獲得</div>',

  // Voting Rights Rules
  votingRightsRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">投票権規則</span>',
  votingRightsRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>基本投票権：<span class="text-[#FFAC03] font-medium">1</span> 以上の NFT エアドロップ保有で <span class="text-[#FFAC03] font-medium">1</span> 基本票を獲得</div>',
  votingRightsRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>追加投票権：NFT エアドロップ <span class="text-[#FFAC03] font-medium">5</span> 個ごとに <span class="text-[#FFAC03] font-medium">1</span> 追加票を獲得</div>',
  votingRightsRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>ウォレットあたり最大 <span class="text-[#FFAC03] font-medium">5</span> 票（<span class="text-[#FFAC03] font-medium">1</span> 基本票 + <span class="text-[#FFAC03] font-medium">4</span> 追加票）</div>',

  // Voting Rights Examples
  votingRightsExamples: '<span class="text-[#FFAC03] text-base font-bold opacity-50">投票権の例</span>',
  votingExample1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">2</span> NFT エアドロップ保有 = <span class="text-[#FFAC03] font-medium">1</span> 票（基本票）</div>',
  votingExample2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">6</span> NFT エアドロップ保有 = <span class="text-[#FFAC03] font-medium">2</span> 票（<span class="text-[#FFAC03] font-medium">1</span> 基本票 + <span class="text-[#FFAC03] font-medium">1</span> 追加票）</div>',
  votingExample3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">20</span> NFT エアドロップ保有 = <span class="text-[#FFAC03] font-medium">5</span> 票（<span class="text-[#FFAC03] font-medium">1</span> 基本票 + <span class="text-[#FFAC03] font-medium">4</span> 追加票、上限到達）</div>',

  // Participation Process
  participationProcess: '<span class="text-[#FFAC03] text-base font-bold opacity-50">参加プロセス</span>',
  processStep1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#9945FF] font-medium">$SOL</span>、<span class="text-[#26A17B] font-medium">$USDT</span>、<span class="text-[#2785CA] font-medium">$USDC</span>、<span class="text-[#FFAC03] font-medium">$MINIDOGE</span> から選択して寄付</div>',
  processStep2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>財団の SOL ウォレットアドレスに送金：</div>',
  processStep3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>取引のスクリーンショットまたは動画を保存</div>',
  processStep4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Telegram 管理者に連絡して財団グループに参加：{{telegramAdminLinks}}</div>',

  // Notes
  notes: '<span class="text-[#FFAC03] text-base font-bold opacity-50">注意事項</span>',
  note1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>寄付金額に制限はありませんが、投票権には上限があります</div>',
  note2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>寄付後、$MINIDOGE NFT エアドロップの資格を自動的に獲得</div>',
  note3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>NFT は $MINIDOGE が時価総額 50M+ に達した後に正式リリース</div>',
  note4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>財団の規則は財団の決定と投票により調整される場合があります。現在の規則は参考用です</div>',

  // Governance Modal
  modalGovernanceTitle: '財団ガバナンスシステム',
  governanceMechanism: '<span class="text-[#FFAC03] text-base font-bold opacity-50">ガバナンスメカニズム</span>',
  governanceRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>提案投票は総投票者数の<span class="text-[#FFAC03] font-medium">>30%</span>の参加で有効</div>',
  governanceRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>重要な決定には総投票者数の<span class="text-[#FFAC03] font-medium">>50%</span>の参加が必要</div>',
  governanceRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>提案は<span class="text-[#FFAC03] font-medium">>2/3</span>の賛成票で可決</div>',
  governanceRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>財団コアチームは<span class="text-[#FFAC03] font-medium">20%</span>のガバナンス比重、コミュニティ投票は<span class="text-[#FFAC03] font-medium">80%</span>の比重</div>',

  // Proposal Rules
  proposalRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">提案規則</span>',
  proposalRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>提案を開始するには<span class="text-[#FFAC03] font-medium">5</span>の投票権が必要</div>',
  proposalRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>提案には<span class="text-[#FFAC03] font-medium">3</span>人の異なる投票権保有者の共同署名が必要</div>',
  proposalRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>週に最大<span class="text-[#FFAC03] font-medium">2</span>回の提案投票</div>',
  proposalRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>通常の投票期間は<span class="text-[#FFAC03] font-medium">72</span>時間</div>',

  // Buttons
  rulesButton: '規則説明',
  governanceButton: 'ガバナンス',

  // Table Headers
  numberHeader: '番号',
  nftRightsHeader: 'NFT エアドロップ',
  votingRightsHeader: '投票',
  walletAddressHeader: 'ウォレットアドレス（取引所アドレス非対応）',
  lastDonationHeader: '最終寄付',
  totalDonationHeader: '総寄付額'
}; 