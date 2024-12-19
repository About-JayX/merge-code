import { LINKS } from "@/config/links";

export default {
  title: [
    { content: "$MINIDOGE" },
    { content: "(CTO)", status: true },
    { content: "\n- Minidoge", status: true },
  ],
  text: [
    { content: "$MINIDOGE", highlight: true },
    { content: " représente l'héritage de " },
    { content: "$DOGE", highlight: true },
    { content: ", comme " },
    { content: "Elon Musk", highlight: true },
    { content: " (DogeFather) guide son successeur (DogeSon)." }
  ],
  buyUrl: LINKS.BUY.RAYDIUM,
  contractAddressPrefix: "$MINIDOGE",
  contractAddressCTO: "(CTO)"
}; 