import { LINKS } from "@/config/links";

export default {
  title: [
    { content: "$MINIDOGE" },
    { content: "(CTO)", status: true },
    { content: "\n- Minidoge", status: true },
  ],
  text: [
    { content: "$MINIDOGE", highlight: true },
    { content: " đại diện cho di sản của " },
    { content: "$DOGE", highlight: true },
    { content: ", giống như " },
    { content: "Elon Musk", highlight: true },
    { content: " (DogeFather) dẫn dắt người kế nhiệm (DogeSon) của mình." }
  ],
  buyUrl: LINKS.BUY.RAYDIUM,
  contractAddressPrefix: "$MINIDOGE",
  contractAddressSuffix: "từ pump.fun",
  contractAddressCTO: "(CTO)"
}; 