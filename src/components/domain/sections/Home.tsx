import { useTranslation } from "react-i18next";
import { FOUNDATION_CONFIG } from "@/config/foundation.ts";
import { IMAGES } from "@/config/resources.ts";
import { Section } from "../common/Section.tsx";
import { Button } from "../common/Button.tsx";
import { Link } from "../common/Link.tsx";
import { ContractAddress } from "../common/ContractAddress.tsx";
import { memesTextColor, memesTitleSize } from "../styles.ts";

export const Home = ({ ...props }) => {
  const { t } = useTranslation();
  const home: any = t("home", { returnObjects: true });
  const publics: any = t("public", { returnObjects: true });

  return (
    <div className="grid  md:grid-cols-[1fr,250px] lg:grid-cols-[1fr,380px]  gap-12 sm:gap-16 md:gap-6 xl:gap-12 items-center justify-items-center sm:justify-between">
      <div className="flex flex-col w-full">
        <Section type="left">
          <p
            className={`${memesTitleSize} text-4xl sm:text-6xl md:text-4xl xl:text-7xl font-bold whitespace-pre-wrap break-all`}
          >
            {home.title.map((text: any, index: number) => (
              <span
                key={index}
                style={
                  text.status ? { fontSize: "50%", opacity: 0.8 } : undefined
                }
                className={text.status ? memesTextColor : ""}
              >
                {text.content}
              </span>
            ))}
          </p>
        </Section>
        <Section type="left">
          <p
            className={`text-base sm:text-lg md:text-base xl:text-xl mt-4 sm:mt-4 xl:mt-8`}
          >
            {home.text.map((text: any, index: number) => (
              <span
                key={index}
                className={`${
                  text.highlight
                    ? memesTextColor + " font-bold"
                    : text.special
                    ? "text-[#FFC10B] font-semibold"
                    : ""
                }`}
              >
                {text.content}
              </span>
            ))}
          </p>
        </Section>

        <Section type="bottom">
          <div className="grid grid-cols-[auto,1fr] gap-3 sm:gap-8 md:gap-4 xl:gap-5 items-center mt-4 sm:mt-8 md:mt-8 xl:mt-16">
            <a href={home.buyUrl} target="_blank">
              <Button>{publics.buy}</Button>
            </a>
            <ContractAddress 
              address={FOUNDATION_CONFIG.tokens.MINIDOGE}
              button={props.button}
            />
          </div>
        </Section>
      </div>
      {props.banner_url && (
        <Section type="right">
          <div className="sm:w-[22rem] sm:h-[22rem] xl:w-[26rem] xl:h-[26rem] md:w-full md:h-full transition-transform duration-300 hover:scale-105">
            <Link className="">
              <img
                src={IMAGES.SECTIONS.BANNER}
                alt="Token Image"
                className="object-contain aspect-square w-full h-full z-10"
              />
            </Link>
          </div>
        </Section>
      )}
    </div>
  );
}; 