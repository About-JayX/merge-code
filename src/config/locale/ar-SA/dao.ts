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
    invalidPublicKey: 'عنوان المؤسسة غير صالح',
  
    // Stats
    totalMembers: 'إجمالي الأعضاء',
    totalNftAirdrops: 'إجمالي NFT airdrop',
    totalVotes: 'إجمالي الأصوات',
  
    // Rules Modal
    rulesTitle: 'قواعد المشاركة في المؤسسة',
    importantNotice: '<span class="text-[#FFAC03] font-bold">إشعار مهم：</span>يرجى استخدام عنوان المحفظة الشخصية للتبرع. لا تستخدم عنوان المنصة. سيتم ربط NFT airdrop بعنوان المحفظة ولا يمكن تغييره لاحقاً.',
  
    // NFT Airdrop Rules
    nftAirdropRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">قواعد NFT airdrop</span>',
    recommended: '',
    nftAirdropRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>تبرع <span class="text-[#FFAC03] font-medium">50 USD</span> أو <span class="text-[#9945FF] font-medium">0.2 SOL</span> أو <span class="text-[#FFAC03] font-medium">10,000 MINIDOGE</span> = 1 NFT airdrop</div>',
    nftAirdropRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>أول <span class="text-[#FFAC03] font-medium">100</span> عنوان سيحصلون على <span class="text-[#FFAC03] font-medium">2</span> NFT airdrop إضافي</div>',
    nftAirdropRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>العناوين بين <span class="text-[#FFAC03] font-medium">101-500</span> ستحصل على <span class="text-[#FFAC03] font-medium">1</span> NFT airdrop إضافي</div>',
  
    // Voting Rights Rules
    votingRightsRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">قواعد حقوق التصويت</span>',
    votingRightsRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>حق التصويت الأساسي：<span class="text-[#FFAC03] font-medium">1</span> صوت أساسي لملكية <span class="text-[#FFAC03] font-medium">1</span> أو أكثر من NFT airdrop</div>',
    votingRightsRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>الأصوات الإضافية：<span class="text-[#FFAC03] font-medium">1</span> صوت إضافي لكل <span class="text-[#FFAC03] font-medium">5</span> NFT airdrop</div>',
    votingRightsRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>بحد أقصى <span class="text-[#FFAC03] font-medium">5</span> أصوات لكل محفظة（<span class="text-[#FFAC03] font-medium">1</span> أساسي + <span class="text-[#FFAC03] font-medium">4</span> إضافي）</div>',
  
    // Voting Rights Examples
    votingRightsExamples: '<span class="text-[#FFAC03] text-base font-bold opacity-50">أمثلة على حقوق التصويت</span>',
    votingExample1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">2</span> NFT airdrop = <span class="text-[#FFAC03] font-medium">1</span> صوت（أساسي）</div>',
    votingExample2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">6</span> NFT airdrop = <span class="text-[#FFAC03] font-medium">2</span> صوت（<span class="text-[#FFAC03] font-medium">1</span> أساسي + <span class="text-[#FFAC03] font-medium">1</span> إضافي）</div>',
    votingExample3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">20</span> NFT airdrop = <span class="text-[#FFAC03] font-medium">5</span> أصوات（<span class="text-[#FFAC03] font-medium">1</span> أساسي + <span class="text-[#FFAC03] font-medium">4</span> إضافي، وصل للحد）</div>',
  
    // Participation Process
    participationProcess: '<span class="text-[#FFAC03] text-base font-bold opacity-50">عملية المشاركة</span>',
    processStep1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>اختر <span class="text-[#9945FF] font-medium">$SOL</span>، <span class="text-[#26A17B] font-medium">$USDT</span>، <span class="text-[#2785CA] font-medium">$USDC</span> أو <span class="text-[#FFAC03] font-medium">$MINIDOGE</span> للتبرع</div>',
    processStep2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>أرسل إلى عنوان SOL للمؤسسة：</div>',
    processStep3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>احفظ لقطة شاشة أو فيديو المعاملة</div>',
    processStep4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>تواصل مع مشرف التيليجرام للانضمام：{{telegramAdminLinks}}</div>',
    processStep4Extra: '',
  
    // Notes
    notes: '<span class="text-[#FFAC03] text-base font-bold opacity-50">ملاحظات</span>',
    note1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>لا يوجد حد لمبلغ التبرع، لكن هناك حد لحقوق التصويت</div>',
    note2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>بعد التبرع، ستكون مؤهلاً تلقائياً للحصول على NFT airdrop الخاص بـ $MINIDOGE</div>',
    note3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>سيتم إطلاق NFT رسمياً عندما يصل $MINIDOGE إلى القيمة السوقية +50M</div>',
    note4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>يمكن تعديل قواعد المؤسسة من خلال قرار وتصويت المؤسسة. القواعد الحالية للمرجعية فقط</div>',
  
    // Governance Modal
    modalGovernanceTitle: 'نظام حوكمة المؤسسة',
    governanceMechanism: '<span class="text-[#FFAC03] text-base font-bold opacity-50">آلية الحوكمة</span>',
    governanceRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>يكون تصويت المقترح صالحاً بمشاركة <span class="text-[#FFAC03] font-medium">>30%</span> من إجمالي المصوتين</div>',
    governanceRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>القرارات المهمة تتطلب مشاركة <span class="text-[#FFAC03] font-medium">>50%</span> من إجمالي المصوتين</div>',
    governanceRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>تتم الموافقة على المقترحات بـ <span class="text-[#FFAC03] font-medium">>2/3</span> من الأصوات المؤيدة</div>',
    governanceRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>الفريق الأساسي للمؤسسة لديه وزن حوكمة <span class="text-[#FFAC03] font-medium">20%</span>، تصويت المجتمع له وزن <span class="text-[#FFAC03] font-medium">80%</span></div>',
  
    // Proposal Rules
    proposalRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">قواعد المقترحات</span>',
    proposalRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>يلزم <span class="text-[#FFAC03] font-medium">5</span> أصوات لبدء المقترح</div>',
    proposalRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>يتطلب المقترح توقيعاً مشتركاً من <span class="text-[#FFAC03] font-medium">3</span> حاملي أصوات مختلفين</div>',
    proposalRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>بحد أقصى <span class="text-[#FFAC03] font-medium">2</span> تصويت على المقترحات في الأسبوع</div>',
    proposalRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>فترة التصويت العادية هي <span class="text-[#FFAC03] font-medium">72</span> ساعة</div>',
  
    // Buttons
    rulesButton: 'القواعد',
    governanceButton: 'الحوكمة',
  
    // Table Headers
    numberHeader: 'الرقم',
    nftRightsHeader: 'NFT airdrop',
    votingRightsHeader: 'الأصوات',
    walletAddressHeader: 'عنوان المحفظة（عناوين المنصات غير مقبولة）',
    lastDonationHeader: 'آخر تبرع',
    totalDonationHeader: 'إجمالي التبرعات'
  };
  