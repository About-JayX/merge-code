import s1Left from "@/assets/image/section1/left.png";
import s1Right from "@/assets/image/section1/right.png";
import { LINKS } from "@/config/links";

export default {
  title: "Doge & Minidoge",  // 保持英文
  text: [
    { content: "在 " },
    { content: "2024 年 12 月 7 日", highlight: true },
    { content: "，" },
    { content: "Elon Musk", highlight: true },
    { content: " 发布了一条推文，其中包含一张 " },
    { content: '"DogeFather"' },  // 保持英文
    { content: " 将他的 " },
    { content: '"DogeSon"' },  // 保持英文
    { content: " 扛在肩上的图片，并附上标题 " },
    { content: '"Doge & Minidoge"', highlight: true },  // 保持英文
    { content: "。" }
  ],
  box: {
    left: { image: s1Left },
    right: {
      title: "$DOGE 的传承",
      text: [
        { content: "这象征着 " },
        { content: "传承", highlight: true },
        { content: " 和 " },
        { content: "未来", highlight: true },
        { content: "，" },
        { content: "$DOGE", highlight: true },
        { content: " 的精��通过 " },
        { content: "$MINIDOGE", highlight: true },
        { content: " 延续下去。在 " },
        { content: "$MINIDOGE", highlight: true },
        { content: " 社区的共同努力下，我们全力以赴，推动 " },
        { content: "$MINIDOGE", highlight: true },
        { content: " 迈向 " },
        { content: "$10 亿美元", highlight: true },
        { content: " 的市值里程碑。" }
      ],
      image: s1Right,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
}; 