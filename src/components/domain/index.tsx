import Nav from "@/components/domain/Nav";
import { useEffect, useState } from "react";
import SwapList from "@/components/domain/SwapList";
import About from "@/components/domain/About";
import Tokenomics from "@/components/domain/Tokenomics";
import BuyCard from "@/components/domain/BuyCard";
import Utilities from "@/components/domain/Utilities";
import ContactUs from "@/components/domain/ContactUs";
import BreetBottom from "@/components/domain/BrettBottom";
import Home from "@/components/domain/Home";

export default function Domain({ ...props }) {
  const [showNav, setShowNav] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showTokenomics, setShowTokenomics] = useState(false);
  const [showBuyCard, setShowBuyCard] = useState(false);
  const [showUtilities, setShowUtilities] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);
  useEffect(() => {
    setShowNav(true);
    setShowHome(true);
    const homeTop = document.getElementById("about")?.offsetTop;
    const TokenomicsTop = document.getElementById("tokenomics")?.offsetTop;
    const buyCardTop = document.getElementById("buyCard")?.offsetTop;
    const utilitiesTop = document.getElementById("utilities")?.offsetTop;
    const contactTop = document.getElementById("contact")?.offsetTop;
    const handleScroll = () => {
      // 获取滚动位置：window.scrollY
      const scrollY = window.scrollY;
      if (homeTop && scrollY >= homeTop) setShowAbout(true);
      if (TokenomicsTop && scrollY >= TokenomicsTop) setShowTokenomics(true);
      if (buyCardTop && scrollY >= buyCardTop) setShowBuyCard(true);
      if (utilitiesTop && scrollY >= utilitiesTop) setShowUtilities(true);
      if (contactTop && scrollY >= contactTop) setShowContactUs(true);
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`w-full relative overflow-x-hidden ${props.text.font}`}>
      <div
        style={{
          color: props.text.color,
          backgroundImage: `url(${props.background.custom})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        {!props.background.custom && (
          <div
            className={`${props.background.pattern} absolute top-0 left-0 w-full h-full`}
          />
        )}
        <div
          className="absolute top-0 left-0 w-full h-full z-0 opacity-50"
          style={{
            background: props.background.color,
          }}
        />
        <Nav show={showNav} {...props}></Nav>
        <Home show={showHome} {...props}></Home>
        <SwapList {...props} />
        <About show={showAbout} {...props}></About>
        <Tokenomics show={showTokenomics} {...props}></Tokenomics>
        <BuyCard show={showBuyCard} {...props}></BuyCard>
        <Utilities show={showUtilities} {...props}></Utilities>
        <ContactUs show={showContactUs} {...props}></ContactUs>
        <BreetBottom {...props} />
      </div>
    </div>
  );
}
