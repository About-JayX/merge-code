import DogxLogo from "@/config/project/dogxlogo.png";
import MemesLogo from "@/config/project/memeslogo.png";
import HunterLogo from "@/config/project/hunterlogo.png";
import KittyLogo from "@/config/project/kittylogo.png";
import WsbLogo from "@/config/project/wsblogo.png";
import FloraLogo from "@/config/project/floralogo.png";
import HodlwolfLogo from "@/config/project/hodlwolflogo.png";
import MemescrazeLogo from "@/config/project/memescrazelogo.png";
import _public from "./public";
import message from "./message";
export default {
  translation: {
    language: "English (American)",
    lang: "EN",
    home: {
      title: "Memes.ac",
      text: "Fast Websites for MEMES Projects",
      contractAddress: "BoGovexaH9cMKZg6bFgDgsrqj81MvWu6hKdcNK4Mpump",
      bnt1: {
        title: "Buy $MEMES",
        url: "https://raydium.io/swap/?inputMint=sol&outputMint=BoGovexaH9cMKZg6bFgDgsrqj81MvWu6hKdcNK4Mpump",
      },
      bnt2: {
        title: "X/Twitter",
        url: "https://x.com/memes_dot_ac",
      },
    },
    project: {
      title: [
        { content: "Projects On" },
        { content: "Memes.ac", status: true },
      ],
      text: [
        { content: "Discover and explore" },
        { content: "MEMES projects", status: true },
        {
          content:
            "built with our fast and modern website builder.\nJoin the community and showcase your project.",
        },
      ],
      data: [],
    },
    twitter: {
      title: "Raid Leaders",
      text: "Twitter",
      data: [
        {
          bgSrc: "/assets/img/twitter/memesbanner.png",
          avatarSrc: MemesLogo,
          title: "Memes.ac",
          name: "@Memes_web3",
          text: "The web is very extensive, and its development is complex. My goal is to unify web development with design, adapting to the needs in which I find myself",
          url: "https://x.com/memes_dot_ac",
          authenticateStatus: true,
        },
        {
          bgSrc: "/assets/img/twitter/dogxbanner.png",
          avatarSrc: DogxLogo,
          title: "DOGX.AI",
          name: "@DogX_AI",
          text: "The web is very extensive, and its development is complex. My goal is to unify web development with design, adapting to the needs in which I find myself",
          url: "https://x.com/DogX_AI",
          authenticateStatus: true,
        },
        {
          bgSrc: "/assets/img/twitter/hunterbanner.png",
          avatarSrc: HunterLogo,
          title: "Hunter Musk",
          name: "@MrHunterMusk",
          text: "The web is very extensive, and its development is complex. My goal is to unify web development with design, adapting to the needs in which I find myself",
          url: "https://x.com/MrHunterMusk",
          authenticateStatus: true,
        },
        {
          bgSrc: "/assets/img/twitter/kittybanner.png",
          avatarSrc: KittyLogo,
          title: "Roaring Lil Kitty",
          name: "@RoaringLilKitty",
          text: "The web is very extensive, and its development is complex. My goal is to unify web development with design, adapting to the needs in which I find myself",
          url: "https://x.com/RoaringLilKitty",
          authenticateStatus: true,
        },
        {
          bgSrc: "/assets/img/twitter/wsbbanner.png",
          avatarSrc: WsbLogo,
          title: "WallStreetBetss",
          name: "@WSBsuper",
          text: "The web is very extensive, and its development is complex. My goal is to unify web development with design, adapting to the needs in which I find myself",
          url: "https://x.com/WSBsuper",
          authenticateStatus: true,
        },
        {
          bgSrc: "/assets/img/twitter/florabanner.png",
          avatarSrc: FloraLogo,
          title: "艺朵朵",
          name: "@GelagioFlora",
          text: "The web is very extensive, and its development is complex. My goal is to unify web development with design, adapting to the needs in which I find myself",
          url: "https://x.com/GelagioFlora",
          authenticateStatus: true,
        },
        {
          bgSrc: "/assets/img/twitter/hodlwolfbanner.png",
          avatarSrc: HodlwolfLogo,
          title: "HodlWolf",
          name: "@hodlwolfmeme",
          text: "The web is very extensive, and its development is complex. My goal is to unify web development with design, adapting to the needs in which I find myself",
          url: "https://x.com/hodlwolfmeme",
          authenticateStatus: true,
        },
        {
          bgSrc: "/assets/img/twitter/memescrazebanner.png",
          avatarSrc: MemescrazeLogo,
          title: "MemesCraze",
          name: "@MemesACraze",
          text: "The web is very extensive, and its development is complex. My goal is to unify web development with design, adapting to the needs in which I find myself",
          url: "https://x.com/MemesACraze",
          authenticateStatus: true,
        },
      ],
    },
    partner: {
      title: "Partner",
      text: "Partner",
    },
    whitePaper: { title: "WhitePapaer", url: "https://docs.memes.ac" },
    public:_public,
    message
  },
};
