import { LINKS } from '@/config/resources';

export default {
  title: [
    { content: "$MINIDOGE" },
    { content: "(CTO)", status: true },
    { content: "\n- Minidoge", status: true },
  ],
  text: [
    { content: "$MINIDOGE", highlight: true },
    { content: " repräsentiert das Erbe von " },
    { content: "$DOGE", highlight: true },
    { content: ", wie " },
    { content: "Elon Musk", highlight: true },
    { content: " (DogeFather) seinen Nachfolger (DogeSon) führt." }
  ],
  buyUrl: LINKS.BUY.RAYDIUM,
  contractAddressPrefix: "$MINIDOGE",
  contractAddressCTO: "(CTO)"
}; 