import s1Left from "@/assets/image/section1/left.png";
import s1Right from "@/assets/image/section1/right.png";
import { LINKS } from "@/config/links";

export default {
  title: "Doge & Minidoge",  // 保持英文
  text: [
    { content: "Pada " },
    { content: "7 Desember 2024", highlight: true },
    { content: ", " },
    { content: "Elon Musk", highlight: true },
    { content: " mengunggah tweet dengan gambar " },
    { content: '"DogeFather"' },  // 保持英文
    { content: " menggendong " },
    { content: '"DogeSon"' },  // 保持英文
    { content: " di bahunya, dengan judul " },
    { content: '"Doge & Minidoge"', highlight: true },  // 保持英文
    { content: "." }
  ],
  box: {
    left: { image: s1Left },
    right: {
      title: "Warisan $DOGE",
      text: [
        { content: "Ini melambangkan " },
        { content: "warisan", highlight: true },
        { content: " dan " },
        { content: "masa depan", highlight: true },
        { content: " " },
        { content: "$DOGE", highlight: true },
        { content: " yang dibawa melalui " },
        { content: "$MINIDOGE", highlight: true },
        { content: ". Dengan upaya bersama komunitas " },
        { content: "$MINIDOGE", highlight: true },
        { content: ", kami bertekad untuk membawa " },
        { content: "$MINIDOGE", highlight: true },
        { content: " menuju " },
        { content: "$1 miliar", highlight: true },
        { content: " kapitalisasi pasar." }
      ],
      image: s1Right,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
}; 