import { LINKS } from '@/config/resources';

export default {
  title: "어떻게 <b>$MINIDOGE</b>를 구매하나요?",
  data: [
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>1.</b><div class='ml-2'><i>SOL</i> 구매</div></div>",
      text: "주요 거래소에서 <b>SOL</b>을 구매하여 <i>Phantom 지갑</i>으로 전송하세요.",
      url: "",
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>2.</b><div class='ml-2'><i>Phantom</i> 설치</div></div>",
      text: "브라우저나 모바일 기기에 <b>Phantom 지갑</b>을 다운로드하고 설치하세요.",
      url: LINKS.BUY.PHANTOM,
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>3.</b><div class='ml-2'><i>Raydium</i>에서 <i>$MINIDOGE</i> 스왑</div></div>",
      text: "<b>Raydium.io</b>를 방문하여 Phantom 지갑을 연결하고 <b>SOL</b>을 <b>$MINIDOGE</b>로 스왑하세요.",
      url: LINKS.BUY.RAYDIUM,
    },
  ],
};
