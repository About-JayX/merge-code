import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

const Utilities = ({ ...props }) => {
  const { show } = props;
  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  useEffect(() => {
    show &&
      setTimeout(() => {
        setShowDiv1(true);
      }, 500);
    showDiv1 &&
      setTimeout(() => {
        setShowDiv2(true);
      }, 500);
  }, [show, showDiv1, showDiv2]);
  return (
    <div className="w-full h-auto py-24 relative" id="utilities">
      <div
        className="max-w-screen-md mx-auto p-4 flex flex-col items-center justify-center relative z-20"
        style={{ opacity: show ? 1 : 0 }}
      >
        <CSSTransition in={show} timeout={1000} classNames="hideToshow">
          <p className="font-age text-4xl lg:text-6xl leading-[2rem] lg:leading-[5rem] bg-gradient-to-r  bg-clip-text w-max pointer-events-none p-4">
            UTILITIES
          </p>
        </CSSTransition>

        <div className="w=full flex flex-col gap-y-4">
          <CSSTransition in={show} timeout={1000} classNames="hideToshow">
            <div
              className="bg-gradient-to-t from-yllw/50 to-lyllw/50 flex flex-col lg:flex-row gap-y-8 items-center w-full p-12 rounded-2xl border backdrop-blur-lg"
              style={{ border: `1px solid ${props.text?.color}` }}
            >
              <CSSTransition in={show} timeout={1000} classNames="about">
                <div className="flex flex-col justify-center gap-y-4 w-full text-center lg:text-left">
                  <p className="font-age text-3xl lg:text-4xl">
                    Strong Partnerships:
                  </p>
                  <p className="opacity-60">
                    BRETT has forged strategic partnerships with leading
                    companies in the crypto space, which will help to ensure the
                    project's long-term viability and growth
                  </p>
                  <div className="flex gap-x-3 items-center justify-center lg:items-start lg:justify-start group w-full"></div>
                </div>
              </CSSTransition>
            </div>
          </CSSTransition>
          <CSSTransition in={showDiv1} timeout={1000} classNames="hideToshow">
            <div
              style={{ opacity: showDiv1 ? 1 : 0,border: `1px solid ${props.text?.color}` }}
              className="bg-gradient-to-t from-yllw/50 to-lyllw/50 flex flex-col lg:flex-row gap-y-8 items-center w-full p-12 rounded-2xl border backdrop-blur-lg"
            >
              <CSSTransition in={showDiv1} timeout={1000} classNames="about">
                <div className="flex flex-col justify-center gap-y-4 w-full text-center lg:text-left">
                  <p className="font-age text-3xl lg:text-4xl">
                    Growing Ecosystem:
                  </p>
                  <p className="opacity-60">
                    The Base Chain's ecosystem is rapidly expanding, with
                    numerous projects and applications being built on the
                    platform. This growing ecosystem provides a strong
                    foundation for BRETT's success, as it allows the platform to
                    leverage the resources and expertise of other projects in
                    the space. As the Base Chain continues to grow, so too will
                    the potential for BRETT to thrive and expand its offerings.
                  </p>
                  <div className="flex gap-x-3 items-center justify-center lg:items-start lg:justify-start group w-full"></div>
                </div>
              </CSSTransition>
            </div>
          </CSSTransition>
          <CSSTransition in={showDiv2} timeout={1000} classNames="hideToshow">
            <div
              style={{
                opacity: showDiv2 ? 1 : 0,
                border: `1px solid ${props.text?.color}`,
              }}
              className="bg-gradient-to-t from-yllw/50 to-lyllw/50 flex flex-col lg:flex-row gap-y-8 items-center w-full p-12 rounded-2xl border backdrop-blur-lg"
            >
              <CSSTransition in={showDiv2} timeout={1000} classNames="about">
                <div className="flex flex-col justify-center gap-y-4 w-full text-center lg:text-left">
                  <p className="font-age text-3xl lg:text-4xl">
                    Strong Community Support:
                  </p>
                  <p className="opacity-60">
                    The Base Chain and BRETT have garnered significant support
                    from the crypto community, with many prominent figures
                    expressing their bullish outlook on the project. This strong
                    community backing provides a solid foundation for the
                    project's growth and success, as it ensures that there is a
                    dedicated user base to support and promote the memecoin and
                    blockchain
                  </p>
                  <div className="flex gap-x-3 items-center justify-center lg:items-start lg:justify-start group w-full"></div>
                </div>
              </CSSTransition>
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};
export default Utilities;
