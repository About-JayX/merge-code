export default {
    title: 'Stiftungsmitglieder',
    date: 'Datum',
    amount: 'Betrag',
    donor: 'Spender',
    purpose: 'Zweck',
    status: 'Status',
    total: 'Insgesamt {{total}} Einträge',
  
    // Header
    daoTitle: 'DAO',
    governanceTitle: 'Governance',
  
    // Error messages
    loadError: 'Laden fehlgeschlagen',
    invalidPublicKey: 'Ungültige Stiftungsadresse',
  
    // Stats
    totalMembers: 'Gesamtmitglieder',
    totalNftAirdrops: 'Gesamt NFT Airdrops',
    totalVotes: 'Gesamte Stimmrechte',
  
    // Rules Modal
    rulesTitle: 'Stiftungs-Teilnahmeregeln',
    importantNotice: '<span class="text-[#FFAC03] font-bold">Wichtiger Hinweis: </span>Bitte verwenden Sie für die Spende eine persönliche Wallet-Adresse, keine Börsen-Adresse. Der NFT Airdrop wird an die Wallet-Adresse gebunden und kann später nicht geändert werden.',
  
    // NFT Airdrop Rules
    nftAirdropRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">NFT Airdrop Regeln</span>',
    recommended: '',
    nftAirdropRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Spende von <span class="text-[#FFAC03] font-medium">50 USD</span> oder <span class="text-[#9945FF] font-medium">0.2 SOL</span> oder <span class="text-[#FFAC03] font-medium">20,000 MINIDOGE</span> = 1 NFT Airdrop</div>',
    nftAirdropRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Die ersten <span class="text-[#FFAC03] font-medium">100</span> Adressen erhalten zusätzlich <span class="text-[#FFAC03] font-medium">2</span> NFT Airdrops</div>',
    nftAirdropRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Adressen <span class="text-[#FFAC03] font-medium">101-500</span> erhalten zusätzlich <span class="text-[#FFAC03] font-medium">1</span> NFT Airdrop</div>',
  
    // Voting Rights Rules
    votingRightsRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Stimmrechtsregeln</span>',
    votingRightsRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Grundstimmrecht: Besitz von <span class="text-[#FFAC03] font-medium">1</span> oder mehr NFT Airdrops für <span class="text-[#FFAC03] font-medium">1</span> Grundstimme</div>',
    votingRightsRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Zusätzliche Stimmrechte: Alle <span class="text-[#FFAC03] font-medium">5</span> NFT Airdrops ergeben <span class="text-[#FFAC03] font-medium">1</span> zusätzliche Stimme</div>',
    votingRightsRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Maximal <span class="text-[#FFAC03] font-medium">5</span> Stimmen pro Wallet (<span class="text-[#FFAC03] font-medium">1</span> Grundstimme + <span class="text-[#FFAC03] font-medium">4</span> zusätzliche Stimmen)</div>',
  
    // Voting Rights Examples
    votingRightsExamples: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Stimmrechtsbeispiele</span>',
    votingExample1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Besitz von <span class="text-[#FFAC03] font-medium">2</span> NFT Airdrops = <span class="text-[#FFAC03] font-medium">1</span> Stimme (Grundstimme)</div>',
    votingExample2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Besitz von <span class="text-[#FFAC03] font-medium">6</span> NFT Airdrops = <span class="text-[#FFAC03] font-medium">2</span> Stimmen (<span class="text-[#FFAC03] font-medium">1</span> Grundstimme + <span class="text-[#FFAC03] font-medium">1</span> zusätzliche Stimme)</div>',
    votingExample3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Besitz von <span class="text-[#FFAC03] font-medium">20</span> NFT Airdrops = <span class="text-[#FFAC03] font-medium">5</span> Stimmen (<span class="text-[#FFAC03] font-medium">1</span> Grundstimme + <span class="text-[#FFAC03] font-medium">4</span> zusätzliche Stimmen, Limit erreicht)</div>',
  
    // Participation Process
    participationProcess: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Teilnahmeprozess</span>',
    processStep1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> Wählen Sie <span class="text-[#9945FF] font-medium">$SOL</span>, <span class="text-[#26A17B] font-medium">$USDT</span>, <span class="text-[#2785CA] font-medium">$USDC</span> oder <span class="text-[#FFAC03] font-medium">$MINIDOGE</span> für die Spende</div>',
    processStep2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> Überweisung an die SOL Wallet-Adresse der Stiftung:</div>',
    processStep3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> Screenshot oder Video der Transaktion speichern</div>',
    processStep4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> Telegram-Admin (@xxxx) für Beitritt kontaktieren</div>',
    processStep4Extra: '',
  
    // Notes
    notes: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Hinweise</span>',
    note1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Keine Begrenzung des Spendenbetrags, aber Stimmrechte sind begrenzt</div>',
    note2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Automatische Qualifikation für zukünftige NFT Airdrops nach der Spende</div>',
    note3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>NFT wird offiziell gestartet, nachdem $MINIDOGE eine Marktkapitalisierung von 50M+ erreicht</div>',
    note4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Stiftungsregeln können durch Stiftungsentscheidungen und Abstimmungen angepasst werden. Aktuelle Regeln dienen nur als Referenz</div>',
  
    // Governance Modal
    modalGovernanceTitle: 'Stiftungs-Governance-System',
    governanceMechanism: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Governance-Mechanismus</span>',
    governanceRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Vorschlagsabstimmungen erfordern <span class="text-[#FFAC03] font-medium">>30%</span> Gesamtwählerbeteiligung für Gültigkeit</div>',
    governanceRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Wichtige Entscheidungen erfordern <span class="text-[#FFAC03] font-medium">>50%</span> Gesamtwählerbeteiligung</div>',
    governanceRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Vorschläge benötigen <span class="text-[#FFAC03] font-medium">>2/3</span> Zustimmung für Annahme</div>',
    governanceRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Stiftungs-Kernteam hat <span class="text-[#FFAC03] font-medium">20%</span> Governance-Gewicht, Community-Abstimmung hat <span class="text-[#FFAC03] font-medium">80%</span> Gewicht</div>',
  
    // Proposal Rules
    proposalRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Vorschlagsregeln</span>',
    proposalRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">5</span> Stimmrechte erforderlich für Vorschlagseinreichung</div>',
    proposalRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Vorschlag erfordert Mitzeichnung von <span class="text-[#FFAC03] font-medium">3</span> verschiedenen Stimmrechtsinhabern</div>',
    proposalRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Maximal <span class="text-[#FFAC03] font-medium">2</span> Vorschlagsabstimmungen pro Woche</div>',
    proposalRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Reguläre Abstimmungszeit beträgt <span class="text-[#FFAC03] font-medium">72</span> Stunden</div>',
  
    // Buttons
    rulesButton: 'Regeln',
    governanceButton: 'Governance',
  
    // Table Headers
    numberHeader: 'Nr.',
    nftRightsHeader: 'NFT Airdrop',
    votingRightsHeader: 'Stimmen',
    walletAddressHeader: 'Wallet-Adresse (Keine Börsen-Adressen unterstützt)',
    lastDonationHeader: 'Letzte Spende',
    totalDonationHeader: 'Gesamtspende'
  };
  