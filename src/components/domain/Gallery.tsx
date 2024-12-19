import { useTranslation } from "react-i18next";
import { IMAGES } from "@/config/resources";
import { Section } from "./Section";
import { Link } from "./Link.tsx";
import { memesHover, memesTitleSize } from "./styles";
import { gallery } from "@/config/shared/gallery.ts";

export const Gallery = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4 sm:gap-4 md:gap-8 xl:gap-16 items-center">
      <Section type="top">
        <div className="w-full flex flex-col">
          {gallery.title && (
            <span className={`${memesTitleSize} text-center mb-8`}>
              {gallery.title.map((item, index) => (
                <span
                  key={index}
                  className={item.status ? "text-[#FFAC03]" : ""}
                >
                  {item.content}
                </span>
              ))}
            </span>
          )}
          {IMAGES.SECTIONS.SECTION3 && (
            <>
              {/* 第一排：最多显示3个 */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 justify-center">
                {IMAGES.SECTIONS.SECTION3.slice(0, 3).map((item, index) => (
                  <Link key={index}>
                    <div className={`aspect-square ${memesHover}`}>
                      <img
                        src={item}
                        alt={`Section 3 Image ${index}`}
                        className="h-full w-full object-cover aspect-square rounded-xl"
                      />
                    </div>
                  </Link>
                ))}
              </div>

              {/* 第二排：从第4个开始，显示最多4个 */}
              {IMAGES.SECTIONS.SECTION3.length > 3 && (
                <div className="grid grid-cols-4 gap-3 sm:gap-4 justify-items-center mt-4">
                  {IMAGES.SECTIONS.SECTION3.slice(3).map((item, index) => (
                    <Link key={index}>
                      <div className={`aspect-square ${memesHover}`}>
                        <img
                          src={item}
                          alt={`Section 3 Image ${index + 3}`}
                          className="h-full w-full object-cover aspect-square rounded-xl"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </Section>
    </div>
  );
}; 