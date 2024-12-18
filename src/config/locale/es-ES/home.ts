import { LINKS } from "@/config/links";

export default {
  title: [
    { content: "$MINIDOGE" },
    { content: "(CTO)", status: true },
    { content: "\n- Minidoge", status: true },
  ],
  text: [
    { content: "$MINIDOGE", highlight: true },
    { content: " representa el legado de " },
    { content: "$DOGE", highlight: true },
    { content: ", como " },
    { content: "Elon Musk", highlight: true },
    { content: " (DogeFather) guía a su sucesor (DogeSon)." }
  ],
  buyUrl: LINKS.BUY.RAYDIUM,
  contractAddressPrefix: "$MINIDOGE",
  contractAddressSuffix: "de pump.fun",
  contractAddressCTO: "(CTO)"
}; 