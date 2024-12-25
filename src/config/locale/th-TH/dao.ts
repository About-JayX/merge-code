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
    totalNftAirdrops: 'จำนวน NFT airdrop ทั้งหมด',
    totalVotes: 'จำนวนคะแนนเสียงทั้งหมด',
  
    // Rules Modal
    rulesTitle: 'กฎการเข้าร่วมมูลนิธิ',
    importantNotice: '<span class="text-[#FFAC03] font-bold">ประกาศสำคัญ：</span>กรุณาใช้ที่อยู่กระเป๋าเงินส่วนตัวในการบริจาค ห้ามใช้ที่อยู่ exchange NFT airdrop จะผูกกับที่อยู่กระเป๋าเงินและไม่สามารถเปลี่ยนแปลงได้ในภายหลัง',
  
    // NFT Airdrop Rules
    nftAirdropRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">กฎ NFT airdrop</span>',
    recommended: '',
    nftAirdropRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>บริจาค <span class="text-[#FFAC03] font-medium">50 USD</span> หรือ <span class="text-[#9945FF] font-medium">0.2 SOL</span> หรือ <span class="text-[#FFAC03] font-medium">10,000 MINIDOGE</span> = 1 NFT airdrop</div>',
    nftAirdropRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">100</span> ที่อยู่แรกจะได้รับ <span class="text-[#FFAC03] font-medium">2</span> NFT airdrop เพิ่มเติม</div>',
    nftAirdropRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>ที่อยู่ <span class="text-[#FFAC03] font-medium">101-500</span> จะได้รับ <span class="text-[#FFAC03] font-medium">1</span> NFT airdrop เพิ่มเติม</div>',
  
    // Voting Rights Rules
    votingRightsRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">กฎสิทธิ์การลงคะแนนเสียง</span>',
    votingRightsRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>สิทธิ์การลงคะแนนเสียงพื้นฐาน：<span class="text-[#FFAC03] font-medium">1</span> คะแนนเสียงพื้นฐานสำหรับการถือครอง <span class="text-[#FFAC03] font-medium">1</span> หรือมากกว่า NFT airdrop</div>',
    votingRightsRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>สะแนนเสียงเพิ่มเติม：<span class="text-[#FFAC03] font-medium">1</span> คะแนนเสียงเพิ่มเติมสำหรับทุก <span class="text-[#FFAC03] font-medium">5</span> NFT airdrop</div>',
    votingRightsRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>สูงสุด <span class="text-[#FFAC03] font-medium">5</span> สะแนนเสียงต่อกระเป๋าเงิน（<span class="text-[#FFAC03] font-medium">1</span> พื้นฐาน + <span class="text-[#FFAC03] font-medium">4</span> เพิ่มเติม）</div>',
  
    // Voting Rights Examples
    votingRightsExamples: '<span class="text-[#FFAC03] text-base font-bold opacity-50">ตัวอย่างสิทธิ์การลงคะแนนเสียง</span>',
    votingExample1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">2</span> NFT airdrop = <span class="text-[#FFAC03] font-medium">1</span> คะแนนเสียง（พื้นฐาน）</div>',
    votingExample2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">6</span> NFT airdrop = <span class="text-[#FFAC03] font-medium">2</span> คะแนนเสียง（<span class="text-[#FFAC03] font-medium">1</span> พื้นฐาน + <span class="text-[#FFAC03] font-medium">1</span> เพิ่มเติม）</div>',
    votingExample3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">20</span> NFT airdrop = <span class="text-[#FFAC03] font-medium">5</span> คะแนนเสียง（<span class="text-[#FFAC03] font-medium">1</span> พื้นฐาน + <span class="text-[#FFAC03] font-medium">4</span> เพิ่มเติม, ถึงขีดจำกัด）</div>',
  
    // Participation Process
    participationProcess: '<span class="text-[#FFAC03] text-base font-bold opacity-50">ขั้นตอนการเข้าร่วม</span>',
    processStep1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>เลือก <span class="text-[#9945FF] font-medium">$SOL</span>, <span class="text-[#26A17B] font-medium">$USDT</span>, <span class="text-[#2785CA] font-medium">$USDC</span> หรือ <span class="text-[#FFAC03] font-medium">$MINIDOGE</span> เพื่อบริจาค</div>',
    processStep2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>ส่งไปยังที่อยู่ SOL ของมูลนิธิ：</div>',
    processStep3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>บันทึกภาพหน้าจอหรือวิดีโอของธุรกรรม</div>',
    processStep4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>ติดต่อผู้ดูแล Telegram เพื่อเข้าร่วม：{{telegramAdminLinks}}</div>',
    processStep4Extra: '',
  
    // Notes
    notes: '<span class="text-[#FFAC03] text-base font-bold opacity-50">หมายเหตุ</span>',
    note1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>ไม่จีข้อจำกัดในจำนวนเงินบริจาค แต่มีข้อจำกัดในสิทธิ์การลงคะแนนเสียง</div>',
    note2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>หลังจากบริจาค คุณจะมีสิทธิ์รับ $MINIDOGE NFT airdrop โดยอัตโนมัติ</div>',
    note3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>NFT จะเปิดตัวอย่างเป็นทางการหลังจาก $MINIDOGE มีมูลค่าตลาดถึง 50M+</div>',
    note4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>กฎของมูลนิธิสามารถเปลี่ยนแปลงได้ผ่านการตัดสินใจของมูลนิธิและการลงคะแนนเสียง กฎปัจจุบันใช้เป็นข้อมูลอ้างอิงเท่านั้น</div>',
  
    // Governance Modal
    modalGovernanceTitle: 'ระบบการกำกับดูแลมูลนิธิ',
    governanceMechanism: '<span class="text-[#FFAC03] text-base font-bold opacity-50">กลไกการกำกับดูแล</span>',
    governanceRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>การลงคะแนนเสียงข้อเสนอจะมีผลเมื่อมีผู้เข้าร่วม <span class="text-[#FFAC03] font-medium">>30%</span> ของผู้มีสิทธิ์ลงคะแนนทั้งหมด</div>',
    governanceRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>การตัดสินใจสำคัญต้องมีผู้เข้าร่วม <span class="text-[#FFAC03] font-medium">>50%</span> ของผู้มีสิทธิ์ลงคะแนนทั้งหมด</div>',
    governanceRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>ข้อเสนอจะได้รับการอนุมัติด้วยคะแนนเสียงสนับสนุน <span class="text-[#FFAC03] font-medium">>2/3</span></div>',
    governanceRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>ทีมหลักของมูลนิธิมีน้ำหนักการกำกับดูแล <span class="text-[#FFAC03] font-medium">20%</span> การลงคะแนนเสียงของชุมชนมีน้ำหนัก <span class="text-[#FFAC03] font-medium">80%</span></div>',
  
    // Proposal Rules
    proposalRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">กฎก้อเสนอ</span>',
    proposalRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>ต้องมี <span class="text-[#FFAC03] font-medium">5</span> สะแนนเสียงเพื่อเริ่มข้อเสนอ</div>',
    proposalRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>ข้อเสนอต้องมีลายเซ็นร่วมจาก <span class="text-[#FFAC03] font-medium">3</span> ผู้ถือคะแนนเสียงที่แตกต่างกัน</div>',
    proposalRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>สูงสุด <span class="text-[#FFAC03] font-medium">2</span> การลงคะแนนเสียงข้อเสนอต่อสัปดาห์</div>',
    proposalRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>ระยะเวลาการลงคะแนนเสียงปกติคือ <span class="text-[#FFAC03] font-medium">72</span> ชั่วโมง</div>',
  
    // Buttons
    rulesButton: 'กฎ',
    governanceButton: 'การกำกับดูแล',
  
    // Table Headers
    numberHeader: 'ลมายเลข',
    nftRightsHeader: 'NFT airdrop',
    votingRightsHeader: 'คะแนนเสียง',
    walletAddressHeader: 'ที่อยู่กระเป๋าเงิน（ไม่รับที่อยู่ exchange）',
    lastDonationHeader: 'การบริจาคล่าสุด',
    totalDonationHeader: 'การบริจาคทั้งหมด'
  };
  