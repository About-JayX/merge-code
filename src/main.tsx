import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from '@/App'
import Provider from '@/provider'

import 'virtual:svg-icons-register'
import '@/i18n'
import '@/styles/core/global.scss'

// 配置 React Router future flags
const routerOptions = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
}

ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(
  <Provider>
    <BrowserRouter {...routerOptions}>
      <App />
    </BrowserRouter>
  </Provider>
)
