import { CSSTransition } from "react-transition-group";
import Button from "./button";
import DomainImage from "./image";

const About = ({ ...props }) => {
  const { show } = props;
  if (!props?.about) return;
  return (
    <div className="w-full h-auto bg-lyllw/40 py-12 z-10 relative" id="about">
      <div
        className="max-w-screen-xl mx-auto p-4 "
        style={{ opacity: show ? 1 : 0 }}
      >
        {props?.ticker && (
          <div className="flex justify-between items-center gap-x-4 flex-col lg:flex-row py-4 ">
            <p className="text-primary text-4xl sm:text-6xl leading-[2rem] sm:leading-[5rem] text-nowrap bg-gradient-to-r  w-max pointer-events-none">
              {props?.ticker}
            </p>
            <CSSTransition in={show} timeout={1000} classNames="lines">
              <div
                className="w-full h-[1px] hidden sm:block"
                style={{ border: `1px solid ${props?.text?.color}` }}
              />
            </CSSTransition>
            <CSSTransition in={show} timeout={1000} classNames="about">
              <p className="tracking-[0.5rem] font-bold w-max whitespace-nowrap">
                {props?.ticker}
              </p>
            </CSSTransition>
          </div>
        )}

        <CSSTransition in={show} timeout={1000} classNames="hideToshow">
          <div
            className="bg-gradient-to-t from-yllw/50 to-lyllw/50  backdrop-blur-lg  flex flex-col lg:flex-row gap-y-8 items-center justify-center w-full p-12 rounded-2xl border gap-8"
            style={{ border: `1px solid ${props?.text?.color}` }}
          >
            <div className="w-64 h-64">
              <DomainImage src={props?.about?.image} />
            </div>
            <CSSTransition in={show} timeout={1000} classNames="about">
              <div className="flex flex-col justify-center gap-y-4 w-full lg:w-1/2 text-center lg:text-left">
                <h1 className="text-stroke-sm text-5xl">
                  {props?.about?.title}
                </h1>
                <p className="text-2xl opacity-60">{props?.about?.text}</p>
              </div>
            </CSSTransition>
          </div>
        </CSSTransition>
        <CSSTransition in={show} timeout={1000} classNames="about">
          <div className="flex gap-x-4 items-center justify-center mt-5 mx-auto">
            {props?.telegram && (
              <a href="https://t.me/basedbrett">
                <Button
                  style={{
                    display: "ruby",
                    background: props?.button?.background,
                    color: props?.button?.text,
                  }}
                  className={`${props?.button?.rounded} py-3`}
                >
                  Telegram&nbsp;
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
                  </svg>
                </Button>
              </a>
            )}
            {props?.twitter && (
              <a href="https://twitter.com/BasedBrett">
                <Button
                  style={{
                    display: "ruby",
                    background: props?.button?.background,
                    color: props?.button?.text,
                  }}
                  className={`${props?.button?.rounded} py-3`}
                >
                  Twitter&nbsp;
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </Button>
              </a>
            )}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};
export default About;
