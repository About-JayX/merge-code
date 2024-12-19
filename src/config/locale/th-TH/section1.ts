import { IMAGES, LINKS } from '@/config/resources';

export default {
  title: "Doge & Minidoge",
  text: [
    { content: "เมื่อวันที่ " },
    { content: "7 ธันวาคม 2024", highlight: true },
    { content: ", " },
    { content: "Elon Musk", highlight: true },
    { content: " ได้โพสต์ทวีตพร้อมภาพของ " },
    { content: '"DogeFather"' },
    { content: " อุ้ม " },
    { content: '"DogeSon"' },
    { content: " ไว้บนบ่า พร้อมข้อความ " },
    { content: '"Doge & Minidoge"', highlight: true },
    { content: "." }
  ],
  box: {
    left: { image: IMAGES.SECTIONS.SECTION1.LEFT },
    right: {
      title: "มรดกของ $DOGE",
      text: [
        { content: "นี่เป็นสัญลักษณ์ของ " },
        { content: "มรดก", highlight: true },
        { content: " และ " },
        { content: "อนาคต", highlight: true },
        { content: " ที่ " },
        { content: "$DOGE", highlight: true },
        { content: " ได้ส่งต่อผ่าน " },
        { content: "$MINIDOGE", highlight: true },
        { content: " ด้วยความพยายามร่วมกันของชุมชน " },
        { content: "$MINIDOGE", highlight: true },
        { content: " เรามุ่งมั่นที่จะนำ " },
        { content: "$MINIDOGE", highlight: true },
        { content: " ไปสู่ " },
        { content: "1 พันล้านดอลลาร์", highlight: true },
        { content: " มูลค่าตลาด" }
      ],
      image: IMAGES.SECTIONS.SECTION1.RIGHT,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
}; 