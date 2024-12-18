import { LINKS } from "@/config/links";

export default {
  title: [
    { content: "$MINIDOGE" },
    { content: "(CTO)", status: true },
    { content: "\n- Minidoge", status: true },
  ],
  text: [
    { content: "$MINIDOGE", highlight: true },
    { content: "は" },
    { content: "$DOGE", highlight: true },
    { content: "の継承を表しており、それは" },
    { content: "イーロン・マスク", highlight: true },
    { content: "（ドージファーザー）が後継者（ドージサン）を導くようなものです。" }
  ],
  buyUrl: LINKS.BUY.RAYDIUM,
  contractAddressPrefix: "$MINIDOGE",
  contractAddressSuffix: "from pump.fun",
  contractAddressCTO: "(CTO)"
}; 