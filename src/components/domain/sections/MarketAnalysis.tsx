import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { Card, Statistic, Row, Col, Progress, Modal, Button } from 'antd'
import { useTranslation } from 'react-i18next'
import { ArrowUpOutlined, ArrowDownOutlined, QuestionCircleOutlined } from '@ant-design/icons'

interface MarketData {
  price: number
  volume: {
    h1: number
    h6: number
    h24: number
  }
  priceChange: {
    m5: number
    h1: number
    h6: number
    h24: number
  }
  transactions: {
    buys: number
    sells: number
    total: number
  }
  indicators: {
    rsi: number
    sma: number
  }
}

interface MonitorData {
  balance: number
  timestamp: number
  nextUpdate: number
  remainingPredictions: number
}

interface Predictions {
  conservative: number
  optimistic: number
  viralCase: number
  confidence: number
}

interface MarketAnalysisProps {
  data: {
    market: MarketData
    predictions: {
      '1_day': Predictions
      '2_day': Predictions
    }
    growthPotential: {
      marketMomentum: number
      viralGrowthFactor: number
      explosionProbability: number
    }
  }
  monitorData: MonitorData
  onRefreshData?: () => void
}

const PredictionCard: React.FC<{
  title: string
  predictions: Predictions
  formatPrice: (price: number) => string
  formatGrowth: (value: number) => number
  t: (key: string) => string
}> = ({ title, predictions, formatPrice, formatGrowth, t }) => (
  <Card 
    title={title}
    className="bg-white/[0.03] h-full"
    styles={{
      header: { 
        color: '#FFAC03', 
        borderBottom: '1px solid rgba(255,255,255,0.1)' 
      }
    }}
  >
    <div className="space-y-4">
      <div>
        <div className="text-sm text-white/70 mb-1">{t('ai.analysis.predictions.conservative')}</div>
        <div className="text-lg text-[#52c41a]">${formatPrice(predictions.conservative)}</div>
      </div>
      <div>
        <div className="text-sm text-white/70 mb-1">{t('ai.analysis.predictions.optimistic')}</div>
        <div className="text-lg text-[#1890ff]">${formatPrice(predictions.optimistic)}</div>
      </div>
      <div>
        <div className="text-sm text-white/70 mb-1">{t('ai.analysis.predictions.viral')}</div>
        <div className="text-lg text-[#FFAC03]">${formatPrice(predictions.viralCase)}</div>
      </div>
      <div>
        <div className="text-sm text-white/70 mb-1">{t('ai.analysis.predictions.confidence')}</div>
        <Progress 
          percent={formatGrowth(predictions.confidence * 100)}
          strokeColor="#FFAC03"
          trailColor="rgba(255,255,255,0.1)"
        />
      </div>
    </div>
  </Card>
)

