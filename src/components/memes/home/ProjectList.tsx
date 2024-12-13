/**
 * ProjectList 组件
 * 展示 Memes.ac 平台上的项目列表
 * 包括项目的基本信息和社交媒体链接
 */

import { Fragment, useEffect, useState } from "react";
import { domain } from "@/api";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";
import { Pagination } from "antd";

// 项目列表组件
export default function ProjectList() {
  // 状态管理
  const [tokens, setTokens] = useState<{
    data: any[];
    total: number;
  }>({
    data: [],
    total: 1,
  });

  const { t } = useTranslation();

  const project: any = t("project", { returnObjects: true });
  const [page,setPage] = useState(1)

  // 获取项目列表数据
  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const result: any = await domain.getListAPI({
          current: page,
          pageSize: 12,
        });
        console.log("API Response:", result);
        setTokens(result.data);
      } catch (error) {
        console.error("Error fetching project list:", error);
      }
    };

    fetchTokens();
  }, [page]);

  return (
    <div className="flex flex-col mt-2 sm:mt-2 gap-3 sm:gap-5 min-h-screen">
      {/* 标题区域：使用渐变色和装饰条 */}
      <header className="relative text-xl sm:text-3xl font-bold px-4 h-fit flex flex-col">
        <div className="flex  items-center relative gap-3 uppercase">
          <div className="w-1 h-full">
            <div className="w-1 h-full bg-gradient-to-b from-[#A440FD] to-[#0DC8EC] rounded-lg absolute top-0 left-0" />
          </div>
          <span>
            {project.title.map((item: any, index: number) => (
              <Fragment key={index}>
                {!item.status && item.content}
                {item.status && (
                  <span className="font-extrabold bg-gradient-to-r from-[#9F44FC] to-[#10C5EC] bg-clip-text text-transparent">
                    {item.content}
                  </span>
                )}
                &nbsp;
              </Fragment>
            ))}
          </span>
        </div>
        {/* 项目说明文案区域 */}
        <div className="w-auto h-full relative grid grid-cols-[auto,1fr] justify-center pl-4">
          <div className="border-l border-[#5F5F5F]/30 absolute top-0 left-[1.5px] w-[1px] h-full" />
          <p className="whitespace-break-spaces text-base sm:text-lg dark:text-white/80 text-black/80 py-2 font-normal">
            {project.text.map((item: any, index: number) => (
              <Fragment key={index}>
                {!item.status && item.content}
                {item.status && (
                  <span className="text-purple-600 dark:text-purple-400">
                    {item.content}
                  </span>
                )}
                &nbsp;
              </Fragment>
            ))}
          </p>
        </div>
      </header>

      {/* 项目卡片网格布局 */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 px-3 sm:px-4">
        {tokens.data?.map((item, index) => (
          <ProjectCard key={index} item={item} />
        ))}
      </div>
      {tokens.data.length !== 0 && (
        <div className="flex justify-center">
        <Pagination simple pageSize={12} total={tokens.total} onChange={(page)=>setPage(page)}/>
      </div>
      )}
      
    </div>
  );
}
