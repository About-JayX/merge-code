/**
 * Twitter 组件模块
 * 用于展示项目相关的 Twitter 账号信息列表
 * 特点：
 * 1. 支持国际化
 * 2. 响应式布局
 * 3. 美观的 UI 设计（渐变色、动画等）
 * 4. 支持展开/收起长文本
 */

import { Icon } from "@/components";
import { Image, Typography } from "antd";
import { Ellipsis } from "antd-mobile";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const { Paragraph } = Typography;

/**
 * Twitter 展示组件
 * 功能：
 * 1. 展示 Twitter 账号列表
 * 2. 显示账号基本信息（头像、名称、认证状态）
 * 3. 支持点击跳转到 Twitter 主页
 * 4. 展示账号描述，支持展开/收起
 */
export default function Twitter() {
  /**
   * 使用 i18n 翻译钩子
   * 用于获取不同语言的文本内容
   */
  const { t } = useTranslation();

  return (
    <div className="flex flex-col mt-16 sm:mt-4 gap-4 sm:gap-7">
      {/* 标题栏：使用大写字体和渐变装饰条 */}
      <span
        className="uppercase text-xl sm:text-3xl font-bold"
        style={{ display: "-webkit-box" }}
      >
        {/* 标题左侧的渐变装饰条 */}
        <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-[#A440FD] to-[#0DC8EC] rounded-lg mt-[6px] mr-2 sm:mr-3" />
        {t("twitter.title")}
      </span>

      {/* Twitter 账号列表
       * 响应式布局：
       * - 移动端：1列
       * - 平板：2列
       * - 中等屏幕：3列
       * - 大屏幕：4列
       */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* 将翻译数据转换为数组并遍历渲染 */}
        {Object.assign([], t("twitter.data", { returnObjects: true })).map(
          (item: any, index) => (
            <div key={index} className="flex gap-3 sm:gap-4 text-current">
              {/* 左侧装饰线
               * 包含：
               * 1. 灰色背景线
               * 2. 渐变色强调线
               */}
              <div className="w-1 h-full relative flex justify-center">
                <div className="border-l border-[#5F5F5F]/30 absolute top-0 left-[1.5px] w-[1px] h-full" />
                <div className="w-1 h-14 bg-gradient-to-b from-[#A440FD] to-[#0DC8EC] rounded-lg mb-[-1px] absolute left-[0] top-0" />
              </div>

              {/* Twitter 账号信息卡片 */}
              <div className="flex flex-col gap-4">
                {/* 头像和基本信息区域 */}
                <a
                  href={item.url}
                  target="_blank"
                  className="grid grid-cols-[56px,1fr] items-center gap-4 text-current"
                >
                  {/* 头像区域：包含头像图片和 Twitter 图标 */}
                  <div className="w-14 h-14 relative flex items-center justify-center">
                    {/* 头像图片 */}
                    <Image
                      src={item.avatarSrc}
                      width="100%"
                      height="100%"
                      className="w-full h-full rounded-full"
                      preview={false}
                    />
                    {/* 右下角 Twitter 图标装饰 */}
                    <div className="absolute bottom-0 w-[24px] h-[24px] right-[-3px] bg-black p-1 rounded-full flex justify-center items-center border border-[#5F5F5F]/30">
                      <Icon
                        name="twitter"
                        className="w-[calc(100%-3px)] h-[calc(100%-3px)]"
                      />
                    </div>
                  </div>

                  {/* 账号基本信息 */}
                  <div className="flex flex-col w-full">
                    {/* 账号标题：包含名称和认证标记 */}
                    <span className="text-lg sm:text-xl font-medium flex items-center break-all">
                      <Ellipsis direction="end" content={item.title} />
                      &nbsp;
                      {/* 认证标记（如果账号已认证） */}
                      {item.authenticateStatus && <Icon name="authenticate" />}
                    </span>
                    {/* 账号名称（用户名） */}
                    <span className="opacity-80 text-sm sm:text-base break-all">
                      <Ellipsis direction="end" content={item.name} />
                    </span>
                  </div>
                </a>

                {/* 账号描述文本
                 * 特点：
                 * 1. 支持展开/收起
                 * 2. 最多显示4行
                 * 3. 使用箭头图标指示状态
                 */}
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
