import Domain from "@/components/domain";
import { Fragment, useLayoutEffect, useState } from "react";
import { useParams } from "react-router";
import FormMobile from "./form_mobile";
import FormPc from "./form_pc";
import { domain as doMainAPI } from "@/api/index";
import { useAppSelector } from "@/store";
import { SEO } from "@/util";
export default function Edit() {
  const { domain } = useParams();

  const [data, setData] = useState<any>({});

  const { token } = useAppSelector((state) => state.user);

  const init = async () => {
    const result: any = domain && (await doMainAPI.verifyAPI({ domain }));
    let data = { ...result.data, ...JSON.parse(result.data?.config) };
    console.log(data);

    data = {
      ...data,
      background: {
        color:data?.background && data?.background.color || "#000000",
        pattern:data?.background && data?.background.pattern || "",
        custom: data?.background&& data?.background.custom || "",
      },
      text: {
        color: data?.text?.color || "#ffffff",
        font: data?.text?.font || "font-poppinsSemiBold",
      },
      button: {
        background: data?.button?.background || "#FFAC03",
        text: data?.button?.text || "#ffffff",
      },
      card: {
        background: data?.card?.background || "#0F0F0F",
      },
      section1: {
        title: "",
        text: "",
        box:{
          left:{
            image:""
          },
          right:{
            title:"",
            text:"",
            image:"",
            bntText:"",
            bntUrl:""
          }
        }
      },
      section2:{
        title:"",
        text:"",
        bntText:"",
        bntUtl:"",
        image:""
      },
      section3:[],
      roadmap: data?.roadmap || [],
      about:{
        title:"",
        text:"",
        bntText:"",
        bntUrl:""
      }
    };
    setData({ ...data });
  };
  useLayoutEffect(() => {
    init();
  }, [domain]);

  const saveToken = async () => {
    console.log("data",data);
    
    // await doMainAPI.updateDoMain(data, token);
    // window.open(location.origin + "/" + data?.domain, "_blank");
  };

  data &&
    SEO(
      data?.domain
        ? { title: data?.domain || "", icon: data?.logo_url || "" }
        : { title: "$MEMES Memes.ac", icon: "/favicon.png" }
    );
  if (Object.keys(data).length === 0) return;
  return (
    <div className={`flex justify-center px-2 gap-4  min-h-screen items-start`}>
      <Fragment>
        <div className="max-w-6xl w-full overflow-hidden relative pb-48 sm:pb-0">
          <Domain {...data} />
          <FormMobile {...data} onChange={setData} save={()=>saveToken()}/>
        </div>
        <FormPc {...data} onChange={setData} save={()=>saveToken()}/>
      </Fragment>
    </div>
  );
}
