import { useState, useRef, useEffect } from 'react';
import { images } from '@/assets/images';

const AUDIO_URL = 'https://p.mini-doge.com/Doge&Minidoge.mp3';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio
  useEffect(() => {
    const audio = new Audio(AUDIO_URL);
    audio.preload = 'auto';
    audio.loop = true;
    
    // Add audio event listeners
    const handleCanPlay = () => {
      console.log('Audio ready to play');
    };

    const handleLoadStart = () => {
      console.log('Audio loading started');
    };

    const handleError = (e: any) => {
      console.error('Audio loading error:', e);
      setError('Failed to load audio');
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('error', handleError);

    audioRef.current = audio;

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('error', handleError);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Handle play/pause
  const togglePlay = async () => {
    try {
      const audio = audioRef.current;
      if (!audio) {
        console.error('Audio instance not found');
        return;
      }

      if (isPlaying) {
        console.log('Attempting to pause audio');
        audio.pause();
        setIsPlaying(false);
      } else {
        console.log('Attempting to play audio');
        setIsLoading(true);

        try {
          // Ensure audio is loaded
          if (audio.readyState === 0) {
            console.log('Reloading audio');
            audio.load();
            await new Promise((resolve) => {
              audio.addEventListener('canplay', resolve, { once: true });
            });
          }

          console.log('Starting playback');
          const playPromise = audio.play();
          if (playPromise !== undefined) {
            await playPromise;
            console.log('Playback successful');
            setIsPlaying(true);
          }
        } catch (playError) {
          console.error('Playback error:', playError);
          setError('Failed to play audio');
        } finally {
          setIsLoading(false);
        }
      }
    } catch (err) {
      console.error('Audio control error:', err);
      setError('Operation failed, please try again');
      setIsLoading(false);
      setIsPlaying(false);
    }
  };

  return (
    <div 
      className={`
        bg-white/10 border border-white/10 rounded-full 
        flex items-center justify-center 
        min-w-[36px] min-h-[36px] sm:min-w-[48px] sm:min-h-[48px] md:min-w-[58px] md:min-h-[58px]
        transition-all duration-300
        ${isPlaying ? 'animate-music-pulse shadow-lg' : ''}
        relative
        before:content-[''] 
        before:absolute before:inset-0 
        before:rounded-full before:border before:border-white/20
        before:animate-music-ripple
        before:opacity-0
        after:content-[''] 
        after:absolute after:inset-0 
        after:rounded-full after:border after:border-white/10
        after:animate-music-ripple
        after:animation-delay-500
        after:opacity-0
        ${isPlaying ? 'before:opacity-100 after:opacity-100' : 'before:opacity-0 after:opacity-0'}
        hover:bg-white/20
        hover:scale-105
        active:scale-95
        cursor-pointer
      `}
      onClick={(e) => {
        e.preventDefault();
        togglePlay();
      }}
    >
      <button
        disabled={isLoading}
        className={`
          flex items-center justify-center w-full h-full
          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          ${error ? 'text-red-500' : 'text-white'}
        `}
        aria-label={isPlaying ? '暂停音乐' : '播放音乐'}
      >
        {isLoading ? (
          <svg className="animate-spin h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          <img
            src={images.logo}
            alt="MINIDOGE"
            className={`
              w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7
              transition-transform duration-300
              ${isPlaying ? 'scale-110' : 'scale-100'}
            `}
          />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer; 