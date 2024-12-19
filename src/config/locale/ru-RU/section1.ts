import { IMAGES, LINKS } from '@/config/resources';

export default {
  title: "Doge и Minidoge",
  text: [
    { content: "" },
    { content: "7 декабря 2024 года", highlight: true },
    { content: " " },
    { content: "Илон Маск", highlight: true },
    { content: " опубликовал твит с изображением " },
    { content: '"DogeFather"' },
    { content: ", несущего на плечах своего " },
    { content: '"DogeSon"' },
    { content: ", с подписью " },
    { content: '"Doge & Minidoge"', highlight: true },
    { content: "." }
  ],
  box: {
    left: { image: IMAGES.SECTIONS.SECTION1.LEFT },
    right: {
      title: "Наследие $DOGE",
      text: [
        { content: "Это символизирует " },
        { content: "наследие", highlight: true },
        { content: " и " },
        { content: "будущее", highlight: true },
        { content: " " },
        { content: "$DOGE", highlight: true },
        { content: ", которое продолжается через " },
        { content: "$MINIDOGE", highlight: true },
        { content: ". Благодаря коллективным усилиям сообщества " },
        { content: "$MINIDOGE", highlight: true },
        { content: ", мы полностью привержены тому, чтобы привести " },
        { content: "$MINIDOGE", highlight: true },
        { content: " к вехе в " },
        { content: "1 миллиард долларов", highlight: true },
        { content: " рыночной капитализации." }
      ],
      image: IMAGES.SECTIONS.SECTION1.RIGHT,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
}; 