import { Icon } from "@/components";
import Domain from "@/components/domain";
import Input from "@/components/memes/input";
import { Image, Typography } from "antd";
import Mbutton from "@/components/memes/button";
import { Ellipsis } from "antd-mobile";
import { debounce } from "lodash";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import Card from "@/components/memes/card";
import partner from "@/config/partner";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { domain as domainAPI } from "@/api";
const { Paragraph } = Typography;

export const View = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [search, setSearch] = useState<string>("");
  const [searchStatus, setSearchStatus] = useState<boolean>(false);
  const [availableStatus, setAvailableStatus] = useState<boolean>(false);
  const [tokens, setTokens] = useState({ data: [], total: 1 });
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
  const init = async () => {
    const result: any = await domainAPI.getListAPI({
      current: 1,
      pageSize: 12,
    });
    setTokens(result.data);
  };
  useEffect(() => {
    init();
  }, []);
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
              searchStatus ? "" : availableStatus ? "Available" : "Launch"
            }
            onSearch={(_) => {
              setAvailableStatus(false);
              if (availableStatus) {
                navigate("/create", { state: { domain: search } });
              } else {
                setSearchStatus(true);
              }
            }}
            onChange={(event) => {
              setAvailableStatus(false);
              setSearchStatus(true);
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
          <div className="flex flex-col mt-16 sm:mt-4 gap-4 sm:gap-7">
            <span
              className="uppercase text-xl sm:text-3xl font-bold"
              style={{ display: "-webkit-box" }}
            >
              <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-[#A440FD] to-[#0DC8EC] rounded-lg mt-[6px] mr-2 sm:mr-3" />
              {t("twitter.title")}
            </span>
            <div className="grid grid-cols-1  gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Object.assign(
                [],
                t("twitter.data", { returnObjects: true })
              ).map((item: any, index) => (
                <div key={index} className="flex gap-3 sm:gap-4 text-current">
                  <div className="w-1 h-full relative flex justify-center">
                    <div className="border-l border-[#5F5F5F]/30 absolute top-0 left-[1.5px] w-[1px] h-full" />
                    <div className="w-1 h-14 bg-gradient-to-b from-[#A440FD] to-[#0DC8EC] rounded-lg mb-[-1px] absolute left-[0] top-0" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <a
                      href={item.url}
                      target="_blank"
                      className="grid grid-cols-[56px,1fr] items-center gap-4 text-current"
                    >
                      <div className="w-14 h-14 relative flex items-center justify-center">
                        <Image
                          src={item.avatarSrc}
                          width="100%"
                          height="100%"
                          className="w-full h-full rounded-full"
                          preview={false}
                        />
                        <div className="absolute bottom-0 w-[24px] h-[24px] right-[-3px] bg-black p-1 rounded-full flex  justify-center items-center border border-[#5F5F5F]/30">
                          <Icon
                            name="twitter"
                            className="w-[calc(100%-3px)] h-[calc(100%-3px)]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col w-full">
                        <span className="text-lg sm:text-xl font-medium flex items-center break-all">
                          <Ellipsis direction="end" content={item.title} />
                          &nbsp;
                          {item.authenticateStatus && (
                            <Icon name="authenticate" />
                          )}
                        </span>
                        <span className="opacity-80 text-sm sm:text-base break-all">
                          <Ellipsis direction="end" content={item.name} />
                        </span>
                      </div>
                    </a>
                    <Paragraph
                      className="text-sm sm:text-base !text-[--text-color]"
                      ellipsis={{
                        rows: 4,
                        expandable: "collapsible",
                        symbol: (expanded) =>
                          expanded ? <UpOutlined /> : <DownOutlined />,
                      }}
                    >
                      {item.text}
                    </Paragraph>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col mt-16 sm:mt-24 gap-5 sm:gap-7">
            <span className="uppercase text-xl sm:text-3xl font-bold ">
              <div className="flex items-center relative gap-3">
                <div className="w-1 h-full">
                  <div className="w-1 h-full bg-gradient-to-b from-[#A440FD] to-[#0DC8EC] rounded-lg absolute top-0 left-0" />
                </div>
                <span className="whitespace-break-spaces">
                  Projects served by&nbsp;
                  <span className="font-extrabold bg-gradient-to-r from-[#9F44FC]  to-[#10C5EC] bg-clip-text text-transparent">
                    Memes.ac
                  </span>
                  {`\n`}(Partial CTO)
                </span>
              </div>
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {tokens.data.map((item: any, index) => (
                <Card
                  key={index}
                  href={`/${item.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col gap-2 sm:gap-3 items-center">
                    <Image
                      loading="lazy"
                      className="!w-32 !h-32 sm:!w-52 sm:!h-52 object-cover rounded-2xl sm:rounded-3xl"
                      src={item.logo_url || ""}
                      preview={false}
                    />
                    <span className="text-xl font-medium break-all">
                      <Ellipsis direction="middle" content={item.name} />
                    </span>
                    <Paragraph
                      className="flex"
                      copyable={{
                        text: item?.contract_address,
                      }}
                    >
                      <Ellipsis
                        className="text-sm opacity-80"
                        direction="middle"
                        content={item?.contract_address}
                      />
                    </Paragraph>
                    <div className="flex gap-1 sm:gap-2 flex-wrap justify-center">
                      {item.telegram_url && (
                        <Mbutton
                          href={item.telegram_url}
                          target="_blank"
                          className="!min-w-7 !min-h-7 sm:!min-w-10 sm:!min-h-10"
                        >
                          <Icon name="telegram" />
                        </Mbutton>
                      )}
                      {item.twitter_url && (
                        <Mbutton
                          href={item.twitter_url}
                          target="_blank"
                          className="!min-w-7 !min-h-7 sm:!min-w-10 sm:!min-h-10"
                        >
                          <Icon name="twitter" />
                        </Mbutton>
                      )}
                      {item.dexscreener_url && (
                        <Mbutton
                          href={item.dexscreener_url}
                          target="_blank"
                          className="!min-w-7 !min-h-7 sm:!min-w-10 sm:!min-h-10"
                        >
                          <Icon name="dexscreener" />
                        </Mbutton>
                      )}
                      {item.pump_url && (
                        <Mbutton
                          href={item.pump_url}
                          target="_blank"
                          className="!min-w-7 !min-h-7 sm:!min-w-10 sm:!min-h-10"
                        >
                          <Icon name="pump" />
                        </Mbutton>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export const SEO = ({
  title = "",
  icon = "",
}: {
  title?: string;
  icon?: string;
}) => {
  document.title = title;

  let favicon: any = document.querySelector('link[rel="icon"]');
  if (favicon) {
    // 如果存在 favicon，直接修改 href
    favicon.setAttribute("href", icon);
  } else {
    // 如果不存在，创建新的 favicon
    favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = icon;
    document.head.appendChild(favicon);
  }
};

export default function Home() {
  const { domain } = useParams();

  const [datas, setDatas] = useState<any>({});

  const init = async () => {
    const result: any = domain && (await domainAPI.verifyAPI({ domain }));

    console.log(result, "result_");

    let data = { ...result.data, ...JSON.parse(result.data.config) };

    setDatas({
      ...data,
      image: data?.logo_url,
      contractAddress: data?.contract_address,
    });
  };
  useLayoutEffect(() => {
    init();
  }, []);

  SEO(
    domain
      ? { title: datas?.domain || "", icon: datas?.image || "" }
      : { title: "$MEMES Memes.ac", icon: "/favicon.png" }
  );

  return domain ? <Domain {...datas} /> : <View />;
}
