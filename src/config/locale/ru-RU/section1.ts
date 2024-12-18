import s1Left from "@/assets/image/section1/left.png";
import s1Right from "@/assets/image/section1/right.png";
import { LINKS } from "@/config/links";

export default {
  title: "Doge & Minidoge",  // 保持英文
  text: [
    { content: "" },
    { content: "7 декабря 2024", highlight: true },
    { content: " года " },
    { content: "Илон Маск", highlight: true },
    { content: " опубликовал твит с изображением " },
    { content: '"DogeFather"' },  // 保持英文
    { content: ", несущего " },
    { content: '"DogeSon"' },  // 保持英文
    { content: " на плечах, с подписью " },
    { content: '"Doge & Minidoge"', highlight: true },  // 保持英文
    { content: "." }
  ],
  box: {
    left: { image: s1Left },
    right: {
      title: "Наследие $DOGE",
      text: [
        { content: "Это символизирует " },
        { content: "наследие", highlight: true },
        { content: " и " },
        { content: "будущее", highlight: true },
        { content: " " },
        { content: "$DOGE", highlight: true },
        { content: ", передаваемое через " },
        { content: "$MINIDOGE", highlight: true },
        { content: ". Совместными усилиями сообщества " },
        { content: "$MINIDOGE", highlight: true },
        { content: ", мы намерены привести " },
        { content: "$MINIDOGE", highlight: true },
        { content: " к " },
        { content: "1 миллиарду долларов", highlight: true },
        { content: " рыночной капитализации." }
      ],
      image: s1Right,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
}; 