import { memesTextSize, memesTitleSize } from "@/components/domain/styles";
import { IconWrapper } from "@/components/minidoge/miniDogeCard";
import Icon from "@/components/icon";
import { MusicIcon } from "@/components/MusicPlayer";

export const Mp3 = ({ audioSrc = "" }: { audioSrc: string }) => {
  return (
    <div className="flex flex-col items-center p-3 gap-3 md:gap-2 md:p-3 lg:p-4 w-full">
      <MusicIcon isPlaying={false} audioSrc={audioSrc} />
      <div className="flex flex-col items-center">
        <span className={`${memesTitleSize} !text-base !font-normal md:text-lg`}>
          MINIDOGE.mp3
        </span>
        <span className={`${memesTextSize} !text-xs opacity-80 md:text-sm`}>0 kb</span>
      </div>

      <div className="w-full h-2 bg-white/10 rounded-full">
        <div
          className="h-full bg-[#55D391] rounded-full"
          style={{ width: `${0}%` }}
        ></div>
      </div>
      <div className="flex items-center gap-2">
        <IconWrapper className="!bg-white/20 !rounded !w-12">
          <Icon name={false ? "pause" : "play"} />
        </IconWrapper>
      </div>
    </div>
  );
};
