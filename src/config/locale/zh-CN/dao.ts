export default {
  title: '基金会成员',
  date: '日期',
  amount: '金额',
  donor: '捐赠者',
  purpose: '用途',
  status: '状态',
  total: '共 {{total}} 条记录',
  
  // Header
  daoTitle: 'DAO',
  governanceTitle: '治理',
  
  // Error messages
  loadError: '加载失败',
  invalidPublicKey: '无效的基金会地址',
  
  // Stats
  totalMembers: '总成员数',
  totalNftAirdrops: '总NFT空投',
  totalVotes: '总投票权',

  // Rules Modal
  rulesTitle: '基金会参与规则',
  importantNotice: '<span class="text-[#FFAC03] font-bold">重要提醒：</span>请使用个人钱包地址进行捐赠，不要使用交易所地址。NFT空投将绑定钱包地址，后续无法更改。',
  
  // NFT Airdrop Rules
  nftAirdropRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">NFT空投规则</span>',
  recommended: '',
  nftAirdropRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>捐赠 <span class="text-[#FFAC03] font-medium">50 USD</span> 或 <span class="text-[#9945FF] font-medium">0.2 SOL</span> 或 <span class="text-[#FFAC03] font-medium">20,000 MINIDOGE</span> = 1 NFT空投</div>',
  nftAirdropRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>前<span class="text-[#FFAC03] font-medium">100</span>名地址，额外获得 <span class="text-[#FFAC03] font-medium">2</span> NFT空投</div>',
  nftAirdropRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>前<span class="text-[#FFAC03] font-medium">101-500</span>地址，额外获得 <span class="text-[#FFAC03] font-medium">1</span> NFT空投</div>',

  // Voting Rights Rules
  votingRightsRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">投票权规则</span>',
  votingRightsRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>基础投票权：持有<span class="text-[#FFAC03] font-medium">1</span> 以上 NFT空投可获得<span class="text-[#FFAC03] font-medium">1</span> 基础票</div>',
  votingRightsRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>额外投票权：每持有<span class="text-[#FFAC03] font-medium">5</span> NFT空投可获得<span class="text-[#FFAC03] font-medium">1</span> 额外票</div>',
  votingRightsRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>每个钱包最多<span class="text-[#FFAC03] font-medium">5</span> 票（<span class="text-[#FFAC03] font-medium">1</span> 基础票 + <span class="text-[#FFAC03] font-medium">4</span> 额外票）</div>',

  // Voting Rights Examples
  votingRightsExamples: '<span class="text-[#FFAC03] text-base font-bold opacity-50">投票权示例</span>',
  votingExample1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>持有<span class="text-[#FFAC03] font-medium">2</span> NFT空投 = <span class="text-[#FFAC03] font-medium">1</span> 票（基础票）</div>',
  votingExample2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>持有<span class="text-[#FFAC03] font-medium">6</span> NFT空投 = <span class="text-[#FFAC03] font-medium">2</span> 票（<span class="text-[#FFAC03] font-medium">1</span> 基础票 + <span class="text-[#FFAC03] font-medium">1</span> 额外票）</div>',
  votingExample3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>持有<span class="text-[#FFAC03] font-medium">20</span> NFT空投 = <span class="text-[#FFAC03] font-medium">5</span> 票（<span class="text-[#FFAC03] font-medium">1</span> 基础票 + <span class="text-[#FFAC03] font-medium">4</span> 额外票，达到上限）</div>',

  // Participation Process
  participationProcess: '<span class="text-[#FFAC03] text-base font-bold opacity-50">参与流程</span>',
  processStep1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> 选择 <span class="text-[#9945FF] font-medium">$SOL</span>、<span class="text-[#26A17B] font-medium">$USDT</span>、<span class="text-[#2785CA] font-medium">$USDC</span>、<span class="text-[#FFAC03] font-medium">$MINIDOGE</span> 进行捐赠</div>',
  processStep2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> 转账至基金会 SOL 钱包地址：</div>',
  processStep3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> 保存转账截图或视频</div>',
  processStep4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> 联系 Telegram 管理员 (@xxxx) 加入</div>',
  processStep4Extra: '',

  // Notes
  notes: '<span class="text-[#FFAC03] text-base font-bold opacity-50">注意事项</span>',
  note1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>捐赠金额不设上限，但投票权有上限</div>',
  note2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>捐赠后自动获得后续 NFT空投 资格</div>',
  note3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>NFT正式上线 在$MINIDOGE 50M+ 市值后</div>',
  note4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>基金会规则可能会根据基金会决策，进行投票决定进行调整。目前展示规则仅作参考</div>',

  // Governance Modal
  modalGovernanceTitle: '基金会治理制度',
  governanceMechanism: '<span class="text-[#FFAC03] text-base font-bold opacity-50">治理机制</span>',
  governanceRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>提案投票需总投票人数<span class="text-[#FFAC03] font-medium">>30%</span>参与方为有效</div>',
  governanceRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>重大决策需总投票人数<span class="text-[#FFAC03] font-medium">>50%</span>参与</div>',
  governanceRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>提案需<span class="text-[#FFAC03] font-medium">>2/3</span>赞成票通过</div>',
  governanceRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>基金会核心团队占<span class="text-[#FFAC03] font-medium">20%</span>治理权重，社区投票占<span class="text-[#FFAC03] font-medium">80%</span>权重</div>',

  // Proposal Rules
  proposalRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">提案规则</span>',
  proposalRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>需要<span class="text-[#FFAC03] font-medium">5</span>个投票权才能发起提案</div>',
  proposalRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>提案需要<span class="text-[#FFAC03] font-medium">3</span>个不同投票权持有者联署</div>',
  proposalRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>每周最多参与<span class="text-[#FFAC03] font-medium">2</span>次提案投票</div>',
  proposalRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>常规投票期为<span class="text-[#FFAC03] font-medium">72</span>小时</div>',

  // Buttons
  rulesButton: '规则说明',
  governanceButton: '治理机制',

  // Table Headers
  numberHeader: '编号',
  nftRightsHeader: 'NFT空投',
  votingRightsHeader: '投票',
  walletAddressHeader: '钱包地址  (不支持交易所地址)',
  lastDonationHeader: '最后捐赠',
  totalDonationHeader: '总捐赠额'
}; 