import Domain from '@/components/domain'
import dataHook from '@/config/data'
import { useEffect, useState } from 'react'
export default function Home() {
  const [data, setData] = useState({})

  const init = async () => {
    const d = await dataHook()
    setData({ ...d })
  }
  useEffect(() => {
    init()
  }, [])
  // 根据是否有域名参数决定渲染的组件
  return <Domain {...data} />
}
