import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let i = 0;
    // 초기화 (텍스트가 바뀔 때를 대비)
    setDisplayedText("");
    setIsCompleted(false);

    const typing = () => {
      if (i < text.length) {
        const randomDelay = Math.random() * 150 + 50; 
        setDisplayedText(text.slice(0, i + 1));
        i++;
        setTimeout(typing, randomDelay);
      } else {
        setIsCompleted(true);
      }
    };

    typing();
  }, [text]);

  return (
    <div className="flex items-start"> {/* 중앙 정렬보다는 위쪽 정렬(items-start)이 여러 줄일 때 예쁩니다 */}
      <h1 className="text-white text-4xl font-black lg:leading-tight tracking-[-0.033em] lg:text-5xl inline-block whitespace-pre-wrap">
        {/* 1. 핵심: whitespace-pre-wrap이 있어야 \n이나 실제 줄바꿈을 인식합니다 */}
        {displayedText}
        
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ 
            duration: 0.6, 
            repeat: Infinity, 
            ease: "steps(2)" 
          }}
          className="inline-block w-[4px] h-[0.9em] bg-primary ml-1 translate-y-[10%]"
        />
      </h1>
    </div>
  );
};

export default TypingText;