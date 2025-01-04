import { IMAGES, LINKS } from '@/config/resources';

export default {
  title: "Doge و Minidoge",
  text: [
    { content: "در " },
    { content: "7 دسامبر 2024", highlight: true },
    { content: "، " },
    { content: "ایلان ماسک", highlight: true },
    { content: " توییتی را با تصویری از " },
    { content: '"DogeFather"' },
    { content: " که " },
    { content: '"DogeSon"' },
    { content: " را روی شانه‌های خود حمل می‌کرد، همراه با عنوان " },
    { content: '"Doge & Minidoge"', highlight: true },
    { content: " منتشر کرد." }
  ],
  box: {
    left: { image: IMAGES.SECTIONS.SECTION1.left },
    right: {
      title: "میراث $DOGE",
      text: [
        { content: "این نمادی از " },
        { content: "میراث", highlight: true },
        { content: " و " },
        { content: "آینده", highlight: true },
        { content: " است که " },
        { content: "$DOGE", highlight: true },
        { content: " از طریق " },
        { content: "$MINIDOGE", highlight: true },
        { content: " به پیش می‌برد. با تلاش‌های جمعی جامعه " },
        { content: "$MINIDOGE", highlight: true },
        { content: "، ما کاملاً متعهد به هدایت " },
        { content: "$MINIDOGE", highlight: true },
        { content: " به سمت نقطه عطف " },
        { content: "1 میلیارد دلار", highlight: true },
        { content: " ارزش بازار هستیم." }
      ],
      image: IMAGES.SECTIONS.SECTION1.right,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
}; 