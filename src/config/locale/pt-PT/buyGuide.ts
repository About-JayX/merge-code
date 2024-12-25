import { LINKS } from '@/config/resources';

export default {
  title: "Como comprar <b>$MINIDOGE</b>?",
  data: [
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>1.</b><div class='ml-2'>Compre <i>SOL</i></div></div>",
      text: "Você pode comprar <b>SOL</b> em qualquer grande exchange e transferir para sua <i>carteira Phantom</i>.",
      url: "",
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>2.</b><div class='ml-2'>Instale <i>Phantom</i></div></div>",
      text: "Baixe e instale a <b>carteira Phantom</b> para seu navegador ou dispositivo móvel.",
      url: LINKS.BUY.PHANTOM,
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>3.</b><div class='ml-2'>Troque <i>$MINIDOGE</i> no <i>Raydium</i></div></div>",
      text: "Visite <b>Raydium.io</b>, conecte sua carteira Phantom e troque <b>SOL</b> por <b>$MINIDOGE</b>.",
      url: LINKS.BUY.RAYDIUM,
    },
  ],
}; 