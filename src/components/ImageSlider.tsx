import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageSlider = ({ images }: { images: string[] }) => {
  // direction: 1(다음), -1(이전)을 추적하여 슬라이드 방향 결정
  const [[page, direction], setPage] = useState([0, 0]);
  const currentIndex = Math.abs(page % images.length);

  // 이미지 예외 처리
  if (!images || images.length === 0)
    return <div className="aspect-video w-full rounded-xl bg-gray-800" />;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // INP 개선을 위해 이미지 사전 디코딩
  useEffect(() => {
    // 표시될 때 준비되도록 현재 이미지 주변의 이미지를 디코딩
    const imagesToDecode = [];
    if (images.length > 0) {
      // 현재 이미지
      imagesToDecode.push(images[currentIndex]);
      // 다음 및 이전 이미지 (가능한 경우)
      if (images.length > 1) {
        imagesToDecode.push(images[(currentIndex + 1) % images.length]);
        imagesToDecode.push(images[(currentIndex + images.length - 1) % images.length]);
      }
    }

    imagesToDecode.forEach(src => {
      const img = new Image();
      img.src = src;
      img.decode().catch(() => {
        console.error(`Failed to decode image: ${src}`);
      });
    });
  }, [images, currentIndex]);


  // 슬라이드 애니메이션 효과 정의
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-900 relative group flex items-center justify-center">


      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[currentIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.3 },
            opacity: { duration: 0.2 },
          }}
          // [최적화 2] absolute 설정을 통해 이미지가 겹치며 부드럽게 교차되도록 함
          className="absolute inset-0 object-contain h-full w-full"
          alt={`Project view ${currentIndex + 1}`}
          loading="eager" // 슬라이더 이미지는 즉시 로드 대상
          width="1600"
          height="900"
          style={{ willChange: 'transform, opacity' }}
        />
      </AnimatePresence>

      {/* 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10"></div>

      {images.length > 1 && (
        <>
          {/* 좌측 버튼 */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-black/70 z-20 active:scale-95"
          >
            <span className="material-symbols-outlined block">
              chevron_left
            </span>
          </button>

          {/* 우측 버튼 */}
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-black/70 z-20 active:scale-95"
          >
            <span className="material-symbols-outlined block">
              chevron_right
            </span>
          </button>

          {/* 인디케이터 (점) */}
          <div className="absolute bottom-4 flex gap-2 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage([idx, idx > currentIndex ? 1 : -1])}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-white w-6" : "bg-white/30 w-1.5"
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
