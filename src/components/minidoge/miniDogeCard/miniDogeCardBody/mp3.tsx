import { memesTextSize, memesTitleSize } from '@/components/domain/styles'
import { IconWrapper } from '@/components/minidoge/miniDogeCard'
import Icon from '@/components/icon'
import { MusicIcon } from '@/components/MusicPlayer'
import { useEffect, useRef, useState } from 'react'
import { useAudioPlayer } from '@/hooks/useAudioPlayer'

export const Mp3 = ({ audioSrc = '', id = '' }: { audioSrc: string; id: string }) => {
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [fileSize, setFileSize] = useState('0 KB')
  const audioRef = useRef<HTMLAudioElement>(null)
  const { isPlaying, play, pause, registerAudio, unregisterAudio } = useAudioPlayer(id)

  useEffect(() => {
    // 获取音频文件大小
    if (audioSrc) {
      fetch(audioSrc, { method: 'HEAD' })
        .then(response => {
          const size = response.headers.get('content-length')
          if (size) {
            const sizeInKB = Math.round(parseInt(size) / 1024)
            setFileSize(`${sizeInKB} KB`)
          }
        })
        .catch(console.error)
    }
  }, [audioSrc])

  // 注册和注销音频元素
  useEffect(() => {
    if (audioRef.current) {
      // 初始化音频元素
      audioRef.current.preload = 'auto'
      audioRef.current.volume = 1
      audioRef.current.currentTime = 0
      
      registerAudio(audioRef.current)
    }
    return () => {
      unregisterAudio()
    }
  }, [audioRef.current])

  // 监听播放状态变化
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error('播放出错:', error)
            pause()
          })
        }
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        pause()
      } else {
        play()
      }
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100
      setProgress(progress)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="flex flex-col items-center p-3 gap-3 md:gap-2 md:p-3 lg:p-4 w-full">
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => pause()}
      />
      <MusicIcon isPlaying={isPlaying} audioSrc={audioSrc} />
      <div className="flex flex-col items-center">
        <span className={`${memesTitleSize} !text-base !font-normal md:text-lg`}>
          MINIDOGE.mp3
        </span>
        <span className={`${memesTextSize} !text-xs opacity-80 md:text-sm`}>
          {fileSize}
        </span>
      </div>

      <div className="w-full h-2 bg-white/10 rounded-full relative cursor-pointer"
           onClick={(e) => {
             if (audioRef.current) {
               const rect = e.currentTarget.getBoundingClientRect()
               const x = e.clientX - rect.left
               const percentage = (x / rect.width) * 100
               const newTime = (percentage / 100) * audioRef.current.duration
               audioRef.current.currentTime = newTime
             }
           }}>
        <div
          className="h-full bg-[#55D391] rounded-full transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-center justify-between w-full px-2">
        <span className="text-xs text-white/60">
          {audioRef.current ? formatTime(audioRef.current.currentTime) : '0:00'}
        </span>
        <IconWrapper className="!bg-white/20 !rounded !w-12" onClick={handlePlayPause}>
          <Icon name={isPlaying ? 'pause' : 'play'} />
        </IconWrapper>
        <span className="text-xs text-white/60">
          {duration ? formatTime(duration) : '0:00'}
        </span>
      </div>
    </div>
  )
}
