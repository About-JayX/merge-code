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
  totalNftAirdrops: '総NFTエアドロップ数',
  totalVotes: '総投票権',

  // Rules Modal
  rulesTitle: '財団参加規則',
  importantNotice: '<span class="text-[#FFAC03] font-bold">重要なお知らせ: </span>寄付には個人のウォレットアドレスを使用し、取引所のアドレスは使用しないでください。NFTエアドロップはウォレットアドレスに紐付けられ、後で変更することはできません。',
  
  // NFT Airdrop Rules
  nftAirdropRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">NFTエアドロップ規則</span>',
  recommended: '',
  nftAirdropRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">50 USD</span>または<span class="text-[#9945FF] font-medium">0.2 SOL</span>または<span class="text-[#FFAC03] font-medium">20,000 MINIDOGE</span>の寄付 = 1 NFTエアドロップ</div>',
  nftAirdropRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>最初の<span class="text-[#FFAC03] font-medium">100</span>アドレスは追加で<span class="text-[#FFAC03] font-medium">2</span>NFTエアドロップを受け取ります</div>',
  nftAirdropRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">101-500</span>位のアドレスは追加で<span class="text-[#FFAC03] font-medium">1</span>NFTエアドロップを受け取ります</div>',

  // Voting Rights Rules
  votingRightsRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">投票権規則</span>',
  votingRightsRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>基本投票権: <span class="text-[#FFAC03] font-medium">1</span>つ以上のNFTエアドロップ所有で<span class="text-[#FFAC03] font-medium">1</span>基本票</div>',
  votingRightsRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>追加票: <span class="text-[#FFAC03] font-medium">5</span>NFTエアドロップごとに<span class="text-[#FFAC03] font-medium">1</span>追加票</div>',
  votingRightsRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>ウォレットあたり最大<span class="text-[#FFAC03] font-medium">5</span>票（<span class="text-[#FFAC03] font-medium">1</span>基本票 + <span class="text-[#FFAC03] font-medium">4</span>追加票）</div>',

  // Voting Rights Examples
  votingRightsExamples: '<span class="text-[#FFAC03] text-base font-bold opacity-50">投票権の例</span>',
  votingExample1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">2</span>NFTエアドロップ所有 = <span class="text-[#FFAC03] font-medium">1</span>票（基本票）</div>',
  votingExample2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">6</span>NFTエアドロップ所有 = <span class="text-[#FFAC03] font-medium">2</span>票（<span class="text-[#FFAC03] font-medium">1</span>基本票 + <span class="text-[#FFAC03] font-medium">1</span>追加票）</div>',
  votingExample3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">20</span>NFTエアドロップ所有 = <span class="text-[#FFAC03] font-medium">5</span>票（<span class="text-[#FFAC03] font-medium">1</span>基本票 + <span class="text-[#FFAC03] font-medium">4</span>追加票、上限到達）</div>',

  // Participation Process
  participationProcess: '<span class="text-[#FFAC03] text-base font-bold opacity-50">参加プロセス</span>',
  processStep1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> 寄付用に<span class="text-[#9945FF] font-medium">$SOL</span>、<span class="text-[#26A17B] font-medium">$USDT</span>、<span class="text-[#2785CA] font-medium">$USDC</span>または<span class="text-[#FFAC03] font-medium">$MINIDOGE</span>を選択</div>',
  processStep2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> 財団のSOLアドレスに送金:</div>',
  processStep3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> 取引のスクリーンショットまたは動画を保存</div>',
  processStep4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> Telegramの管理者（@xxxx）に連絡して参加</div>',
  processStep4Extra: '',

  // Notes
  notes: '<span class="text-[#FFAC03] text-base font-bold opacity-50">注意事項</span>',
  note1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>寄付金額に制限はありませんが、投票権には制限があります</div>',
  note2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>寄付後、将来のNFTエアドロップに自動的に資格が付与されます</div>',
  note3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>NFTは$MINIDOGEが時価総額50M+に達した後、正式にローンチされます</div>',
  note4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>財団の規則は財団の決定と投票により調整される場合があります。現在の規則は参考用です</div>',

  // Governance Modal
  modalGovernanceTitle: '財団ガバナンスシステム',
  governanceMechanism: '<span class="text-[#FFAC03] text-base font-bold opacity-50">ガバナンスメカニズム</span>',
  governanceRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>提案投票の有効性には総投票者の<span class="text-[#FFAC03] font-medium">>30%</span>の参加が必要です</div>',
  governanceRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>重要な決定には総投票者の<span class="text-[#FFAC03] font-medium">>50%</span>の参加が必要です</div>',
  governanceRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>提案の採択には<span class="text-[#FFAC03] font-medium">>2/3</span>の承認が必要です</div>',
  governanceRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>財団のコアチームのガバナンス比重は<span class="text-[#FFAC03] font-medium">20%</span>、コミュニティ投票の比重は<span class="text-[#FFAC03] font-medium">80%</span>です</div>',

  // Proposal Rules
  proposalRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">提案規則</span>',
  proposalRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>提案の提出には<span class="text-[#FFAC03] font-medium">5</span>投票権が必要です</div>',
  proposalRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>提案には<span class="text-[#FFAC03] font-medium">3</span>人の異なる投票権保有者の共同署名が必要です</div>',
  proposalRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>週あたり最大<span class="text-[#FFAC03] font-medium">2</span>提案投票</div>',
  proposalRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>通常の投票時間は<span class="text-[#FFAC03] font-medium">72</span>時間です</div>',

  // Buttons
  rulesButton: '規則',
  governanceButton: 'ガバナンス',

  // Table Headers
  numberHeader: 'No.',
  nftRightsHeader: 'NFTエアドロップ',
  votingRightsHeader: '投票',
  walletAddressHeader: 'ウォレットアドレス（取引所アドレスは非対応）',
  lastDonationHeader: '最終寄付',
  totalDonationHeader: '総寄付額'
}; 