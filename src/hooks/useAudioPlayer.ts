import { create } from 'zustand'
import { StateCreator } from 'zustand'

interface AudioPlayerStore {
  currentPlayingId: string | null
  audioRefs: Map<string, HTMLAudioElement>
  setCurrentPlayingId: (id: string | null) => void
  registerAudio: (id: string, audioElement: HTMLAudioElement) => void
  unregisterAudio: (id: string) => void
}

const createAudioPlayerStore: StateCreator<AudioPlayerStore> = (set, get) => ({
  currentPlayingId: null,
  audioRefs: new Map(),
  setCurrentPlayingId: (id: string | null) => {
    const { audioRefs, currentPlayingId } = get()
    
    // 暂停当前播放的音频
    if (currentPlayingId && audioRefs.has(currentPlayingId)) {
      const currentAudio = audioRefs.get(currentPlayingId)
      if (currentAudio) {
        currentAudio.pause()
        currentAudio.currentTime = 0
      }
    }

    // 播放新的音频
    if (id && audioRefs.has(id)) {
      const newAudio = audioRefs.get(id)
      if (newAudio) {
        try {
          const playPromise = newAudio.play()
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.error('播放出错:', error)
            })
          }
        } catch (error) {
          console.error('播放出错:', error)
        }
      }
    }

    set({ currentPlayingId: id })
  },
  registerAudio: (id: string, audioElement: HTMLAudioElement) => {
    // 设置音频元素的初始状态
    audioElement.currentTime = 0
    audioElement.volume = 1
    audioElement.preload = 'auto'

    set((state) => ({
      audioRefs: new Map(state.audioRefs).set(id, audioElement)
    }))
  },
  unregisterAudio: (id: string) => {
    const { audioRefs, currentPlayingId } = get()
    // 如果正在播放的音频被移除，先暂停它
    if (currentPlayingId === id && audioRefs.has(id)) {
      const audio = audioRefs.get(id)
      if (audio) {
        audio.pause()
        audio.currentTime = 0
      }
    }

    set((state) => {
      const newRefs = new Map(state.audioRefs)
      newRefs.delete(id)
      return { 
        audioRefs: newRefs,
        currentPlayingId: currentPlayingId === id ? null : currentPlayingId
      }
    })
  }
})

const useAudioPlayerStore = create<AudioPlayerStore>(createAudioPlayerStore)

export const useAudioPlayer = (audioId: string) => {
  const { 
    currentPlayingId, 
    setCurrentPlayingId, 
    registerAudio, 
    unregisterAudio 
  } = useAudioPlayerStore()

  const play = () => {
    setCurrentPlayingId(audioId)
  }

  const pause = () => {
    if (currentPlayingId === audioId) {
      setCurrentPlayingId(null)
    }
  }

  const isPlaying = currentPlayingId === audioId

  return {
    play,
    pause,
    isPlaying,
    registerAudio: (audio: HTMLAudioElement) => registerAudio(audioId, audio),
    unregisterAudio: () => unregisterAudio(audioId),
  }
} 