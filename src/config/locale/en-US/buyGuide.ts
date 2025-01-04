import { LINKS } from '@/config/resources';

export default {
  title: "How To Buy <b>$MINIDOGE</b>?",
  data: [
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>1.</b><div class='ml-2'>Buy <i>SOL</i></div></div>",
      text: "You can buy <b>SOL</b> from any major exchange and transfer it to your <i>Phantom wallet</i>.",
      url: "",
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>2.</b><div class='ml-2'>Install <i>Phantom</i></div></div>",
      text: "Download and install <b>Phantom wallet</b> for your browser or mobile device.",
      url: LINKS.BUY.PHANTOM,
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>3.</b><div class='ml-2'>Swap <i>$MINIDOGE</i> on <i>Raydium</i></div></div>",
      text: "Visit <b>Raydium.io</b>, connect your Phantom wallet, and swap <b>SOL</b> for <b>$MINIDOGE</b>.",
      url: LINKS.BUY.RAYDIUM,
    },
  ],
};
