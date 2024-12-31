import { Card } from '@/components/domain'
import { MiniDogeCardHeader } from './miniDogeCardHeader'
import { MiniDogeCardBody } from './miniDogeCardBody'
import { MiniDogeCardFooter } from './miniDogeCardFooter'

export const IconWrapper = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) => {
  return (
    <div
      className={`w-9 h-9 bg-[#171717] cursor-pointer  rounded-full flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default function MiniDogeCard({
  type = 'image',
  audioSrc = '',
  address = '',
  id,
  footerType = 'download',
}: {
  type?: 'image' | 'mp3' | 'mp4'
  audioSrc?: string
  address?: string
  id?: string
  footerType?: 'download' | 'delete'
}) {
  return (
    <Card className="!bg-[#0F0F0F] z-10 !p-4 flex flex-col gap-3">
      <MiniDogeCardHeader address={address} />
      {type === 'image' && <MiniDogeCardBody type={type} />}
      {type === 'mp3' && (
        <MiniDogeCardBody type={type} audioSrc={audioSrc} id={id || address} />
      )}
      {type === 'mp4' && <MiniDogeCardBody type={type} audioSrc={audioSrc} />}
      <MiniDogeCardFooter type={footerType} />
    </Card>
  )
}
