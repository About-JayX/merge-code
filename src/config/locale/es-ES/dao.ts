export default {
    title: 'Miembros de la Fundación',
    date: 'Fecha',
    amount: 'Cantidad',
    donor: 'Donante',
    purpose: 'Propósito',
    status: 'Estado',
    total: 'Total {{total}} entradas',
  
    // Header
    daoTitle: 'DAO',
    governanceTitle: 'Gobernanza',
  
    // Error messages
    loadError: 'Error al cargar',
    invalidPublicKey: 'Dirección de fundación inválida',
  
    // Stats
    totalMembers: 'Miembros totales',
    totalNftAirdrops: 'Total NFT Airdrops',
    totalVotes: 'Derechos de voto totales',
  
    // Rules Modal
    rulesTitle: 'Reglas de participación en la fundación',
    importantNotice: '<span class="text-[#FFAC03] font-bold">Aviso importante: </span>Por favor, utilice una dirección de billetera personal para la donación, no una dirección de exchange. El airdrop NFT estará vinculado a la dirección de la billetera y no se podrá modificar posteriormente.',
  
    // NFT Airdrop Rules
    nftAirdropRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Reglas de Airdrop NFT</span>',
    recommended: '',
    nftAirdropRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Donación de <span class="text-[#FFAC03] font-medium">50 USD</span> o <span class="text-[#9945FF] font-medium">0.2 SOL</span> o <span class="text-[#FFAC03] font-medium">20,000 MINIDOGE</span> = 1 NFT Airdrop</div>',
    nftAirdropRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Las primeras <span class="text-[#FFAC03] font-medium">100</span> direcciones reciben <span class="text-[#FFAC03] font-medium">2</span> NFT Airdrops adicionales</div>',
    nftAirdropRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Las direcciones <span class="text-[#FFAC03] font-medium">101-500</span> reciben <span class="text-[#FFAC03] font-medium">1</span> NFT Airdrop adicional</div>',
  
    // Voting Rights Rules
    votingRightsRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Reglas de derechos de voto</span>',
    votingRightsRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Derecho de voto básico: Posesión de <span class="text-[#FFAC03] font-medium">1</span> o más NFT Airdrops para <span class="text-[#FFAC03] font-medium">1</span> voto básico</div>',
    votingRightsRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Derechos de voto adicionales: Cada <span class="text-[#FFAC03] font-medium">5</span> NFT Airdrops otorgan <span class="text-[#FFAC03] font-medium">1</span> voto adicional</div>',
    votingRightsRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Máximo <span class="text-[#FFAC03] font-medium">5</span> votos por billetera (<span class="text-[#FFAC03] font-medium">1</span> voto básico + <span class="text-[#FFAC03] font-medium">4</span> votos adicionales)</div>',
  
    // Voting Rights Examples
    votingRightsExamples: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Ejemplos de derechos de voto</span>',
    votingExample1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Posesión de <span class="text-[#FFAC03] font-medium">2</span> NFT Airdrops = <span class="text-[#FFAC03] font-medium">1</span> voto (básico)</div>',
    votingExample2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Posesión de <span class="text-[#FFAC03] font-medium">6</span> NFT Airdrops = <span class="text-[#FFAC03] font-medium">2</span> votos (<span class="text-[#FFAC03] font-medium">1</span> voto básico + <span class="text-[#FFAC03] font-medium">1</span> voto adicional)</div>',
    votingExample3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Posesión de <span class="text-[#FFAC03] font-medium">20</span> NFT Airdrops = <span class="text-[#FFAC03] font-medium">5</span> votos (<span class="text-[#FFAC03] font-medium">1</span> voto básico + <span class="text-[#FFAC03] font-medium">4</span> votos adicionales, límite alcanzado)</div>',
  
    // Participation Process
    participationProcess: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Proceso de participación</span>',
    processStep1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> Elija <span class="text-[#9945FF] font-medium">$SOL</span>, <span class="text-[#26A17B] font-medium">$USDT</span>, <span class="text-[#2785CA] font-medium">$USDC</span> o <span class="text-[#FFAC03] font-medium">$MINIDOGE</span> para la donación</div>',
    processStep2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> Transferencia a la dirección SOL de la fundación:</div>',
    processStep3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> Guardar una captura de pantalla o video de la transacción</div>',
    processStep4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> Contactar al administrador de Telegram (@xxxx) para unirse</div>',
    processStep4Extra: '',
  
    // Notes
    notes: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Notas</span>',
    note1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Sin límite en el monto de la donación, pero los derechos de voto están limitados</div>',
    note2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Calificación automática para futuros NFT Airdrops después de la donación</div>',
    note3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>El NFT se lanzará oficialmente después de que $MINIDOGE alcance una capitalización de mercado de 50M+</div>',
    note4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Las reglas de la fundación pueden ajustarse mediante decisiones de la fundación y votaciones. Las reglas actuales son solo para referencia</div>',
  
    // Governance Modal
    modalGovernanceTitle: 'Sistema de gobernanza de la fundación',
    governanceMechanism: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Mecanismo de gobernanza</span>',
    governanceRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Las votaciones de propuestas requieren <span class="text-[#FFAC03] font-medium">>30%</span> de participación total de votantes para ser válidas</div>',
    governanceRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Las decisiones importantes requieren <span class="text-[#FFAC03] font-medium">>50%</span> de participación total de votantes</div>',
    governanceRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Las propuestas requieren <span class="text-[#FFAC03] font-medium">>2/3</span> de aprobación para ser adoptadas</div>',
    governanceRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>El equipo principal de la fundación tiene <span class="text-[#FFAC03] font-medium">20%</span> de peso en la gobernanza, el voto comunitario tiene <span class="text-[#FFAC03] font-medium">80%</span> de peso</div>',
  
    // Proposal Rules
    proposalRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Reglas de propuesta</span>',
    proposalRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">5</span> derechos de voto requeridos para enviar una propuesta</div>',
    proposalRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>La propuesta requiere la firma conjunta de <span class="text-[#FFAC03] font-medium">3</span> titulares diferentes de derechos de voto</div>',
    proposalRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Máximo <span class="text-[#FFAC03] font-medium">2</span> votaciones de propuesta por semana</div>',
    proposalRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>El tiempo regular de votación es de <span class="text-[#FFAC03] font-medium">72</span> horas</div>',
  
    // Buttons
    rulesButton: 'Reglas',
    governanceButton: 'Gobernanza',
  
    // Table Headers
    numberHeader: 'N°',
    nftRightsHeader: 'NFT Airdrop',
    votingRightsHeader: 'Votos',
    walletAddressHeader: 'Dirección de billetera (No se admiten direcciones de exchange)',
    lastDonationHeader: 'Última donación',
    totalDonationHeader: 'Donación total'
  };
  