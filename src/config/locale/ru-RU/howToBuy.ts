import { LINKS } from "@/config/links";

export default {
  title: "Как купить <b>$MINIDOGE</b>?",
  data: [
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>1.</b><div class='ml-2'>Купите <i>SOL</i></div></div>",
      text: "Вы можете купить <b>SOL</b> на любой крупной бирже и перевести его в свой <i>кошелек Phantom</i>.",
      url: "",
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>2.</b><div class='ml-2'>Установите <i>Phantom</i></div></div>",
      text: "Скачайте и установите <b>кошелек Phantom</b> для вашего браузера или мобильного устройства.",
      url: LINKS.BUY.PHANTOM,
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>3.</b><div class='ml-2'>Обменяйте <i>$MINIDOGE</i> на <i>Raydium</i></div></div>",
      text: "Посетите <b>Raydium.io</b>, подключите свой кошелек Phantom и обменяйте <b>SOL</b> на <b>$MINIDOGE</b>.",
      url: LINKS.BUY.RAYDIUM,
    },
  ],
}; 