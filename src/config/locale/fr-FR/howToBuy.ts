import { LINKS } from "@/config/links";

export default {
  title: "Comment acheter <b>$MINIDOGE</b>?",
  data: [
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>1.</b><div class='ml-2'>Achetez <i>SOL</i></div></div>",
      text: "Vous pouvez acheter <b>SOL</b> sur n'importe quelle bourse majeure et le transférer vers votre <i>portefeuille Phantom</i>.",
      url: "",
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>2.</b><div class='ml-2'>Installez <i>Phantom</i></div></div>",
      text: "Téléchargez et installez le <b>portefeuille Phantom</b> pour votre navigateur ou appareil mobile.",
      url: LINKS.BUY.PHANTOM,
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>3.</b><div class='ml-2'>Échangez <i>$MINIDOGE</i> sur <i>Raydium</i></div></div>",
      text: "Visitez <b>Raydium.io</b>, connectez votre portefeuille Phantom et échangez <b>SOL</b> contre <b>$MINIDOGE</b>.",
      url: LINKS.BUY.RAYDIUM,
    },
  ],
}; 