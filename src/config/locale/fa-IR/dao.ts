export default {
  title: 'اعضای بنیاد',
  date: 'تاریخ',
  amount: 'مقدار',
  donor: 'اهدا کننده',
  purpose: 'هدف',
  status: 'وضعیت',
  total: 'مجموع {{total}} رکورد',

  // Header
  daoTitle: 'DAO',
  governanceTitle: 'حاکمیت',

  // Error messages
  loadError: 'خطا در بارگذاری',
  invalidPublicKey: 'آدرس بنیاد نامعتبر است',

  // Stats
  totalMembers: 'کل اعضا',
  totalNftAirdrops: 'کل NFT airdrop',
  totalVotes: 'کل آرا',

  // Rules Modal
  rulesTitle: 'قوانین مشارکت در بنیاد',
  importantNotice: '<span class="text-[#FFAC03] font-bold">اطلاعیه مهم：</span>لطفاً برای اهدا از آدرس کیف پول شخصی استفاده کنید. از آدرس صرافی استفاده نکنید. NFT airdrop به آدرس کیف پول متصل خواهد شد و بعداً قابل تغییر نیست.',

  // NFT Airdrop Rules
  nftAirdropRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">قوانین NFT airdrop</span>',
  recommended: '',
  nftAirdropRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>اهدای <span class="text-[#FFAC03] font-medium">50 USD</span> یا <span class="text-[#9945FF] font-medium">0.2 SOL</span> یا <span class="text-[#FFAC03] font-medium">10,000 MINIDOGE</span> = 1 NFT airdrop</div>',
  nftAirdropRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">100</span> آدرس اول <span class="text-[#FFAC03] font-medium">2</span> NFT airdrop اضافی دریافت خواهند کرد</div>',
  nftAirdropRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>آدرس‌های بین <span class="text-[#FFAC03] font-medium">101-500</span> یک NFT airdrop اضافی دریافت خواهند کرد</div>',

  // Voting Rights Rules
  votingRightsRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">قوانین حق رأی</span>',
  votingRightsRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>حق رأی پایه：<span class="text-[#FFAC03] font-medium">1</span> رأی پایه برای مالکیت <span class="text-[#FFAC03] font-medium">1</span> یا بیشتر NFT airdrop</div>',
  votingRightsRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>آرای اضافی：<span class="text-[#FFAC03] font-medium">1</span> رأی اضافی برای هر <span class="text-[#FFAC03] font-medium">5</span> NFT airdrop</div>',
  votingRightsRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>حداکثر <span class="text-[#FFAC03] font-medium">5</span> رأی برای هر کیف پول（<span class="text-[#FFAC03] font-medium">1</span> پایه + <span class="text-[#FFAC03] font-medium">4</span> اضافی）</div>',

  // Voting Rights Examples
  votingRightsExamples: '<span class="text-[#FFAC03] text-base font-bold opacity-50">مثال‌های حق رأی</span>',
  votingExample1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">2</span> NFT airdrop = <span class="text-[#FFAC03] font-medium">1</span> رأی（پایه）</div>',
  votingExample2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">6</span> NFT airdrop = <span class="text-[#FFAC03] font-medium">2</span> رأی（<span class="text-[#FFAC03] font-medium">1</span> پایه + <span class="text-[#FFAC03] font-medium">1</span> اضافی）</div>',
  votingExample3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">20</span> NFT airdrop = <span class="text-[#FFAC03] font-medium">5</span> رأی（<span class="text-[#FFAC03] font-medium">1</span> پایه + <span class="text-[#FFAC03] font-medium">4</span> اضافی، به محدودیت رسیده）</div>',

  // Participation Process
  participationProcess: '<span class="text-[#FFAC03] text-base font-bold opacity-50">فرآیند مشارکت</span>',
  processStep1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#9945FF] font-medium">$SOL</span>، <span class="text-[#26A17B] font-medium">$USDT</span>، <span class="text-[#2785CA] font-medium">$USDC</span> یا <span class="text-[#FFAC03] font-medium">$MINIDOGE</span> را برای اهدا انتخاب کنید</div>',
  processStep2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>به آدرس SOL بنیاد ارسال کنید：</div>',
  processStep3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>اسکرین‌شات یا ویدیوی تراکنش را ذخیره کنید</div>',
  processStep4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>برای پیوستن با ادمین تلگرام تماس بگیرید：{{telegramAdminLinks}}</div>',

  // Notes
  notes: '<span class="text-[#FFAC03] text-base font-bold opacity-50">نکات</span>',
  note1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>محدودیتی برای مقدار اهدا وجود ندارد، اما حق رأی محدود است</div>',
  note2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>پس از اهدا، به طور خودکار واجد شرایط NFT airdrop $MINIDOGE خواهید شد</div>',
  note3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>NFT به طور رسمی زمانی راه‌اندازی خواهد شد که $MINIDOGE به ارزش بازار +50M برسد</div>',
  note4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>قوانین بنیاد می‌تواند از طریق تصمیم و رأی‌گیری بنیاد تغییر کند. قوانین فعلی فقط برای مرجع هستند</div>',

  // Governance Modal
  modalGovernanceTitle: 'سیستم حاکمیت بنیاد',
  governanceMechanism: '<span class="text-[#FFAC03] text-base font-bold opacity-50">مکانیزم حاکمیت</span>',
  governanceRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>رأی‌گیری پیشنهاد با مشارکت <span class="text-[#FFAC03] font-medium">>30%</span> از کل رأی‌دهندگان معتبر است</div>',
  governanceRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>تصمیمات مهم نیاز به مشارکت <span class="text-[#FFAC03] font-medium">>50%</span> از کل رأی‌دهندگان دارد</div>',
  governanceRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>پیشنهادات با <span class="text-[#FFAC03] font-medium">>2/3</span> آرای موافق تصویب می‌شوند</div>',
  governanceRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>تیم اصلی بنیاد <span class="text-[#FFAC03] font-medium">20%</span> وزن حاکمیت دارد، رأی‌گیری جامعه <span class="text-[#FFAC03] font-medium">80%</span> وزن دارد</div>',

  // Proposal Rules
  proposalRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">قوانین پیشنهاد</span>',
  proposalRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">5</span> رأی برای شروع پیشنهاد لازم است</div>',
  proposalRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>پیشنهاد نیاز به امضای مشترک <span class="text-[#FFAC03] font-medium">3</span> دارنده رأی مختلف دارد</div>',
  proposalRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>حداکثر <span class="text-[#FFAC03] font-medium">2</span> رأی‌گیری پیشنهاد در هر هفته</div>',
  proposalRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>دوره رأی‌گیری عادی <span class="text-[#FFAC03] font-medium">72</span> ساعت است</div>',

  // Buttons
  rulesButton: 'قوانین',
  governanceButton: 'حاکمیت',

  // Table Headers
  numberHeader: 'شماره',
  nftRightsHeader: 'NFT airdrop',
  votingRightsHeader: 'رأی',
  walletAddressHeader: 'آدرس کیف پول（آدرس‌های صرافی پذیرفته نمی‌شوند）',
  lastDonationHeader: 'آخرین اهدا',
  totalDonationHeader: 'کل اهدا'
};
