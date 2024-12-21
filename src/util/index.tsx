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
