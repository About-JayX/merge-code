import { IMAGES, LINKS } from '@/config/resources';

export default {
  title: "Doge & Minidoge",  // 保持英文
  text: [
    { content: "Em " },
    { content: "7 de dezembro de 2024", highlight: true },
    { content: ", " },
    { content: "Elon Musk", highlight: true },
    { content: " postou um tweet com uma imagem do " },
    { content: '"DogeFather"' },  // 保持英文
    { content: " carregando " },
    { content: '"DogeSon"' },  // 保持英文
    { content: " em seus ombros, com a legenda " },
    { content: '"Doge & Minidoge"', highlight: true },  // 保持英文
    { content: "." }
  ],
  box: {
    left: { image: IMAGES.SECTIONS.SECTION1.left },
    right: {
      title: "O Legado do $DOGE",
      text: [
        { content: "Isso simboliza o " },
        { content: "legado", highlight: true },
        { content: " e o " },
        { content: "futuro", highlight: true },
        { content: " do " },
        { content: "$DOGE", highlight: true },
        { content: ", transmitido através do " },
        { content: "$MINIDOGE", highlight: true },
        { content: ". Com o esforço coletivo da comunidade " },
        { content: "$MINIDOGE", highlight: true },
        { content: ", estamos determinados a levar o " },
        { content: "$MINIDOGE", highlight: true },
        { content: " a " },
        { content: "1 bilhão de dólares", highlight: true },
        { content: " em capitalização de mercado." }
      ],
      image: IMAGES.SECTIONS.SECTION1.right,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
}; 