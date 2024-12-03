import { Icon } from "@/components";
import Domain from "@/components/domain";
import Input from "@/components/memes/input";
import { Image, Typography } from "antd";
import Mbutton from "@/components/memes/button";
import { Ellipsis } from "antd-mobile";
import { debounce } from "lodash";
import { useCallback, useLayoutEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import partner from "@/config/partner";
import { domain as domainAPI } from "@/api";
import { SEO } from "@/util";
import Twitter from "@/components/memes/home/twitter";
import MyDomain from "@/components/memes/home/myDomain";
const { Paragraph } = Typography;

export const View = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [search, setSearch] = useState<string>("");
  const [searchStatus, setSearchStatus] = useState<boolean>(false);
  const [availableStatus, setAvailableStatus] = useState<boolean>(false);
  const onSearchChange = useCallback(
    debounce(async (value) => {
      if (value === "") {
        setAvailableStatus(false);
        setSearchStatus(false);
        return;
      }
      setSearch(value);
      const result: any = await domainAPI.verifyAPI({ domain: value });
      if (!result.data) {
        setAvailableStatus(true);
      }
      setSearchStatus(false);
    }, 1000),
    []
  );

  return (
    <div className="flex sm:gap-20 flex-col pb-12">
      <main className="bg-[#181a20] flex justify-center p-4 pt-20 sm:pt-40 pb-8 sm:pb-24 text-white">
        <div className="w-full max-w-6xl flex justify-center flex-col gap-6 sm:gap-10">
          <div className="text-center grid gap-4 sm:gap-2 justify-items-center z-10">
            <div className="memes-title flex justify-center">
              <h1 className="text-4xl md:text-5xl font-bold uppercase btn-shine">
                {t("home.title")}
              </h1>
            </div>

            <span className="text-white/50 text-sm sm:text-base md:text-lg font-normal">
              {t("home.text")}
            </span>
            <div className="flex sm:hidden gap-1 sm:gap-2 items-center text-lg ">
              <Mbutton
                href="https://t.me/memes_ac_entry"
                target="_blank"
                className="!min-w-9 !min-h-9 sm:!min-w-10 sm:!min-h-10"
              >
                <Icon name="telegram" />
              </Mbutton>
              <Mbutton
                href="https://x.com/memes_dot_ac"
                target="_blank"
                className="!min-w-9 !min-h-9 sm:!min-w-10 sm:!min-h-10"
              >
                <Icon name="twitter" />
              </Mbutton>
              <Mbutton
                className="!min-w-9 !min-h-9 sm:!min-w-10 sm:!min-h-10"
                href="https://dexscreener.com/solana/fa7wk5hqnszx1dcvbncgaj2rvgsknkwtnu3jydxvrsnw"
                target="_blank"
              >
                <Icon name="dexscreener" />
              </Mbutton>
              <Mbutton
                className="!min-w-9 !min-h-9 sm:!min-w-10 sm:!min-h-10"
                href="https://pump.fun/coin/BoGovexaH9cMKZg6bFgDgsrqj81MvWu6hKdcNK4Mpump"
                target="_blank"
              >
                <Icon name="pump" />
              </Mbutton>
            </div>
            <div className="flex justify-center mt-2">
              <Paragraph
                className="flex !text-white"
                copyable={{
                  text: t("home.contractAddress"),
                }}
              >
                <Ellipsis
                  className="text-lg opacity-80"
                  direction="middle"
                  content={t("home.contractAddress")}
                />
              </Paragraph>
            </div>
          </div>
          <Input
            loading={searchStatus}
            placeholder="domain"
            addonBefore={`memes.ac /`}
            enterButton={
              searchStatus
                ? ""
                : search
                ? availableStatus
                  ? "Available"
                  : "Registered"
                : "Launch"
            }
            onSearch={(_) => {
              setAvailableStatus(false);
              setSearch(_);
              if (availableStatus) {
                navigate("/create", { state: { domain: search } });
              } else {
                setSearchStatus(true);
                onSearchChange && onSearchChange(_);
              }
            }}
            onChange={(event) => {
              setAvailableStatus(false);
              setSearchStatus(true);
              setSearch(event.target.value);
              onSearchChange && onSearchChange(event.target.value);
            }}
          />
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center mt-8 gap-4 sm:gap-8">
            {partner.map((res, index) => (
              <a key={index} target="_blank" href={res.url}>
                <Image
                  className="!w-auto !h-10 !object-contain"
                  src={res?.img}
                  preview={false}
                />
              </a>
            ))}
          </div>
        </div>
      </main>
      <main className="flex justify-center px-4">
        <div className="w-full max-w-6xl flex justify-center flex-col gap-2 sm:gap-10">
          <Twitter />
          <MyDomain />
        </div>
      </main>
    </div>
  );
};

export default function Home() {
  const { domain } = useParams();

  const [datas, setDatas] = useState<any>({});

  const init = useMemo(async () => {
    const result: any = domain && (await domainAPI.verifyAPI({ domain }));
    let data = {
      ...result?.data,
      ...(result?.data?.config && JSON.parse(result?.data?.config)),
    };
    return {
      ...data,
      image: data?.logo_url,
      contractAddress: data?.contract_address,
    };
  }, [domain]);

  useLayoutEffect(() => {
    init.then((data) => setDatas(data));
  }, [init]);

  SEO(
    datas?.domain
      ? { title: datas?.domain || "", icon: datas?.image || "" }
      : { title: "$MEMES Memes.ac", icon: "/favicon.png" }
  );

  return domain ? <Domain {...datas} /> : <View />;
}
