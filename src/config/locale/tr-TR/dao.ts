export default {
    title: 'Vakıf Üyeleri',
    date: 'Tarih',
    amount: 'Miktar',
    donor: 'Bağışçı',
    purpose: 'Amaç',
    status: 'Durum',
    total: 'Toplam {{total}} kayıt',
  
    // Header
    daoTitle: 'DAO',
    governanceTitle: 'Yönetişim',
  
    // Error messages
    loadError: 'Yükleme hatası',
    invalidPublicKey: 'Geçersiz vakıf adresi',
  
    // Stats
    totalMembers: 'Toplam üye',
    totalNftAirdrops: 'Toplam NFT airdrop',
    totalVotes: 'Toplam oy',
  
    // Rules Modal
    rulesTitle: 'Vakıf Katılım Kuralları',
    importantNotice: '<span class="text-[#FFAC03] font-bold">Önemli bildirim：</span>Lütfen bağış için kişisel cüzdan adresinizi kullanın. Exchange adresleri kullanmayın. NFT airdrop cüzdan adresinize bağlı olacak ve daha sonra değiştirilemeyecektir.',
  
    // NFT Airdrop Rules
    nftAirdropRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">NFT airdrop kuralları</span>',
    recommended: '',
    nftAirdropRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">50 USD</span> veya <span class="text-[#9945FF] font-medium">0.2 SOL</span> veya <span class="text-[#FFAC03] font-medium">10,000 MINIDOGE</span> bağış = 1 NFT airdrop</div>',
    nftAirdropRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>İlk <span class="text-[#FFAC03] font-medium">100</span> adres <span class="text-[#FFAC03] font-medium">2</span> ek NFT airdrop alacak</div>',
    nftAirdropRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">101-500</span> arası adresler <span class="text-[#FFAC03] font-medium">1</span> ek NFT airdrop alacak</div>',
  
    // Voting Rights Rules
    votingRightsRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Oy hakkı kuralları</span>',
    votingRightsRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Temel oy hakkı：<span class="text-[#FFAC03] font-medium">1</span> veya daha fazla NFT airdrop sahipliği için <span class="text-[#FFAC03] font-medium">1</span> temel oy</div>',
    votingRightsRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Ek oylar：Her <span class="text-[#FFAC03] font-medium">5</span> NFT airdrop için <span class="text-[#FFAC03] font-medium">1</span> ek oy</div>',
    votingRightsRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Cüzdan başına maksimum <span class="text-[#FFAC03] font-medium">5</span> oy（<span class="text-[#FFAC03] font-medium">1</span> temel + <span class="text-[#FFAC03] font-medium">4</span> ek）</div>',
  
    // Voting Rights Examples
    votingRightsExamples: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Oy hakkı örnekleri</span>',
    votingExample1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">2</span> NFT airdrop = <span class="text-[#FFAC03] font-medium">1</span> oy（temel）</div>',
    votingExample2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">6</span> NFT airdrop = <span class="text-[#FFAC03] font-medium">2</span> oy（<span class="text-[#FFAC03] font-medium">1</span> temel + <span class="text-[#FFAC03] font-medium">1</span> ek）</div>',
    votingExample3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">20</span> NFT airdrop = <span class="text-[#FFAC03] font-medium">5</span> oy（<span class="text-[#FFAC03] font-medium">1</span> temel + <span class="text-[#FFAC03] font-medium">4</span> ek, limite ulaşıldı）</div>',
  
    // Participation Process
    participationProcess: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Katılım süreci</span>',
    processStep1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Bağış için <span class="text-[#9945FF] font-medium">$SOL</span>, <span class="text-[#26A17B] font-medium">$USDT</span>, <span class="text-[#2785CA] font-medium">$USDC</span> veya <span class="text-[#FFAC03] font-medium">$MINIDOGE</span> seçin</div>',
    processStep2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Vakıf SOL adresine gönderin：</div>',
    processStep3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>İşlem ekran görüntüsünü veya videosunu kaydedin</div>',
    processStep4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Katılmak için Telegram yöneticisiyle iletişime geçin：{{telegramAdminLinks}}</div>',
    processStep4Extra: '',
  
    // Notes
    notes: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Notlar</span>',
    note1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Bağış miktarında sınır yok, ancak oy haklarında sınır var</div>',
    note2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Bağıştan sonra otomatik olarak $MINIDOGE NFT airdrop hakkı kazanırsınız</div>',
    note3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>NFT\'ler, $MINIDOGE 50M+ piyasa değerine ulaştıktan sonra resmi olarak başlatılacak</div>',
    note4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Vakıf kuralları, vakıf kararı ve oylama ile değiştirilebilir. Mevcut kurallar sadece referans içindir</div>',
  
    // Governance Modal
    modalGovernanceTitle: 'Vakıf Yönetişim Sistemi',
    governanceMechanism: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Yönetişim mekanizması</span>',
    governanceRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Teklif oylaması, toplam seçmenlerin <span class="text-[#FFAC03] font-medium">>30%</span> katılımıyla geçerlidir</div>',
    governanceRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Önemli kararlar toplam seçmenlerin <span class="text-[#FFAC03] font-medium">>50%</span> katılımını gerektirir</div>',
    governanceRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Teklifler <span class="text-[#FFAC03] font-medium">>2/3</span> destekleyici oyla onaylanır</div>',
    governanceRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Vakıf çekirdek ekibi <span class="text-[#FFAC03] font-medium">20%</span> yönetişim ağırlığına, topluluk oylaması <span class="text-[#FFAC03] font-medium">80%</span> ağırlığa sahiptir</div>',
  
    // Proposal Rules
    proposalRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Teklif kuralları</span>',
    proposalRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Teklif başlatmak için <span class="text-[#FFAC03] font-medium">5</span> oy gereklidir</div>',
    proposalRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Teklif, <span class="text-[#FFAC03] font-medium">3</span> farklı oy sahibinin ortak imzasını gerektirir</div>',
    proposalRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Haftada maksimum <span class="text-[#FFAC03] font-medium">2</span> teklif oylaması</div>',
    proposalRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Normal oylama süresi <span class="text-[#FFAC03] font-medium">72</span> saattir</div>',
  
    // Buttons
    rulesButton: 'Kurallar',
    governanceButton: 'Yönetişim',
  
    // Table Headers
    numberHeader: 'Numara',
    nftRightsHeader: 'NFT airdrop',
    votingRightsHeader: 'Oylar',
    walletAddressHeader: 'Cüzdan adresi（exchange adresleri kabul edilmez）',
    lastDonationHeader: 'Son bağış',
    totalDonationHeader: 'Toplam bağış'
  };
  