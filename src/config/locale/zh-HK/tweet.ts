import { IMAGES, LINKS } from '@/config/resources';

export default {
  title: "Doge & Minidoge",
  text: [
    { content: "在 " },
    { content: "2024 年 12 月 7 日", highlight: true },
    { content: "，" },
    { content: "Elon Musk", highlight: true },
    { content: " 發佈了一條推文，其中包含一張 " },
    { content: '"DogeFather"' },
    { content: " 將他的 " },
    { content: '"DogeSon"' },
    { content: " 扛在肩上的圖片，並附上標題 " },
    { content: '"Doge & Minidoge"', highlight: true },
    { content: "。" }
  ],
  box: {
    left: { image: IMAGES.SECTIONS.SECTION1.left },
    right: {
      title: "$DOGE 的傳承",
      text: [
        { content: "這象徵著 " },
        { content: "傳承", highlight: true },
        { content: " 和 " },
        { content: "未來", highlight: true },
        { content: "，" },
        { content: "$DOGE", highlight: true },
        { content: " 的精神通過 " },
        { content: "$MINIDOGE", highlight: true },
        { content: " 延續下去。在 " },
        { content: "$MINIDOGE", highlight: true },
        { content: " 社群的共同努力下，我們全力以赴，推動 " },
        { content: "$MINIDOGE", highlight: true },
        { content: " 邁向 " },
        { content: "$10 億美元", highlight: true },
        { content: " 的市值里程碑。" }
      ],
      image: IMAGES.SECTIONS.SECTION1.right,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
};
