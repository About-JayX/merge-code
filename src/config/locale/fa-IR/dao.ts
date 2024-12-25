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
  loadError: 'بارگیری ناموفق',
  invalidPublicKey: 'آدرس بنیاد نامعتبر',

  // Stats
  totalMembers: 'تعداد کل اعضا',
  totalNftAirdrops: 'مجموع ایردراپ NFT',
  totalVotes: 'مجموع حق رای',

  // Rules Modal
  rulesTitle: 'قوانین مشارکت در بنیاد',
  importantNotice: '<span class="text-[#FFAC03] font-bold">اطلاعیه مهم: </span>لطفاً برای اهدا از آدرس کیف پول شخصی استفاده کنید، از آدرس صرافی استفاده نکنید. ایردراپ NFT به آدرس کیف پول متصل خواهد شد و بعداً قابل تغییر نیست.',

  // NFT Airdrop Rules
  nftAirdropRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">قوانین ایردراپ NFT</span>',
  recommended: '',
  nftAirdropRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>اهدای <span class="text-[#FFAC03] font-medium">50 USD</span> یا <span class="text-[#9945FF] font-medium">0.2 SOL</span> یا <span class="text-[#FFAC03] font-medium">10,000 MINIDOGE</span> = 1 ایردراپ NFT</div>',
  nftAirdropRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">100</span> آدرس اول <span class="text-[#FFAC03] font-medium">2</span> ایردراپ NFT اضافی دریافت می‌کنند</div>',
  nftAirdropRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>آدرس‌های <span class="text-[#FFAC03] font-medium">101-500</span> <span class="text-[#FFAC03] font-medium">1</span> ایردراپ NFT اضافی دریافت می‌کنند</div>',

  // Voting Rights Rules
  votingRightsRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">قوانین حق رای</span>',
  votingRightsRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>حق رای پایه: با داشتن <span class="text-[#FFAC03] font-medium">1</span> یا بیشتر ایردراپ NFT، <span class="text-[#FFAC03] font-medium">1</span> رای پایه دریافت می‌کنید</div>',
  votingRightsRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>حق رای اضافی: هر <span class="text-[#FFAC03] font-medium">5</span> ایردراپ NFT، <span class="text-[#FFAC03] font-medium">1</span> رای اضافی</div>',
  votingRightsRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>حداکثر <span class="text-[#FFAC03] font-medium">5</span> رای برای هر کیف پول (<span class="text-[#FFAC03] font-medium">1</span> رای پایه + <span class="text-[#FFAC03] font-medium">4</span> رای اضافی)</div>',

  // Voting Rights Examples
  votingRightsExamples: '<span class="text-[#FFAC03] text-base font-bold opacity-50">مثال‌های حق رای</span>',
  votingExample1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>داشتن <span class="text-[#FFAC03] font-medium">2</span> ایردراپ NFT = <span class="text-[#FFAC03] font-medium">1</span> رای (رای پایه)</div>',
  votingExample2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>داشتن <span class="text-[#FFAC03] font-medium">6</span> ایردراپ NFT = <span class="text-[#FFAC03] font-medium">2</span> رای (<span class="text-[#FFAC03] font-medium">1</span> رای پایه + <span class="text-[#FFAC03] font-medium">1</span> رای اضافی)</div>',
  votingExample3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>داشتن <span class="text-[#FFAC03] font-medium">20</span> ایردراپ NFT = <span class="text-[#FFAC03] font-medium">5</span> رای (<span class="text-[#FFAC03] font-medium">1</span> رای پایه + <span class="text-[#FFAC03] font-medium">4</span> رای اضافی، به حد نصاب رسیده)</div>',

  // Participation Process
  participationProcess: '<span class="text-[#FFAC03] text-base font-bold opacity-50">فرآیند مشارکت</span>',
  processStep1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> <span class="text-[#9945FF] font-medium">$SOL</span>، <span class="text-[#26A17B] font-medium">$USDT</span>، <span class="text-[#2785CA] font-medium">$USDC</span>، یا <span class="text-[#FFAC03] font-medium">$MINIDOGE</span> را برای اهدا انتخاب کنید</div>',
  processStep2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> به آدرس کیف پول SOL بنیاد انتقال دهید:</div>',
  processStep3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> اسکرین‌شات یا ویدیوی تراکنش را ذخیره کنید</div>',
  processStep4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> با ادمین تلگرام (@xxxx) برای پیوستن تماس بگیرید</div>',
  processStep4Extra: '',

  // Notes
  notes: '<span class="text-[#FFAC03] text-base font-bold opacity-50">نکات</span>',
  note1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>محدودیتی در مقدار اهدا وجود ندارد، اما حق رای محدود است</div>',
  note2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>پس از اهدا، به طور خودکار واجد شرایط ایردراپ‌های NFT آینده خواهید شد</div>',
  note3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>NFT پس از رسیدن $MINIDOGE به ارزش بازار +50M به طور رسمی راه‌اندازی می‌شود</div>',
  note4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>قوانین بنیاد ممکن است از طریق تصمیمات بنیاد و رای‌گیری تنظیم شود. قوانین فعلی فقط برای مرجع هستند</div>',

  // Governance Modal
  modalGovernanceTitle: 'سیستم حاکمیت بنیاد',
  governanceMechanism: '<span class="text-[#FFAC03] text-base font-bold opacity-50">مکانیزم حاکمیت</span>',
  governanceRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>رای‌گیری پیشنهاد نیاز به مشارکت <span class="text-[#FFAC03] font-medium">>30%</span> کل رای‌دهندگان برای معتبر بودن دارد</div>',
  governanceRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>تصمیمات مهم نیاز به مشارکت <span class="text-[#FFAC03] font-medium">>50%</span> کل رای‌دهندگان دارد</div>',
  governanceRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>پیشنهادات نیاز به <span class="text-[#FFAC03] font-medium">>2/3</span> آرای تایید برای تصویب دارند</div>',
  governanceRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>تیم اصلی بنیاد <span class="text-[#FFAC03] font-medium">20%</span> وزن حاکمیت، رای‌گیری جامعه <span class="text-[#FFAC03] font-medium">80%</span> وزن دارد</div>',

  // Proposal Rules
  proposalRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">قوانین پیشنهاد</span>',
  proposalRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>نیاز به <span class="text-[#FFAC03] font-medium">5</span> حق رای برای شروع پیشنهاد</div>',
  proposalRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>پیشنهاد نیاز به امضای مشترک <span class="text-[#FFAC03] font-medium">3</span> دارنده حق رای مختلف دارد</div>',
  proposalRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>حداکثر <span class="text-[#FFAC03] font-medium">2</span> رای پیشنهاد در هفته</div>',
  proposalRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>دوره رای‌گیری معمولی <span class="text-[#FFAC03] font-medium">72</span> ساعت است</div>',

  // Buttons
  rulesButton: 'قوانین',
  governanceButton: 'حاکمیت',

  // Table Headers
  numberHeader: 'شماره',
  nftRightsHeader: 'ایردراپ NFT',
  votingRightsHeader: 'آرا',
  walletAddressHeader: 'آدرس کیف پول (آدرس‌های صرافی پشتیبانی نمی‌شوند)',
  lastDonationHeader: 'آخرین اهدا',
  totalDonationHeader: 'مجموع اهدا'
};
