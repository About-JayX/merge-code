export default {
  title: 'DAO 治理',
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
  importantNotice: '重要提醒：请使用个人钱包地址进行捐赠，不要使用交易所地址。NFT空投将绑定钱包地址，后续无法更改。',
  
  // NFT Airdrop Rules
  nftAirdropRules: 'NFT空投规则',
  recommended: '推荐',
  nftAirdropRule1: '捐赠 50 USDT/USDC = 1个 NFT空投',
  nftAirdropRule2: '捐赠 0.2 SOL = 1个 NFT空投',
  nftAirdropRule3: '捐赠 20,000 MINIDOGE = 1个 NFT空投',

  // Voting Rights Rules
  votingRightsRules: '投票权规则',
  votingRightsRule1: '基础投票权：任意金额捐赠即可获得1个基础票',
  votingRightsRule2: '额外投票权：每5个NFT名额可获得1个额外投票权',
  votingRightsRule3: '每个钱包最多4票（1个基础票 + 3个额外票）',

  // Voting Rights Examples
  votingRightsExamples: '投票权示例',
  votingExample1: '捐赠2个NFT名额 = 1票（基础票）',
  votingExample2: '捐赠6个NFT名额 = 2票（1个基础票 + 1个额外票）',
  votingExample3: '捐赠16个NFT名额 = 4票（1个基础票 + 3个���外票，达到上限）',

  // Participation Process
  participationProcess: '参与流程',
  processStep1: '选择$SOL,$USDT,$USDC,$MINIDOGE 进行捐赠',
  processStep2: '转账至基金会SOL钱包地址：',
  processStep3: '保存转账截图',
  processStep4: '联系电报管理员',
  processStep4Extra: '提交转账证明，验证后加入基金会群组',

  // Notes
  notes: '注意事项',
  note1: '捐赠金额不设上限，但投票权有上限',
  note2: '捐赠后自动获得后续NFT空投资格',
  note3: '具体空投时间另行通知',
  note4: '基金会拥有最终解释权',

  // Governance Modal
  modalGovernanceTitle: '基金会治理制度',
  governanceMechanism: '治理机制',
  governanceRule1: '提案投票需总投票人数>30%参与方为有效',
  governanceRule2: '重大决策需总投票人数>50%参与',
  governanceRule3: '提案需>2/3赞成票通过',
  governanceRule4: '基金会核心团队占20%治理权重，社区投票占80%权重',

  // Proposal Rules
  proposalRules: '提案规则',
  proposalRule1: '需要4个投票权才能发起提案',
  proposalRule2: '提案需要3个不同投票权持有者联署',
  proposalRule3: '每周最多参与2次提案投票',
  proposalRule4: '常规投票期为72小时',

  // Buttons
  rulesButton: '规则说明',
  governanceButton: '治理机制',

  // Table Headers
  numberHeader: '序号',
  nftRightsHeader: 'NFT名额',
  votingRightsHeader: '投票权',
  walletAddressHeader: '钱包地址',
  lastDonationHeader: '最后捐赠',
  totalDonationHeader: '总捐赠额'
}; 