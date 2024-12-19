import { useState, useEffect } from "react";
import exchange from "@/config/shared/exchange";
import { useTranslation } from "react-i18next";
import { MemesBtn } from ".";

export default function Exchange() {
  const { t } = useTranslation();
  const [itemsToShow, setItemsToShow] = useState(5); // 初始显示5个
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDeviceType = () => {
      setIsMobile(window.innerWidth < 1024); // 判断是否为手机端，<1024px 为手机端
    };
    updateDeviceType(); // 初始化判断
    window.addEventListener("resize", updateDeviceType); // 监听窗口变化
    return () => window.removeEventListener("resize", updateDeviceType); // 清理事件监听
  }, []);

  const loadMore = () => {
    setItemsToShow((prev) => prev + 5); // 每次加载5个
  };

  // 根据设备类型，决定显示的项目数量
  const itemsToDisplay = isMobile ? exchange.slice(0, itemsToShow) : exchange;

  return (
    <div className="grid gap-4 md:gap-7 lg:gap-8 justify-items-center">
      <div className="flex flex-wrap gap-4 md:gap-7 lg:gap-8 justify-center items-center">
        {itemsToDisplay.map((item, index) => (
          <a
            className="grid gap-2 justify-items-center text-current"
            key={index}
            href={item.url}
            target="_blank"
          >
            <img
              src={item.image}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white/5 p-3"
            />
          </a>
        ))}
      </div>
      {/* 手机端显示“加载更多”按钮 */}
      {isMobile && itemsToShow < exchange.length && (
        <MemesBtn className="!min-w-32 !min-h-10 sm:!min-h-12 from-transparent to-transparent bg-white/5 text-white" onClick={loadMore}>
          {t("public.loadMore")}
        </MemesBtn>
      )}
    </div>
  );
}
