import s1Left from "@/assets/image/section1/left.png";
import s1Right from "@/assets/image/section1/right.png";
import { LINKS } from "@/config/links";

export default {
  title: "Doge & Minidoge",  // 保持英文
  text: [
    { content: "Le " },
    { content: "7 décembre 2024", highlight: true },
    { content: ", " },
    { content: "Elon Musk", highlight: true },
    { content: " a publié un tweet avec une image de " },
    { content: '"DogeFather"' },  // 保持英文
    { content: " portant " },
    { content: '"DogeSon"' },  // 保持英文
    { content: " sur ses épaules, avec la légende " },
    { content: '"Doge & Minidoge"', highlight: true },  // 保持英文
    { content: "." }
  ],
  box: {
    left: { image: s1Left },
    right: {
      title: "L'Héritage de $DOGE",
      text: [
        { content: "Cela symbolise " },
        { content: "l'héritage", highlight: true },
        { content: " et " },
        { content: "l'avenir", highlight: true },
        { content: " de " },
        { content: "$DOGE", highlight: true },
        { content: " transmis à travers " },
        { content: "$MINIDOGE", highlight: true },
        { content: ". Avec l'effort collectif de la communauté " },
        { content: "$MINIDOGE", highlight: true },
        { content: ", nous sommes déterminés à amener " },
        { content: "$MINIDOGE", highlight: true },
        { content: " à " },
        { content: "1 milliard de dollars", highlight: true },
        { content: " de capitalisation boursière." }
      ],
      image: s1Right,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
}; 