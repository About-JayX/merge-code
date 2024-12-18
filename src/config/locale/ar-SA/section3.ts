import s3Image0 from "@/assets/image/section3/0.png";
import s3Image1 from "@/assets/image/section3/1.png";
import s3Image2 from "@/assets/image/section3/2.png";
import s3Image3 from "@/assets/image/section3/3.png";
import { LINKS } from "@/config/links";

export default {
  title: "خارطة الطريق",
  data: [
    {
      title: "المرحلة 1",
      text: [
        "• إطلاق الموقع الإلكتروني",
        "• إطلاق الرمز المميز",
        "• إدراج CoinGecko/CMC",
        "• حملة تسويقية",
      ],
      image: s3Image0,
    },
    {
      title: "المرحلة 2",
      text: [
        "• تطوير المجتمع",
        "• شراكات استراتيجية",
        "• إدراج CEX",
        "• تطوير النظام البيئي",
      ],
      image: s3Image1,
    },
    {
      title: "المرحلة 3",
      text: [
        "• إطلاق NFT",
        "• تطوير الألعاب",
        "• توسيع الفريق",
        "• المزيد من المفاجآت",
      ],
      image: s3Image2,
    },
  ],
  box: {
    title: "المرحلة 4",
    text: "سيتم الكشف عن المزيد قريباً...",
    image: s3Image3,
    bntText: "الورقة البيضاء",
    bntUrl: LINKS.DOCS.CTO_FOUNDATION,
  },
}; 