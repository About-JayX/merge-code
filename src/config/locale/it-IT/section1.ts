import { IMAGES, LINKS } from '@/config/resources';

export default {
  title: "Doge & Minidoge",  // 保持英文
  text: [
    { content: "Il " },
    { content: "7 dicembre 2024", highlight: true },
    { content: ", " },
    { content: "Elon Musk", highlight: true },
    { content: " ha pubblicato un tweet con un'immagine di " },
    { content: '"DogeFather"' },  // 保持英文
    { content: " che porta " },
    { content: '"DogeSon"' },  // 保持英文
    { content: " sulle spalle, con la didascalia " },
    { content: '"Doge & Minidoge"', highlight: true },  // 保持英文
    { content: "." }
  ],
  box: {
    left: { image: IMAGES.SECTIONS.SECTION1.left },
    right: {
      title: "L'Eredità di $DOGE",
      text: [
        { content: "Questo simboleggia " },
        { content: "l'eredità", highlight: true },
        { content: " e il " },
        { content: "futuro", highlight: true },
        { content: " di " },
        { content: "$DOGE", highlight: true },
        { content: ", trasmesso attraverso " },
        { content: "$MINIDOGE", highlight: true },
        { content: ". Con lo sforzo collettivo della community " },
        { content: "$MINIDOGE", highlight: true },
        { content: ", siamo determinati a portare " },
        { content: "$MINIDOGE", highlight: true },
        { content: " a " },
        { content: "1 miliardo di dollari", highlight: true },
        { content: " di capitalizzazione di mercato." }
      ],
      image: IMAGES.SECTIONS.SECTION1.right,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
}; 