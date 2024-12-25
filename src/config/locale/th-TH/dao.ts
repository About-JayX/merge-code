export default {
    title: 'สมาชิกมูลนิธิ',
    date: 'วันที่',
    amount: 'จำนวน',
    donor: 'ผู้บริจาค',
    purpose: 'วัตถุประสงค์',
    status: 'สถานะ',
    total: 'ทั้งหมด {{total}} รายการ',
  
    // Header
    daoTitle: 'DAO',
    governanceTitle: 'การกำกับดูแล',
  
    // Error messages
    loadError: 'โหลดไม่สำเร็จ',
    invalidPublicKey: 'ที่อยู่มูลนิธิไม่ถูกต้อง',
  
    // Stats
    totalMembers: 'จำนวนสมาชิกทั้งหมด',
    totalNftAirdrops: 'จำนวน NFT Airdrop ทั้งหมด',
    totalVotes: 'จำนวนคิทธิ์ในการโหวตทั้งหมด',
  
    // Rules Modal
    rulesTitle: 'กฎการเข้าร่วมมูลนิธิ',
    importantNotice: '<span class="text-[#FFAC03] font-bold">ประกาศสำคัญ: </span>กรุณาใช้ที่อยู่กระเป๋าเงินส่วนตัวสำหรับการบริจาค ห้ามใช้ที่อยู่ของตลาดแลกเปลี่ยน NFT Airdrop จะถูกผูกกับที่อยู่กระเป๋าเงินและไม่สามารถเปลี่ยนแปลงได้ในภายหลัง',
  
    // NFT Airdrop Rules
    nftAirdropRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">กฎ NFT Airdrop</span>',
    recommended: '',
    nftAirdropRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>บริจาค <span class="text-[#FFAC03] font-medium">50 USD</span> หรือ <span class="text-[#9945FF] font-medium">0.2 SOL</span> หรือ <span class="text-[#FFAC03] font-medium">10,000 MINIDOGE</span> = 1 NFT Airdrop</div>',
    nftAirdropRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">100</span> ที่อยู่แรกจะได้รับ <span class="text-[#FFAC03] font-medium">2</span> NFT Airdrop เพิ่มเติม</div>',
    nftAirdropRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>ที่อยู่ลำดับที่ <span class="text-[#FFAC03] font-medium">101-500</span> จะได้รับ <span class="text-[#FFAC03] font-medium">1</span> NFT Airdrop เพิ่มเติม</div>',
  
    // Voting Rights Rules
    votingRightsRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">กฎสิทธิ์ในการโหวต</span>',
    votingRightsRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>สิทธิ์โหวตพื้นฐาน: ถือครอง <span class="text-[#FFAC03] font-medium">1</span> NFT Airdrop ขึ้นไปเพื่อรับ <span class="text-[#FFAC03] font-medium">1</span> สิทธิ์โหวตพื้นฐาน</div>',
    votingRightsRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>สิทธิ์โหวตเพิ่มเติม: ทุก <span class="text-[#FFAC03] font-medium">5</span> NFT Airdrop จะได้รับ <span class="text-[#FFAC03] font-medium">1</span> สิทธิ์โหวตเพิ่มเติม</div>',
    votingRightsRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>สูงสุด <span class="text-[#FFAC03] font-medium">5</span> สิทธิ์โหวตต่อกระเป๋าเงิน (<span class="text-[#FFAC03] font-medium">1</span> พื้นฐาน + <span class="text-[#FFAC03] font-medium">4</span> เพิ่มเติม)</div>',
  
    // Voting Rights Examples
    votingRightsExamples: '<span class="text-[#FFAC03] text-base font-bold opacity-50">ตัวอย่างสิทธิ์ในการโหวต</span>',
    votingExample1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>ถือครอง <span class="text-[#FFAC03] font-medium">2</span> NFT Airdrop = <span class="text-[#FFAC03] font-medium">1</span> สิทธิ์โหวต (พื้นฐาน)</div>',
    votingExample2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>ถือครอง <span class="text-[#FFAC03] font-medium">6</span> NFT Airdrop = <span class="text-[#FFAC03] font-medium">2</span> สิทธิ์โหวต (<span class="text-[#FFAC03] font-medium">1</span> พื้นฐาน + <span class="text-[#FFAC03] font-medium">1</span> เพิ่มเติม)</div>',
    votingExample3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>ถือครอง <span class="text-[#FFAC03] font-medium">20</span> NFT Airdrop = <span class="text-[#FFAC03] font-medium">5</span> สิทธิ์โหวต (<span class="text-[#FFAC03] font-medium">1</span> พื้นฐาน + <span class="text-[#FFAC03] font-medium">4</span> เพิ่มเติม, ถึงขีดจำกัด)</div>',
  
    // Participation Process
    participationProcess: '<span class="text-[#FFAC03] text-base font-bold opacity-50">ขั้นตอนการเข้าร่วม</span>',
    processStep1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> เลือก <span class="text-[#9945FF] font-medium">$SOL</span>, <span class="text-[#26A17B] font-medium">$USDT</span>, <span class="text-[#2785CA] font-medium">$USDC</span> หรือ <span class="text-[#FFAC03] font-medium">$MINIDOGE</span> สำหรับการบริจาค</div>',
    processStep2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> โอนไปยังที่อยู่ SOL ของมูลนิธิ:</div>',
    processStep3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> บันทึกภาพหน้าจอหรือวิดีโอของธุรกรรม</div>',
    processStep4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> ติดต่อผู้ดูแล Telegram (@xxxx) เพื่อเข้าร่วม</div>',
    processStep4Extra: '',
  
    // Notes
    notes: '<span class="text-[#FFAC03] text-base font-bold opacity-50">หมายเหตุ</span>',
    note1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>ไม่จำกัดจำนวนเงินบริจาค แต่สิทธิ์ในการโหวตมีจำกัด</div>',
    note2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>มีสิทธิ์รับ NFT Airdrop ในอนาคตโดยอัตโนมัติหลังจากบริจาค</div>',
    note3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>NFT จะเปิดตัวอย่างเป็นทางการหลังจาก $MINIDOGE มีมูลค่าตลาดถึง 50M+</div>',
    note4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>กฎของมูลนิธิสามารถปรับเปลี่ยนได้ผ่านการตัดสินใจและการโหวตของมูลนิธิ กฎปัจจุบันใช้เพื่อการอ้างอิงเท่านั้น</div>',
  
    // Governance Modal
    modalGovernanceTitle: 'ระบบการกำกับดูแลมูลนิธิ',
    governanceMechanism: '<span class="text-[#FFAC03] text-base font-bold opacity-50">กลไกการกำกับดูแล</span>',
    governanceRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>การโหวตข้อเสนอต้องมีผู้มีสิทธิ์โหวตเข้าร่วม <span class="text-[#FFAC03] font-medium">>30%</span> จึงจะมีผล</div>',
    governanceRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>การตัดสินใจสำคัญต้องมีผู้มีสิทธิ์โหวตเข้าร่วม <span class="text-[#FFAC03] font-medium">>50%</span></div>',
    governanceRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>ข้อเสนอต้องได้รับการอนุมัติ <span class="text-[#FFAC03] font-medium">>2/3</span> จึงจะผ่าน</div>',
    governanceRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>ทีมหลักของมูลนิธิมีน้ำหนักการกำกับดูแล <span class="text-[#FFAC03] font-medium">20%</span> การโหวตของชุมชนมีน้ำหนัก <span class="text-[#FFAC03] font-medium">80%</span></div>',
  
    // Proposal Rules
    proposalRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">กฎการเสนอ</span>',
    proposalRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>ต้องมี <span class="text-[#FFAC03] font-medium">5</span> สิทธิ์โหวตเพื่อส่งข้อเสนอ</div>',
    proposalRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>ข้อเสนอต้องมีลายเซ็นร่วมจากผู้มีสิทธิ์โหวต <span class="text-[#FFAC03] font-medium">3</span> คนที่แตกต่างกัน</div>',
    proposalRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>สูงสุด <span class="text-[#FFAC03] font-medium">2</span> การโหวตข้อเสนอต่อสัปดาห์</div>',
    proposalRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>เวลาโหวตปกติคือ <span class="text-[#FFAC03] font-medium">72</span> ชั่วโมง</div>',
  
    // Buttons
    rulesButton: 'กฎ',
    governanceButton: 'การกำกับดูแล',
  
    // Table Headers
    numberHeader: 'ลำดับ',
    nftRightsHeader: 'NFT Airdrop',
    votingRightsHeader: 'สิทธิ์โหวต',
    walletAddressHeader: 'ที่อยู่กระเป๋าเงิน (ไม่รองรับที่อยู่ตลาดแลกเปลี่ยน)',
    lastDonationHeader: 'การบริจาคล่าสุด',
    totalDonationHeader: 'ยอดบริจาครวม'
  };
  