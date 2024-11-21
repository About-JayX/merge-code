import { CSSTransition } from "react-transition-group";
import Icon from "../icon";
import Button from "./button";
const Nav = ({ ...props }) => {
  const { show } = props;
  return (
    <CSSTransition in={show} timeout={1000} classNames="nav" unmountOnExit>
      <nav className="p-4 relative z-50 backdrop-blur-sm ">
        <div className="flex justify-between items-center  max-w-screen-xl mx-auto">
          <div className="flex gap-4 items-center justify-center">
            {props.telegram && (
              <a
                href={props.telegram}
                target="_blank"
                className="transition-all ease-in-out duration-300 hover:scale-[1.05]"
              >
                <Icon
                  name="telegram"
                  className="!bg-[#2faae9] !w-8 !h-8 !rounded-lg p-1"
                />
              </a>
            )}
            {props.twitter && (
              <a
                href={props.twitter}
                target="_blank"
                className="transition-all ease-in-out duration-300 hover:scale-[1.05]"
              >
                <Icon
                  name="twitter"
                  className="!bg-black !w-8 !h-8 !rounded-lg p-1"
                />
              </a>
            )}
            {props.pumpfun && (
              <a
                href={props.pumpfun}
                target="_blank"
                className="transition-all ease-in-out duration-300 hover:scale-[1.05]"
              >
                <img
                  className="!bg-[#54d690] !w-8 !h-8 !rounded-lg p-1"
                  src="https://pump.fun/_next/image?url=%2Flogo.png&w=32&q=75"
                />
              </a>
            )}
          </div>
          <div className="gap-x-12 items-center hidden lg:flex">
            <a
              href="#about"
              className="transition-all ease-in-out duration-300 hover:scale-[1.05] text-current"
            >
              About
            </a>
            <a
              href="#buy"
              className="transition-all ease-in-out duration-300 hover:scale-[1.05] text-current"
            >
              How to buy
            </a>
            <a
              href="#memes"
              className="transition-all ease-in-out duration-300 hover:scale-[1.05] text-current"
            >
              Memes
            </a>
            <a
              href="#community"
              className="transition-all ease-in-out duration-300 hover:scale-[1.05] text-current"
            >
              Community
            </a>
          </div>
          <div className="gap-x-4 items-center hidden lg:flex">
            <a>
              <Button style={{ background: props.button.background,color:props.button.text }} className={`${props.button.rounded}`}>
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
