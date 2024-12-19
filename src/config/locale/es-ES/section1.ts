import { IMAGES, LINKS } from '@/config/resources';

export default {
  title: "Doge & Minidoge",
  text: [
    { content: "El " },
    { content: "7 de diciembre de 2024", highlight: true },
    { content: ", " },
    { content: "Elon Musk", highlight: true },
    { content: " publicó un tweet con una imagen de " },
    { content: '"DogeFather"' },
    { content: " llevando a " },
    { content: '"DogeSon"' },
    { content: " en sus hombros, con el título " },
    { content: '"Doge & Minidoge"', highlight: true },
    { content: "." }
  ],
  box: {
    left: { image: IMAGES.SECTIONS.SECTION1.LEFT },
    right: {
      title: "La Herencia de $DOGE",
      text: [
        { content: "Esto simboliza el " },
        { content: "legado", highlight: true },
        { content: " y el " },
        { content: "futuro", highlight: true },
        { content: " de " },
        { content: "$DOGE", highlight: true },
        { content: " transmitido a través de " },
        { content: "$MINIDOGE", highlight: true },
        { content: ". Con el esfuerzo colectivo de la comunidad " },
        { content: "$MINIDOGE", highlight: true },
        { content: ", estamos totalmente comprometidos a llevar " },
        { content: "$MINIDOGE", highlight: true },
        { content: " hacia el hito de " },
        { content: "1 billón de dólares", highlight: true },
        { content: " de capitalización de mercado." }
      ],
      image: IMAGES.SECTIONS.SECTION1.RIGHT,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
}; 