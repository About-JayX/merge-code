import { useTranslation } from "react-i18next";
import { IMAGES } from "@/config/resources.ts";
import { Section } from "../common/Section.tsx";
import { Button } from "../common/Button.tsx";
import { Link } from "../common/Link.tsx";
import { memesHover, memesTextSize, memesTitleSize } from "../styles.ts";

export const Intro = ({ ...props }) => {
  const { t } = useTranslation();
  const section2: any = t("section2", { returnObjects: true });
  return (
    <div className="grid sm:grid-cols-[1fr,1fr] xl:grid-cols-[1fr,493px] items-center gap-5 sm:gap-6 xl:gap-16">
      <Section type="left">
        <div className="flex flex-col">
          <span className={`${memesTitleSize} sm:!text-2xl  md:!text-3xl lg:!text-4xl`}>
            {section2?.title}
          </span>
          <span
            className={`${memesTextSize} mt-3 sm:mt-6 xl:mt-7 max-w-xl`}
            dangerouslySetInnerHTML={{ __html: section2?.text }}
          ></span>
          {section2.bntText && (
            <a
              href={section2?.bntUrl}
              target="_blank"
              className={`mt-3 sm:mt-5 xl:mt-14 ${memesHover}`}
            >
              <Button {...props}>{section2?.bntText}</Button>
            </a>
          )}
        </div>
      </Section>
      <Section type="right">
        <div
          className={`aspect-square xl:w-[493px] xl:h-[493px] rounded-xl p-6 ${memesHover}`}
          style={{
            border: `1px solid ${props?.button?.background}`,
          }}
        >
          <Link>
            <img
              src={IMAGES.SECTIONS.SECTION2}
              className="aspect-square rounded-xl object-cover"
            />
          </Link>
        </div>
      </Section>
    </div>
  );
}; 