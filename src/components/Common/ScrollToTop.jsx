import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  

  useEffect(() => {
    // 페이지 경로(pathname)가 바뀔 때마다 스크롤을 최상단으로 올림
    document.body.style.overflow = 'hidden';
    
    window.scrollTo(0, 0);

    setTimeout(() => {
    document.body.style.overflow = '';
  }, 300);
  }, [pathname]);

  return null;
}