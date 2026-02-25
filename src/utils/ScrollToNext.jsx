import React, { useEffect, useState, useCallback, useRef } from 'react'; // 1. useRef 추가
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToNext = ({ nextPath, nextProjectName }) => {
  const navigate = useNavigate();
  const [pullAmount, setPullAmount] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);
  
  // 2. 이 레퍼런스가 선언되어 있지 않으면 handleWheel 내부에서 에러가 나거나 로직이 멈춥니다.
  const lastBottomTime = useRef(0); 
  
  const THRESHOLD = 500;

  useEffect(() => {
    const checkBottom = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      
      const atBottom = scrollTop + clientHeight >= scrollHeight - 10;

      // 3. 바닥에 '처음' 닿았을 때만 시간을 기록하는 로직이 필요합니다.
      if (atBottom && !isAtBottom) {
        lastBottomTime.current = Date.now();
      }

      setIsAtBottom(atBottom);
      if (!atBottom) setPullAmount(0);
    };

    window.addEventListener('scroll', checkBottom);
    return () => window.removeEventListener('scroll', checkBottom);
  }, [isAtBottom]); // isAtBottom 상태 변화를 감지하도록 의존성 추가

const handleWheel = useCallback((e) => {
  if (!isAtBottom) return;
  
  // 1. 안전 잠금 시간 상향 (0.3초 -> 0.5초로 하면 더 확실합니다)
  const timeSinceBottom = Date.now() - lastBottomTime.current;
  if (timeSinceBottom < 500) return;

  if (e.deltaY > 0) {
    setPullAmount(prev => {
      /* 2. 핵심 수정: deltaY 값을 그대로 더하지 않습니다.
         - Math.min(e.deltaY, 100): 아무리 세게 굴려도 한 번에 최대 100까지만 인정
         - * 0.2: 거기에 0.2를 곱해 '저항감'을 줍니다. (묵직하게 차오름)
      */
      const cappedDelta = Math.min(e.deltaY, 300) * 0.5;
      const next = prev + cappedDelta;

      if (next >= THRESHOLD) {
        navigate(nextPath);
        return THRESHOLD;
      }
      return next;
    });
  } else if (e.deltaY < 0) {
    // 위로 스크롤 시 게이지가 깎이는 속도도 조절
    setPullAmount(prev => Math.max(0, prev + e.deltaY * 0.5));
  }
}, [isAtBottom, navigate, nextPath]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  const progress = (pullAmount / THRESHOLD) * 100;

  return (
    <AnimatePresence>
      {isAtBottom && pullAmount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-0 left-0 w-full h-44 bg-gradient-to-t to-transparent flex flex-col items-center justify-center z-50 pointer-events-none"
        >
          <motion.div
            animate={{ y: pullAmount > 0 ? [0, -15, 0] : [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="text-blue-600 mb-2"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.div>

          <p className="text-white font-bold text-lg">
            다음 페이지: <span className="text-white">{nextProjectName}</span>
          </p>
          <p className="text-white text-sm mb-4">
            {pullAmount > 0 ? "더 세게 밀어 올리세요!" : "스크롤을 아래로 더 내려보세요"}
          </p>

          <div className="w-64 h-2 bg-gray-300/50 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-blue-600"
              style={{ width: `${progress}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToNext;