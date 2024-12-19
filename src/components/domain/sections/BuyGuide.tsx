import { useTranslation } from "react-i18next";
import { Section } from "../common/Section.tsx";
import { Card } from "../common/Card.tsx";
import Icon from "../../icon.tsx";
import { memesTextColor, memesTextSize, memesTitleSize } from "../styles.ts";

export const BuyGuide = ({ ...props }) => {
  const { t } = useTranslation();
  const howToBuy: any = t("howToBuy", { returnObjects: true });

  const MemesCardItem = ({
    text = "",
    title = "",
    index = 0,
  }: {
    title?: string;
    text?: string;
    index?: number;
  }) => {
    return (
      <a
        className={`${howToBuy?.data?.[index].url ? "" : "text-current"}`}
        onClick={() =>
          howToBuy?.data?.[index].url &&
          window.open(howToBuy?.data?.[index].url, "_blank")
        }
      >
        <Card {...props}>
          <div className="flex flex-col gap-4 sm:gap-6 xl:gap-7">
            <div className="grid grid-cols-[70px,1fr] xl:grid-cols-[83px,1fr] gap-4 sm:gap-6 xl:gap-8 items-center">
              <div className="aspect-square p-[6px] bg-white/20 rounded-2xl w-[70px] h-[70px] xl:w-[83px] xl:h-[83px]">
                <Icon
                  name={`howToBuy/${3 - index}`}
                  className="aspect-square rounded-xl w-full h-full object-cover"
                />
              </div>
              <span
                className={`text-2xl xl:text-3xl font-normal ${memesTextColor}`}
                dangerouslySetInnerHTML={{ __html: title }}
              ></span>
            </div>
            <span
              className={`${memesTextSize} !text-base xl:!text-2xl font-normal`}
              dangerouslySetInnerHTML={{ __html: text }}
            ></span>
          </div>
        </Card>
      </a>
    );
  };

  return (
    <div className="flex flex-col items-center gap-14">
      <Section type="top">
        <span
          className={`${memesTitleSize}`}
          dangerouslySetInnerHTML={{ __html: howToBuy.title }}
        ></span>
      </Section>
      {howToBuy.data?.length && (
        <Section type="top" className="w-full">
          <div className="grid gap-5 w-full">
            {howToBuy.data.map((item: any, index: number) => (
              <MemesCardItem
                key={index}
                title={item.title}
                text={item.text}
                index={index}
              />
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}; 