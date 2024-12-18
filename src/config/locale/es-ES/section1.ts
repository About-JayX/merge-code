import s1Left from "@/assets/image/section1/left.png";
import s1Right from "@/assets/image/section1/right.png";
import { LINKS } from "@/config/links";

export default {
  title: "Doge & Minidoge",  // 保持英文
  text: [
    { content: "El " },
    { content: "7 de diciembre de 2024", highlight: true },
    { content: ", " },
    { content: "Elon Musk", highlight: true },
    { content: " publicó un tweet con una imagen de " },
    { content: '"DogeFather"' },  // 保持英文
    { content: " llevando a " },
    { content: '"DogeSon"' },  // 保持英文
    { content: " en sus hombros, con la leyenda " },
    { content: '"Doge & Minidoge"', highlight: true },  // 保持英文
    { content: "." }
  ],
  box: {
    left: { image: s1Left },
    right: {
      title: "El Legado de $DOGE",
      text: [
        { content: "Esto simboliza el " },
        { content: "legado", highlight: true },
        { content: " y el " },
        { content: "futuro", highlight: true },
        { content: " de " },
        { content: "$DOGE", highlight: true },
        { content: ", transmitido a través de " },
        { content: "$MINIDOGE", highlight: true },
        { content: ". Con el esfuerzo colectivo de la comunidad " },
        { content: "$MINIDOGE", highlight: true },
        { content: ", estamos determinados a llevar a " },
        { content: "$MINIDOGE", highlight: true },
        { content: " a " },
        { content: "1 billón de dólares", highlight: true },
        { content: " de capitalización de mercado." }
      ],
      image: s1Right,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
}; 