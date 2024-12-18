import s1Left from "@/assets/image/section1/left.png";
import s1Right from "@/assets/image/section1/right.png";
import { LINKS } from "@/config/links";

export default {
  title: "Doge & Minidoge",
  text: [
    { content: "" },
    { content: "2024년 12월 7일", highlight: true },
    { content: ", " },
    { content: "일론 머스크", highlight: true },
    { content: "는 " },
    { content: '"DogeFather"' },
    { content: "가 " },
    { content: '"DogeSon"' },
    { content: "을 어깨에 태우고 있는 이미지와 함께 " },
    { content: '"Doge & Minidoge"', highlight: true },
    { content: "라는 글을 게시했습니다." }
  ],
  box: {
    left: { image: s1Left },
    right: {
      title: "$DOGE의 계승",
      text: [
        { content: "이는 " },
        { content: "$DOGE", highlight: true },
        { content: "의 " },
        { content: "유산", highlight: true },
        { content: "과 " },
        { content: "미래", highlight: true },
        { content: "가 " },
        { content: "$MINIDOGE", highlight: true },
        { content: "를 통해 이어짐을 상징합니다. " },
        { content: "$MINIDOGE", highlight: true },
        { content: " 커뮤니티의 노력으로, 우리는 " },
        { content: "$MINIDOGE", highlight: true },
        { content: "를 " },
        { content: "10억 달러", highlight: true },
        { content: " 시가총액이라는 이정표를 향해 나아가고 있습니다." }
      ],
      image: s1Right,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
};
