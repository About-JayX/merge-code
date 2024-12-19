import { IMAGES } from '@/config/resources';
import { LINKS } from "@/config/resources";

export default {
  title: "Doge at Minidoge",
  text: [
    { content: "Noong " },
    { content: "December 7, 2024", highlight: true },
    { content: ", si " },
    { content: "Elon Musk", highlight: true },
    { content: " ay nag-post ng tweet na may larawan ng " },
    { content: '"DogeFather"' },
    { content: " na may pasang " },
    { content: '"DogeSon"' },
    { content: " sa kanyang balikat, kasama ang caption na " },
    { content: '"Doge & Minidoge"', highlight: true },
    { content: "." }
  ],
  box: {
    left: { image: IMAGES.SECTIONS.SECTION1.LEFT },
    right: {
      title: "Pamana ng $DOGE",
      text: [
        { content: "Ito ay sumasagisag sa " },
        { content: "pamana", highlight: true },
        { content: " at " },
        { content: "kinabukasan", highlight: true },
        { content: " ng " },
        { content: "$DOGE", highlight: true },
        { content: " na ipinagpapatuloy sa pamamagitan ng " },
        { content: "$MINIDOGE", highlight: true },
        { content: ". Sa sama-samang pagsisikap ng komunidad ng " },
        { content: "$MINIDOGE", highlight: true },
        { content: ", kami ay lubos na nakatuon sa pagsulong ng " },
        { content: "$MINIDOGE", highlight: true },
        { content: " tungo sa milestone ng " },
        { content: "$1 billion", highlight: true },
        { content: " market cap." }
      ],
      image: IMAGES.SECTIONS.SECTION1.RIGHT,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
}; 