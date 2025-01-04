export default {
  title: 'Membros da Fundação',
  date: 'Data',
  amount: 'Valor',
  donor: 'Doador',
  purpose: 'Propósito',
  status: 'Status',
  total: 'Total de {{total}} registros',
  
  // Header
  daoTitle: 'DAO',
  governanceTitle: 'Governança',
  
  // Error messages
  loadError: 'Falha ao carregar',
  invalidPublicKey: 'Endereço da fundação inválido',
  
  // Stats
  totalMembers: 'Total de Membros',
  totalNftAirdrops: 'Total de NFT Airdrops',
  totalVotes: 'Total de Votos',

  // Rules Modal
  rulesTitle: 'Regras de Participação na Fundação',
  importantNotice: '<span class="text-[#FFAC03] font-bold">Aviso Importante: </span>Por favor, use um endereço de carteira pessoal para doação, não use endereço de exchange. O airdrop de NFT será vinculado ao endereço da carteira e não poderá ser alterado posteriormente.',
  
  // NFT Airdrop Rules
  nftAirdropRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Regras do Airdrop NFT</span>',
  recommended: '',
  nftAirdropRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Doação de <span class="text-[#FFAC03] font-medium">50 USD</span> ou <span class="text-[#9945FF] font-medium">0.2 SOL</span> ou <span class="text-[#FFAC03] font-medium">10,000 MINIDOGE</span> = 1 NFT Airdrop</div>',
  nftAirdropRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Os primeiros <span class="text-[#FFAC03] font-medium">100</span> endereços recebem <span class="text-[#FFAC03] font-medium">2</span> NFT Airdrops adicionais</div>',
  nftAirdropRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Endereços <span class="text-[#FFAC03] font-medium">101-500</span> recebem <span class="text-[#FFAC03] font-medium">1</span> NFT Airdrop adicional</div>',

  // Voting Rights Rules
  votingRightsRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Regras de Direito a Voto</span>',
  votingRightsRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Voto básico: Posse de <span class="text-[#FFAC03] font-medium">1</span> ou mais NFT Airdrops para <span class="text-[#FFAC03] font-medium">1</span> voto básico</div>',
  votingRightsRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Votos adicionais: Cada <span class="text-[#FFAC03] font-medium">5</span> NFT Airdrops dão <span class="text-[#FFAC03] font-medium">1</span> voto adicional</div>',
  votingRightsRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Máximo de <span class="text-[#FFAC03] font-medium">5</span> votos por carteira (<span class="text-[#FFAC03] font-medium">1</span> voto básico + <span class="text-[#FFAC03] font-medium">4</span> votos adicionais)</div>',

  // Voting Rights Examples
  votingRightsExamples: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Exemplos de Direito a Voto</span>',
  votingExample1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Posse de <span class="text-[#FFAC03] font-medium">2</span> NFT Airdrops = <span class="text-[#FFAC03] font-medium">1</span> voto (básico)</div>',
  votingExample2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Posse de <span class="text-[#FFAC03] font-medium">6</span> NFT Airdrops = <span class="text-[#FFAC03] font-medium">2</span> votos (<span class="text-[#FFAC03] font-medium">1</span> voto básico + <span class="text-[#FFAC03] font-medium">1</span> voto adicional)</div>',
  votingExample3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Posse de <span class="text-[#FFAC03] font-medium">20</span> NFT Airdrops = <span class="text-[#FFAC03] font-medium">5</span> votos (<span class="text-[#FFAC03] font-medium">1</span> voto básico + <span class="text-[#FFAC03] font-medium">4</span> votos adicionais, limite atingido)</div>',

  // Participation Process
  participationProcess: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Processo de Participação</span>',
  processStep1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> Escolha <span class="text-[#9945FF] font-medium">$SOL</span>, <span class="text-[#26A17B] font-medium">$USDT</span>, <span class="text-[#2785CA] font-medium">$USDC</span> ou <span class="text-[#FFAC03] font-medium">$MINIDOGE</span> para doação</div>',
  processStep2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> Transfira para o endereço SOL da fundação:</div>',
  processStep3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> Salve uma captura de tela ou vídeo da transação</div>',
  processStep4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> Contate o administrador do Telegram (@xxxx) para participar</div>',
  processStep4Extra: '',

  // Notes
  notes: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Notas</span>',
  note1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Sem limite para valor de doação, mas direitos de voto são limitados</div>',
  note2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Qualificação automática para futuros NFT Airdrops após doação</div>',
  note3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>NFT será lançado oficialmente após $MINIDOGE atingir capitalização de mercado de 50M+</div>',
  note4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>As regras da fundação podem ser ajustadas através de decisões da fundação e votação. As regras atuais são apenas para referência</div>',

  // Governance Modal
  modalGovernanceTitle: 'Sistema de Governança da Fundação',
  governanceMechanism: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Mecanismo de Governança</span>',
  governanceRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Votações de propostas requerem <span class="text-[#FFAC03] font-medium">>30%</span> de participação total dos votantes para validade</div>',
  governanceRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Decisões importantes requerem <span class="text-[#FFAC03] font-medium">>50%</span> de participação total dos votantes</div>',
  governanceRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Propostas requerem <span class="text-[#FFAC03] font-medium">>2/3</span> de aprovação para serem adotadas</div>',
  governanceRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Equipe principal da fundação tem <span class="text-[#FFAC03] font-medium">20%</span> de peso na governança, voto da comunidade tem <span class="text-[#FFAC03] font-medium">80%</span> de peso</div>',

  // Proposal Rules
  proposalRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Regras de Proposta</span>',
  proposalRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">5</span> direitos de voto necessários para submeter uma proposta</div>',
  proposalRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Proposta requer assinatura conjunta de <span class="text-[#FFAC03] font-medium">3</span> diferentes detentores de direito a voto</div>',
  proposalRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Máximo de <span class="text-[#FFAC03] font-medium">2</span> votações de proposta por semana</div>',
  proposalRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Tempo regular de votação é de <span class="text-[#FFAC03] font-medium">72</span> horas</div>',

  // Buttons
  rulesButton: 'Regras',
  governanceButton: 'Governança',

  // Table Headers
  numberHeader: 'Nº',
  nftRightsHeader: 'NFT Airdrop',
  votingRightsHeader: 'Votos',
  walletAddressHeader: 'Endereço da Carteira (Endereços de exchange não suportados)',
  lastDonationHeader: 'Última Doação',
  totalDonationHeader: 'Doação Total'
}; 