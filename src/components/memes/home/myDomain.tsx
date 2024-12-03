import { Icon } from "@/components";
import { Image, Typography } from "antd";
import Mbutton from "@/components/memes/button";
import { Ellipsis } from "antd-mobile";
import { useEffect, useState } from "react";
import Card from "@/components/memes/card";
import { domain as domainAPI } from "@/api";

const { Paragraph } = Typography;

interface Token {
  domain: string;
  logo_url?: string;
  name?: string;
  contract_address?: string;
  telegram_url?: string;
  twitter_url?: string;
  dexscreener_url?: string;
  pump_url?: string;
}

export default function MyDomain() {
  const [tokens, setTokens] = useState<{ data: Token[]; total: number }>({
    data: [],
    total: 1,
  });

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const result:any = await domainAPI.getListAPI({
          current: 1,
          pageSize: 12,
        });
        setTokens(result.data);
      } catch (error) {
        console.error("Error fetching tokens:", error);
      }
    };

    fetchTokens();
  }, []);

  return (
    <div className="flex flex-col mt-16 sm:mt-24 gap-5 sm:gap-7">
      <header className="uppercase text-xl sm:text-3xl font-bold">
        <div className="flex items-center relative gap-3">
          <div className="w-1 h-full">
            <div className="w-1 h-full bg-gradient-to-b from-[#A440FD] to-[#0DC8EC] rounded-lg absolute top-0 left-0" />
          </div>
          <span>
            Projects served by&nbsp;
            <span className="font-extrabold bg-gradient-to-r from-[#9F44FC] to-[#10C5EC] bg-clip-text text-transparent">
              Memes.ac
            </span>
            <br />(Partial CTO)
          </span>
        </div>
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {tokens.data.map((item, index) => (
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
                src={item.logo_url || "/default-logo.png"}
                alt={item.name || "Project Logo"}
                fallback="/default-logo.png"
                preview={false}
              />
              <span className="text-xl font-medium break-all">
                <Ellipsis direction="middle" content={item.name || "Unknown"} />
              </span>
              <Paragraph
                className="flex"
                copyable={{
                  text: item?.contract_address || "",
                }}
              >
                <Ellipsis
                  className="text-sm opacity-80"
                  direction="middle"
                  content={item?.contract_address || "No Address"}
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
                  !item.pump_url && (
                    <Mbutton className="!opacity-0" aria-hidden="true" />
                  )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
