import { LINKS } from "@/config/resources";

export default {
  title: "چگونه <b>$MINIDOGE</b> بخریم؟",
  data: [
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>1.</b><div class='ml-2'><i>SOL</i> خرید</div></div>",
      text: "شما می‌توانید <b>SOL</b> را از هر صرافی بزرگ خریداری کرده و به <i>کیف پول Phantom</i> خود منتقل کنید.",
      url: "",
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>2.</b><div class='ml-2'><i>Phantom</i> نصب</div></div>",
      text: "<b>کیف پول Phantom</b> را برای مرورگر یا دستگاه موبایل خود دانلود و نصب کنید.",
      url: LINKS.BUY.PHANTOM,
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>3.</b><div class='ml-2'>مبادله <i>$MINIDOGE</i> در <i>Raydium</i></div></div>",
      text: "به <b>Raydium.io</b> بروید، کیف پول Phantom خود را متصل کنید و <b>SOL</b> را با <b>$MINIDOGE</b> مبادله کنید.",
      url: LINKS.BUY.RAYDIUM,
    },
  ],
}; 