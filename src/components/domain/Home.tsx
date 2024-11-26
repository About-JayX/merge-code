import { Fragment, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Button from "./button";
import { Ellipsis } from "antd-mobile";
import DomainImage from "./image";
import { copy } from "@/util";
import { message } from "antd";

const Home = ({ ...props }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { show } = props;
  const [showLine, setShowLine] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowLine(true);
    }, 1500);
  }, []);
  return (
    <Fragment>
      {contextHolder}
      <div className="w-full  h-auto relative pb-12 z-40 bg-lyllw/40" id="home">
        <div className="max-w-screen-xl mx-auto p-4 flex flex-col gap-y-12 items-center justify-center relative z-20">
          <div className="grid items-center sm:grid-cols-[1fr,1fr] gap-4 sm:gap-8 sm:px-16">
            <div className="w-full flex justify-center sm:justify-end">
              <div className="w-64 h-64">
                <DomainImage src={props?.image} />
              </div>
            </div>

            <CSSTransition in={show} classNames="home" timeout={1000}>
              <div className="flex flex-col  w-full  items-center sm:items-start">
                <p className="font-primary font-semibold tracking-[0.5rem]">
                  {props?.ticker}
                </p>
                <p className="font-primary text-7xl sm:text-8xl bg-gradient-to-r  text-stroke pointer-events-none">
                  {props?.name}
                </p>

                <p className="font-primary text-3xl tracking-[0.5rem] text-center sm:text-left">
                  {props?.ticker}
                </p>
              </div>
            </CSSTransition>
          </div>
          {props?.description && (
            <CSSTransition in={show} classNames="home" timeout={1000}>
              <p className="font-primary text-2xl tracking-widest text-center opacity-60">
                {props?.description}
              </p>
            </CSSTransition>
          )}

          {props?.contractAddress && (
            <CSSTransition in={showLine} classNames="lines" timeout={1000}>
              <div
                className="h-[1px]"
                style={{ border: `1px solid ${props?.text?.color}` }}
              />
            </CSSTransition>
          )}
          <div className="flex flex-col items-center justify-center gap-y-12">
            {props?.contractAddress && (
              <button
                className="px-4 py-3 border rounded-full bg-gradient-to-tr from-yllw/10 to-lyllw/10 flex gap-x-3 items-center font-semibold z-50 hover:scale-[1.05] hover:from-yllw/20 hover:to-lyllw/20 transition-all ease-in-out duration-300 text-sm lg:text-xl"
                style={{ border: `1px solid ${props?.text?.color}` }}
                onClick={async () => {
                  await copy(props?.contractAddress);
                  messageApi.success("Copy Success");
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                </svg>
                <p className="drop-shadow-lg break-all">
                  <Ellipsis
                    direction="middle"
                    content={props?.contractAddress}
                  />
                </p>
              </button>
            )}
            {props?.contractAddress && (
              <CSSTransition in={show} classNames="home" timeout={1000}>
                <div className="flex  md:flex-row gap-x-4 gap-y-5 justify-center flex-wrap">
                  <a
                    href={`https://raydium.io/swap/?inputMint=sol&outputMint=${props?.contractAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      style={{
                        display: "ruby",
                        background: props?.button?.background,
                        color: props?.button?.text,
                      }}
                      className={`${props?.button?.rounded} py-3`}
                    >
                      Buy {props?.ticker}
                    </Button>
                  </a>
                </div>
              </CSSTransition>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
