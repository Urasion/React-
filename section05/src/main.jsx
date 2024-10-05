import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// 최상위 컴포넌트는 관례상 App 컴포넌트라고 칭함
createRoot(document.getElementById('root')).render(
    <App />
);
