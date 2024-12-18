import { LINKS } from "@/config/links";

export default {
  title: [
    { content: "$MINIDOGE" },
    { content: "(CTO)", status: true },
    { content: "\n- Minidoge", status: true },
  ],
  text: [
    { content: "$MINIDOGE", highlight: true },
    { content: " میراث " },
    { content: "$DOGE", highlight: true },
    { content: " را نمایندگی می‌کند، همانطور که " },
    { content: "Elon Musk", highlight: true },
    { content: " (DogeFather) جانشین خود (DogeSon) را هدایت می‌کند." }
  ],
  buyUrl: LINKS.BUY.RAYDIUM,
  contractAddressPrefix: "$MINIDOGE",
  contractAddressSuffix: "از pump.fun",
  contractAddressCTO: "(CTO)"
}; 