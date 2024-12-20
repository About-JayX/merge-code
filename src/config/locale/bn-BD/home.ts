import { LINKS } from "@/config/resources";

export default {
  title: [
    { content: "$MINIDOGE" },
    { content: "(CTO)", status: true },
    { content: "\n- Minidoge", status: true },
  ],
  text: [
    { content: "$MINIDOGE", highlight: true },
    { content: " প্রতিনিধিত্ব করে " },
    { content: "$DOGE", highlight: true },
    { content: " এর উত্তরাধিকার, যেমন " },
    { content: "এলন মাস্ক", highlight: true },
    { content: " (ডোজফাদার) তার উত্তরসূরী (ডোজসন) কে গাইড করেন।" }
  ],
  buyUrl: LINKS.BUY.RAYDIUM,
  contractAddressPrefix: "$MINIDOGE",
  contractAddressCTO: "(CTO)"
};
