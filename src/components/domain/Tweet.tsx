import { useTranslation } from "react-i18next";
import { IMAGES } from "@/config/resources";
import { Section } from "./Section";
import { Card } from "./Card.tsx";
import { Button } from "./Button.tsx";
import { memesHover, memesTextColor, memesTitleSize } from "./styles";

export const Tweet = ({ ...props }) => {
  const { t } = useTranslation();
  const section1: any = t("section1", { returnObjects: true });

  const Tweets = ({
    id,
    className = "",
    image,
  }: {
    id: string;
    className?: string;
    image: string;
  }) => {
    return (
      <a
        href={`https://x.com/elonmusk/status/${id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={`${memesHover}`}>
          <img src={image} className={className} />
        </div>
      </a>
    );
  };

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="text-center flex flex-col gap-4 xl:gap-5">
          <Section type="top">
            <span className={`${memesTitleSize}`}>{section1?.title}</span>
          </Section>
          <Section type="left">
            <p className="text-base sm:text-lg md:text-base xl:text-xl mt-4 sm:mt-4 xl:mt-8">
              {section1?.text.map((text: any, index: number) => (
                <span
                  key={index}
                  className={`${
                    text.highlight ? memesTextColor + " font-bold" : ""
                  }`}
                >
                  {text.content}
                </span>
              ))}
            </p>
          </Section>
        </div>
        <Section type="top">
          <Card {...props} className={`${memesHover}`}>
            <div className="grid  sm:grid-cols-[1fr,1fr] xl:grid-cols-[527px,1fr] gap-4 sm:gap-8 xl:gap-12">
              <Section type="left">
                <Tweets
                  id="1865304483070169440"
                  image={IMAGES.SECTIONS.SECTION1.left}
                  className="w-full xl:w-[527px] xl:h-[695px] rounded-xl object-cover"
                />
              </Section>

              <Section type="right">
                <div className="flex flex-col">
                  <span className="text-base sm:text-xl xl:text-2xl font-bold">
                    {section1?.box.right.title}
                  </span>
                  <p className="text-base sm:text-lg md:text-base xl:text-xl mt-4 sm:mt-4 xl:mt-8 opacity-60 leading-relaxed">
                    {section1?.box.right.text.map(
                      (text: any, index: number) => (
                        <span
                          key={index}
                          className={`${
                            text.highlight
                              ? memesTextColor + " font-bold opacity-100"
                              : ""
                          }`}
                        >
                          {text.content}
                        </span>
                      )
                    )}
                  </p>
                  {section1?.box.right.image && (
                    <Tweets
                      id="1865305060307009884"
                      image={IMAGES.SECTIONS.SECTION1.right}
                      className="w-full mt-4 sm:mt-4 xl:mt-11 rounded-xl object-cover"
                    />
                  )}
                  {section1?.box.right.bntText && (
                    <a href={section1?.box.right.bntUrl} target="_blank">
                      <Button
                        className=" mt-4 sm:mt-4 xl:mt-14"
                        type="default"
                        {...props}
                      >
                        {section1?.box.right.bntText}
                      </Button>
                    </a>
                  )}
                </div>
              </Section>
            </div>
          </Card>
        </Section>
      </div>
    </>
  );
}; 