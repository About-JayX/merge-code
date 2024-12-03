import { Icon } from "@/components";
import { Image, Typography } from "antd";
import { Ellipsis } from "antd-mobile";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
const { Paragraph } = Typography;
export default function Twitter() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col mt-16 sm:mt-4 gap-4 sm:gap-7">
      <span
        className="uppercase text-xl sm:text-3xl font-bold"
        style={{ display: "-webkit-box" }}
      >
        <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-[#A440FD] to-[#0DC8EC] rounded-lg mt-[6px] mr-2 sm:mr-3" />
        {t("twitter.title")}
      </span>
      <div className="grid grid-cols-1  gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Object.assign([], t("twitter.data", { returnObjects: true })).map(
          (item: any, index) => (
            <div key={index} className="flex gap-3 sm:gap-4 text-current">
              <div className="w-1 h-full relative flex justify-center">
                <div className="border-l border-[#5F5F5F]/30 absolute top-0 left-[1.5px] w-[1px] h-full" />
                <div className="w-1 h-14 bg-gradient-to-b from-[#A440FD] to-[#0DC8EC] rounded-lg mb-[-1px] absolute left-[0] top-0" />
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href={item.url}
                  target="_blank"
                  className="grid grid-cols-[56px,1fr] items-center gap-4 text-current"
                >
                  <div className="w-14 h-14 relative flex items-center justify-center">
                    <Image
                      src={item.avatarSrc}
                      width="100%"
                      height="100%"
                      className="w-full h-full rounded-full"
                      preview={false}
                    />
                    <div className="absolute bottom-0 w-[24px] h-[24px] right-[-3px] bg-black p-1 rounded-full flex  justify-center items-center border border-[#5F5F5F]/30">
                      <Icon
                        name="twitter"
                        className="w-[calc(100%-3px)] h-[calc(100%-3px)]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <span className="text-lg sm:text-xl font-medium flex items-center break-all">
                      <Ellipsis direction="end" content={item.title} />
                      &nbsp;
                      {item.authenticateStatus && <Icon name="authenticate" />}
                    </span>
                    <span className="opacity-80 text-sm sm:text-base break-all">
                      <Ellipsis direction="end" content={item.name} />
                    </span>
                  </div>
                </a>
                <Paragraph
                  className="text-sm sm:text-base !text-[--text-color]"
                  ellipsis={{
                    rows: 4,
                    expandable: "collapsible",
                    symbol: (expanded) =>
                      expanded ? <UpOutlined /> : <DownOutlined />,
                  }}
                >
                  {item.text}
                </Paragraph>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
