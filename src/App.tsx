// React Router를 이용한 클라이언트 라우팅 라이브러리 임포트
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
// 레이아웃 및 페이지 컴포넌트 임포트
import Layout from "./components/Layout";
const Home = lazy(() => import("./pages/Home"));
const Blog = lazy(() => import("./pages/Blog"));
const Experience = lazy(() => import("./pages/Experience"));
const TechStack = lazy(() => import("./pages/TechStack"));
const Projects = lazy(() => import("./pages/Projects"));
import ScrollToTop from "./components/Common/ScrollToTop.js";
const Contact = lazy(() => import("./pages/Contact"));

// 메인 App 컴포넌트 - 라우팅 및 레이아웃 구조 정의
function App() {
  return (
    // Router: 전체 앱의 라우팅 기능 활성화
    <Router>
      <ScrollToTop></ScrollToTop>
      {/* Layout: 모든 페이지에 공통으로 나타날 헤더, 푸터 등을 감싸는 컴포넌트 */}
      <Layout>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen text-white text-xl">
              불러오는 중...
            </div>
          }
        >
          {/* Routes: URL 경로에 따라 렌더링할 컴포넌트 정의 */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

// App 컴포넌트를 기본 내보내기
export default App;
