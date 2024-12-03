import { Icon } from "@/components";
import { Image, Typography } from "antd";
import Mbutton from "@/components/memes/button";
import { Ellipsis } from "antd-mobile";
import { useLayoutEffect, useMemo, useState } from "react";
import Card from "@/components/memes/card";
import { domain as domainAPI } from "@/api";
const { Paragraph } = Typography;
export default function MyDomain(){
    const [tokens, setTokens] = useState({ data: [], total: 1 });
    const init = useMemo(async () => {
        const result: any = await domainAPI.getListAPI({
          current: 1,
          pageSize: 12,
        });
        return result.data;
      }, []);
    
      useLayoutEffect(() => {
        init.then((data) => setTokens(data));
      }, [init]);
    return <div className="flex flex-col mt-16 sm:mt-24 gap-5 sm:gap-7">
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
              {!item.telegram_url &&
                !item.twitter_url &&
                !item.dexscreener_url &&
                !item.pump_url && <Mbutton className="!opacity-0" />}
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
}