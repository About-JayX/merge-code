import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// 声明全局 gtag 函数类型
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

const GoogleAnalytics = () => {
  const location = useLocation()
  const GA_MEASUREMENT_ID = 'G-ZYZV0X1GZX'

  useEffect(() => {
    // 动态加载 gtag.js 脚本
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    script.async = true
    document.head.appendChild(script)

    // 初始化 Google Analytics
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      console.log('Google Analytics Event:', arguments)
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA_MEASUREMENT_ID)
    console.log('Google Analytics Initialized with ID:', GA_MEASUREMENT_ID)

    // 清理脚本
    return () => {
      const script = document.querySelector(
        `script[src="https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`
      )
      script && document.head.removeChild(script)
    }
  }, [])

  // 路由变化时发送页面浏览事件
  useEffect(() => {
    window.gtag('event', 'page_view', {
      page_path: location.pathname,
      page_location: window.location.href,
      page_title: document.title,
    })
    console.log('Page view event sent:', location.pathname)
  }, [location])

  return null
}

export default GoogleAnalytics
