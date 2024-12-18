import s1Left from "@/assets/image/section1/left.png";
import s1Right from "@/assets/image/section1/right.png";
import { LINKS } from "@/config/links";

export default {
  title: "Doge & Minidoge",  // 保持英文
  text: [
    { content: "في " },
    { content: "7 ديسمبر 2024", highlight: true },
    { content: "، نشر " },
    { content: "Elon Musk", highlight: true },
    { content: " تغريدة بصورة " },
    { content: '"DogeFather"' },  // 保持英文
    { content: " يحمل " },
    { content: '"DogeSon"' },  // 保持英文
    { content: " على كتفيه، مع تعليق " },
    { content: '"Doge & Minidoge"', highlight: true },  // 保持英文
    { content: "." }
  ],
  box: {
    left: { image: s1Left },
    right: {
      title: "إرث $DOGE",
      text: [
        { content: "هذا يرمز إلى " },
        { content: "الإرث", highlight: true },
        { content: " و" },
        { content: "المستقبل", highlight: true },
        { content: " لـ " },
        { content: "$DOGE", highlight: true },
        { content: "، المنقول من خلال " },
        { content: "$MINIDOGE", highlight: true },
        { content: ". بالجهد الجماعي لمجتمع " },
        { content: "$MINIDOGE", highlight: true },
        { content: "، نحن مصممون على أخذ " },
        { content: "$MINIDOGE", highlight: true },
        { content: " إلى " },
        { content: "1 مليار دولار", highlight: true },
        { content: " من القيمة السوقية." }
      ],
      image: s1Right,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
}; 