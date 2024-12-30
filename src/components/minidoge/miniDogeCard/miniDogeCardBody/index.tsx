import { Mp3 } from "./mp3";
import { Mp4 } from "./mp4";

export const MiniDogeCardBody = ({
  type = "image",
  audioSrc = "",
}: {
  type?: "image" | "mp3" | "mp4";
  audioSrc?: string;
}) => {
  return (
    <div
      className={`w-full aspect-square rounded-lg ${
        type === "image"
          ? "bg-white/10"
          : "bg-gradient-to-r from-[#FFAF03] to-[#FF5900] shadow-[0px_0px_71px_2px_rgba(255,255,255,0.5)_inset]"
      } grid grid-cols-1 items-center justify-items-center h-[30vh] sm:h-auto overflow-hidden`}
    >
      {type === "image" && (
        <img
          src="/logo.png"
          alt="doge"
          className="object-cover w-full h-[30vh] md:h-auto"
        />
      )}
      {type === "mp3" && <Mp3 audioSrc={audioSrc} />}
      {type === "mp4" && <Mp4 />}
    </div>
  );
};
