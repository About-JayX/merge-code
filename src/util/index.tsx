import { donaMap, NFT_VOTE } from '@/config/calcParams'

export const copy = async (url: string, onSuccess?: () => void) => {
  const inviteLink = url

  try {
    await navigator.clipboard.writeText(inviteLink)
    onSuccess && onSuccess()
  } catch (_) {
    const textArea = document.createElement('textarea')
    textArea.value = inviteLink
    document.body.appendChild(textArea)
    // textArea.select();
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
  object: IdonationSummary
): { votes: number; nftCount: number } => {
  let votes = 0 // 总投票数
  let nftCount = 0 // 总 NFT 数量
  for (const key in object) {
    const string_number = (value: any): number => {
      return typeof value === 'number' && !isNaN(value)
        ? value
        : parseFloat(value)
    }
    const value = string_number(object[key])
    // 有任意捐赠获得投票数
    votes === 0 ? (value ? (votes += 1) : votes) : votes
    // 计算总获得的NFT总额
    const count = Math.floor(value / donaMap[key])
    nftCount += count
  }
  votes = votes + nftCount / NFT_VOTE > 4 ? 4 : votes
  
  return { votes, nftCount }
}
