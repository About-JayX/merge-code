/**
 * 路由配置文件
 * 实现了以下功能：
 * 1. 动态路由的生成
 * 2. 组件的懒加载
 * 3. 国际化路由支持
 * 4. 路由参数的处理
 */

import React, { lazy, Suspense, useEffect, useMemo } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { locale } from '@/config'
import { router } from '@/config'
import type { RouterType } from '@/type'

// 从配置文件中获取路由参数
const param: Record<string, string[]> = router.param

// 使用 Vite 的 import.meta.glob 动态导入视图组件
const view = import.meta.glob<RouterType.ImportMetaGlobType>('@/view/**/*.tsx')

/**
 * 生成路由配置
 * @param pages - 页面组件的导入信息数组
 * @returns 路由配置数组
 *
 * 处理逻辑：
 * 1. 解析文件路径，提取组件名和目录路径
 * 2. 生成路由路径
 * 3. 使用 React.lazy 实现组件懒加载
 */
const generateRoutes = (
  pages: [string, () => Promise<{ default: React.ComponentType }>][]
): RouterType.RouterDataType[] => {
  return pages.map(([path, page]) => {
    const segments = path.split('/')
    const componentName = segments.pop()?.replace(/.tsx$/, '') ?? ''

    const dirPath = segments
      .slice(segments.indexOf('view') + 1)
      .map(seg => seg.toLowerCase())
      .join('/')

    const routePath =
      componentName === 'index'
        ? `/${dirPath}`
        : `/${dirPath ? `${dirPath}/` : ''}${componentName.toLowerCase()}`

    const Component = lazy(() =>
      page().then(module => ({ default: module.default }))
    )

    return {
      path: routePath === '' ? '/' : routePath,
      element: <Component />,
    }
  })
}

/**
 * 路由组件
 * 实现功能：
 * 1. 动态生成路由配置
 * 2. 处理国际化路由
 * 3. 渲染路由组件
 */
export default function Router() {
  const { i18n } = useTranslation()
  const navigate = useNavigate()

  // 根据当前语言更新路由配置
  useEffect(() => {
    const supportedLangs = Object.keys(locale)
    if (!supportedLangs.includes(i18n.language)) {
      i18n.changeLanguage(supportedLangs[0])
    }
  }, [i18n.language])

  // 使用 useMemo 缓存路由配置，避免不必要的重复计算
  const routes = useMemo(() => generateRoutes(Object.entries(view)), [])

  // 生成多语言路由
  const langRoutes = useMemo(() => {
    const supportedLangs = Object.keys(locale)

    return supportedLangs.flatMap(langKey => {
      return routes.flatMap(route => {
        const params =
          param[route.path]?.length > 0
            ? `/:${param[route.path].join('/:')}`
            : ''

        return [
          { ...route, path: `/${langKey}${route.path}` }, // 语言前缀路由
          { ...route, path: `${route.path}${params}` }, // 原始路由
          { ...route, path: `/${langKey}${route.path}${params}` }, // 语言前缀和参数
        ]
      })
    })
  }, [routes])

  // 汇总所有路由
  const allRoutes = useMemo(
    () => [...routes, ...langRoutes],
    [routes, langRoutes]
  )

  return (
    <Suspense>
      <Routes>
        {allRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<>404 Not Found</>} />
      </Routes>
    </Suspense>
  )
}
