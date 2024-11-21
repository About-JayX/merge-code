import React, { lazy, Suspense, useEffect, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { locale } from "@/config";
import { router } from "@/config";
import type { RouterType } from "@/type";

const param: Record<string, string[]> = router.param;

// 动态导入视图组件
const view = import.meta.glob<RouterType.ImportMetaGlobType>("@/view/**/*.tsx");

// 生成路由
const generateRoutes = (
  pages: [string, () => Promise<{ default: React.ComponentType }>][]
): RouterType.RouterDataType[] => {
  return pages.map(([path, page]) => {
    const segments = path.split("/");
    const componentName = segments.pop()?.replace(/.tsx$/, "") ?? "";
    const dirPath = segments
      .slice(segments.indexOf("view") + 1)
      .map((seg) => seg.toLowerCase())
      .join("/");

    const routePath =
      componentName === "index"
        ? `/${dirPath}`
        : `/${dirPath ? `${dirPath}/` : ""}${componentName.toLowerCase()}`;

    const Component = lazy(() =>
      page().then((module) => ({ default: module.default }))
    );

    return {
      path: routePath === "" ? "/" : routePath,
      element: <Component />,
    };
  });
};

export default function Router() {
  const { i18n } = useTranslation();

  // 生成基础路由
  const routes = useMemo(() => generateRoutes(Object.entries(view)), []);

  // 生成多语言路由
  const langRoutes = useMemo(() => {
    const supportedLangs = Object.keys(locale);

    return supportedLangs.flatMap((langKey) => {
      return routes.flatMap((route) => {
        const params =
          param[route.path]?.length > 0
            ? `/:${param[route.path].join("/:")}`
            : "";

        return [
          { ...route, path: `/${langKey}${route.path}` }, // 语言前缀路由
          { ...route, path: `${route.path}${params}` }, // 原始路由
          { ...route, path: `/${langKey}${route.path}${params}` }, // 语言前缀和参数
        ];
      });
    });
  }, [routes]);

  // 汇总所有路由
  const allRoutes = useMemo(
    () => [...routes, ...langRoutes],
    [routes, langRoutes]
  );

  // 确保语言支持
  useEffect(() => {
    const supportedLangs = Object.keys(locale);
    if (!supportedLangs.includes(i18n.language)) {
      i18n.changeLanguage(supportedLangs[0]);
    }
  }, [i18n.language]);

  return (
    <Suspense>
      <Routes>
        {allRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<>404 Not Found</>} />
      </Routes>
    </Suspense>
  );
}
