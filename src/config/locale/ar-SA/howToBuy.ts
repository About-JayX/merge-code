import { LINKS } from "@/config/links";

export default {
  title: "كيف تشتري <b>$MINIDOGE</b>؟",
  data: [
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>1.</b><div class='ml-2'>شراء <i>SOL</i></div></div>",
      text: "يمكنك شراء <b>SOL</b> من أي منصة تداول كبيرة وتحويله إلى <i>محفظة Phantom</i> الخاصة بك.",
      url: "",
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>2.</b><div class='ml-2'>تثبيت <i>Phantom</i></div></div>",
      text: "قم بتحميل وتثبيت <b>محفظة Phantom</b> لمتصفحك أو جهازك المحمول.",
      url: LINKS.BUY.PHANTOM,
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>3.</b><div class='ml-2'>تبادل <i>$MINIDOGE</i> على <i>Raydium</i></div></div>",
      text: "قم بزيارة <b>Raydium.io</b>، وصل محفظة Phantom الخاصة بك وقم بتبادل <b>SOL</b> مقابل <b>$MINIDOGE</b>.",
      url: LINKS.BUY.RAYDIUM,
    },
  ],
}; 