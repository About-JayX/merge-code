export default {
    title: 'Thành viên Quỹ',
    date: 'Ngày',
    amount: 'Số tiền',
    donor: 'Người quyên góp',
    purpose: 'Mục đích',
    status: 'Trạng thái',
    total: 'Tổng {{total}} bản ghi',
  
    // Header
    daoTitle: 'DAO',
    governanceTitle: 'Quản trị',
  
    // Error messages
    loadError: 'Lỗi tải',
    invalidPublicKey: 'Địa chỉ quỹ không hợp lệ',
  
    // Stats
    totalMembers: 'Tổng số thành viên',
    totalNftAirdrops: 'Tổng số NFT airdrop',
    totalVotes: 'Tổng số phiếu bầu',
  
    // Rules Modal
    rulesTitle: 'Quy tắc tham gia Quỹ',
    importantNotice: '<span class="text-[#FFAC03] font-bold">Thông báo quan trọng：</span>Vui lòng sử dụng địa chỉ ví cá nhân để quyên góp. Không sử dụng địa chỉ exchange. NFT airdrop sẽ được liên kết với địa chỉ ví và không thể thay đổi sau này.',
  
    // NFT Airdrop Rules
    nftAirdropRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Quy tắc NFT airdrop</span>',
    recommended: '',
    nftAirdropRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Quyên góp <span class="text-[#FFAC03] font-medium">50 USD</span> hoặc <span class="text-[#9945FF] font-medium">0.2 SOL</span> hoặc <span class="text-[#FFAC03] font-medium">10,000 MINIDOGE</span> = 1 NFT airdrop</div>',
    nftAirdropRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">100</span> địa chỉ đầu tiên sẽ nhận được <span class="text-[#FFAC03] font-medium">2</span> NFT airdrop bổ sung</div>',
    nftAirdropRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Địa chỉ từ <span class="text-[#FFAC03] font-medium">101-500</span> sẽ nhận được <span class="text-[#FFAC03] font-medium">1</span> NFT airdrop bổ sung</div>',
  
    // Voting Rights Rules
    votingRightsRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Quy tắc quyền bỏ phiếu</span>',
    votingRightsRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Quyền bỏ phiếu cơ bản：<span class="text-[#FFAC03] font-medium">1</span> phiếu cơ bản cho việc sở hữu <span class="text-[#FFAC03] font-medium">1</span> hoặc nhiều NFT airdrop</div>',
    votingRightsRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Phiếu bầu bổ sung：<span class="text-[#FFAC03] font-medium">1</span> phiếu bổ sung cho mỗi <span class="text-[#FFAC03] font-medium">5</span> NFT airdrop</div>',
    votingRightsRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Tối đa <span class="text-[#FFAC03] font-medium">5</span> phiếu bầu mỗi ví（<span class="text-[#FFAC03] font-medium">1</span> cơ bản + <span class="text-[#FFAC03] font-medium">4</span> bổ sung）</div>',
  
    // Voting Rights Examples
    votingRightsExamples: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Ví dụ về quyền bỏ phiếu</span>',
    votingExample1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">2</span> NFT airdrop = <span class="text-[#FFAC03] font-medium">1</span> phiếu（cơ bản）</div>',
    votingExample2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">6</span> NFT airdrop = <span class="text-[#FFAC03] font-medium">2</span> phiếu（<span class="text-[#FFAC03] font-medium">1</span> cơ bản + <span class="text-[#FFAC03] font-medium">1</span> bổ sung）</div>',
    votingExample3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">20</span> NFT airdrop = <span class="text-[#FFAC03] font-medium">5</span> phiếu（<span class="text-[#FFAC03] font-medium">1</span> cơ bản + <span class="text-[#FFAC03] font-medium">4</span> bổ sung, đạt giới hạn）</div>',
  
    // Participation Process
    participationProcess: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Quy trình tham gia</span>',
    processStep1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Chọn <span class="text-[#9945FF] font-medium">$SOL</span>, <span class="text-[#26A17B] font-medium">$USDT</span>, <span class="text-[#2785CA] font-medium">$USDC</span> hoặc <span class="text-[#FFAC03] font-medium">$MINIDOGE</span> để quyên góp</div>',
    processStep2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Gửi đến địa chỉ SOL của quỹ：</div>',
    processStep3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Lưu ảnh chụp màn hình hoặc video giao dịch</div>',
    processStep4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Liên hệ với quản trị viên Telegram để tham gia：{{telegramAdminLinks}}</div>',
  
    // Notes
    notes: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Ghi chú</span>',
    note1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Không giới hạn số tiền quyên góp, nhưng có giới hạn về quyền bỏ phiếu</div>',
    note2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Sau khi quyên góp, bạn sẽ tự động đủ điều kiện nhận $MINIDOGE NFT airdrop</div>',
    note3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>NFT sẽ được ra mắt chính thức sau khi $MINIDOGE đạt vốn hóa thị trường 50M+</div>',
    note4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Quy tắc của quỹ có thể được thay đổi thông qua quyết định của quỹ và bỏ phiếu. Quy tắc hiện tại chỉ để tham khảo</div>',
  
    // Governance Modal
    modalGovernanceTitle: 'Hệ thống quản trị Quỹ',
    governanceMechanism: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Cơ chế quản trị</span>',
    governanceRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Bỏ phiếu đề xuất có hiệu lực với sự tham gia của <span class="text-[#FFAC03] font-medium">>30%</span> tổng số cử tri</div>',
    governanceRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Quyết định quan trọng yêu cầu sự tham gia của <span class="text-[#FFAC03] font-medium">>50%</span> tổng số cử tri</div>',
    governanceRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Đề xuất được thông qua với <span class="text-[#FFAC03] font-medium">>2/3</span> phiếu ủng hộ</div>',
    governanceRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Đội ngũ cốt lõi của quỹ có trọng số quản trị <span class="text-[#FFAC03] font-medium">20%</span>, bỏ phiếu cộng đồng có trọng số <span class="text-[#FFAC03] font-medium">80%</span></div>',
  
    // Proposal Rules
    proposalRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Quy tắc đề xuất</span>',
    proposalRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Cần <span class="text-[#FFAC03] font-medium">5</span> phiếu để bắt đầu đề xuất</div>',
    proposalRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Đề xuất yêu cầu chữ ký chung của <span class="text-[#FFAC03] font-medium">3</span> người nắm giữ phiếu bầu khác nhau</div>',
    proposalRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Tối đa <span class="text-[#FFAC03] font-medium">2</span> lần bỏ phiếu đề xuất mỗi tuần</div>',
    proposalRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Thời gian bỏ phiếu thông thường là <span class="text-[#FFAC03] font-medium">72</span> giờ</div>',
  
    // Buttons
    rulesButton: 'Quy tắc',
    governanceButton: 'Quản trị',
  
    // Table Headers
    numberHeader: 'Số',
    nftRightsHeader: 'NFT airdrop',
    votingRightsHeader: 'Phiếu bầu',
    walletAddressHeader: 'Địa chỉ ví（không chấp nhận địa chỉ exchange）',
    lastDonationHeader: 'Quyên góp gần nhất',
    totalDonationHeader: 'Tổng quyên góp'
  };
  