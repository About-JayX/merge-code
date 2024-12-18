import s1Left from "@/assets/image/section1/left.png";
import s1Right from "@/assets/image/section1/right.png";
import { LINKS } from "@/config/links";

export default {
  title: "Doge & Minidoge",  // 保持英文
  text: [
    { content: "" },
    { content: "7 Aralık 2024", highlight: true },
    { content: " tarihinde " },
    { content: "Elon Musk", highlight: true },
    { content: ", " },
    { content: '"DogeFather"' },  // 保持英文
    { content: "'ın " },
    { content: '"DogeSon"' },  // 保持英文
    { content: "'u omzunda taşıdığı bir resimle " },
    { content: '"Doge & Minidoge"', highlight: true },  // 保持英文
    { content: " başlıklı bir tweet paylaştı." }
  ],
  box: {
    left: { image: s1Left },
    right: {
      title: "$DOGE'un Mirası",
      text: [
        { content: "Bu, " },
        { content: "miras", highlight: true },
        { content: " ve " },
        { content: "geleceği", highlight: true },
        { content: " temsil eder, " },
        { content: "$DOGE", highlight: true },
        { content: "'un ruhu " },
        { content: "$MINIDOGE", highlight: true },
        { content: " aracılığıyla devam ediyor. " },
        { content: "$MINIDOGE", highlight: true },
        { content: " topluluğunun ortak çabasıyla, " },
        { content: "$MINIDOGE", highlight: true },
        { content: "'u " },
        { content: "1 milyar dolar", highlight: true },
        { content: " piyasa değerine ulaştırmak için kararlıyız." }
      ],
      image: s1Right,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
}; 