import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const TypingText = ({ text } : { text : string}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    // 초기화 (텍스트가 바뀔 때를 대비)
    setDisplayedText("");
    

    const typing = () => {
      if (i < text.length) {
        const randomDelay = Math.random() * 150 + 50; 
        setDisplayedText(text.slice(0, i + 1));
        i++;
        setTimeout(typing, randomDelay);
      } 
    };

    typing();
  }, [text]);

  return (
    <div className="flex items-start"> {/* 중앙 정렬보다는 위쪽 정렬(items-start)이 여러 줄일 때 예쁩니다 */}
      <h1 className="text-white text-4xl font-black lg:leading-tight tracking-[-0.033em] lg:text-5xl inline-block whitespace-pre-wrap">
        {displayedText}
        
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ 
            duration: 0.6, 
            repeat: Infinity, 
          }}
          className="inline-block w-[4px] h-[0.9em] bg-primary ml-1 translate-y-[10%]"
        />
      </h1>
    </div>
  );
};

export default TypingText;