import { LINKS } from "@/config/links";

export default {
  title: [
    { content: "$MINIDOGE" },
    { content: "(CTO)", status: true },
    { content: "\n- Minidoge", status: true },
  ],
  text: [
    { content: "$MINIDOGE", highlight: true },
    { content: " represents the inheritance of " },
    { content: "$DOGE", highlight: true },
    { content: ", just as " },
    { content: "Elon Musk", highlight: true },
    { content: " (the DogeFather) guides his successor (DogeSon)." }
  ],
  buyUrl: LINKS.BUY.RAYDIUM,
  contractAddressPrefix: "$MINIDOGE",
  contractAddressSuffix: "from pump.fun",
  contractAddressCTO: "(CTO)"
};
