import { LINKS } from "@/config/links";

export default {
  title: [
    { content: "$MINIDOGE" },
    { content: "(CTO)", status: true },
    { content: "\n- Minidoge", status: true },
  ],
  text: [
    { content: "$MINIDOGE", highlight: true },
    { content: " เป็นตัวแทนของมรดกจาก " },
    { content: "$DOGE", highlight: true },
    { content: " เหมือนกับที่ " },
    { content: "Elon Musk", highlight: true },
    { content: " (DogeFather) นำทางผู้สืบทอด (DogeSon) ของเขา" }
  ],
  buyUrl: LINKS.BUY.RAYDIUM,
  contractAddressPrefix: "$MINIDOGE",
  contractAddressCTO: "(CTO)"
}; 