import Nav from "@/components/domain/Nav";
import { useEffect, useState } from "react";
import About from "@/components/domain/About";
import BuyCard from "@/components/domain/BuyCard";
import Utilities from "@/components/domain/Utilities";
import Home from "@/components/domain/Home";

export default function Domain({ ...props }) {
  const [showNav, setShowNav] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showBuyCard, setShowBuyCard] = useState(false);
  const [showUtilities, setShowUtilities] = useState(false);
  useEffect(() => {
    setShowNav(true);
    setShowHome(true);
    const homeTop = document.getElementById("about")?.offsetTop;
    const buyCardTop = document.getElementById("buyToken")?.offsetTop;
    const utilitiesTop = document.getElementById("roadmap")?.offsetTop;
    const handleScroll = () => {
      // 获取滚动位置：window.scrollY
      const scrollY = window.scrollY;
      if (homeTop && scrollY >= homeTop) setShowAbout(true);
      if (buyCardTop && scrollY >= buyCardTop) setShowBuyCard(true);
      if (utilitiesTop && scrollY >= utilitiesTop) setShowUtilities(true);
      
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`w-full h-full min-h-screen relative overflow-x-hidden ${props?.text?.font}`}>
      <div
        style={{
          color: props?.text?.color,
          backgroundImage: `url(${props?.background?.custom})`,
        }}
        className="bg-cover bg-no-repeat bg-fixed bg-center min-h-screen h-full"
      >
        {!props?.background?.custom && (
          <div
            className={`${props?.background?.pattern} absolute top-0 left-0 w-full h-full`}
          />
        )}
        <div
          className="absolute top-0 left-0 w-full h-full z-0 opacity-50"
          style={{
            background: props?.background?.color,
          }}
        />
        <Nav show={showNav} {...props} />
        <Home show={showHome} {...props} />
        <About show={showAbout} {...props} />
        <BuyCard show={showBuyCard} {...props} />
        <Utilities show={showUtilities} {...props} />
      </div>
    </div>
  );
}
