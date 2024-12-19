import { IMAGES, LINKS } from '@/config/resources';

export default {
  title: "Doge & Minidoge",  // 保持英文
  text: [
    { content: "Am " },
    { content: "7. Dezember 2024", highlight: true },
    { content: " postete " },
    { content: "Elon Musk", highlight: true },
    { content: " einen Tweet mit einem Bild von " },
    { content: '"DogeFather"' },  // 保持英文
    { content: ", der " },
    { content: '"DogeSon"' },  // 保持英文
    { content: " auf seinen Schultern trägt, mit der Bildunterschrift " },
    { content: '"Doge & Minidoge"', highlight: true },  // 保持英文
    { content: "." }
  ],
  box: {
    left: { image: IMAGES.SECTIONS.SECTION1.LEFT },
    right: {
      title: "Das Erbe von $DOGE",
      text: [
        { content: "Dies symbolisiert das " },
        { content: "Erbe", highlight: true },
        { content: " und die " },
        { content: "Zukunft", highlight: true },
        { content: " von " },
        { content: "$DOGE", highlight: true },
        { content: ", weitergegeben durch " },
        { content: "$MINIDOGE", highlight: true },
        { content: ". Mit der gemeinsamen Anstrengung der " },
        { content: "$MINIDOGE", highlight: true },
        { content: "-Community sind wir entschlossen, " },
        { content: "$MINIDOGE", highlight: true },
        { content: " zu einer " },
        { content: "1 Milliarde Dollar", highlight: true },
        { content: " Marktkapitalisierung zu führen." }
      ],
      image: IMAGES.SECTIONS.SECTION1.RIGHT,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
}; 