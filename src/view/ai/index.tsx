import React, { useEffect, useState } from 'react'
import { Typography, Spin } from 'antd'
import { useTranslation } from 'react-i18next'
import { RobotOutlined, LineChartOutlined, TranslationOutlined, RocketOutlined } from '@ant-design/icons'
import MarketAnalysis from '@/components/domain/sections/MarketAnalysis'
import AiAnalysis from '@/components/domain/sections/AiAnalysis'

const { Title } = Typography

const FeatureCard: React.FC<{
  icon: React.ReactNode
  title: string
  description: string
}> = ({ icon, title, description }) => (
  <div className="bg-white/[0.03] hover:bg-white/[0.06] transition-colors rounded-lg p-4 space-y-3">
    <div className="text-[#FFAC03] text-2xl">{icon}</div>
    <h3 className="text-lg font-medium text-white">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
)

const AiPage: React.FC = () => {
  const { t } = useTranslation()
  const [marketData, setMarketData] = useState<any>(null)
  const [analysisData, setAnalysisData] = useState<any>(null)
  const [monitorData, setMonitorData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [isLoadingAnalysis, setIsLoadingAnalysis] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // 获取 AI 分析数据的函数
  const fetchAnalysisData = async () => {
    setIsLoadingAnalysis(true)
    try {
      const analysisResponse = await fetch('https://ai.mini-doge.com/analysis')
      if (!analysisResponse.ok) {
        throw new Error(`Analysis data HTTP error! status: ${analysisResponse.status}`)
      }
      const analysisData = await analysisResponse.json()
      console.log('Received analysis data:', analysisData)
      setAnalysisData(analysisData)
    } catch (analysisError) {
      console.error('Failed to fetch analysis data:', analysisError)
    } finally {
      setIsLoadingAnalysis(false)
    }
  }

  // 获取市场数据的函数
  const fetchMarketData = async () => {
    try {
      setLoading(true)
      setError(null)
      console.log('Fetching market data...')
      
      // 同时获取所有需要的数据
      const [marketResponse, monitorResponse] = await Promise.all([
        fetch('https://ai.mini-doge.com/predict'),
        fetch('https://ai.mini-doge.com/monitor')
      ])

      if (!marketResponse.ok) {
        throw new Error(`Market data HTTP error! status: ${marketResponse.status}`)
      }
      if (!monitorResponse.ok) {
        throw new Error(`Monitor data HTTP error! status: ${monitorResponse.status}`)
      }

      const marketData = await marketResponse.json()
      const monitorData = await monitorResponse.json()

      console.log('Received market data:', marketData)
      console.log('Received monitor data:', monitorData)

      setMarketData(marketData)
      setMonitorData(monitorData)

      // 在市场数据更新后，也更新 AI 分析数据
      fetchAnalysisData()
    } catch (error) {
      console.error('Failed to fetch market data:', error)
      setError(error instanceof Error ? error.message : 'Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMarketData()
  }, [])

  const features = [
    {
      icon: <RobotOutlined />,
      title: t('ai.features.market.title'),
      description: t('ai.features.market.description')
    },
    {
      icon: <LineChartOutlined />,
      title: t('ai.features.analysis.title'),
      description: t('ai.features.analysis.description')
    },
    {
      icon: <RocketOutlined />,
      title: t('ai.features.vision.title'),
      description: t('ai.features.vision.description')
    }
  ]

  return (
    <div className="container mx-auto sm:px-4 py-4 sm:py-8 space-y-4 sm:space-y-8">
      <div className="flex justify-center mb-4 sm:mb-12">
        <h1 className="flex items-baseline justify-center gap-3 text-xl sm:text-2xl md:text-3xl text-[#FFAC03]">
          <span className="font-['Striker']">{t('ai.aiTitle')}</span>
          <span className="text-[1.25em] font-['Striker']">
            {t('ai.innovationTitle')}
          </span>
        </h1>
      </div>

      <div className="grid sm:flex gap-2 sm:flex-wrap items-center justify-items-center sm:justify-between">
        <Title level={4} className="!mb-0 !text-white">
          {t('ai.title')}
        </Title>
      </div>

      <div className="bg-white/5 rounded-lg p-4 sm:p-6 space-y-4">
        <div className="text-base text-white/80">
          {t('ai.description')}
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white/5 rounded-lg p-4 sm:p-6">
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <Spin size="large" />
            </div>
          ) : error ? (
            <div className="text-red-500 text-center py-4">{error}</div>
          ) : marketData && monitorData ? (
            <MarketAnalysis 
              data={marketData} 
              monitorData={monitorData} 
              onRefreshData={fetchMarketData}
            />
          ) : (
            <div className="text-white/50 text-center py-4">No market data available</div>
          )}
        </div>

        {!loading && (
          <div className="bg-white/5 rounded-lg p-4 sm:p-6">
            <AiAnalysis data={analysisData} loading={isLoadingAnalysis} />
          </div>
        )}
      </div>
    </div>
  )
}

export default AiPage 