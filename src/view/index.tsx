import { Icon } from "@/components";
import Domain from "@/components/domain";
import Input from "@/components/memes/input";
import { data } from "@/mock";
import { Image, Typography } from "antd";
import Mbutton from "@/components/memes/button";
import { Ellipsis } from "antd-mobile";
import { debounce } from "lodash";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import Card from "@/components/memes/card";
const { Paragraph } = Typography;

export const View = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const [searchStatus, setSearchStatus] = useState<boolean>(false);
  const [availableStatus, setAvailableStatus] = useState<boolean>(false);

  const onSearchChange = debounce((value) => {
    setAvailableStatus(false);
    setSearchStatus(false);
    if (value === "") return;
    setSearch(value);
    setAvailableStatus(true);
    setSearchStatus(false);
  }, 1000);

  return (
    <div className="flex gap-20 flex-col pb-12">
      <header className="flex justify-center h-20 items-center sticky top-0  backdrop-blur-sm p-4 z-10">
        <nav className="w-full max-w-6xl flex items-center gap-4">
          <div className="flex gap-2 items-center text-2xl font-bold flex-1">
            <img className="w-12 h-12" />
            <span className=" hidden sm:block">Memes</span>
          </div>
          <div>
            <div className="flex gap-2 items-center text-lg font-normal">
              <Mbutton href="https://t.me/memes_ac_entry" target="_blank">
                <Icon name="telegram" />
              </Mbutton>
              <Mbutton href="https://x.com/memes_dot_ac" target="_blank">
                <Icon name="twitter" />
              </Mbutton>
              <Mbutton
                href="https://dexscreener.com/solana/fa7wk5hqnszx1dcvbncgaj2rvgsknkwtnu3jydxvrsnw"
                target="_blank"
              >
                <Icon name="dexscreener" />
              </Mbutton>
              <Mbutton
                href="https://pump.fun/coin/BoGovexaH9cMKZg6bFgDgsrqj81MvWu6hKdcNK4Mpump"
                target="_blank"
              >
                <Icon name="pump" />
              </Mbutton>
            </div>
          </div>
          <Mbutton
            type="primary"
            href="https://raydium.io/swap/?inputMint=sol&outputMint=BoGovexaH9cMKZg6bFgDgsrqj81MvWu6hKdcNK4Mpump"
            target="_blank"
          >
            buy $MEMES
          </Mbutton>
        </nav>
      </header>
      <main className="flex justify-center p-4">
        <div className="w-full max-w-6xl flex justify-center flex-col gap-4">
          <div className="text-center grid gap-2">
            <div className="memes-title flex justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase btn-shine">
                <span className="">Memes.ac</span>
              </h1>
            </div>

            <span className="text-[--text-color] text-sm sm:text-base md:text-lg">
              Memes.ac is designed for Meme (CTO) projects, offering website
              building, operations, and design services. Holders of the $MEMES
              token can participate in platform governance and voting, and enjoy
              exclusive benefits, helping your Meme project stand out in the
              community and advancing the development of autonomous communities.
            </span>
            <div className="flex justify-center mt-2">
              <Paragraph
                className="flex"
                copyable={{
                  text: "BoGovexaH9cMKZg6bFgDgsrqj81MvWu6hKdcNK4Mpump",
                }}
              >
                <Ellipsis
                  className="text-lg opacity-80"
                  direction="middle"
                  content={"BoGovexaH9cMKZg6bFgDgsrqj81MvWu6hKdcNK4Mpump"}
                />
              </Paragraph>
            </div>
          </div>
          <div className="mt-4">
            <Input
              loading={searchStatus}
              placeholder="domain"
              addonBefore={`memes.ac /`}
              enterButton={
                searchStatus ? "" : availableStatus ? "Available" : "Launch"
              }
              onSearch={(value) => {
                setAvailableStatus(false);
                if (availableStatus) {
                  navigate("/create", { state: { domain: search } });
                } else {
                  setSearchStatus(true);
                  onSearchChange && onSearchChange(value);
                }
              }}
              onChange={(event) => {
                setAvailableStatus(false);
                setSearchStatus(true);
                onSearchChange && onSearchChange(event.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center mt-8 gap-8">
            <a>
              <Image
                className="!w-full sm:!w-auto sm:!h-10"
                src="https://memes.ac/_next/static/media/detools.3691dc6a.png"
                preview={false}
              />
            </a>
            <a>
              <Image
                className="!w-full sm:!w-auto sm:!h-10"
                src="https://memes.ac/_next/static/media/detools.3691dc6a.png"
                preview={false}
              />
            </a>
            <a>
              <Image
                className="!w-full sm:!w-auto sm:!h-10"
                src="https://memes.ac/_next/static/media/detools.3691dc6a.png"
                preview={false}
              />
            </a>
            <a>
              <Image
                className="!w-full sm:!w-auto sm:!h-10"
                src="https://memes.ac/_next/static/media/detools.3691dc6a.png"
                preview={false}
              />
            </a>
          </div>
          <div className="flex flex-col mt-24 gap-8">
            <span
              className="uppercase text-3xl font-bold"
              style={{ display: "ruby" }}
            >
              <div className="w-1 h-6 bg-gradient-to-b from-[#A440FD] to-[#0DC8EC] rounded-lg mb-[-1px] mr-3" />
              Raid Leaders
            </span>
            <div className="grid grid-cols-1  gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[{}, {}, {}, {}].map((_, index) => (
                <a key={index} className="flex gap-4 text-current">
                  <div className="w-1 h-full relative flex justify-center">
                    <div className="border-l border-[#5F5F5F]/30 absolute top-0 left-[1.5px] w-[1px] h-full" />
                    <div className="w-1 h-14 bg-gradient-to-b from-[#A440FD] to-[#0DC8EC] rounded-lg mb-[-1px] absolute left-[0] top-0" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-[56px,1fr] items-center gap-4">
                      <div className="w-14 h-14 relative flex items-center justify-center">
                        <Image
                          src="https://memes.ac/_next/static/media/floralogo.15d752e9.png"
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
                        <span className="text-xl font-medium flex items-center break-all">
                          <Ellipsis direction="end" content="vitalik.eth" />
                          &nbsp;
                          <Icon name="authenticate" />
                        </span>
                        <span className="opacity-80 text-base break-all">
                          <Ellipsis direction="end" content="@VitalikButerin" />
                        </span>
                      </div>
                    </div>
                    <Paragraph
                      ellipsis={{ rows: 5, expandable: "collapsible" }}
                    >
                      The web is very extensive, and its development is complex.
                      My goal is to unify web development with design, adapting
                      to the needs in which I find myself
                    </Paragraph>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 mt-24">
            <span className="uppercase text-3xl font-bold ">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.map((itme, index) => (
                <Card key={index} href={itme.domain} target="_blank">
                  <div className="flex flex-col gap-4 items-center">
                    <Image
                      loading="lazy"
                      className="!w-52 !h-52 object-cover rounded-3xl"
                      src={itme.image}
                      preview={false}
                    />
                    <span className="text-xl font-medium break-all">
                      <Ellipsis direction="middle" content="vitalik.eth" />
                    </span>
                    <div className="flex gap-2">
                      <Mbutton>
                        <Icon name="telegram" />
                      </Mbutton>
                      <Mbutton>
                        <Icon name="twitter" />
                      </Mbutton>
                      <Mbutton>
                        <Icon name="dexscreener" />
                      </Mbutton>
                      <Mbutton>
                        <Icon name="pump" />
                      </Mbutton>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 mt-24">
            <span
              className="uppercase text-3xl font-bold"
              style={{ display: "ruby" }}
            >
              <div className="w-1 h-6 bg-gradient-to-b from-[#A440FD] to-[#0DC8EC] rounded-lg mb-[-1px] mr-3" />
              Raid Leaders
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default function Home() {
  const { domain } = useParams();

  return domain ? (
    <Domain {...data.find((itme) => itme.domain === domain)} />
  ) : (
    <View />
  );
}
