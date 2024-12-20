export default {
    title: 'फाउंडेशन सदस्य',
    date: 'तारीख',
    amount: 'राशि',
    donor: 'दाता',
    purpose: 'उद्देश्य',
    status: 'स्थिति',
    total: '{{total}} रिकॉर्ड',
  
    // Header
    daoTitle: 'DAO',
    governanceTitle: 'शासन',
  
    // Error messages
    loadError: 'लोडिंग में विफल',
    invalidPublicKey: 'अमान्य फाउंडेशन पता',
  
    // Stats
    totalMembers: 'कुल सदस्य',
    totalNftAirdrops: 'कुल NFT एयरड्रॉप',
    totalVotes: 'कुल वोट',
  
    // Rules Modal
    rulesTitle: 'फाउंडेशन भागीदारी नियम',
    importantNotice: 'महत्वपूर्ण सूचना: कृपया दान के लिए अपना व्यक्तिगत वॉलेट पता इस्तेमाल करें, एक्सचेंज पते का उपयोग न करें। NFT एयरड्रॉप वॉलेट पते से जुड़े होंगे और बाद में इन्हें बदला नहीं जा सकेगा।',
  
    // NFT Airdrop Rules
    nftAirdropRules: 'NFT एयरड्रॉप नियम',
    recommended: 'सिफारिश की जाती है',
    nftAirdropRule1: '50 USDT/USDC दान करने पर = 1 NFT एयरड्रॉप',
    nftAirdropRule2: '0.2 SOL दान करने पर = 1 NFT एयरड्रॉप',
    nftAirdropRule3: '20,000 MINIDOGE दान करने पर = 1 NFT एयरड्रॉप',
  
    // Voting Rights Rules
    votingRightsRules: 'वोटिंग अधिकार नियम',
    votingRightsRule1: 'बेसिक वोट: किसी भी दान राशि के लिए 1 बेसिक वोट मिलेगा',
    votingRightsRule2: 'अतिरिक्त वोट: हर 5 NFT कोटा के लिए 1 अतिरिक्त वोट मिलेगा',
    votingRightsRule3: 'प्रत्येक वॉलेट के लिए अधिकतम 4 वोट (1 बेसिक + 3 अतिरिक्त)',
  
    // Voting Rights Examples
    votingRightsExamples: 'वोटिंग अधिकार उदाहरण',
    votingExample1: '2 NFT कोटा दान करने पर = 1 वोट (बेसिक)',
    votingExample2: '6 NFT कोटा दान करने पर = 2 वोट (1 बेसिक + 1 अतिरिक्त)',
    votingExample3: '16 NFT कोटा दान करने पर = 4 वोट (1 बेसिक + 3 अतिरिक्त, अधिकतम सीमा)',
  
    // Participation Process
    participationProcess: 'भागीदारी प्रक्रिया',
    processStep1: '$SOL, $USDT, $USDC, $MINIDOGE में से दान का चयन करें',
    processStep2: 'फाउंडेशन SOL वॉलेट पते पर ट्रांसफर करें:',
    processStep3: 'लेन-देन का स्क्रीनशॉट सेव करें',
    processStep4: 'टेलीग्राम एडमिन से संपर्क करें',
    processStep4Extra: 'ट्रांसफर प्रमाण जमा करें, सत्यापन के बाद फाउंडेशन ग्रुप में शामिल हों',
  
    // Notes
    notes: 'नोट्स',
    note1: 'दान राशि पर कोई सीमा नहीं है, लेकिन वोटिंग अधिकारों पर सीमा है',
    note2: 'दान के बाद भविष्य के NFT एयरड्रॉप्स के लिए स्वचालित रूप से योग्य हो जाएंगे',
    note3: 'एयरड्रॉप का विशिष्ट समय बाद में घोषित किया जाएगा',
    note4: 'फाउंडेशन के पास अंतिम व्याख्या का अधिकार है',
  
    // Governance Modal
    modalGovernanceTitle: 'फाउंडेशन शासन प्रणाली',
    governanceMechanism: 'शासन तंत्र',
    governanceRule1: 'प्रस्ताव मतदान को वैध बनाने के लिए कुल मतदाता भागीदारी 30% से अधिक होनी चाहिए',
    governanceRule2: 'महत्वपूर्ण निर्णयों के लिए कुल मतदाता भागीदारी 50% से अधिक होनी चाहिए',
    governanceRule3: 'प्रस्तावों को पास करने के लिए 2/3 वोट की आवश्यकता होती है',
    governanceRule4: 'फाउंडेशन की मुख्य टीम के पास 20% शासन भार है, और समुदाय मतदान का 80% शासन भार है',
  
    // Proposal Rules
    proposalRules: 'प्रस्ताव नियम',
    proposalRule1: 'प्रस्ताव शुरू करने के लिए 4 वोटिंग अधिकार की आवश्यकता है',
    proposalRule2: 'प्रस्ताव को 3 विभिन्न वोटिंग अधिकार धारकों से समर्थन की आवश्यकता है',
    proposalRule3: 'प्रत्येक सप्ताह में अधिकतम 2 प्रस्ताव वोट',
    proposalRule4: 'सामान्य मतदान अवधि 72 घंटे है',
  
    // Buttons
    rulesButton: 'नियम',
    governanceButton: 'शासन',
  
    // Table Headers
    numberHeader: 'सं.',
    nftRightsHeader: 'NFT अधिकार',
    votingRightsHeader: 'वोटिंग अधिकार',
    walletAddressHeader: 'वॉलेट पता',
    lastDonationHeader: 'अंतिम दान',
    totalDonationHeader: 'कुल दान'
  };
  