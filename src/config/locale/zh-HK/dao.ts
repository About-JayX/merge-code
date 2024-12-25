export default {
  title: '基金會成員',
  date: '日期',
  amount: '金額',
  donor: '捐贈者',
  purpose: '用途',
  status: '狀態',
  total: '共 {{total}} 條記錄',
  
  // Header
  daoTitle: 'DAO',
  governanceTitle: '治理',
  
  // Error messages
  loadError: '加載失敗',
  invalidPublicKey: '無效的基金會地址',
  
  // Stats
  totalMembers: '總成員數',
  totalNftAirdrops: '總 NFT 空投數',
  totalVotes: '總投票權',

  // Rules Modal
  rulesTitle: '基金會參與規則',
  importantNotice: '<span class="text-[#FFAC03] font-bold">重要提示：</span>請使用個人錢包地址進行捐贈，不要使用交易所地址。NFT 空投將綁定錢包地址，後續不可更改。',
  
  // NFT Airdrop Rules
  nftAirdropRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">NFT 空投規則</span>',
  recommended: '',
  nftAirdropRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>捐贈 <span class="text-[#FFAC03] font-medium">50 USD</span> 或 <span class="text-[#9945FF] font-medium">0.2 SOL</span> 或 <span class="text-[#FFAC03] font-medium">10,000 MINIDOGE</span> = 1 個 NFT 空投</div>',
  nftAirdropRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>前 <span class="text-[#FFAC03] font-medium">100</span> 個地址額外獲得 <span class="text-[#FFAC03] font-medium">2</span> 個 NFT 空投</div>',
  nftAirdropRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>第 <span class="text-[#FFAC03] font-medium">101-500</span> 個地址額外獲得 <span class="text-[#FFAC03] font-medium">1</span> 個 NFT 空投</div>',

  // Voting Rights Rules
  votingRightsRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">投票權規則</span>',
  votingRightsRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>基礎投票權：持有<span class="text-[#FFAC03] font-medium">1</span> 以上 NFT空投可獲得<span class="text-[#FFAC03] font-medium">1</span> 基礎票</div>',
  votingRightsRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>額外投票權：每持有<span class="text-[#FFAC03] font-medium">5</span> NFT空投可獲得<span class="text-[#FFAC03] font-medium">1</span> 額外票</div>',
  votingRightsRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>每個錢包最多<span class="text-[#FFAC03] font-medium">5</span> 票（<span class="text-[#FFAC03] font-medium">1</span> 基礎票 + <span class="text-[#FFAC03] font-medium">4</span> 額外票）</div>',

  // Voting Rights Examples
  votingRightsExamples: '<span class="text-[#FFAC03] text-base font-bold opacity-50">投票權示例</span>',
  votingExample1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>持有<span class="text-[#FFAC03] font-medium">2</span> NFT空投 = <span class="text-[#FFAC03] font-medium">1</span> 票（基礎票）</div>',
  votingExample2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>持有<span class="text-[#FFAC03] font-medium">6</span> NFT空投 = <span class="text-[#FFAC03] font-medium">2</span> 票（<span class="text-[#FFAC03] font-medium">1</span> 基礎票 + <span class="text-[#FFAC03] font-medium">1</span> 額外票）</div>',
  votingExample3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>持有<span class="text-[#FFAC03] font-medium">20</span> NFT空投 = <span class="text-[#FFAC03] font-medium">5</span> 票（<span class="text-[#FFAC03] font-medium">1</span> 基礎票 + <span class="text-[#FFAC03] font-medium">4</span> 額外票，達到上限）</div>',

  // Participation Process
  participationProcess: '<span class="text-[#FFAC03] text-base font-bold opacity-50">參與流程</span>',
  processStep1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> 選擇 <span class="text-[#9945FF] font-medium">$SOL</span>、<span class="text-[#26A17B] font-medium">$USDT</span>、<span class="text-[#2785CA] font-medium">$USDC</span>、<span class="text-[#FFAC03] font-medium">$MINIDOGE</span> 進行捐贈</div>',
  processStep2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> 轉賬至基金會 SOL 錢包地址：</div>',
  processStep3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> 保存轉賬截圖或視頻</div>',
  processStep4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> 聯繫 Telegram 管理員加入基金會群組：{{telegramAdminLinks}}</div>',

  // Notes
  notes: '<span class="text-[#FFAC03] text-base font-bold opacity-50">注意事項</span>',
  note1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>捐贈金額不設上限，但投票權有上限</div>',
  note2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>捐贈後自動獲得$MINIDOGE NFT空投 資格</div>',
  note3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>NFT正式上線 在$MINIDOGE 50M+ 市值後</div>',
  note4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>基金會規則可能會根據基金會決策，進行投票決定進行調整。目前展示規則僅作參考</div>',

  // Governance Modal
  modalGovernanceTitle: '基金會治理制度',
  governanceMechanism: '<span class="text-[#FFAC03] text-base font-bold opacity-50">治理機制</span>',
  governanceRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>提案投票需總投票人數<span class="text-[#FFAC03] font-medium">>30%</span>參與方為有效</div>',
  governanceRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>重大決策需總投票人數<span class="text-[#FFAC03] font-medium">>50%</span>參與</div>',
  governanceRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>提案需<span class="text-[#FFAC03] font-medium">>2/3</span>贊成票通過</div>',
  governanceRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>基金會核心團隊佔<span class="text-[#FFAC03] font-medium">20%</span>治理權重，社區投票佔<span class="text-[#FFAC03] font-medium">80%</span>權重</div>',

  // Proposal Rules
  proposalRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">提案規則</span>',
  proposalRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>需要<span class="text-[#FFAC03] font-medium">5</span>個投票權才能發起提案</div>',
  proposalRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>提案需要<span class="text-[#FFAC03] font-medium">3</span>個不同投票權持有者聯署</div>',
  proposalRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>每週最多參與<span class="text-[#FFAC03] font-medium">2</span>次提案投票</div>',
  proposalRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>常規投票期為<span class="text-[#FFAC03] font-medium">72</span>小時</div>',

  // Buttons
  rulesButton: '規則說明',
  governanceButton: '治理機制',

  // Table Headers
  numberHeader: '編號',
  nftRightsHeader: 'NFT空投',
  votingRightsHeader: '投票',
  walletAddressHeader: '錢包地址  (不支持交易所地址)',
  lastDonationHeader: '最後捐贈',
  totalDonationHeader: '總捐贈額'
}; 