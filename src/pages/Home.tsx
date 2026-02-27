import { Link } from 'react-router-dom';
import WhatDoIDo from '../components/WhatDoIDo/WhatDoIDo';
import type { WhatDoIDoTypeList } from '../types/Home/WhatDoIDo';
import ScrollToNext from '../utils/ScrollToNext.js'
import TypingText from '../components/Common/TypingText.js'

const Home: React.FC = () => {

   const whatDoIDoObj 
   : WhatDoIDoTypeList = [
      {  title : "모던 프론트엔드 개발",
         explain : ["React 생태계를 이용해 SPA 프론트엔드를 개발합니다. Javascript es6+ 문법과 Typescript 사용에 능통합니다.",
                    "React native 를 통한 앱 개발 경험이 있습니다."],
         icon : "code"
      },
      { title : "논리적 사고와 커뮤니케이션",
         explain : ["기술적 난제를 논리적으로 분석하고 해결책을 제시합니다. 원활한 소통을 바탕으로 팀의 목표에 기여하는 개발을 추구합니다."],
         icon : "psychology"
      },
      { title : "기술의 유기적인 연결 경험",
         explain : ["프론트엔드(React)에서 만든 데이터를 백엔드(Spring Boot)로 전달하고 저장하는 일련의 과정을 직접 연결하며 풀스택 개발의 기초를 다지고 있습니다."],
         icon : "database"
      }
   ]

  return (
   <>
    <div className="w-full max-w-[1200px] px-6 lg:px-20 py-10 flex flex-col gap-12">
       {/* Hero Section */}
       <div className="@container">
          <div className="flex flex-col-reverse gap-8 py-10 lg:flex-row lg:items-center">
             
             <div className="flex flex-col gap-6 lg:pl-10 justify-center">
                <div className="flex flex-col gap-3 text-left">
                   <span className="text-primary font-bold tracking-wider uppercase text-sm">Developer Portfolio</span>
                   {/* <h1 className="text-white text-4xl font-black lg:leading-tight tracking-[-0.033em] lg:text-5xl">
                      안녕하세요,<br/>프론트엔드 개발자 <br/> <span className="text-green-400">김태헌</span>입니다
                   </h1> */}
                   <TypingText text={"안녕하세요,\n프론트엔드 개발자 \n김태헌 입니다."} />
                   <p className="text-white/80 text-lg font-normal leading-relaxed mt-2">
                      화면 너머의 데이터 흐름까지 이해하는 프론트엔드 개발자입니다. React 생태계를 활용한 인터페이스 구현은 물론, 백엔드 메커니즘에 대한 깊은 이해를 바탕으로 최적화된 API 구조를 함께 고민하고 설계합니다.
                   </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-2">
                   <Link to="/projects" className="flex items-center justify-center rounded-full h-12 px-8 bg-primary hover:bg-primary/90 transition-all text-white text-base font-bold shadow-lg shadow-primary/25">
                      View Projects
                   </Link>
                   {/* <Link to="/blog" className="flex items-center justify-center rounded-full h-12 px-8 bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-white text-base font-bold backdrop-blur-sm">
                      Read Blog
                   </Link> */}
                </div>
             </div>
             <div className="lg:w-9/12 w-0 translate-x-1  rounded-2xl overflow-hidden shadow-2xl bg-card-dark relative group">
                <div className="absolute inset-0 bg-gradient-to-tr  to-transparent z-10 "></div>
                <img
                  alt="Abstract coding background"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/profile/me.jpeg"
                />
                {/* https://lh3.googleusercontent.com/aida-public/AB6AXuDSvxU1FmDRxOnrhzf2i235OyaOr70gf27xnKy43VXM0s7iA9-I1NyGOytMZl_0ga4d7lleTiPvADiP4WM_QDl_PlAjtvA5WThb7aS__dOawUxcoTglSwsvrj2sBjv-26dw0t2RDx--zP2xGGuzU8rxfyAgz4D0I7UdyfnwHfY5bT-PLVmuEghzGBR7pwnU3xASKevaJZ_u2i8y1rxKAXKUj8b6tonS4ILbUOmRvfE3IoCt6vWVQXTXFYjhIJi1OFnWb73LwON6mpMM */}
             </div>
          </div>
       </div>

       {/* What I Do Section */}
       <div className="flex flex-col gap-10 py-10">
          <div className="flex flex-col gap-4 text-center lg:text-left">
             <h2 className="text-white text-3xl font-bold leading-tight lg:text-4xl">
                What I Do
             </h2>
             <p className="text-white/70 text-base font-normal leading-normal max-w-[720px]">
                {/* Building innovative solutions based on linguistic engineering and software development capabilities. */}
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             
             { whatDoIDoObj.map((datas, idx) => {
                  return (
                     <WhatDoIDo datas = {datas} key={idx}/>
                  )
             })}
          </div>
       </div>

       {/* Featured Projects Section */}
       {/* <div className="flex flex-col gap-8 py-10">
          <div className="flex items-center justify-between">
             <h2 className="text-white text-2xl font-bold leading-tight">Featured Projects</h2>
             <Link to="/projects" className="text-primary text-sm font-bold hover:underline">View All Projects →</Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
             <div className="group flex flex-col rounded-2xl bg-card-dark border border-card-border overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 w-full bg-cover bg-center relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYbP2MAMKbQhJF6GUBXJI2ZYVZeoltWzXz4gXR9Qsw4CRxQcyBi1DtDH_7MTyTDSgsXyzRVIFg7k2odnLDKyHji5zqW_iNmFB20tefVXAoa6OVqSFv_w1OOhkYeKe3YWb_3HwuBJmLj8lJttjqlngr8VOSU3gNEN2qn6KSZn2gadrXTaXwGE_SI6qk2c8KeYxyTNdCNIdT8qzGZDbbrR_Eqo9V44s0B2185uVipkFy2QYQiV11Rl7-_c6J1JKG5O1U9nwDSyl66FaD")' }}>
                   <div className="absolute inset-0 w-full h-full bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                   <div>
                      <h3 className="text-white text-xl font-bold mb-2">HUFS Dormitory App</h3>
                      <p className="text-white/60 text-sm line-clamp-2">
                         A mobile application providing dormitory menu checks and notice notifications. offering intuitive UI for student convenience.
                      </p>
                   </div>
                   <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-3 py-1 rounded-full bg-background-dark text-xs font-medium text-primary border border-primary/20">Flutter</span>
                      <span className="px-3 py-1 rounded-full bg-background-dark text-xs font-medium text-primary border border-primary/20">Firebase</span>
                   </div>
                   <button className="mt-2 w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-bold transition-colors border border-white/10">
                      View Case Study
                   </button>
                </div>
             </div>
             <div className="group flex flex-col rounded-2xl bg-card-dark border border-card-border overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 w-full bg-cover bg-center relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDnxE236nqqHZJ7HVKclK_j4pJehx56h5xwD_cI0AiBZu2YoxKqhxsNMRfUqowM4CZw22D0e8MDY7554UrzlWXXHZ_8Euc06YwQedosdB6o6gL1fPlnHgXdkXK-NwzZBFT2fLdPDSiff0I3XzZkY_OK2-gI9HQOfp7SdMQ1-ho8QmbdYGInr-F1FezuEyFDpH_YDkmqebER9-ZFe0ILaLOdLPNfBmmeWQXtVbP0k66q4dR-u3gSIl8LcHIWwJRommDqP9iAbTsmswE")' }}>
                   <div className="absolute inset-0 w-full h-full bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                   <div>
                      <h3 className="text-white text-xl font-bold mb-2">NLP Sentiment Analysis</h3>
                      <p className="text-white/60 text-sm line-clamp-2">
                         A web dashboard project collecting social media data to analyze and visualize positive/negative sentiment.
                      </p>
                   </div>
                   <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-3 py-1 rounded-full bg-background-dark text-xs font-medium text-primary border border-primary/20">Python</span>
                      <span className="px-3 py-1 rounded-full bg-background-dark text-xs font-medium text-primary border border-primary/20">React</span>
                      <span className="px-3 py-1 rounded-full bg-background-dark text-xs font-medium text-primary border border-primary/20">FastAPI</span>
                   </div>
                   <button className="mt-2 w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-bold transition-colors border border-white/10">
                      View Case Study
                   </button>
                </div>
             </div>
          </div>
       </div> */}
      <ScrollToNext nextPath='tech-stack' nextProjectName='Skills' />
    </div>
    </>
  );
};

export default Home;
