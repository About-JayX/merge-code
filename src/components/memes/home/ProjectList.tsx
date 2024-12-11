/**
 * ProjectList 组件
 * 展示 Memes.ac 平台上的项目列表
 * 包括项目的基本信息和社交媒体链接
 */

import { useEffect, useState } from "react";
import { domain } from "@/api";
import { TokenItem } from "@/types/domain";
import ProjectCard from "./ProjectCard";

// 项目列表组件
export default function ProjectList() {
  // 状态管理
  const [tokens, setTokens] = useState<{
    data: TokenItem[];
    total: number;
  }>({
    data: [],
    total: 1,
  });

  // 获取项目列表数据
  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const result = await domain.getListAPI({
          current: 1,
          pageSize: 12,
        });
        console.log('API Response:', result);
        setTokens(result.data);
      } catch (error) {
        console.error("Error fetching project list:", error);
      }
    };

    fetchTokens();
  }, []);

  return (
    <div className="flex flex-col mt-2 sm:mt-2 gap-3 sm:gap-5 min-h-screen">
      {/* 项目说明文案区域 */}
      <div className="relative px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent dark:from-transparent dark:via-purple-400/5 dark:to-transparent blur-2xl -z-10"></div>
        <p className="text-base sm:text-lg dark:text-white/80 text-black/80 py-3 leading-relaxed font-medium">
          Discover and explore <span className="text-purple-600 dark:text-purple-400">MEMES projects</span> built with our fast and modern website builder. 
          <span className="block mt-0.5">Join the community and showcase your project.</span>
        </p>
      </div>

      {/* 标题区域：使用渐变色和装饰条 */}
      <header className="uppercase text-xl sm:text-3xl font-bold px-4">
        <div className="flex items-center relative gap-3">
          {/* 左侧渐变装饰条 */}
          <div className="w-1 h-full">
            <div className="w-1 h-full bg-gradient-to-b from-[#A440FD] to-[#0DC8EC] rounded-lg absolute top-0 left-0" />
          </div>
          {/* 标题文本，包含渐变色效果 */}
          <span>
            Projects On&nbsp;
            <span className="font-extrabold bg-gradient-to-r from-[#9F44FC] to-[#10C5EC] bg-clip-text text-transparent">
              Memes.ac
            </span>
          </span>
        </div>
      </header>

      {/* 项目卡片网格布局 */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 px-3 sm:px-4">
        {tokens.data?.map((item, index) => (
          <ProjectCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
