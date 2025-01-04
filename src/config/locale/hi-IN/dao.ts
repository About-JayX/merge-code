export default {
    title: 'फाउंडेशन के सदस्य',
    date: 'दिनांक',
    amount: 'राशि',
    donor: 'दानदाता',
    purpose: 'उद्देश्य',
    status: 'स्थिति',
    total: 'कुल {{total}} रिकॉर्ड',
  
    // Header
    daoTitle: 'DAO',
    governanceTitle: 'शासन',
  
    // Error messages
    loadError: 'लोड करने में त्रुटि',
    invalidPublicKey: 'अमान्य फाउंडेशन पता',
  
    // Stats
    totalMembers: 'कुल सदस्य',
    totalNftAirdrops: 'कुल NFT airdrop',
    totalVotes: 'कुल वोट',
  
    // Rules Modal
    rulesTitle: 'फाउंडेशन में भागीदारी के नियम',
    importantNotice: '<span class="text-[#FFAC03] font-bold">महत्वपूर्ण सूचना：</span>कृपया दान के लिए व्यक्तिगत वॉलेट पता का उपयोग करें। एक्सचेंज पते का उपयोग न करें। NFT airdrop वॉलेट पते से जुड़ा होगा और बाद में इसे बदला नहीं जा सकता।',
  
    // NFT Airdrop Rules
    nftAirdropRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">NFT airdrop नियम</span>',
    recommended: '',
    nftAirdropRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">50 USD</span> या <span class="text-[#9945FF] font-medium">0.2 SOL</span> या <span class="text-[#FFAC03] font-medium">10,000 MINIDOGE</span> का दान = 1 NFT airdrop</div>',
    nftAirdropRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>पहले <span class="text-[#FFAC03] font-medium">100</span> पते <span class="text-[#FFAC03] font-medium">2</span> अतिरिक्त NFT airdrop प्राप्त करेंगे</div>',
    nftAirdropRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">101-500</span> के बीच के पते <span class="text-[#FFAC03] font-medium">1</span> अतिरिक्त NFT airdrop प्राप्त करेंगे</div>',
  
    // Voting Rights Rules
    votingRightsRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">मतदान अधिकार नियम</span>',
    votingRightsRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>मूल मतदान अधिकार：<span class="text-[#FFAC03] font-medium">1</span> या अधिक NFT airdrop के स्वामित्व के लिए <span class="text-[#FFAC03] font-medium">1</span> मूल वोट</div>',
    votingRightsRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>अतिरिक्त वोट：प्रत्येक <span class="text-[#FFAC03] font-medium">5</span> NFT airdrop के लिए <span class="text-[#FFAC03] font-medium">1</span> अतिरिक्त वोट</div>',
    votingRightsRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>प्रति वॉलेट अधिकतम <span class="text-[#FFAC03] font-medium">5</span> वोट（<span class="text-[#FFAC03] font-medium">1</span> मूल + <span class="text-[#FFAC03] font-medium">4</span> अतिरिक्त）</div>',
  
    // Voting Rights Examples
    votingRightsExamples: '<span class="text-[#FFAC03] text-base font-bold opacity-50">मतदान अधिकार उदाहरण</span>',
    votingExample1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">2</span> NFT airdrop = <span class="text-[#FFAC03] font-medium">1</span> वोट（मूल）</div>',
    votingExample2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">6</span> NFT airdrop = <span class="text-[#FFAC03] font-medium">2</span> वोट（<span class="text-[#FFAC03] font-medium">1</span> मूल + <span class="text-[#FFAC03] font-medium">1</span> अतिरिक्त）</div>',
    votingExample3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">20</span> NFT airdrop = <span class="text-[#FFAC03] font-medium">5</span> वोट（<span class="text-[#FFAC03] font-medium">1</span> मूल + <span class="text-[#FFAC03] font-medium">4</span> अतिरिक्त, सीमा तक पहुंच गया）</div>',
  
    // Participation Process
    participationProcess: '<span class="text-[#FFAC03] text-base font-bold opacity-50">भागीदारी प्रक्रिया</span>',
    processStep1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>दान के लिए <span class="text-[#9945FF] font-medium">$SOL</span>, <span class="text-[#26A17B] font-medium">$USDT</span>, <span class="text-[#2785CA] font-medium">$USDC</span> या <span class="text-[#FFAC03] font-medium">$MINIDOGE</span> चुनें</div>',
    processStep2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>फाउंडेशन के SOL पते पर भेजें：</div>',
    processStep3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>लेनदेन का स्क्रीनशॉट या वीडियो सहेजें</div>',
    processStep4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>शामिल होने के लिए टेलीग्राम एडमिन से संपर्क करें：{{telegramAdminLinks}}</div>',
    processStep4Extra: '',
  
    // Notes
    notes: '<span class="text-[#FFAC03] text-base font-bold opacity-50">नोट्स</span>',
    note1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>दान राशि की कोई सीमा नहीं है, लेकिन मतदान अधिकारों पर सीमा है</div>',
    note2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>दान के बाद, आप स्वचालित रूप से $MINIDOGE NFT airdrop के लिए पात्र हो जाएंगे</div>',
    note3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>NFT को आधिकारिक तौर पर तब लॉन्च किया जाएगा जब $MINIDOGE 50M+ मार्केट कैप तक पहुंच जाएगा</div>',
    note4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>फाउंडेशन के नियम फाउंडेशन के निर्णय और मतदान के माध्यम से बदले जा सकते हैं। वर्तमान नियम केवल संदर्भ के लिए हैं</div>',
  
    // Governance Modal
    modalGovernanceTitle: 'फाउंडेशन शासन प्रणाली',
    governanceMechanism: '<span class="text-[#FFAC03] text-base font-bold opacity-50">शासन तंत्र</span>',
    governanceRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>प्रस्ताव मतदान कुल मतदाताओं के <span class="text-[#FFAC03] font-medium">>30%</span> की भागीदारी के साथ मान्य है</div>',
    governanceRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>महत्वपूर्ण निर्णयों के लिए कुल मतदाताओं के <span class="text-[#FFAC03] font-medium">>50%</span> की भागीदारी आवश्यक है</div>',
    governanceRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>प्रस्ताव <span class="text-[#FFAC03] font-medium">>2/3</span> समर्थन वोटों के साथ स्वीकृत होते हैं</div>',
    governanceRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>फाउंडेशन की कोर टीम का शासन भार <span class="text-[#FFAC03] font-medium">20%</span> है, समुदाय मतदान का भार <span class="text-[#FFAC03] font-medium">80%</span> है</div>',
  
    // Proposal Rules
    proposalRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">प्रस्ताव नियम</span>',
    proposalRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>प्रस्ताव जुरू करने के लिए <span class="text-[#FFAC03] font-medium">5</span> वोट आवश्यक हैं</div>',
    proposalRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>प्रस्ताव के लिए <span class="text-[#FFAC03] font-medium">3</span> अलग-अलग वोट धारकों के संयुक्त हस्ताक्षर की आवश्यकता होती है</div>',
    proposalRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>प्रति सप्ताह अधिकतम <span class="text-[#FFAC03] font-medium">2</span> प्रस्ताव मतदान</div>',
    proposalRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>नियमित मतदान अवधि <span class="text-[#FFAC03] font-medium">72</span> घंटे है</div>',
  
    // Buttons
    rulesButton: 'नियम',
    governanceButton: 'शासन',
  
    // Table Headers
    numberHeader: 'नंबर',
    nftRightsHeader: 'NFT airdrop',
    votingRightsHeader: 'वोट',
    walletAddressHeader: 'वॉलेट पता（एक्सचेंज पते स्वीकार नहीं किए जाते）',
    lastDonationHeader: 'अंतिम दान',
    totalDonationHeader: 'कुल दान'
  };
  