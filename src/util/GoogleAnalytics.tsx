import { useEffect } from 'react'

const GoogleAnalytics = () => {
  const GA_MEASUREMENT_ID = 'G-ZYZV0X1GZX' // 替换为您的 Google Analytics ID

  useEffect(() => {
    // 动态加载 gtag.js 脚本
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    script.async = true
    document.head.appendChild(script)

    // 初始化 Google Analytics
    script.onload = () => {
      window.dataLayer = window.dataLayer || []
      function gtag(...args: (string | Date)[]) {
        window.dataLayer.push(args)
      }
      console.log(window.dataLayer, ' window.dataLayer')

      gtag('js', new Date())
      gtag('config', GA_MEASUREMENT_ID)
    }

    // 清理脚本
    return () => {
      document.head.removeChild(script)
    }
  }, [GA_MEASUREMENT_ID])

  return null
}

export default GoogleAnalytics
