import { LINKS } from '@/config/resources';

export default {
  title: [
    { content: "$MINIDOGE" },
    { content: "(CTO)", status: true },
    { content: "\n- Minidoge", status: true },
  ],
  text: [
    { content: "$MINIDOGE", highlight: true },
    { content: "는 " },
    { content: "$DOGE", highlight: true },
    { content: "의 계승을 의미하며, 이는 마치 " },
    { content: "일론 머스크", highlight: true },
    { content: " (도지파더)가 그의 후계자(도지손)를 이끄는 것과 같습니다." }
  ],
  buyUrl: LINKS.BUY.RAYDIUM,
  contractAddressPrefix: "$MINIDOGE",
  contractAddressCTO: "(CTO)"
};
