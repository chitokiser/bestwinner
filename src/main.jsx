import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// 예전 해시 주소(/#/about 등)로 들어온 링크·북마크를 일반 주소(/about)로 바꿔 그대로 동작하게 한다.
const upgradeLegacyHash = () => {
  if (window.location.hash.startsWith('#/')) {
    window.history.replaceState(null, '', window.location.hash.slice(1))
    return true
  }
  return false
}
upgradeLegacyHash()
window.addEventListener('hashchange', () => {
  if (upgradeLegacyHash()) window.dispatchEvent(new PopStateEvent('popstate'))
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
