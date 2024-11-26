export const copy = async (
    url: string
  ) => {
    const inviteLink = url
  
    try {
      await navigator.clipboard.writeText(inviteLink)
    } catch (_) {
      const textArea = document.createElement('textarea')
      textArea.value = inviteLink
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      try {
        document.execCommand('copy')
      } catch (_) {
        return
      }
      document.body.removeChild(textArea)
    }
  }