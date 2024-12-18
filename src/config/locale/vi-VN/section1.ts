import s1Left from "@/assets/image/section1/left.png";
import s1Right from "@/assets/image/section1/right.png";
import { LINKS } from "@/config/links";

export default {
  title: "Doge & Minidoge",  // 保持英文
  text: [
    { content: "Vào ngày " },
    { content: "7 tháng 12 năm 2024", highlight: true },
    { content: ", " },
    { content: "Elon Musk", highlight: true },
    { content: " đã đăng một tweet với hình ảnh " },
    { content: '"DogeFather"' },  // 保持英文
    { content: " bế " },
    { content: '"DogeSon"' },  // 保持英文
    { content: " trên vai, với chú thích " },
    { content: '"Doge & Minidoge"', highlight: true },  // 保持英文
    { content: "." }
  ],
  box: {
    left: { image: s1Left },
    right: {
      title: "Di sản của $DOGE",
      text: [
        { content: "Điều này tượng trưng cho " },
        { content: "di sản", highlight: true },
        { content: " và " },
        { content: "tương lai", highlight: true },
        { content: " của " },
        { content: "$DOGE", highlight: true },
        { content: " được truyền qua " },
        { content: "$MINIDOGE", highlight: true },
        { content: ". Với nỗ lực chung của cộng đồng " },
        { content: "$MINIDOGE", highlight: true },
        { content: ", chúng tôi quyết tâm đưa " },
        { content: "$MINIDOGE", highlight: true },
        { content: " đến mốc " },
        { content: "1 tỷ đô la", highlight: true },
        { content: " vốn hóa thị trường." }
      ],
      image: s1Right,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
}; 