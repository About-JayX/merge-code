export default {
    title: 'أعضاء المؤسسة',
    date: 'التاريخ',
    amount: 'المبلغ',
    donor: 'المتبرع',
    purpose: 'الغرض',
    status: 'الحالة',
    total: 'إجمالي {{total}} سجل',
  
    // Header
    daoTitle: 'DAO',
    governanceTitle: 'الحوكمة',
  
    // Error messages
    loadError: 'فشل التحميل',
    invalidPublicKey: 'عنوان مؤسسة غير صالح',
  
    // Stats
    totalMembers: 'إجمالي الأعضاء',
    totalNftAirdrops: 'إجمالي NFT Airdrop',
    totalVotes: 'إجمالي حقوق التصويت',
  
    // Rules Modal
    rulesTitle: 'قواعد المشاركة في المؤسسة',
    importantNotice: '<span class="text-[#FFAC03] font-bold">إشعار مهم: </span>يرجى استخدام عنوان المحفظة الشخصية للتبرع، لا تستخدم عنوان البورصة. سيتم ربط NFT airdrop بعنوان المحفظة ولا يمكن تغييره لاحقاً.',
  
    // NFT Airdrop Rules
    nftAirdropRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">قواعد NFT Airdrop</span>',
    recommended: '',
    nftAirdropRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>تبرع <span class="text-[#FFAC03] font-medium">50 USD</span> أو <span class="text-[#9945FF] font-medium">0.2 SOL</span> أو <span class="text-[#FFAC03] font-medium">10,000 MINIDOGE</span> = 1 NFT Airdrop</div>',
    nftAirdropRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>أول <span class="text-[#FFAC03] font-medium">100</span> عنوان سيحصلون على <span class="text-[#FFAC03] font-medium">2</span> NFT Airdrop إضافي</div>',
    nftAirdropRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>العناوين من <span class="text-[#FFAC03] font-medium">101-500</span> ستحصل على <span class="text-[#FFAC03] font-medium">1</span> NFT Airdrop إضافي</div>',
  
    // Voting Rights Rules
    votingRightsRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">قواعد حقوق التصويت</span>',
    votingRightsRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>حق التصويت الأساسي: <span class="text-[#FFAC03] font-medium">1</span> صوت أساسي لامتلاك <span class="text-[#FFAC03] font-medium">1</span> أو أكثر من NFT Airdrop</div>',
    votingRightsRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>الأصوات الإضافية: كل <span class="text-[#FFAC03] font-medium">5</span> NFT Airdrop يمنح <span class="text-[#FFAC03] font-medium">1</span> صوت إضافي</div>',
    votingRightsRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>الحد الأقصى <span class="text-[#FFAC03] font-medium">5</span> أصوات لكل محفظة (<span class="text-[#FFAC03] font-medium">1</span> أساسي + <span class="text-[#FFAC03] font-medium">4</span> إضافي)</div>',
  
    // Voting Rights Examples
    votingRightsExamples: '<span class="text-[#FFAC03] text-base font-bold opacity-50">أمثلة على حقوق التصويت</span>',
    votingExample1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>امتلاك <span class="text-[#FFAC03] font-medium">2</span> NFT Airdrop = <span class="text-[#FFAC03] font-medium">1</span> صوت (أساسي)</div>',
    votingExample2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>امتلاك <span class="text-[#FFAC03] font-medium">6</span> NFT Airdrop = <span class="text-[#FFAC03] font-medium">2</span> صوت (<span class="text-[#FFAC03] font-medium">1</span> أساسي + <span class="text-[#FFAC03] font-medium">1</span> إضافي)</div>',
    votingExample3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>امتلاك <span class="text-[#FFAC03] font-medium">20</span> NFT Airdrop = <span class="text-[#FFAC03] font-medium">5</span> أصوات (<span class="text-[#FFAC03] font-medium">1</span> أساسي + <span class="text-[#FFAC03] font-medium">4</span> إضافي، وصل للحد الأقصى)</div>',
  
    // Participation Process
    participationProcess: '<span class="text-[#FFAC03] text-base font-bold opacity-50">عملية المشاركة</span>',
    processStep1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> اختر <span class="text-[#9945FF] font-medium">$SOL</span>، <span class="text-[#26A17B] font-medium">$USDT</span>، <span class="text-[#2785CA] font-medium">$USDC</span> أو <span class="text-[#FFAC03] font-medium">$MINIDOGE</span> للتبرع</div>',
    processStep2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> حول إلى عنوان SOL للمؤسسة:</div>',
    processStep3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> احفظ لقطة شاشة أو فيديو للمعاملة</div>',
    processStep4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> تواصل مع مشرف التليجرام (@xxxx) للانضمام</div>',
    processStep4Extra: '',
  
    // Notes
    notes: '<span class="text-[#FFAC03] text-base font-bold opacity-50">ملاحظات</span>',
    note1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>لا يوجد حد لمبلغ التبرع، لكن حقوق التصويت محدودة</div>',
    note2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>مؤهل تلقائياً لـ NFT airdrop المستقبلية بعد التبرع</div>',
    note3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>سيتم إطلاق NFT رسمياً بعد وصول $MINIDOGE إلى القيمة السوقية +50M</div>',
    note4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>قواعد المؤسسة قابلة للتعديل من خلال قرارات المؤسسة والتصويت. القواعد الحالية للمرجعية فقط</div>',
  
    // Governance Modal
    modalGovernanceTitle: 'نظام حوكمة المؤسسة',
    governanceMechanism: '<span class="text-[#FFAC03] text-base font-bold opacity-50">آلية الحوكمة</span>',
    governanceRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>مطلوب مشاركة <span class="text-[#FFAC03] font-medium">>30%</span> من إجمالي المصوتين لصحة تصويت المقترح</div>',
    governanceRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>مطلوب مشاركة <span class="text-[#FFAC03] font-medium">>50%</span> من إجمالي المصوتين للقرارات المهمة</div>',
    governanceRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>المقترحات تحتاج موافقة <span class="text-[#FFAC03] font-medium">>2/3</span> للاعتماد</div>',
    governanceRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>الفريق الأساسي للمؤسسة له وزن حوكمة <span class="text-[#FFAC03] font-medium">20%</span>، تصويت المجتمع له وزن <span class="text-[#FFAC03] font-medium">80%</span></div>',
  
    // Proposal Rules
    proposalRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">قواعد المقترحات</span>',
    proposalRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>مطلوب <span class="text-[#FFAC03] font-medium">5</span> حقوق تصويت لتقديم المقترح</div>',
    proposalRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>المقترح يحتاج توقيع مشترك من <span class="text-[#FFAC03] font-medium">3</span> حاملي حقوق تصويت مختلفين</div>',
    proposalRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>بحد أقصى <span class="text-[#FFAC03] font-medium">2</span> تصويت مقترح في الأسبوع</div>',
    proposalRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>وقت التصويت العادي هو <span class="text-[#FFAC03] font-medium">72</span> ساعة</div>',
  
    // Buttons
    rulesButton: 'القواعد',
    governanceButton: 'الحوكمة',
  
    // Table Headers
    numberHeader: 'الرقم',
    nftRightsHeader: 'NFT Airdrop',
    votingRightsHeader: 'الأصوات',
    walletAddressHeader: 'عنوان المحفظة (عناوين البورصة غير مدعومة)',
    lastDonationHeader: 'آخر تبرع',
    totalDonationHeader: 'إجمالي التبرعات'
  };
  