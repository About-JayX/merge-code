import _public from "./public";
import message from "./message";
import home from "./home";
import section1 from "./tweet.ts";
import section2 from "./intro.ts";
import { gallery } from "@/config/shared/gallery.ts";
import howToBuy from "./buyGuide.ts";
import about from "./about";
import footer from "./footer";
import dao from "./dao";
import ai from "./ai";

export default {
  translation: {
    language: "한국어",
    lang: "언어",
    home,
    section1,
    section2,
    section3: gallery,
    howToBuy,
    about,
    footer,
    public: _public,
    message,
    dao,
    ai
  },
};
