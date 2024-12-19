import _public from "./public";
import message from "./message";
import home from "./home";
import section1 from "./section1";
import section2 from "./section2";
import { gallery } from "@/config/shared/gallery.ts";
import howToBuy from "./howToBuy";
import about from "./about";
import footer from "./footer";
import dao from "./dao";

export default {
  translation: {
    language: "English",
    lang: "Lang",
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
  },
};
