import { donaMap, NFT_VOTE } from '@/config/calcParams'

export const copy = async (url: string, onSuccess?: () => void) => {
  const inviteLink = url

  try {
    await navigator.clipboard.writeText(inviteLink)
    onSuccess && onSuccess()
  } catch (_) {
    const textArea = document.createElement('textarea')
    textArea.value = inviteLink
    textArea.style.position = 'fixed'
    textArea.style.left = '-9999px'
    document.body.appendChild(textArea)
    textArea.select()
    try {
      document.execCommand('copy')
      onSuccess && onSuccess()
    } catch (_) {
      return
    }
    document.body.removeChild(textArea)
  }
}

export const SEO = ({
  title = '',
  icon = '',
}: {
  title?: string
  icon?: string
}) => {
  document.title = title
  let favicon: any = document.querySelector('link[rel="icon"]')
  if (favicon) {
    // 如果存在 favicon，直接修改 href
    favicon.setAttribute('href', icon)
  } else {
    // 如果不存在，创建新的 favicon
    favicon = document.createElement('link')
    favicon.rel = 'icon'
    favicon.href = icon
    document.head.appendChild(favicon)
  }
}

interface IdonationSummary {
  MINIDOGE: number | string
  SOL: number | string
  USDC: number | string
  USDT: number | string
  [key: string]: number | string
}

export const calc_VOTE_NFT = (
  object: IdonationSummary,
  rank?: number
): { votes: number; nftCount: number } => {
  let nftCount = 0 // 总 NFT 数量

  // 计算每种代币可获得的NFT数量
  const string_number = (value: any): number => {
    return typeof value === 'number' && !isNaN(value)
      ? value
      : parseFloat(value)
  }

  // USDT/USDC: 50 USD = 1 NFT
  const usdtAmount = string_number(object.USDT || 0)
  const usdcAmount = string_number(object.USDC || 0)
  const usdTotal = usdtAmount + usdcAmount
  nftCount += Math.floor(usdTotal / donaMap.USDT)

  // SOL: 0.2 SOL = 1 NFT
  const solAmount = string_number(object.SOL || 0)
  nftCount += Math.floor(solAmount / donaMap.SOL)

  // MINIDOGE: 10,000 MINIDOGE = 1 NFT
  const minidogeAmount = string_number(object.MINIDOGE || 0)
  nftCount += Math.floor(minidogeAmount / donaMap.MINIDOGE)

  // 计算额外NFT奖励
  if (rank !== undefined) {
    if (rank <= 100) {
      nftCount += 2 // 前100名额外获得2个NFT
    } else if (rank <= 500) {
      nftCount += 1 // 101-500名额外获得1个NFT
    }
  }

  // 计算投票权
  let votes = 0
  // 基础票：持有1个以上NFT可获得1票
  if (nftCount >= 1) {
    votes = 1
  }
  // 额外票：每5个NFT获得1个额外票，最多4个额外票
  const additionalVotes = Math.floor(nftCount / 5)
  votes += Math.min(additionalVotes, 4)

  return { votes, nftCount }
}

export const isValidURL = (url: string) => {
  const regex = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/[^\s]*)?$/i
  return regex.test(url)
}
