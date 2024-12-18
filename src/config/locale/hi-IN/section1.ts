import s1Left from "@/assets/image/section1/left.png";
import s1Right from "@/assets/image/section1/right.png";
import { LINKS } from "@/config/links";

export default {
  title: "Doge & Minidoge",  // 保持英文
  text: [
    { content: "" },
    { content: "7 दिसंबर 2024", highlight: true },
    { content: " को, " },
    { content: "Elon Musk", highlight: true },
    { content: " ने " },
    { content: '"DogeFather"' },  // 保持英文
    { content: " को " },
    { content: '"DogeSon"' },  // 保持英文
    { content: " को अपने कंधों पर ले जाते हुए एक तस्वीर के साथ एक ट्वीट किया, जिसमें कैप्शन था " },
    { content: '"Doge & Minidoge"', highlight: true },  // 保持英文
    { content: "।" }
  ],
  box: {
    left: { image: s1Left },
    right: {
      title: "$DOGE की विरासत",
      text: [
        { content: "यह " },
        { content: "विरासत", highlight: true },
        { content: " और " },
        { content: "भविष्य", highlight: true },
        { content: " का प्रतीक है " },
        { content: "$DOGE", highlight: true },
        { content: " का, जो " },
        { content: "$MINIDOGE", highlight: true },
        { content: " के माध्यम से आगे बढ़ रहा है। " },
        { content: "$MINIDOGE", highlight: true },
        { content: " समुदाय के सामूहिक प्रयास से, हम " },
        { content: "$MINIDOGE", highlight: true },
        { content: " को " },
        { content: "1 बिलियन डॉलर", highlight: true },
        { content: " के मार्केट कैप तक ले जाने के लिए दृढ़ संकल्पित हैं।" }
      ],
      image: s1Right,
      bntText: "$MINIDOGE X",
      bntUrl: LINKS.SOCIAL.TWITTER,
    },
  },
}; 