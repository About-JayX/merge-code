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
    loadError: 'Yükleme başarısız',
    invalidPublicKey: 'Geçersiz vakıf adresi',
  
    // Stats
    totalMembers: 'Toplam Üye',
    totalNftAirdrops: 'Toplam NFT Airdrop',
    totalVotes: 'Toplam Oy Hakkı',
  
    // Rules Modal
    rulesTitle: 'Vakıf Katılım Kuralları',
    importantNotice: '<span class="text-[#FFAC03] font-bold">Önemli Duyuru: </span>Lütfen bağış için kişisel cüzdan adresinizi kullanın, borsa adresi kullanmayın. NFT Airdrop cüzdan adresine bağlanacak ve daha sonra değiştirilemeyecektir.',
  
    // NFT Airdrop Rules
    nftAirdropRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">NFT Airdrop Kuralları</span>',
    recommended: '',
    nftAirdropRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">50 USD</span> veya <span class="text-[#9945FF] font-medium">0.2 SOL</span> veya <span class="text-[#FFAC03] font-medium">20,000 MINIDOGE</span> bağış = 1 NFT Airdrop</div>',
    nftAirdropRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>İlk <span class="text-[#FFAC03] font-medium">100</span> adres ek <span class="text-[#FFAC03] font-medium">2</span> NFT Airdrop alır</div>',
    nftAirdropRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">101-500</span> arası adresler ek <span class="text-[#FFAC03] font-medium">1</span> NFT Airdrop alır</div>',
  
    // Voting Rights Rules
    votingRightsRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Oy Hakkı Kuralları</span>',
    votingRightsRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Temel oy hakkı: <span class="text-[#FFAC03] font-medium">1</span> veya daha fazla NFT Airdrop sahipliği için <span class="text-[#FFAC03] font-medium">1</span> temel oy</div>',
    votingRightsRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Ek oy hakları: Her <span class="text-[#FFAC03] font-medium">5</span> NFT Airdrop için <span class="text-[#FFAC03] font-medium">1</span> ek oy</div>',
    votingRightsRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Cüzdan başına maksimum <span class="text-[#FFAC03] font-medium">5</span> oy (<span class="text-[#FFAC03] font-medium">1</span> temel + <span class="text-[#FFAC03] font-medium">4</span> ek)</div>',
  
    // Voting Rights Examples
    votingRightsExamples: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Oy Hakkı Örnekleri</span>',
    votingExample1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">2</span> NFT Airdrop sahipliği = <span class="text-[#FFAC03] font-medium">1</span> oy (temel)</div>',
    votingExample2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">6</span> NFT Airdrop sahipliği = <span class="text-[#FFAC03] font-medium">2</span> oy (<span class="text-[#FFAC03] font-medium">1</span> temel + <span class="text-[#FFAC03] font-medium">1</span> ek)</div>',
    votingExample3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">20</span> NFT Airdrop sahipliği = <span class="text-[#FFAC03] font-medium">5</span> oy (<span class="text-[#FFAC03] font-medium">1</span> temel + <span class="text-[#FFAC03] font-medium">4</span> ek, limite ulaşıldı)</div>',
  
    // Participation Process
    participationProcess: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Katılım Süreci</span>',
    processStep1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> Bağış için <span class="text-[#9945FF] font-medium">$SOL</span>, <span class="text-[#26A17B] font-medium">$USDT</span>, <span class="text-[#2785CA] font-medium">$USDC</span> veya <span class="text-[#FFAC03] font-medium">$MINIDOGE</span> seçin</div>',
    processStep2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> Vakfın SOL adresine transfer yapın:</div>',
    processStep3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> İşlemin ekran görüntüsünü veya videosunu kaydedin</div>',
    processStep4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> Katılmak için Telegram yöneticisi (@xxxx) ile iletişime geçin</div>',
    processStep4Extra: '',
  
    // Notes
    notes: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Notlar</span>',
    note1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Bağış miktarında sınır yok, ancak oy hakları sınırlıdır</div>',
    note2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Bağıştan sonra gelecekteki NFT Airdroplar için otomatik olarak hak kazanılır</div>',
    note3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>NFT, $MINIDOGE 50M+ piyasa değerine ulaştıktan sonra resmi olarak başlatılacak</div>',
    note4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Vakıf kuralları, vakıf kararları ve oylama yoluyla ayarlanabilir. Mevcut kurallar yalnızca referans içindir</div>',
  
    // Governance Modal
    modalGovernanceTitle: 'Vakıf Yönetişim Sistemi',
    governanceMechanism: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Yönetişim Mekanizması</span>',
    governanceRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Teklif oylamaları geçerlilik için toplam seçmenlerin <span class="text-[#FFAC03] font-medium">>30%</span> katılımını gerektirir</div>',
    governanceRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Önemli kararlar toplam seçmenlerin <span class="text-[#FFAC03] font-medium">>50%</span> katılımını gerektirir</div>',
    governanceRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Teklifler kabul edilmek için <span class="text-[#FFAC03] font-medium">>2/3</span> onay gerektirir</div>',
    governanceRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Vakıf çekirdek ekibi <span class="text-[#FFAC03] font-medium">20%</span> yönetişim ağırlığına, topluluk oyları <span class="text-[#FFAC03] font-medium">80%</span> ağırlığa sahiptir</div>',
  
    // Proposal Rules
    proposalRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Teklif Kuralları</span>',
    proposalRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Teklif göndermek için <span class="text-[#FFAC03] font-medium">5</span> oy hakkı gereklidir</div>',
    proposalRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Teklif, <span class="text-[#FFAC03] font-medium">3</span> farklı oy hakkı sahibinin ortak imzasını gerektirir</div>',
    proposalRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Haftada maksimum <span class="text-[#FFAC03] font-medium">2</span> teklif oylaması</div>',
    proposalRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Normal oylama süresi <span class="text-[#FFAC03] font-medium">72</span> saattir</div>',
  
    // Buttons
    rulesButton: 'Kurallar',
    governanceButton: 'Yönetişim',
  
    // Table Headers
    numberHeader: 'No',
    nftRightsHeader: 'NFT Airdrop',
    votingRightsHeader: 'Oylar',
    walletAddressHeader: 'Cüzdan Adresi (Borsa adresleri desteklenmez)',
    lastDonationHeader: 'Son Bağış',
    totalDonationHeader: 'Toplam Bağış'
  };
  