import { LINKS } from '@/config/resources';

export default {
  title: [
    { content: "$MINIDOGE" },
    { content: "(CTO)", status: true },
    { content: "\n- Minidoge", status: true },
  ],
  text: [
    { content: "$MINIDOGE", highlight: true },
    { content: " 代表繼承了 " },
    { content: "$DOGE", highlight: true },
    { content: "，就如同 " },
    { content: "Elon Musk", highlight: true },
    { content: "（狗狗幣之父）引領他的繼任者（狗狗幣之子）。" }
  ],
  buyUrl: LINKS.BUY.RAYDIUM,
  contractAddressPrefix: "$MINIDOGE",
  contractAddressSuffix: "來自 pump.fun",
  contractAddressCTO: "(CTO)"
};
