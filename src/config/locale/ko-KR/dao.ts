export default {
    title: '재단 회원',
    date: '날짜',
    amount: '금액',
    donor: '기부자',
    purpose: '목적',
    status: '상태',
    total: '총 {{total}} 항목',
  
    // Header
    daoTitle: 'DAO',
    governanceTitle: '거버넌스',
  
    // Error messages
    loadError: '로딩 실패',
    invalidPublicKey: '유효하지 않은 재단 주소',
  
    // Stats
    totalMembers: '총 회원',
    totalNftAirdrops: '총 NFT 에어드롭',
    totalVotes: '총 투표권',
  
    // Rules Modal
    rulesTitle: '재단 참여 규칙',
    importantNotice: '<span class="text-[#FFAC03] font-bold">중요 공지: </span>기부를 위해 개인 지갑 주소를 사용해 주시고, 거래소 주소는 사용하지 마세요. NFT 에어드롭은 지갑 주소에 연결되며 나중에 수정할 수 없습니다.',
  
    // NFT Airdrop Rules
    nftAirdropRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">NFT 에어드롭 규칙</span>',
    recommended: '',
    nftAirdropRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">50 USD</span> 또는 <span class="text-[#9945FF] font-medium">0.2 SOL</span> 또는 <span class="text-[#FFAC03] font-medium">20,000 MINIDOGE</span> 기부 = 1 NFT 에어드롭</div>',
    nftAirdropRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>첫 <span class="text-[#FFAC03] font-medium">100</span>개 주소는 추가 <span class="text-[#FFAC03] font-medium">2</span> NFT 에어드롭 받음</div>',
    nftAirdropRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">101-500</span>번째 주소는 추가 <span class="text-[#FFAC03] font-medium">1</span> NFT 에어드롭 받음</div>',
  
    // Voting Rights Rules
    votingRightsRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">투표권 규칙</span>',
    votingRightsRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>기본 투표권: <span class="text-[#FFAC03] font-medium">1</span>개 이상의 NFT 에어드롭 보유 시 <span class="text-[#FFAC03] font-medium">1</span>개의 기본 투표권</div>',
    votingRightsRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>추가 투표권: <span class="text-[#FFAC03] font-medium">5</span>개의 NFT 에어드롭마다 <span class="text-[#FFAC03] font-medium">1</span>개의 추가 투표권</div>',
    votingRightsRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>지갑당 최대 <span class="text-[#FFAC03] font-medium">5</span>개 투표권 (<span class="text-[#FFAC03] font-medium">1</span>개 기본 + <span class="text-[#FFAC03] font-medium">4</span>개 추가)</div>',
  
    // Voting Rights Examples
    votingRightsExamples: '<span class="text-[#FFAC03] text-base font-bold opacity-50">투표권 예시</span>',
    votingExample1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">2</span>개 NFT 에어드롭 보유 = <span class="text-[#FFAC03] font-medium">1</span>개 투표권 (기본)</div>',
    votingExample2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">6</span>개 NFT 에어드롭 보유 = <span class="text-[#FFAC03] font-medium">2</span>개 투표권 (<span class="text-[#FFAC03] font-medium">1</span>개 기본 + <span class="text-[#FFAC03] font-medium">1</span>개 추가)</div>',
    votingExample3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">20</span>개 NFT 에어드롭 보유 = <span class="text-[#FFAC03] font-medium">5</span>개 투표권 (<span class="text-[#FFAC03] font-medium">1</span>개 기본 + <span class="text-[#FFAC03] font-medium">4</span>개 추가, 한도 도달)</div>',
  
    // Participation Process
    participationProcess: '<span class="text-[#FFAC03] text-base font-bold opacity-50">참여 절차</span>',
    processStep1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> 기부를 위해 <span class="text-[#9945FF] font-medium">$SOL</span>, <span class="text-[#26A17B] font-medium">$USDT</span>, <span class="text-[#2785CA] font-medium">$USDC</span> 또는 <span class="text-[#FFAC03] font-medium">$MINIDOGE</span> 선택</div>',
    processStep2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> 재단의 SOL 주소로 전송:</div>',
    processStep3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> 거래의 스크린샷 또는 동영상 저장</div>',
    processStep4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> 텔레그램 관리자(@xxxx)에게 연락하여 가입</div>',
    processStep4Extra: '',
  
    // Notes
    notes: '<span class="text-[#FFAC03] text-base font-bold opacity-50">참고사항</span>',
    note1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>기부 금액에는 제한이 없지만, 투표권은 제한됨</div>',
    note2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>기부 후 향후 NFT 에어드롭에 자동으로 자격 부여</div>',
    note3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>$MINIDOGE가 50M+ 시가총액 달성 후 NFT 공식 출시</div>',
    note4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>재단 규칙은 재단 결정과 투표를 통해 조정될 수 있음. 현재 규칙은 참고용임</div>',
  
    // Governance Modal
    modalGovernanceTitle: '재단 거버넌스 시스템',
    governanceMechanism: '<span class="text-[#FFAC03] text-base font-bold opacity-50">거버넌스 메커니즘</span>',
    governanceRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>제안 투표는 유효성을 위해 <span class="text-[#FFAC03] font-medium">>30%</span>의 총 투표자 참여 필요</div>',
    governanceRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>중요 결정은 <span class="text-[#FFAC03] font-medium">>50%</span>의 총 투표자 참여 필요</div>',
    governanceRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>제안은 채택을 위해 <span class="text-[#FFAC03] font-medium">>2/3</span>의 승인 필요</div>',
    governanceRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>재단 핵심 팀은 거버넌스 가중치 <span class="text-[#FFAC03] font-medium">20%</span>, 커뮤니티 투표는 <span class="text-[#FFAC03] font-medium">80%</span> 가중치</div>',
  
    // Proposal Rules
    proposalRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">제안 규칙</span>',
    proposalRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>제안 제출을 위해 <span class="text-[#FFAC03] font-medium">5</span>개의 투표권 필요</div>',
    proposalRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>제안은 <span class="text-[#FFAC03] font-medium">3</span>명의 다른 투표권 보유자의 공동 서명 필요</div>',
    proposalRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>주당 최대 <span class="text-[#FFAC03] font-medium">2</span>개의 제안 투표</div>',
    proposalRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>정규 투표 시간은 <span class="text-[#FFAC03] font-medium">72</span>시간</div>',
  
    // Buttons
    rulesButton: '규칙',
    governanceButton: '거버넌스',
  
    // Table Headers
    numberHeader: 'No.',
    nftRightsHeader: 'NFT 에어드롭',
    votingRightsHeader: '투표권',
    walletAddressHeader: '지갑 주소 (거래소 주소 지원 안 됨)',
    lastDonationHeader: '마지막 기부',
    totalDonationHeader: '총 기부'
  };
  