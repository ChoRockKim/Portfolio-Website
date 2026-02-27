// React 및 라우터 상태 관리 라이브러리 임포트
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

// Header 컴포넌트 - 상단 네비게이션 바
const Header: React.FC = () => {
  // 모바일 메뉴 열기/닫기 상태 관리
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // 메뉴 열기/닫기 토글 함수
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 네비게이션 메뉴 항목 배열
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/tech-stack' },
    { name: 'Projects', path: '/projects' },
    // { name: 'Experience', path: '/experience' },
    // { name: 'Blog', path: '/blog' },
  ];

  return (
    // 헤더: 상단 고정, 반투명 배경, 드롭다운 블러 효과
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-6 py-4 lg:px-20 bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-4 text-white">
        <div className="size-6 text-primary flex items-center justify-center">
          <span className="material-symbols-outlined !text-2xl">code</span>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Taeheon Kim</h2>
      </div>

      {/* 데스크톱 네비게이션 (lg 이상 화면에서만 표시) */}
      <div className="hidden lg:flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors text-sm font-medium leading-normal ${
                  isActive ? 'text-white/90 text-primary' : 'text-white/70 hover:text-primary'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]"
        onClick={()=>{navigate('/contact')}}>
          <span className="truncate">Contact</span>
        </button>
      </div>

      {/* 모바일 메뉴 버튼 (lg 미만 화면에서만 표시) */}
      <button
        className="lg:hidden text-white"
        onClick={toggleMenu}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* 모바일 메뉴 오버레이 (메뉴 열려있을 때 표시) */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background-dark border-b border-white/10 p-4 flex flex-col gap-4 lg:hidden shadow-xl">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors text-sm font-medium leading-normal ${
                    isActive ? 'text-primary' : 'text-white/70 hover:text-primary'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          <button
            onClick={()=>{navigate('/contact'); setIsMenuOpen(!isMenuOpen)}}
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Contact</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
