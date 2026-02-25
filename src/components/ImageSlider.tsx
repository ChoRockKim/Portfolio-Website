import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageSlider = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  // 이미지가 없거나 한 장일 때의 예외 처리
  if (!images || images.length === 0) return <div className="w-full h-full bg-gray-800" />;

  const handleNext = () => {

    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  };

  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-800 relative group flex items-center justify-center">
      {/* 이미지 슬라이드 애니메이션 */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="object-contain max-h-full w-full"
          alt={`Project view ${currentIndex + 1}`}
        />
      </AnimatePresence>

      {/* 기존에 있던 그라데이션 오버레이 (버튼 아래로 배치) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

      {/* 좌우 화살표 버튼 (이미지가 2장 이상일 때만 표시) */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-10"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-10"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

          {/* 인디케이터 (점) */}
          <div className="absolute bottom-4 flex gap-2">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-primary w-4" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;