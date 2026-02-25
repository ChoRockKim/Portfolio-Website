// React 및 컴포넌트 임포트
import React from 'react';
import Header from './Header'; // 헤더 컴포넌트
import Footer from './Footer'; // 푸터 컴포넌트

// Layout 컴포넌트의 Props 타입 정의
interface LayoutProps {
  children: React.ReactNode; // 자식 컴포넌트 (각 페이지 내용)
}

// Layout 컴포넌트 - 전체 페이지 구조 정의
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    // 전체 페이지 감싸는 div: 최소 높이 100vh, 다크모드 지원
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      {/* 레이아웃 컨테이너: 플렉스 레이아웃으로 3개 섹션 구성 */}
      <div className="layout-container flex h-full grow flex-col">
        {/* 헤더 컴포넌트: 네비게이션 바 */}
        <Header />
        {/* 메인 콘텐츠 영역: 각 페이지의 내용이 렌더링되는 곳 */}
        <main className="flex-1 flex flex-col items-center w-full">
          {children}
        </main>
        {/* 푸터 컴포넌트: 페이지 하단 정보 */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
