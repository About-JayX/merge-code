import Domain from "@/components/domain";
import { Fragment, useLayoutEffect, useState } from "react";
import { useParams } from "react-router";
import FormMobile from "./form_mobile";
import FormPc from "./form_pc";
import { domain as doMainAPI } from "@/api/index";
import { useAppSelector } from "@/store";
export default function Edit() {
  const { domain } = useParams();

  const [getData, setGetData] = useState<any>({});

  const { token } = useAppSelector((state) => state.user);

  const [backgroundColor, setBackgroundColor] = useState<string>("#fff");
  const [backgroundPattern, setBackgroundPattern] = useState<string>("");

  const [backgroundImage, setBackgroundImageUrl] = useState<string>("");
  const [textColor, setTextColor] = useState<string>("#000");
  const [buttonBackground, setButtonBackground] = useState("#000");
  const [buttonText, setButtonText] = useState("#fff");
  const [buttonRounded, setButtonRounded] = useState("!rounded-none");
  const [about, setAbout] = useState<{
    image?: string;
    title?: string;
    text?: string;
  }>({});

  const [buy, setBuy] = useState<{
    advertiseImage1?: string;
    advertiseImage2?: string;
    buyLink1?: string;
    buyLink2?: string;
  }>({});

  const [roadmap, setRoadmap] = useState<{ title?: string; text?: string }[]>([
    { title: "", text: "" },
  ]);

  const fontFamily = [
    { key: "font-londrinaSolid", name: "Londrina Solid" },
    { key: "font-poppinsSemiBold", name: "Poppins SemiBold" },
  ];
  const [textFont, setTextFont] = useState<string>(fontFamily?.[0].key);

  const init = async () => {
    const result: any = domain && (await doMainAPI.verifyAPI({ domain }));
    let data = { ...result.data, ...JSON.parse(result.data.config) };
    setBackgroundColor(data?.background?.color);
    setBackgroundPattern(data?.background?.pattern);
    setBackgroundImageUrl(data?.background?.custom);
    setTextColor(data?.background?.color);
    setButtonBackground(data?.button?.background);
    setButtonText(data?.button?.text);
    setButtonRounded(data?.button?.rounded);
    setAbout(data?.about);
    setBuy(data?.buy);
    setRoadmap(data?.roadmap);
    setGetData(data);
  };
  useLayoutEffect(() => {
    init();
  }, [domain]);

  const datas = {
    ...getData,
    ...{
      image: getData?.logo_url,
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
      contractAddress: getData?.contract_address,
    },
  };
  // console.log(datas);
  console.log(location);

  const saveToken = async () => {
    const updateData = {
      Id: getData.Id, //网站ID
      config: {
        background: {
          color: backgroundColor,
          pattern: backgroundPattern,
          custom: backgroundImage,
        },
        about,
        buy,
        text: {
          color: textColor,
          font: textFont,
        },
        roadmap,
        botton: {
          background: buttonBackground,
          text: buttonText,
          rounded: buttonRounded,
        },
      },
    };

    const result = await doMainAPI.updateDoMain(updateData, token);
    window.open(location.origin + "/" + getData?.domain, "_blank");
  };

  return (
    <div className={`flex justify-center px-4 gap-4  min-h-screen items-start`}>
      <Fragment>
        <div className="max-w-2xl overflow-hidden relative pb-48 sm:pb-0">
          <Domain {...datas} />
          <FormMobile
            save={saveToken}
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
          save={saveToken}
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
