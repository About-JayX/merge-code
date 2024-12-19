import { LINKS } from "@/config/resources";

export default {
  title: [
    { content: "$MINIDOGE" },
    { content: "(CTO)", status: true },
    { content: "\n- Minidoge", status: true },
  ],
  text: [
    { content: "$MINIDOGE", highlight: true },
    { content: " 代表继承了 " },
    { content: "$DOGE", highlight: true },
    { content: "，就如同 " },
    { content: "Elon Musk", highlight: true },
    { content: "（狗狗币之父）引领他的继任者（狗狗币之子）。" }
  ],
  buyUrl: LINKS.BUY.RAYDIUM,
  contractAddressPrefix: "$MINIDOGE",
  contractAddressSuffix: "来自 pump.fun",
  contractAddressCTO: "(CTO)"
}; 