import _public from "./public";
import message from "./message";
import home from "./home";
import section1 from "./tweet.ts";
import section2 from "./intro.ts";
import { gallery } from "@/config/shared/gallery.ts";
import howToBuy from "./buyGuide.ts";
import about from "./about";
import footer from "./footer";

export default {
  translation: {
    language: "Português",
    lang: "Idioma",
    home,
    section1,
    section2,
    section3: gallery,
    howToBuy,
    about,
    footer,
    public: _public,
    message,
  },
}; 