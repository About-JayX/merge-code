import s1Left from "@/assets/image/section1/left.png";
import s1Right from "@/assets/image/section1/right.png";
import { LINKS } from "@/config/links";

export default {
  title: "Doge & Minidoge",  // 保持英文
  text: [
    { content: "در " },
    { content: "7 دسامبر 2024", highlight: true },
    { content: "، " },
    { content: "Elon Musk", highlight: true },
    { content: " توییتی با تصویری از " },
    { content: '"DogeFather"' },  // 保持英文
    { content: " که " },
    { content: '"DogeSon"' },  // 保持英文
    { content: " را روی شانه‌های خود حمل می‌کند منتشر کرد، با عنوان " },
    { content: '"Doge & Minidoge"', highlight: true },  // 保持英文
    { content: "." }
  ],
  box: {
    left: { image: s1Left },
    right: {
      title: "میراث $DOGE",
      text: [
        { content: "این نماد " },
        { content: "میراث", highlight: true },
        { content: " و " },
        { content: "آینده", highlight: true },
        { content: " " },
        { content: "$DOGE", highlight: true },
        { content: " است که از طریق " },
        { content: "$MINIDOGE", highlight: true },
        { content: " منتقل می‌شود. با تلاش جمعی جامعه " },
        { content: "$MINIDOGE", highlight: true },
        { content: "، ما مصمم هستیم " },
        { content: "$MINIDOGE", highlight: true },
        { content: " را به " },
        { content: "1 میلیارد دلار", highlight: true },
        { content: " ارزش بازار برسانیم." }
      ],
      image: s1Right,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
}; 