import Router from '@/router'
// import GoogleAnalytics from './util/GoogleAnalytics'
import Layout from '@/layout'
import { Footer } from '@/layout/Footer'
import { useEffect, useState } from 'react'
import dataHook from '@/config/data'

/**
 * 应用程序主组件
 * 负责初始化数据、管理加载状态和渲染主布局
 */
export default function App() {
  // 状态管理
  const [data, setData] = useState<Record<string, any>>({}) // 应用全局数据
  const [isLoading, setIsLoading] = useState(true) // 加载状态
  const [isVisible, setIsVisible] = useState(false) // 页面可见性状态

  /**
   * 初始化应用数据
   * 使用 useEffect 确保只在客户端执行一次
   */
  useEffect(() => {
    const init = async () => {
      try {
        // 获取应用配置数据
        const appData = await dataHook()
        setData(appData)
      } finally {
        // 完成加载状态
        setIsLoading(false)
        // 添加短暂延迟以确保平滑过渡
        setTimeout(() => {
          setIsVisible(true)
        }, 50)
      }
    }

    init()
  }, [])

  // 加载状态时返回空内容
  if (isLoading) {
    return null
  }

  return (
    <div
      className={`
        min-h-screen 
        w-full 
        max-w-[100vw] 
        overflow-x-hidden 
        flex 
        flex-col 
        relative 
        text-content 
        text-white 
        transition-opacity 
        duration-300
        ${data.background?.pattern || ''} 
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {/* 背景图层 */}
      <div className="w-full h-screen fixed top-0 left-0 -z-20 max-w-[100vw] overflow-x-hidden">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: data.background?.custom
              ? `url(${data.background.custom})`
              : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            maxWidth: '100vw',
            overflowX: 'hidden',
          }}
        />
      </div>

      {/* 背景颜色遮罩 */}
      <div
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={{
          background: data.background?.color || 'transparent',
        }}
      />

      {/* Google Analytics 跟踪 */}
      {/* <GoogleAnalytics /> */}

      {/* 主要内容区域 */}
      <div className="flex flex-col flex-grow">
        <Layout data={data}>
          <Router data={data} />
        </Layout>
      </div>

      {/* 页脚区域 */}
      <footer className="relative z-10">
        <div className="w-full max-w-screen-xl mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  )
}
