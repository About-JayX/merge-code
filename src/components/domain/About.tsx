import { useTranslation } from "react-i18next";
import { IMAGES } from "@/config/resources";
import { Card } from "./Card.tsx";
import { Button } from "./Button.tsx";
import { memesHover, memesTextSize, memesTitleSize } from "./styles";

export const About = () => {
  const { t } = useTranslation();
  const about: any = t("about", { returnObjects: true });
  return (
    <>
      <Card
        className={`bg-gradient-to-r from-[#FFAF03] to-[#FF5900] shadow-[0px_0px_71px_2px_rgba(255,255,255,0.5)_inset] flex flex-col items-center text-center mt-24 xl:mt-28 text-black ${memesHover}`}
      >
        <div className="w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-gradient-to-l from-[#FFAE04]/15 to-[#FFC30C]/15 -mt-[calc(96px+32px)] sm:-mt-[calc(114px+48px)] p-6 flex justify-center items-center">
          <img
            src={IMAGES.LOGO}
            className="aspect-square rounded-full object-cover w-full h-full"
            loading="lazy"
            alt="logo"
          />
        </div>
        <span
          className={`${memesTitleSize} text-3xl sm:text-3xl md:text-3xl xl:text-4xl mt-4 sm:mt-5`}
        >
          {about?.title}
        </span>
        <div
          className={`${memesTextSize} mt-3 sm:mt-6 max-w-3xl mx-auto leading-relaxed space-y-4 font-medium about-text`}
          dangerouslySetInnerHTML={{ __html: about?.text }}
        />
        {about?.bntText && (
          <a href={about?.bntUrl} className={memesHover} target="_blank">
            <Button className="mt-6 xl:mt-12 !bg-white from-transparent to-transparent !border-transparent !text-black">
              {about?.bntText}
            </Button>
          </a>
        )}
      </Card>
    </>
  );
}; 