import Domain from "@/components/domain";
import { data } from "@/mock";
import { Fragment, useState } from "react";
import { useParams } from "react-router";
import FormMobile from "./form_mobile";
import FormPc from "./form_pc";

export default function Edit() {
  const { domain } = useParams();
  const getData = data.find((item) => item.domain === domain);

  const [backgroundColor, setBackgroundColor] = useState<string>(
    getData?.background.color || "#fff"
  );
  const [backgroundPattern, setBackgroundPattern] = useState<string>("");
  const [backgroundImage, setBackgroundImageUrl] = useState<string>(
    getData?.background.custom || ""
  );
  const [textColor, setTextColor] = useState<string>(
    getData?.text.color || "#000"
  );
  const [buttonBackground, setButtonBackground] = useState(
    getData?.button.background || "#000"
  );
  const [buttonText, setButtonText] = useState(getData?.button.text || "#fff");
  const [buttonRounded, setButtonRounded] = useState(
    getData?.button.rounded || "!rounded-none"
  );
  const [about, setAbout] = useState<{
    image?: string;
    title?: string;
    text?: string;
  }>(getData?.about || {});

  const [buy, setBuy] = useState<{
    advertiseImage1?: string;
    advertiseImage2?: string;
    buyLink1?: string;
    buyLink2?: string;
  }>(getData?.buy || {});

  const [roadmap, setRoadmap] = useState<{ title?: string; text?: string }[]>(
    getData?.roadmap || [{ title: "", text: "" }]
  );

  const fontFamily = [
    { key: "font-londrinaSolid", name: "Londrina Solid" },
    { key: "font-poppinsSemiBold", name: "Poppins SemiBold" },
  ];
  const [textFont, setTextFont] = useState<string>(fontFamily?.[0].key);

  const datas = {
    ...getData,
    ...{
      background: {
        color: backgroundColor,
        pattern: backgroundPattern,
        custom: backgroundImage,
      },
      button: {
        background: buttonBackground,
        text: buttonText,
        rounded: buttonRounded,
      },
      text: {
        color: textColor,
        font: textFont,
      },
      about,
      buy,
      roadmap,
    },
  };
  return (
    <div className={`flex justify-center px-4 gap-4  min-h-screen items-start`}>
      <Fragment>
        <div className="max-w-4xl overflow-hidden relative pb-48 sm:pb-0">
          <Domain {...datas} />
          <FormMobile
            backgroundColor={backgroundColor}
            setBackgroundColor={setBackgroundColor}
            setBackgroundPattern={setBackgroundPattern}
            backgroundImage={backgroundImage}
            setBackgroundImageUrl={setBackgroundImageUrl}
            textColor={textColor}
            setTextColor={setTextColor}
            fontFamily={fontFamily}
            setTextFont={setTextFont}
            buttonBackground={buttonBackground}
            setButtonBackground={setButtonBackground}
            buttonText={buttonText}
            setButtonText={setButtonText}
            setButtonRounded={setButtonRounded}
            about={about}
            setAbout={setAbout}
            buy={buy}
            setBuy={setBuy}
            roadmap={roadmap}
            setRoadmap={setRoadmap}
          />
        </div>
        <FormPc
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
          setBackgroundPattern={setBackgroundPattern}
          backgroundImage={backgroundImage}
          setBackgroundImageUrl={setBackgroundImageUrl}
          textColor={textColor}
          setTextColor={setTextColor}
          fontFamily={fontFamily}
          setTextFont={setTextFont}
          buttonBackground={buttonBackground}
          setButtonBackground={setButtonBackground}
          buttonText={buttonText}
          setButtonText={setButtonText}
          setButtonRounded={setButtonRounded}
          about={about}
          setAbout={setAbout}
          buy={buy}
          setBuy={setBuy}
          roadmap={roadmap}
          setRoadmap={setRoadmap}
        />
      </Fragment>
    </div>
  );
}
