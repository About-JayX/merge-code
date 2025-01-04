import React from 'react'
import { Spin, Result } from 'antd'
import { useTranslation } from 'react-i18next'

interface AiAnalysisData {
  content: {
    zh: string
    en: string
  }
  timestamp: number
}

interface AiAnalysisProps {
  data: AiAnalysisData | null
  loading?: boolean
}

const LoadingSection = () => (
  <div className="flex justify-center items-center py-8">
    <Spin size="large" />
  </div>
)

const AiAnalysis: React.FC<AiAnalysisProps> = ({ data, loading = false }) => {
  const { t, i18n } = useTranslation()
  const isChineseLanguage = i18n.language.startsWith('zh')

  // 如果正在加载，显示加载状态
  if (loading) {
    return <LoadingSection />
  }

  // 数据验证
  if (!data?.content?.zh || !data?.content?.en) {
    return (
      <Result
        status="warning"
        title={isChineseLanguage ? "暂无分析数据" : "No Analysis Data"}
        subTitle={
          isChineseLanguage
            ? "AI 分析数据正在生成中，请稍后再试" 
            : "AI analysis data is being generated, please try again later"
        }
      />
    )
  }

  const content = isChineseLanguage ? data.content.zh : data.content.en

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-[#FFAC03]">
        {t('ai.analysis.aiAnalysis.title')}
      </h2>
      <div className="whitespace-pre-line text-white/80 leading-relaxed">
        {content}
      </div>
    </div>
  )
}

export default AiAnalysis 