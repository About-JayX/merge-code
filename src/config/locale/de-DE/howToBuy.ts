import { LINKS } from '@/config/resources';

export default {
  title: "Wie kaufe ich <b>$MINIDOGE</b>?",
  data: [
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>1.</b><div class='ml-2'>Kaufen Sie <i>SOL</i></div></div>",
      text: "Sie können <b>SOL</b> an jeder großen Börse kaufen und es in Ihre <i>Phantom Wallet</i> übertragen.",
      url: "",
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>2.</b><div class='ml-2'>Installieren Sie <i>Phantom</i></div></div>",
      text: "Laden Sie die <b>Phantom Wallet</b> für Ihren Browser oder Ihr Mobilgerät herunter und installieren Sie sie.",
      url: LINKS.BUY.PHANTOM,
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>3.</b><div class='ml-2'>Tauschen Sie <i>$MINIDOGE</i> auf <i>Raydium</i></div></div>",
      text: "Besuchen Sie <b>Raydium.io</b>, verbinden Sie Ihre Phantom Wallet und tauschen Sie <b>SOL</b> gegen <b>$MINIDOGE</b>.",
      url: LINKS.BUY.RAYDIUM,
    },
  ],
}; 