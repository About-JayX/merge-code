import Router from '@/router'
import { Fragment } from 'react'
import GoogleAnalytics from './util/GoogleAnalytics'
export default function App() {
  return (
    <Fragment>
      {/* 主要路由内容 */}
      <GoogleAnalytics></GoogleAnalytics>
      <Router />
    </Fragment>
  )
}
