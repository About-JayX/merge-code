import { LINKS } from '@/config/resources';

export default {
  title: "Làm thế nào để mua <b>$MINIDOGE</b>?",
  data: [
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>1.</b><div class='ml-2'>Mua <i>SOL</i></div></div>",
      text: "Bạn có thể mua <b>SOL</b> từ bất kỳ sàn giao dịch chính nào và chuyển nó vào <i>ví Phantom</i> của bạn.",
      url: "",
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>2.</b><div class='ml-2'>Cài đặt <i>Phantom</i></div></div>",
      text: "Tải xuống và cài đặt <b>ví Phantom</b> cho trình duyệt hoặc thiết bị di động của bạn.",
      url: LINKS.BUY.PHANTOM,
    },
    {
      title:
        "<div class='flex'><b class='text-[#FFAC03]'>3.</b><div class='ml-2'>Đổi <i>$MINIDOGE</i> trên <i>Raydium</i></div></div>",
      text: "Truy cập <b>Raydium.io</b>, kết nối ví Phantom của bạn, và đổi <b>SOL</b> lấy <b>$MINIDOGE</b>.",
      url: LINKS.BUY.RAYDIUM,
    },
  ],
}; 