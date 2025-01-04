import { LINKS } from "@/config/resources";

export default {
  title: "วิธีซื้อ <b>$MINIDOGE</b>",
  data: [
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>1.</b><div class='ml-2'>ซื้อ <i>SOL</i></div></div>",
      text: "คุณสามารถซื้อ <b>SOL</b> จากตลาดซื้อขายหลักใดก็ได้และโอนไปยัง <i>กระเป๋า Phantom</i> ของคุณ",
      url: "",
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>2.</b><div class='ml-2'>ติดตั้ง <i>Phantom</i></div></div>",
      text: "ดาวน์โหลดและติดตั้ง <b>กระเป๋า Phantom</b> สำหรับเบราว์เซอร์หรืออุปกรณ์มือถือของคุณ",
      url: LINKS.BUY.PHANTOM,
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>3.</b><div class='ml-2'>แลกเปลี่ยน <i>$MINIDOGE</i> บน <i>Raydium</i></div></div>",
      text: "เข้าไปที่ <b>Raydium.io</b> เชื่อมต่อกระเป๋า Phantom ของคุณ และแลกเปลี่ยน <b>SOL</b> เป็น <b>$MINIDOGE</b>",
      url: LINKS.BUY.RAYDIUM,
    },
  ],
}; 