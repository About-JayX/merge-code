import { CSSTransition } from "react-transition-group";
import Button from "./button";

const BuyCard = ({ ...props }) => {
  const { show } = props;
  return (
    <div className="w-full h-auto relative bg-lyllw/40" id="buyCard">
      <div style={{ opacity: show ? 1 : 0 }}>
        <div className="w-full h-screen absolute z-10 opacity-100"></div>
        <div className="max-w-screen-xl mx-auto p-4 flex flex-col gap-y-8 items-center justify-center relative z-20">
          <div className="flex flex-col items-center font-bold gap-y-4 translate-y-28 z-50">
            <CSSTransition in={show} timeout={1000} classNames="home">
              <div className="flex flex-col items-center opacity-60">
                <p className="tracking-[0.5rem]">PEPE'S</p>
                <p className="tracking-[0.5rem]">BESTFRIEND</p>
              </div>
            </CSSTransition>
            <a
              href="#"
              className="hover:scale-110 transition-all ease-in-out duration-300"
            >
              <CSSTransition in={show} timeout={1000} classNames="scale">
                <div
                  className="bg-gradient-to-b from-gry to-blk p-6 rounded-full borde"
                  style={{ border: `1px solid ${props.text.color}` }}
                >
                  <div className="bg-gradient-to-tr from-lyllw to-yllw rounded-full p-4">
                    <div className="rounded-full w-40 h-40">
                      <div>svg demo</div>
                    </div>
                  </div>
                </div>
              </CSSTransition>
            </a>
          </div>
          <div
            className="bg-gradient-to-t from-white/20 to-black/20 flex flex-col gap-y-8 items-center justify-center w-full pt-24 pb-12 rounded-2xl border relative overflow-hidden backdrop-blur-lg"
            style={{ border: `1px solid ${props.text.color}` }}
          >
            <CSSTransition in={show} timeout={1000} classNames="about">
              <div className="flex flex-col justify-center items-center text-6xl lg:text-9xl leading-[3rem] lg:leading-[5rem]">
                <p className="text-primary bg-gradient-to-r  w-max t pointer-events-none text-stroke">
                  BRETT
                </p>
              </div>
            </CSSTransition>
            <div className="flex p-10 gap-x-3 flex-col md:flex-row gap-y-7 w-full">
              <div className="w-full">
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-full object-cover">
                    <iframe
                      src="https://iframe.cloudflarestream.com/023a54329fa9c24ef9fc6dab1dd8b428?preload=metadata"
                      frameBorder="0"
                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                      allowFullScreen={undefined}
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-full object-cover">
                    <iframe
                      src="https://iframe.cloudflarestream.com/04c4c207b282817c614356d7815e673b?preload=metadata"
                      frameBorder="0"
                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                      allowFullScreen={undefined}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <CSSTransition in={show} timeout={1000} classNames="hideToshow">
              <div className="flex gap-x-4">
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
                    Buy Now&nbsp;
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
                      <circle cx="8" cy="21" r="1"></circle>
                      <circle cx="19" cy="21" r="1"></circle>
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
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
                    See Charts&nbsp;
                  </Button>
                </a>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
