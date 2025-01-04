import { IMAGES } from './resources';

const data = async () => {
  return {
    background: {
      custom: "",
    },
    button: {
      background: "linear-gradient(to bottom, #FFAC03, #FFC10B)",
      text: "#000",
    },
    banner_url: IMAGES.SECTIONS.BANNER,
    banner: {
      url: "https://t.me/MINIDOGE_MEMES_RAIDS",
    },
    section1: {
      box: {
        left: {
          image: IMAGES.SECTIONS.SECTION1.left,
        },
        right: {
          image: IMAGES.SECTIONS.SECTION1.right,
        },
      },
    },
    section2: {
      image: IMAGES.SECTIONS.SECTION2,
    },
    section3: {
      data: IMAGES.SECTIONS.SECTION3,
    },
  };
};

export default data;
