import s1Left from "@/assets/image/section1/left.png";
import s1Right from "@/assets/image/section1/right.png";
import { LINKS } from "@/config/links";

export default {
  title: "Doge & Minidoge",
  text: [
    { content: "" },
    { content: "2024年12月7日", highlight: true },
    { content: "、" },
    { content: "イーロン・マスク", highlight: true },
    { content: "は" },
    { content: '"DogeFather"' },
    { content: "が" },
    { content: '"DogeSon"' },
    { content: "を肩に乗せた画像と共に" },
    { content: '"Doge & Minidoge"', highlight: true },
    { content: "というツイートを投稿しました。" }
  ],
  box: {
    left: { image: s1Left },
    right: {
      title: "$DOGEの継承",
      text: [
        { content: "これは" },
        { content: "$DOGE", highlight: true },
        { content: "の" },
        { content: "遺産", highlight: true },
        { content: "と" },
        { content: "未来", highlight: true },
        { content: "が" },
        { content: "$MINIDOGE", highlight: true },
        { content: "をじて受け継がれることを象徴しています。" },
        { content: "$MINIDOGE", highlight: true },
        { content: "コミュニティの努力により、私たちは" },
        { content: "$MINIDOGE", highlight: true },
        { content: "を" },
        { content: "10億ドル", highlight: true },
        { content: "の時価総額という目標に向かって進んでいます。" }
      ],
      image: s1Right,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
}; 