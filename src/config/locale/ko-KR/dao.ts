export default {
    title: '재단 멤버',
    date: '날짜',
    amount: '금액',
    donor: '기부자',
    purpose: '목적',
    status: '상태',
    total: '총 {{total}} 건',
  
    // Header
    daoTitle: 'DAO',
    governanceTitle: '거버넌스',
  
    // Error messages
    loadError: '로딩 실패',
    invalidPublicKey: '유효하지 않은 재단 주소',
  
    // Stats
    totalMembers: '총 멤버 수',
    totalNftAirdrops: '총 NFT 에어드롭 수',
    totalVotes: '총 투표권',
  
    // Rules Modal
    rulesTitle: '재단 참여 규칙',
    importantNotice: '<span class="text-[#FFAC03] font-bold">중요 공지：</span>개인 지갑 주소를 사용하여 기부해 주세요. 거래소 주소는 사용하지 마세요. NFT 에어드롭은 지갑 주소에 연결되며 나중에 변경할 수 없습니다.',
  
    // NFT Airdrop Rules
    nftAirdropRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">NFT 에어드롭 규칙</span>',
    recommended: '',
    nftAirdropRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">50 USD</span> 또는 <span class="text-[#9945FF] font-medium">0.2 SOL</span> 또는 <span class="text-[#FFAC03] font-medium">10,000 MINIDOGE</span> 기부 = 1 NFT 에어드롭</div>',
    nftAirdropRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>첫 <span class="text-[#FFAC03] font-medium">100</span> 주소는 추가로 <span class="text-[#FFAC03] font-medium">2</span> NFT 에어드롭 획득</div>',
    nftAirdropRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">101-500</span> 번째 주소는 추가로 <span class="text-[#FFAC03] font-medium">1</span> NFT 에어드롭 획득</div>',
  
    // Voting Rights Rules
    votingRightsRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">투표권 규칙</span>',
    votingRightsRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>기본 투표권：<span class="text-[#FFAC03] font-medium">1</span> 개 이상의 NFT 에어드롭 보유 시 <span class="text-[#FFAC03] font-medium">1</span> 기본 표 획득</div>',
    votingRightsRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>추가 투표권：NFT 에어드롭 <span class="text-[#FFAC03] font-medium">5</span> 개마다 <span class="text-[#FFAC03] font-medium">1</span> 추가 표 획득</div>',
    votingRightsRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>지갑당 최대 <span class="text-[#FFAC03] font-medium">5</span> 표（<span class="text-[#FFAC03] font-medium">1</span> 기본 표 + <span class="text-[#FFAC03] font-medium">4</span> 추가 표）</div>',
  
    // Voting Rights Examples
    votingRightsExamples: '<span class="text-[#FFAC03] text-base font-bold opacity-50">투표권 예시</span>',
    votingExample1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">2</span> NFT 에어드롭 보유 = <span class="text-[#FFAC03] font-medium">1</span> 표（기본 표）</div>',
    votingExample2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">6</span> NFT 에어드롭 보유 = <span class="text-[#FFAC03] font-medium">2</span> 표（<span class="text-[#FFAC03] font-medium">1</span> 기본 표 + <span class="text-[#FFAC03] font-medium">1</span> 추가 표）</div>',
    votingExample3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">20</span> NFT 에어드롭 보유 = <span class="text-[#FFAC03] font-medium">5</span> 표（<span class="text-[#FFAC03] font-medium">1</span> 기본 표 + <span class="text-[#FFAC03] font-medium">4</span> 추가 표, 한도 도달）</div>',
  
    // Participation Process
    participationProcess: '<span class="text-[#FFAC03] text-base font-bold opacity-50">참여 절차</span>',
    processStep1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#9945FF] font-medium">$SOL</span>, <span class="text-[#26A17B] font-medium">$USDT</span>, <span class="text-[#2785CA] font-medium">$USDC</span>, <span class="text-[#FFAC03] font-medium">$MINIDOGE</span> 중 선택하여 기부</div>',
    processStep2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>재단 SOL 지갑 주소로 송금：</div>',
    processStep3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>거래 스크린샷 또는 동영상 저장</div>',
    processStep4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>텔레그램 관리자에게 연락하여 재단 그룹 참여：{{telegramAdminLinks}}</div>',
  
    // Notes
    notes: '<span class="text-[#FFAC03] text-base font-bold opacity-50">주의사항</span>',
    note1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>기부 금액에는 제한이 없지만, 투표권에는 상한이 있습니다</div>',
    note2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>기부 후 자동으로 $MINIDOGE NFT 에어드롭 자격 획득</div>',
    note3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>NFT는 $MINIDOGE가 시가총액 50M+ 도달 후 공식 출시</div>',
    note4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>재단 규칙은 재단의 결정과 투표에 따라 조정될 수 있습니다. 현재 규칙은 참고용입니다</div>',
  
    // Governance Modal
    modalGovernanceTitle: '재단 거버넌스 시스템',
    governanceMechanism: '<span class="text-[#FFAC03] text-base font-bold opacity-50">거버넌스 메커니즘</span>',
    governanceRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>제안 투표는 총 투표자 수의 <span class="text-[#FFAC03] font-medium">>30%</span> 참여로 유효</div>',
    governanceRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>중요 결정은 총 투표자 수의 <span class="text-[#FFAC03] font-medium">>50%</span> 참여 필요</div>',
    governanceRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>제안은 <span class="text-[#FFAC03] font-medium">>2/3</span> 찬성표로 통과</div>',
    governanceRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>재단 핵심 팀은 <span class="text-[#FFAC03] font-medium">20%</span> 거버넌스 가중치, 커뮤니티 투표는 <span class="text-[#FFAC03] font-medium">80%</span> 가중치</div>',
  
    // Proposal Rules
    proposalRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">제안 규칙</span>',
    proposalRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>제안을 시작하려면 <span class="text-[#FFAC03] font-medium">5</span>개의 투표권 필요</div>',
    proposalRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>제안에는 <span class="text-[#FFAC03] font-medium">3</span>명의 다른 투표권 보유자의 공동 서명 필요</div>',
    proposalRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>주당 최대 <span class="text-[#FFAC03] font-medium">2</span>회 제안 투표</div>',
    proposalRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>일반 투표 기간은 <span class="text-[#FFAC03] font-medium">72</span>시간</div>',
  
    // Buttons
    rulesButton: '규칙 설명',
    governanceButton: '거버넌스',
  
    // Table Headers
    numberHeader: '번호',
    nftRightsHeader: 'NFT 에어드롭',
    votingRightsHeader: '투표',
    walletAddressHeader: '지갑 주소（거래소 주소 미지원）',
    lastDonationHeader: '최근 기부',
    totalDonationHeader: '총 기부액'
  };
  