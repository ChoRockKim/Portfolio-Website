// React의 StrictMode와 DOM 렌더링을 위한 라이브러리 임포트
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // 전역 스타일 임포트
import App from './App.tsx' // 메인 App 컴포넌트 임포트

// React 리액트 DOM에 App 컴포넌트를 렌더링
// StrictMode는 개발 중에 잠재적 문제를 찾아내는 도구
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
