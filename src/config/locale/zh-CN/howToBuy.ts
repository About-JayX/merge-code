import { LINKS } from "@/config/links";

export default {
  title: "如何购买 <b>$MINIDOGE</b>？",
  data: [
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>1.</b><div class='ml-2'>购买 <i>SOL</i></div></div>",
      text: "您可以从任何主要交易所购买 <b>SOL</b>，然后将其转移到您的 <i>Phantom 钱包</i>。",
      url: "",
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>2.</b><div class='ml-2'>安装 <i>Phantom</i></div></div>",
      text: "下载并安装 <b>Phantom 钱包</b>，适用于您的浏览器或移动设备。",
      url: LINKS.BUY.PHANTOM,
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>3.</b><div class='ml-2'>在 <i>Raydium</i> 上兑换 <i>$MINIDOGE</i></div></div>",
      text: "访问 <b>Raydium.io</b>，连接您的 Phantom 钱包，然后使用 <b>SOL</b> 兑换 <b>$MINIDOGE</b>。",
      url: LINKS.BUY.RAYDIUM,
    },
  ],
}; 