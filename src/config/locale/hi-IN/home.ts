import { LINKS } from "@/config/links";

export default {
  title: [
    { content: "$MINIDOGE" },
    { content: "(CTO)", status: true },
    { content: "\n- Minidoge", status: true },
  ],
  text: [
    { content: "$MINIDOGE", highlight: true },
    { content: " " },
    { content: "$DOGE", highlight: true },
    { content: " की विरासत का प्रतिनिधित्व करता है, जैसे " },
    { content: "Elon Musk", highlight: true },
    { content: " (DogeFather) अपने उत्तराधिकारी (DogeSon) का मार्गदर्शन करता है।" }
  ],
  buyUrl: LINKS.BUY.RAYDIUM,
  contractAddressPrefix: "$MINIDOGE",
  contractAddressSuffix: "pump.fun से",
  contractAddressCTO: "(CTO)"
}; 