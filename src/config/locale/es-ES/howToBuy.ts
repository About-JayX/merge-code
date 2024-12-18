import { LINKS } from "@/config/links";

export default {
  title: "¿Cómo comprar <b>$MINIDOGE</b>?",
  data: [
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>1.</b><div class='ml-2'>Compra <i>SOL</i></div></div>",
      text: "Puedes comprar <b>SOL</b> en cualquier exchange importante y transferirlo a tu <i>billetera Phantom</i>.",
      url: "",
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>2.</b><div class='ml-2'>Instala <i>Phantom</i></div></div>",
      text: "Descarga e instala la <b>billetera Phantom</b> para tu navegador o dispositivo móvil.",
      url: LINKS.BUY.PHANTOM,
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>3.</b><div class='ml-2'>Intercambia <i>$MINIDOGE</i> en <i>Raydium</i></div></div>",
      text: "Visita <b>Raydium.io</b>, conecta tu billetera Phantom e intercambia <b>SOL</b> por <b>$MINIDOGE</b>.",
      url: LINKS.BUY.RAYDIUM,
    },
  ],
}; 