const IndicatorDescription: React.FC<{ t: (key: string) => string }> = ({ t }) => (
  <div className="space-y-6 text-white/80">
    <div>
      <h3 className="text-lg font-medium text-[#FFAC03] mb-2">{t('ai.analysis.indicators.description.rsi.title')}</h3>
      <p>{t('ai.analysis.indicators.description.rsi.description')}</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>0-30: {t('ai.analysis.rsi.oversold')}</li>
        <li>30-45: {t('ai.analysis.rsi.weak')}</li>
        <li>45-55: {t('ai.analysis.rsi.neutral')}</li>
        <li>55-70: {t('ai.analysis.rsi.strong')}</li>
        <li>70-100: {t('ai.analysis.rsi.overbought')}</li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-medium text-[#FFAC03] mb-2">{t('ai.analysis.indicators.description.momentum.title')}</h3>
      <p>{t('ai.analysis.indicators.description.momentum.description')}</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>0-1.0: {t('ai.analysis.growth.momentum.weak')}</li>
        <li>1.0-3.0: {t('ai.analysis.growth.momentum.medium')}</li>
        <li>3.0-10.0: {t('ai.analysis.growth.momentum.strong')}</li>
        <li>{'>'} 10.0: {t('ai.analysis.growth.momentum.extreme')}</li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-medium text-[#FFAC03] mb-2">{t('ai.analysis.indicators.description.viral.title')}</h3>
      <p>{t('ai.analysis.indicators.description.viral.description')}</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>1.0-2.0: {t('ai.analysis.growth.viral.normal')}</li>
        <li>2.0-5.0: {t('ai.analysis.growth.viral.higher')}</li>
        <li>5.0-10.0: {t('ai.analysis.growth.viral.high')}</li>
        <li>{'>'} 10.0: {t('ai.analysis.growth.viral.explosive')}</li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-medium text-[#FFAC03] mb-2">{t('ai.analysis.indicators.description.explosion.title')}</h3>
      <p>{t('ai.analysis.indicators.description.explosion.description')}</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>40%-60%: {t('ai.analysis.growth.explosion.low')}</li>
        <li>60%-75%: {t('ai.analysis.growth.explosion.medium')}</li>
        <li>75%-85%: {t('ai.analysis.growth.explosion.high')}</li>
        <li>{'>'} 85%: {t('ai.analysis.growth.explosion.extreme')}</li>
      </ul>
    </div>
  </div>
)

const MarketAnalysis: React.FC<MarketAnalysisProps> = ({ data, monitorData, onRefreshData }) => {
  const { t } = useTranslation()
  const [countdown, setCountdown] = useState(0)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [showDescription, setShowDescription] = useState(false)

  const updateCountdown = useCallback(() => {
    if (!monitorData?.nextUpdate) {
      return
    }

    const now = Date.now()
    const nextUpdate = monitorData.nextUpdate
    const timeLeft = nextUpdate - now

    if (timeLeft <= 0 && !isRefreshing) {
      setIsRefreshing(true)
      onRefreshData?.()
      setTimeout(() => {
        if (monitorData.nextUpdate <= Date.now()) {
          onRefreshData?.()
        }
        setIsRefreshing(false)
      }, 5000)
      return
    }

    setCountdown(Math.max(0, timeLeft))
  }, [monitorData?.nextUpdate, onRefreshData, isRefreshing])

  useEffect(() => {
    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [updateCountdown])

  const formattedCountdown = useMemo(() => {
    const minutes = Math.floor(countdown / 60000)
    const seconds = Math.floor((countdown % 60000) / 1000)
    return `${minutes}${t('ai.analysis.monitor.countdown.minutes')} ${seconds}${t('ai.analysis.monitor.countdown.seconds')}`
  }, [countdown, t])

  const formatters = useMemo(() => ({
    formatPrice: (price: number) => price.toFixed(6),
    formatPercent: (value: number) => `${value.toFixed(2)}%`,
    formatVolume: (volume: number) => volume.toLocaleString(),
    formatGrowth: (value: number) => Number(value.toFixed(2))
  }), [])

  if (!data || !data.market || !data.predictions || !data.growthPotential) {
    return <div className="text-red-500">Invalid market data structure</div>
  }

  if (!monitorData) {
    return <div className="text-red-500">Monitor data is missing</div>
  }

  const { market, predictions, growthPotential } = data
  const { formatPrice, formatPercent, formatVolume, formatGrowth } = formatters

  return (
    <div className="space-y-4">
      {/* 监控数据 */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={8}>
          <Card className="bg-white/[0.03] h-[104px]">
            <Statistic
              title={t('ai.analysis.monitor.balance')}
              value={monitorData.balance}
              precision={2}
              valueStyle={{ color: '#FFAC03' }}
              suffix={
                <span className="anticon">
                  <img
                    src="/logo.png"
                    className="w-[1em] h-[1em]"
                    alt="MINIDOGE"
                  />
                </span>
              }
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card className="bg-white/[0.03] h-[104px]">
            <Statistic
              title={t('ai.analysis.monitor.nextUpdate')}
              value={formattedCountdown}
              valueStyle={{ color: '#FFAC03' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card className="bg-white/[0.03] h-[104px]">
            <Statistic
              title={
                <div className="flex items-center gap-1">
                  <span>{t('ai.analysis.monitor.remainingPredictions')}</span>
                  <Button
                    type="text"
                    icon={<QuestionCircleOutlined />}
                    className="text-white/50 hover:text-white/80 -mr-2 -mt-1"
                    onClick={(e) => {
                      e.stopPropagation()
                      Modal.info({
                        title: <span className="text-[#FFAC03]">{t('ai.analysis.monitor.remainingPredictions')}</span>,
                        content: <div className="text-white/80">{t('ai.analysis.monitor.predictionsDescription')}</div>,
                        okText: 'OK',
                        width: 400,
                        centered: true,
                        styles: {
                          content: {
                            background: '#1a1a1a',
                          },
                          header: {
                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                          },
                          body: {
                            padding: '24px',
                          },
                          mask: {
                            backgroundColor: 'rgba(0,0,0,0.7)',
                          }
                        }
                      })
                    }}
                  />
                </div>
              }
              value={monitorData.remainingPredictions}
              valueStyle={{ color: '#FFAC03' }}
            />
          </Card>
        </Col>
      </Row>

      {/* 价格和交易数据 */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={8}>
          <Card className="bg-white/[0.03]">
            <Statistic
              title={t('ai.analysis.currentPrice')}
              value={market.price}
              precision={6}
              valueStyle={{ color: '#FFAC03' }}
              prefix="$"
              suffix={
                <span className="text-sm text-white/70 ml-2">
                  MC: ${((market.price * 1000000000) / 1000000).toFixed(2)}M
                </span>
              }
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card className="bg-white/[0.03]">
            <Statistic
              title={t('ai.analysis.h24Volume')}
              value={market.volume.h24}
              precision={2}
              valueStyle={{ color: '#FFAC03' }}
              prefix="$"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card className="bg-white/[0.03]">
            <Statistic
              title={t('ai.analysis.h24Change')}
              value={market.priceChange.h24}
              precision={2}
              valueStyle={{ 
                color: market.priceChange.h24 >= 0 ? '#52c41a' : '#ff4d4f'
              }}
              prefix={market.priceChange.h24 >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>

      {/* 预测数据 */}
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={8}>
          <PredictionCard
            title={t('ai.analysis.predictions.24h')}
            predictions={predictions['1_day']}
            formatPrice={formatPrice}
            formatGrowth={formatGrowth}
            t={t}
          />
        </Col>
        <Col xs={24} lg={8}>
          <PredictionCard
            title={t('ai.analysis.predictions.48h')}
            predictions={predictions['2_day']}
            formatPrice={formatPrice}
            formatGrowth={formatGrowth}
            t={t}
          />
        </Col>
        <Col xs={24} lg={8}>
          <Card 
            title={
              <div className="flex items-center justify-between">
                <span>{t('ai.analysis.growthPotential')}</span>
                <Button
                  type="text"
                  icon={<QuestionCircleOutlined />}
                  onClick={() => setShowDescription(true)}
                  className="text-white/50 hover:text-white/80"
                />
              </div>
            }
            className="bg-white/[0.03] h-full"
            styles={{
              header: { 
                color: '#FFAC03', 
                borderBottom: '1px solid rgba(255,255,255,0.1)' 
              }
            }}
          >
            <div className="space-y-4">
              <div>
                <div className="text-sm text-white/70 mb-1">{t('ai.analysis.rsi.title')}</div>
                <div className="flex items-center gap-2">
                  <div className="text-lg text-[#52c41a]">{formatGrowth(market.indicators.rsi)}</div>
                  <div className="text-xs text-white/50">
                    {market.indicators.rsi <= 30 && t('ai.analysis.rsi.oversold')}
                    {market.indicators.rsi > 30 && market.indicators.rsi <= 45 && t('ai.analysis.rsi.weak')}
                    {market.indicators.rsi > 45 && market.indicators.rsi <= 55 && t('ai.analysis.rsi.neutral')}
                    {market.indicators.rsi > 55 && market.indicators.rsi <= 70 && t('ai.analysis.rsi.strong')}
                    {market.indicators.rsi > 70 && t('ai.analysis.rsi.overbought')}
                  </div>
                </div>
              </div>
              <div>
                <div className="text-sm text-white/70 mb-1">{t('ai.analysis.growth.momentum.title')}</div>
                <div className="flex items-center gap-2">
                  <div className="text-lg text-[#52c41a]">{formatGrowth(growthPotential.marketMomentum)}</div>
                  <div className="text-xs text-white/50">
                    {growthPotential.marketMomentum <= 1.0 && t('ai.analysis.growth.momentum.weak')}
                    {growthPotential.marketMomentum > 1.0 && growthPotential.marketMomentum <= 3.0 && t('ai.analysis.growth.momentum.medium')}
                    {growthPotential.marketMomentum > 3.0 && growthPotential.marketMomentum <= 10.0 && t('ai.analysis.growth.momentum.strong')}
                    {growthPotential.marketMomentum > 10.0 && t('ai.analysis.growth.momentum.extreme')}
                  </div>
                </div>
              </div>
              <div>
                <div className="text-sm text-white/70 mb-1">{t('ai.analysis.growth.viral.title')}</div>
                <div className="flex items-center gap-2">
                  <div className="text-lg text-[#1890ff]">{formatGrowth(growthPotential.viralGrowthFactor)}</div>
                  <div className="text-xs text-white/50">
                    {growthPotential.viralGrowthFactor <= 2.0 && t('ai.analysis.growth.viral.normal')}
                    {growthPotential.viralGrowthFactor > 2.0 && growthPotential.viralGrowthFactor <= 5.0 && t('ai.analysis.growth.viral.higher')}
                    {growthPotential.viralGrowthFactor > 5.0 && growthPotential.viralGrowthFactor <= 10.0 && t('ai.analysis.growth.viral.high')}
                    {growthPotential.viralGrowthFactor > 10.0 && t('ai.analysis.growth.viral.explosive')}
                  </div>
                </div>
              </div>
              <div>
                <div className="text-sm text-white/70 mb-1">{t('ai.analysis.growth.explosion.title')}</div>
                <div className="flex items-center gap-2">
                  <div className="text-lg text-[#FFAC03]">{formatGrowth(growthPotential.explosionProbability)}%</div>
                  <div className="text-xs text-white/50">
                    {growthPotential.explosionProbability <= 60 && t('ai.analysis.growth.explosion.low')}
                    {growthPotential.explosionProbability > 60 && growthPotential.explosionProbability <= 75 && t('ai.analysis.growth.explosion.medium')}
                    {growthPotential.explosionProbability > 75 && growthPotential.explosionProbability <= 85 && t('ai.analysis.growth.explosion.high')}
                    {growthPotential.explosionProbability > 85 && t('ai.analysis.growth.explosion.extreme')}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Modal
        title={
          <span className="text-[#FFAC03]">
            {t('ai.analysis.growthPotential')} - {t('ai.analysis.indicators.description.title')}
          </span>
        }
        open={showDescription}
        onCancel={() => setShowDescription(false)}
        footer={null}
        width={600}
        styles={{
          content: {
            background: '#1a1a1a',
          },
          header: {
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }
        }}
      >
        <IndicatorDescription t={t} />
      </Modal>
    </div>
  )
}

export default MarketAnalysis 