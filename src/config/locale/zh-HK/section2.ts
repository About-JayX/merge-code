import s2Image from "@/assets/image/section2/index.png";
import { LINKS } from "@/config/links";

export default {
  title: "我是 $MINIDOGE 的 CEO",
  text: "<div>正如加密社群 <i>自豪地認可</i> <b>Elon Musk</b> 為 <b>$DOGE</b> 的 CEO，他們也 <i>榮譽加冕</i> <b>Lil X</b> 為 <b>$MINIDOGE</b> 的 CEO。</div><div class='mt-4'>在由風險投資和巨鯨主導的世界中，我們的社群 <i>團結而強大</i>，追隨他們的 <i>年輕遠見</i> 領袖，共同構建 <i>真正去中心化</i> 的未來。</div>",
  image: s2Image,
  box: {
    list: [
      {
        title: "流動性池",
        text: "100% 的代幣分配給流動性池。",
        value: "100%",
      },
      {
        title: "持有者",
        text: "代幣持有者人數正在迅速增長。",
        value: "1000+",
      },
      {
        title: "總供應量",
        text: "代幣的總供應量是固定的。",
        value: "1M",
      },
    ],
  },
  bntText: "電報群組",
  bntUrl: LINKS.SOCIAL.TELEGRAM,
};
