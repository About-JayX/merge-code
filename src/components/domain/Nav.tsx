import { CSSTransition } from "react-transition-group";
import Icon from "../icon";
import Button from "./button";
const Nav = ({ ...props }) => {
  const { show } = props;
  return (
    <CSSTransition in={show} timeout={1000} classNames="nav" unmountOnExit>
      <nav className="p-4 relative z-50 backdrop-blur-sm ">
        <div className="flex justify-between items-center  max-w-screen-xl mx-auto">
          <div className="flex gap-3 items-center justify-center">
            {props?.telegram_url && (
              <a
                href={props?.telegram_url}
                target="_blank"
                className="transition-all ease-in-out duration-300 hover:scale-[1.05] text-white"
              >
                <Icon
                  name="telegram"
                  className="!bg-[#2faae9] !w-8 !h-8 !rounded-lg p-1"
                />
              </a>
            )}
            {props?.twitter_url && (
              <a
                href={props?.twitter_url}
                target="_blank"
                className="transition-all ease-in-out duration-300 hover:scale-[1.05] text-white"
              >
                <Icon
                  name="twitter"
                  className="!bg-black !w-8 !h-8 !rounded-lg p-1"
                />
              </a>
            )}
            {props?.pump_url && (
              <a
                href={props?.pump_url}
                target="_blank"
                className="transition-all ease-in-out duration-300 hover:scale-[1.05]"
              >
                <Icon
                  name="pump"
                  className="!bg-[#54d690] !w-8 !h-8 !rounded-lg p-1"
                />
              </a>
            )}
            {props?.dexscreener_url && (
              <a
                href={props?.dexscreener_url}
                target="_blank"
                className="transition-all ease-in-out duration-300 hover:scale-[1.05] text-white"
              >
                <Icon
                  name="dexscreener"
                  className="!bg-black !w-8 !h-8 !rounded-lg p-1"
                />
              </a>
            )}
          </div>
          <div className="gap-12 items-center hidden lg:flex">
            <a
              href="#about"
              className="transition-all ease-in-out duration-300 hover:scale-[1.05] text-current"
            >
              About
            </a>
            <a
              href="#buyToken"
              className="transition-all ease-in-out duration-300 hover:scale-[1.05] text-current"
            >
              Buy Token
            </a>
            <a
              href="#roadmap"
              className="transition-all ease-in-out duration-300 hover:scale-[1.05] text-current"
            >
              Roadmap
            </a>
          </div>
          <div className="gap-x-4 items-center hidden lg:flex">
            <a
              href={`https://raydium.io/swap/?inputMint=sol&outputMint=${props?.contractAddress}`}
              target="_blank"
            >
              <Button
                style={{
                  background: props?.button?.background,
                  color: props?.button?.text,
                }}
                className={`${props?.button?.rounded}`}
              >
                Buy
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </CSSTransition>
  );
};
export default Nav;
