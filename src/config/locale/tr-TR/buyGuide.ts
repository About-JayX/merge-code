import { LINKS } from '@/config/resources';

export default {
  title: "<b>$MINIDOGE</b> Nasıl Alınır?",
  data: [
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>1.</b><div class='ml-2'><i>SOL</i> Satın Al</div></div>",
      text: "Herhangi bir büyük borsadan <b>SOL</b> satın alabilir ve <i>Phantom cüzdanınıza</i> transfer edebilirsiniz.",
      url: "",
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>2.</b><div class='ml-2'><i>Phantom</i> Kur</div></div>",
      text: "Tarayıcınız veya mobil cihazınız için <b>Phantom cüzdanını</b> indirin ve kurun.",
      url: LINKS.BUY.PHANTOM,
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>3.</b><div class='ml-2'><i>Raydium</i>'de <i>$MINIDOGE</i> Takası Yap</div></div>",
      text: "<b>Raydium.io</b>'yu ziyaret edin, Phantom cüzdanınızı bağlayın ve <b>SOL</b>'u <b>$MINIDOGE</b> ile takas edin.",
      url: LINKS.BUY.RAYDIUM,
    },
  ],
}; 