import { getEmojiAPI, EmojiItem } from '@/api'
import { Section } from '@/components/domain'
import { memesTextSize, memesTitleSize } from '@/components/domain/styles'
import MiniDogeCard from '@/components/minidoge/miniDogeCard'
import Segmented from '@/components/Segmented'
import { Empty, Pagination, Select } from 'antd'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Memes() {
  const { t } = useTranslation()
  const memes: any = t('memes', { returnObjects: true })
  const [emojiList, setEmojiList] = useState<EmojiItem[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, _] = useState(10)
  const [total, setTotal] = useState(0)
  const [segmentValue, setSegmentValue] = useState('like_count')

  const handleSegmentChange = (value: string) => {
    setSegmentValue(value)
  }

  const init = async () => {
    const result = await getEmojiAPI({
      sort_by: segmentValue,
      page: currentPage,
      page_size: pageSize,
    })
    if (result.success) {
      setEmojiList(result.result.list)
      setTotal(result.result.total)
    }
  }

  useEffect(() => {
    init()
  }, [currentPage, pageSize, segmentValue])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="flex flex-col gap-4 sm:gap-4 md:gap-8 xl:gap-8 items-center">
      <Section type="top">
        <div className="flex flex-col items-center">
          <span className={`${memesTitleSize} text-center mb-4`}>
            {memes.title.map((text: any, index: number) => (
              <span key={index} className={text.status ? `text-[#FFAC03]` : ''}>
                {text.content}
              </span>
            ))}
          </span>
          <span className={`${memesTextSize} text-center max-w-96`}>
            {memes.text}
          </span>
        </div>
      </Section>
      {/* 操作区域 */}
      <Section
        type="top"
        className="flex gap-2 sm:gap-4 sm:flex-row justify-between w-full items-center mt-4"
      >
        <Segmented
          value={segmentValue}
          onChange={handleSegmentChange}
          options={[
            { value: 'like_count', label: memes.hot },
            { value: 'created_at', label: memes.new },
          ]}
        />
        <div className="antd-rounded">
          <Select
            options={[
              {
                value: 'Hot',
                label: memes.hot,
              },
            ]}
            placeholder="Default sort"
            size="large"
            className="w-auto"
          />
        </div>
      </Section>
      {/* 列表 */}
      <Section type="top" className="w-full">
        {emojiList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {emojiList.map(item => (
              <MiniDogeCard
                avatar={item.avatar || '/logo.png'}
                createdAt={item.created_at}
                likeCount={item.like_count}
                key={item.id}
                type={
                  item.file_type.includes('image')
                    ? 'image'
                    : item.file_type.includes('video')
                    ? 'mp4'
                    : 'mp3'
                }
                audioSrc={item.file_path}
                address={item.author_account}
                id={item.id}
                ownerBy={item.author_id}
              />
            ))}
          </div>
        ) : (
          <Section type="top">
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="" />
          </Section>
        )}
      </Section>
      <Section type="top">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={total}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </Section>
    </div>
  )
}
