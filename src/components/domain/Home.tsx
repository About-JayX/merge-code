import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Button from "./button";
import { Ellipsis } from "antd-mobile";

const Home = ({ ...props }) => {
  const { show } = props;
  const [showLine, setShowLine] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowLine(true);
    }, 1500);
  }, []);
  return (
    <div className="w-full  h-auto relative pb-24 z-40 bg-lyllw/40" id="home">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col gap-y-12 items-center justify-center relative z-20">
        <div className="flex items-center justify-center flex-col md:flex-row gap-y-8">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div>1</div>
          </div>

          <CSSTransition in={show} classNames="home" timeout={1000}>
            <div className="flex flex-col  w-full lg:w-1/2 items-center lg:items-start">
              <p className="font-primary font-semibold tracking-[0.5rem]">
                INTRODUCING
              </p>
              <p className="font-primary text-7xl lg:text-9xl bg-gradient-to-r  text-stroke pointer-events-none">
                BRETT
              </p>
              <p className="font-primary text-3xl tracking-[0.5rem] text-center lg:text-left">
                PEPE’S best friend on BASE
              </p>
            </div>
          </CSSTransition>
        </div>
        <CSSTransition in={show} classNames="home" timeout={1000}>
          <p className="font-primary text-2xl tracking-[0.5rem] text-center opacity-60">
            one of cryptos most significant cultural icons and the mascot of
            BASE chain
          </p>
        </CSSTransition>
        <CSSTransition in={showLine} classNames="lines" timeout={1000}>
          <div className="h-[1px] bg-white/50"></div>
        </CSSTransition>
        <div className="flex flex-col items-center justify-center gap-y-12">
          <button
            className="px-4 py-3 border rounded-full bg-gradient-to-tr from-yllw/10 to-lyllw/10 flex gap-x-3 items-center font-semibold z-50 hover:scale-[1.05] hover:from-yllw/20 hover:to-lyllw/20 transition-all ease-in-out duration-300 text-sm lg:text-xl"
            style={{ border: `1px solid ${props.text.color}` }}
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
                content={"0x532f27101965dd16442E59d40670FaF5eBB142E4"}
              />
            </p>
          </button>
          <CSSTransition in={show} classNames="home" timeout={1000}>
            <div className="flex  md:flex-row gap-x-4 gap-y-5 justify-center flex-wrap">
              <a
                href="https://kyberswap.com/swap/base/eth-to-brett"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  style={{
                    display: "ruby",
                    background: props.button.background,
                    color: props.button.text,
                  }}
                  className={`${props.button.rounded} py-3`}
                >
                  Buy on Kyberswap&nbsp;{" "}
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
                    <path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"></path>
                    <path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="m18 22-3-3 3-3"></path>
                    <path d="m6 2 3 3-3 3"></path>
                  </svg>
                </Button>
              </a>
              <a
                href="https://www.okx.com/web3/dex-swap#inputChain=8453&amp;inputCurrency=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee&amp;outputChain=8453&amp;outputCurrency=0x532f27101965dd16442E59d40670FaF5eBB142E4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  style={{
                    display: "ruby",
                    background: props.button.background,
                    color: props.button.text,
                  }}
                  className={`${props.button.rounded} py-3`}
                >
                  Buy on OKX&nbsp;{" "}
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
                    <path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"></path>
                    <path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="m18 22-3-3 3-3"></path>
                    <path d="m6 2 3 3-3 3"></path>
                  </svg>
                </Button>
              </a>
              <a
                href="https://www.dextools.io/app/en/base/pair-explorer/0x404e927b203375779a6abd52a2049ce0adf6609b?t=1708765825026"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  style={{
                    display: "ruby",
                    background: props.button.background,
                    color: props.button.text,
                  }}
                  className={`${props.button.rounded} py-3`}
                >
                  Dextools Chart
                </Button>
              </a>
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default Home;
