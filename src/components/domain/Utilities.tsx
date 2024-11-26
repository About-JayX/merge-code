import { CSSTransition } from "react-transition-group";
import { Fragment } from "react";

const Utilities = ({ ...props }) => {
  if (!props?.roadmap) return;
  const { show } = props;
  return (
    <div className="w-full h-auto py-12 relative" id="roadmap">
      <div
        className="max-w-screen-md mx-auto p-4 flex flex-col items-center justify-center relative z-20"
        style={{ opacity: show ? 1 : 0 }}
      >
        <CSSTransition in={show} timeout={1000} classNames="hideToshow">
          <p className="font-age text-4xl lg:text-6xl leading-[2rem] lg:leading-[5rem] bg-gradient-to-r  bg-clip-text w-max pointer-events-none p-4">
            ROADMAP
          </p>
        </CSSTransition>

        <div className="w-full flex flex-col gap-y-4">
          {props?.roadmap?.length >=0 && props?.roadmap?.map((item: any, index: number) => (
            <Fragment key={index}>
              <CSSTransition in={show} timeout={1000} classNames="hideToshow">
                <div
                  className="bg-gradient-to-t from-yllw/50 to-lyllw/50 flex flex-col lg:flex-row gap-y-8 items-center w-full p-12 rounded-2xl border backdrop-blur-lg"
                  style={{ border: `1px solid ${props?.text?.color}` }}
                >
                  <div className="flex flex-col justify-center gap-y-4 w-full text-center lg:text-left">
                    <p className="font-age text-3xl lg:text-4xl">
                      {item.title}
                    </p>
                    <p className="opacity-60">{item.text}</p>
                    <div className="flex gap-x-3 items-center justify-center lg:items-start lg:justify-start group w-full"></div>
                  </div>
                </div>
              </CSSTransition>
              {index + 1 >= props?.roadmap?.length &&
                props?.roadmap?.length <= 3 &&
                [{}, {}, {}].map((_, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-t from-yllw/50 to-lyllw/50 flex flex-col lg:flex-row gap-y-8 items-center w-full p-12 rounded-2xl border backdrop-blur-lg opacity-0"
                    style={{ border: `1px solid ${props?.text?.color}` }}
                  >
                    <div className="flex flex-col justify-center gap-y-4 w-full text-center lg:text-left">
                      <p className="font-age text-3xl lg:text-4xl">title</p>
                      <p className="opacity-60">text</p>
                      <div className="flex gap-x-3 items-center justify-center lg:items-start lg:justify-start group w-full"></div>
                    </div>
                  </div>
                ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Utilities;
