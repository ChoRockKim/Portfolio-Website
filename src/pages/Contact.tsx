import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const FORM_ID : string = import.meta.env.VITE_FORMSPREE_URL;
    console.log("현재 Form ID:", FORM_ID); // 브라우저 콘솔에서 확인
    
  // 1. Formspree 폼 상태 관리 (YOUR_FORM_ID를 실제 아이디로 교체하세요)
  const [state, handleSubmit] = useForm(FORM_ID);

  // 2. 전송 성공 시 보여줄 화면
  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-[#002D56] text-white flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl font-black text-cyan-400">감사합니다!</h2>
          <p className="text-slate-300">메시지가 무사히 전달되었습니다. 확인 후 곧 연락드리겠습니다.</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-2 border border-cyan-500 text-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-white transition-all"
          >
            다시 작성하기
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#002D56] text-white flex items-center justify-center p-6"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* 왼쪽 섹션: 동일 */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-5xl font-black leading-tight tracking-tight">
            함께 성장할 <br /> 
            <span className="text-cyan-400">파트너</span>를 기다립니다.
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-md">
            새로운 프로젝트와 협업 제안은 언제나 환영합니다.<br/>함께 좋은 서비스를 만들 동료를 기다리고 있습니다.
          </p>
          <div className="pt-6 border-t border-white/10">
            <p className="text-xs text-cyan-400 uppercase tracking-[0.2em] font-bold mb-2">Direct Email</p>
            <p className="text-2xl font-medium select-all">daejincnc2@gmail.com</p>
          </div>
        </div>

        {/* 오른쪽 섹션: Formspree 연동 폼 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-400 mb-2 ml-1">이메일 주소</label>
              <input
                id="email"
                type="email" 
                name="email"
                required
                placeholder="example@email.com"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all placeholder:text-slate-600"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-slate-400 mb-2 ml-1">제목</label>
              <input
                id="subject"
                type="text" 
                name="subject"
                required
                placeholder="어떤 일로 연락주셨나요?"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all placeholder:text-slate-600"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-400 mb-2 ml-1">내용</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="자세한 내용을 입력해주세요."
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all placeholder:text-slate-600 resize-none"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-5 bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-600 text-[#002D56] font-extrabold text-lg rounded-xl transform active:scale-[0.97] transition-all shadow-xl shadow-cyan-500/10"
            >
              {state.submitting ? "전송 중..." : "메시지 보내기"}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;