export default {
  title: 'Члены Фонда',
  date: 'Дата',
  amount: 'Сумма',
  donor: 'Донор',
  purpose: 'Цель',
  status: 'Статус',
  total: 'Всего {{total}} записей',
  
  // Header
  daoTitle: 'DAO',
  governanceTitle: 'Управление',
  
  // Error messages
  loadError: 'Ошибка загрузки',
  invalidPublicKey: 'Неверный адрес фонда',
  
  // Stats
  totalMembers: 'Всего участников',
  totalNftAirdrops: 'Всего NFT Airdrop',
  totalVotes: 'Всего прав голоса',

  // Rules Modal
  rulesTitle: 'Правила участия в фонде',
  importantNotice: '<span class="text-[#FFAC03] font-bold">Важное уведомление: </span>Пожалуйста, используйте личный адрес кошелька для пожертвования, не используйте адрес биржи. NFT Airdrop будет привязан к адресу кошелька и не может быть изменен позже.',
  
  // NFT Airdrop Rules
  nftAirdropRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Правила NFT Airdrop</span>',
  recommended: '',
  nftAirdropRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Пожертвование <span class="text-[#FFAC03] font-medium">50 USD</span> или <span class="text-[#9945FF] font-medium">0.2 SOL</span> или <span class="text-[#FFAC03] font-medium">10,000 MINIDOGE</span> = 1 NFT Airdrop</div>',
  nftAirdropRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Первые <span class="text-[#FFAC03] font-medium">100</span> адресов получают дополнительно <span class="text-[#FFAC03] font-medium">2</span> NFT Airdrop</div>',
  nftAirdropRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Адреса с <span class="text-[#FFAC03] font-medium">101-500</span> получают дополнительно <span class="text-[#FFAC03] font-medium">1</span> NFT Airdrop</div>',

  // Voting Rights Rules
  votingRightsRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Правила голосования</span>',
  votingRightsRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Базовое право голоса: Владение <span class="text-[#FFAC03] font-medium">1</span> или более NFT Airdrop для <span class="text-[#FFAC03] font-medium">1</span> базового голоса</div>',
  votingRightsRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Дополнительные голоса: Каждые <span class="text-[#FFAC03] font-medium">5</span> NFT Airdrop дают <span class="text-[#FFAC03] font-medium">1</span> дополнительный голос</div>',
  votingRightsRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Максимум <span class="text-[#FFAC03] font-medium">5</span> голосов на кошелек (<span class="text-[#FFAC03] font-medium">1</span> базовый + <span class="text-[#FFAC03] font-medium">4</span> дополнительных)</div>',

  // Voting Rights Examples
  votingRightsExamples: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Примеры прав голоса</span>',
  votingExample1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Владение <span class="text-[#FFAC03] font-medium">2</span> NFT Airdrop = <span class="text-[#FFAC03] font-medium">1</span> голос (базовый)</div>',
  votingExample2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Владение <span class="text-[#FFAC03] font-medium">6</span> NFT Airdrop = <span class="text-[#FFAC03] font-medium">2</span> голоса (<span class="text-[#FFAC03] font-medium">1</span> базовый + <span class="text-[#FFAC03] font-medium">1</span> дополнительный)</div>',
  votingExample3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Владение <span class="text-[#FFAC03] font-medium">20</span> NFT Airdrop = <span class="text-[#FFAC03] font-medium">5</span> голосов (<span class="text-[#FFAC03] font-medium">1</span> базовый + <span class="text-[#FFAC03] font-medium">4</span> дополнительных, достигнут лимит)</div>',

  // Participation Process
  participationProcess: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Процесс участия</span>',
  processStep1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> Выберите <span class="text-[#9945FF] font-medium">$SOL</span>, <span class="text-[#26A17B] font-medium">$USDT</span>, <span class="text-[#2785CA] font-medium">$USDC</span> или <span class="text-[#FFAC03] font-medium">$MINIDOGE</span> для пожертвования</div>',
  processStep2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> Перевод на SOL адрес фонда:</div>',
  processStep3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> Сохраните скриншот или видео транзакции</div>',
  processStep4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span> Свяжитесь с администратором Telegram (@xxxx) для участия</div>',
  processStep4Extra: '',

  // Notes
  notes: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Примечания</span>',
  note1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Нет ограничений на сумму пожертвования, но права голоса ограничены</div>',
  note2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Автоматическая квалификация для будущих NFT Airdrop после пожертвования</div>',
  note3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>NFT будет официально запущен после достижения $MINIDOGE рыночной капитализации в 50M+</div>',
  note4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Правила фонда могут быть скорректированы через решения фонда и голосование. Текущие правила только для справки</div>',

  // Governance Modal
  modalGovernanceTitle: 'Система управления фондом',
  governanceMechanism: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Механизм управления</span>',
  governanceRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Голосование по предложениям требует <span class="text-[#FFAC03] font-medium">>30%</span> участия от общего числа голосующих для действительности</div>',
  governanceRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Важные решения требуют <span class="text-[#FFAC03] font-medium">>50%</span> участия от общего числа голосующих</div>',
  governanceRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Предложения требуют <span class="text-[#FFAC03] font-medium">>2/3</span> одобрения для принятия</div>',
  governanceRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Основная команда фонда имеет <span class="text-[#FFAC03] font-medium">20%</span> веса в управлении, голосование сообщества имеет <span class="text-[#FFAC03] font-medium">80%</span> веса</div>',

  // Proposal Rules
  proposalRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Правила предложений</span>',
  proposalRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Требуется <span class="text-[#FFAC03] font-medium">5</span> прав голоса для подачи предложения</div>',
  proposalRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Предложение требует совместной подписи <span class="text-[#FFAC03] font-medium">3</span> разных держателей прав голоса</div>',
  proposalRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Максимум <span class="text-[#FFAC03] font-medium">2</span> голосования по предложениям в неделю</div>',
  proposalRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Обычное время голосования составляет <span class="text-[#FFAC03] font-medium">72</span> часа</div>',

  // Buttons
  rulesButton: 'Правила',
  governanceButton: 'Управление',

  // Table Headers
  numberHeader: '№',
  nftRightsHeader: 'NFT Airdrop',
  votingRightsHeader: 'Голоса',
  walletAddressHeader: 'Адрес кошелька (Адреса бирж не поддерживаются)',
  lastDonationHeader: 'Последнее пожертвование',
  totalDonationHeader: 'Общая сумма пожертвований'
}; 