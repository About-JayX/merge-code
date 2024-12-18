import s1Left from "@/assets/image/section1/left.png";
import s1Right from "@/assets/image/section1/right.png";
import { LINKS } from "@/config/links";

export default {
  title: "Doge & Minidoge",  // 保持英文
  text: [
    { content: "เมื่อวันที่ " },
    { content: "7 ธันวาคม 2024", highlight: true },
    { content: " " },
    { content: "Elon Musk", highlight: true },
    { content: " ได้โพสต์ทวีตพร้อมภาพของ " },
    { content: '"DogeFather"' },  // 保持英文
    { content: " อุ้ม " },
    { content: '"DogeSon"' },  // 保持英文
    { content: " ไว้บนบ่า พร้อมข้อความ " },
    { content: '"Doge & Minidoge"', highlight: true },  // 保持英文
    { content: "" }
  ],
  box: {
    left: { image: s1Left },
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
      image: s1Right,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
}; 