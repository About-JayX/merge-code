import { IMAGES, LINKS } from '@/config/resources';

export default {
  title: "Doge & Minidoge",
  text: [
    { content: "On " },
    { content: "December 7, 2024", highlight: true },
    { content: ", " },
    { content: "Elon Musk", highlight: true },
    { content: " posted a tweet featuring an image of " },
    { content: '"DogeFather"' },
    { content: " carrying his " },
    { content: '"DogeSon"' },
    { content: " on his shoulders, accompanied by the caption " },
    { content: '"Doge & Minidoge"', highlight: true },
    { content: "." }
  ],
  box: {
    left: { image: IMAGES.SECTIONS.SECTION1.LEFT },
    right: {
      title: "Inheritance of $DOGE",
      text: [
        { content: "This symbolizes the " },
        { content: "legacy", highlight: true },
        { content: " and " },
        { content: "future", highlight: true },
        { content: " of " },
        { content: "$DOGE", highlight: true },
        { content: " being carried forward through " },
        { content: "$MINIDOGE", highlight: true },
        { content: ". With the collective efforts of the " },
        { content: "$MINIDOGE", highlight: true },
        { content: " community, we are fully committed to driving " },
        { content: "$MINIDOGE", highlight: true },
        { content: " toward the milestone of a " },
        { content: "$1 billion", highlight: true },
        { content: " market cap." }
      ],
      image: IMAGES.SECTIONS.SECTION1.RIGHT,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
};
