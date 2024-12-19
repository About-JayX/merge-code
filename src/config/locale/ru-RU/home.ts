import { LINKS } from '@/config/resources';

export default {
  title: [
    { content: "$MINIDOGE" },
    { content: "(CTO)", status: true },
    { content: "\n- Minidoge", status: true },
  ],
  text: [
    { content: "$MINIDOGE", highlight: true },
    { content: " представляет наследие " },
    { content: "$DOGE", highlight: true },
    { content: ", как " },
    { content: "Илон Маск", highlight: true },
    { content: " (DogeFather) направляет своего преемника (DogeSon)." }
  ],
  buyUrl: LINKS.BUY.RAYDIUM,
  contractAddressPrefix: "$MINIDOGE",
  contractAddressSuffix: "от pump.fun",
  contractAddressCTO: "(CTO)"
}; 