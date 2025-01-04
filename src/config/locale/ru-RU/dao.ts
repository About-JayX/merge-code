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
  invalidPublicKey: 'Недействительный адрес фонда',
  
  // Stats
  totalMembers: 'Всего участников',
  totalNftAirdrops: 'Всего NFT аирдропов',
  totalVotes: 'Всего голосов',

  // Rules Modal
  rulesTitle: 'Правила участия в фонде',
  importantNotice: '<span class="text-[#FFAC03] font-bold">Важное уведомление：</span>Пожалуйста, используйте личный адрес кошелька для пожертвования. Не используйте адреса бирж. NFT аирдроп будет привязан к адресу кошелька и не может быть изменен позже.',
  
  // NFT Airdrop Rules
  nftAirdropRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Правила NFT аирдропа</span>',
  recommended: '',
  nftAirdropRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Пожертвование <span class="text-[#FFAC03] font-medium">50 USD</span> или <span class="text-[#9945FF] font-medium">0.2 SOL</span> или <span class="text-[#FFAC03] font-medium">10,000 MINIDOGE</span> = 1 NFT аирдроп</div>',
  nftAirdropRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Первые <span class="text-[#FFAC03] font-medium">100</span> адресов получат дополнительно <span class="text-[#FFAC03] font-medium">2</span> NFT аирдропа</div>',
  nftAirdropRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Адреса с <span class="text-[#FFAC03] font-medium">101-500</span> получат дополнительно <span class="text-[#FFAC03] font-medium">1</span> NFT аирдроп</div>',

  // Voting Rights Rules
  votingRightsRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Правила голосования</span>',
  votingRightsRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Базовое право голоса：<span class="text-[#FFAC03] font-medium">1</span> базовый голос при владении <span class="text-[#FFAC03] font-medium">1</span> или более NFT аирдропов</div>',
  votingRightsRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Дополнительные голоса：<span class="text-[#FFAC03] font-medium">1</span> дополнительный голос за каждые <span class="text-[#FFAC03] font-medium">5</span> NFT аирдропов</div>',
  votingRightsRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Максимум <span class="text-[#FFAC03] font-medium">5</span> голосов на кошелек（<span class="text-[#FFAC03] font-medium">1</span> базовый + <span class="text-[#FFAC03] font-medium">4</span> дополнительных）</div>',

  // Voting Rights Examples
  votingRightsExamples: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Примеры прав голоса</span>',
  votingExample1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">2</span> NFT аирдропа = <span class="text-[#FFAC03] font-medium">1</span> голос（базовый）</div>',
  votingExample2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">6</span> NFT аирдропов = <span class="text-[#FFAC03] font-medium">2</span> голоса（<span class="text-[#FFAC03] font-medium">1</span> базовый + <span class="text-[#FFAC03] font-medium">1</span> дополнительный）</div>',
  votingExample3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span><span class="text-[#FFAC03] font-medium">20</span> NFT аирдропов = <span class="text-[#FFAC03] font-medium">5</span> голосов（<span class="text-[#FFAC03] font-medium">1</span> базовый + <span class="text-[#FFAC03] font-medium">4</span> дополнительных, достигнут лимит）</div>',

  // Participation Process
  participationProcess: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Процесс участия</span>',
  processStep1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Выберите <span class="text-[#9945FF] font-medium">$SOL</span>, <span class="text-[#26A17B] font-medium">$USDT</span>, <span class="text-[#2785CA] font-medium">$USDC</span> или <span class="text-[#FFAC03] font-medium">$MINIDOGE</span> для пожертвования</div>',
  processStep2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Отправьте на SOL адрес фонда：</div>',
  processStep3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Сохраните скриншот или видео транзакции</div>',
  processStep4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Свяжитесь с администратором Telegram для присоединения к группе：{{telegramAdminLinks}}</div>',

  // Notes
  notes: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Примечания</span>',
  note1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Нет ограничений на сумму пожертвования, но есть лимит на права голоса</div>',
  note2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>После пожертвования вы автоматически получаете право на $MINIDOGE NFT аирдроп</div>',
  note3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>NFT будут официально выпущены после достижения $MINIDOGE капитализации в 50M+</div>',
  note4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Правила фонда могут быть скорректированы решением фонда и голосованием. Текущие правила приведены для справки</div>',

  // Governance Modal
  modalGovernanceTitle: 'Система управления фондом',
  governanceMechanism: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Механизм управления</span>',
  governanceRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Голосование по предложению действительно при участии <span class="text-[#FFAC03] font-medium">>30%</span> от общего числа голосующих</div>',
  governanceRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Важные решения требуют участия <span class="text-[#FFAC03] font-medium">>50%</span> от общего числа голосующих</div>',
  governanceRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Предложение принимается при <span class="text-[#FFAC03] font-medium">>2/3</span> голосов "за"</div>',
  governanceRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Основная команда фонда имеет <span class="text-[#FFAC03] font-medium">20%</span> веса в управлении, голосование сообщества - <span class="text-[#FFAC03] font-medium">80%</span></div>',

  // Proposal Rules
  proposalRules: '<span class="text-[#FFAC03] text-base font-bold opacity-50">Правила предложений</span>',
  proposalRule1: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Требуется <span class="text-[#FFAC03] font-medium">5</span> голосов для внесения предложения</div>',
  proposalRule2: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Предложение требует совместной подписи <span class="text-[#FFAC03] font-medium">3</span> разных держателей голосов</div>',
  proposalRule3: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Максимум <span class="text-[#FFAC03] font-medium">2</span> голосования по предложениям в неделю</div>',
  proposalRule4: '<div class="flex flex-wrap gap-1 sm:gap-2 text-sm opacity-85"><span class="text-[#FFAC03] font-medium">•</span>Обычный период голосования - <span class="text-[#FFAC03] font-medium">72</span> часа</div>',

  // Buttons
  rulesButton: 'Правила',
  governanceButton: 'Управление',

  // Table Headers
  numberHeader: 'Номер',
  nftRightsHeader: 'NFT аирдроп',
  votingRightsHeader: 'Голоса',
  walletAddressHeader: 'Адрес кошелька（не поддерживаются адреса бирж）',
  lastDonationHeader: 'Последнее пожертвование',
  totalDonationHeader: 'Общая сумма пожертвований'
}; 