import Domain from '@/components/domain'
import data from '@/config/data'
export default function Home() {
  // 根据是否有域名参数决定渲染的组件
  return <Domain {...data} />
}
