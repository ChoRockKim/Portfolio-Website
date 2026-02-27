// React 라이브러리 및 상태 관리 임포트
import React, { useState } from 'react';
// 프로젝트 모달 컴포넌트 임포트
import ProjectModal from '../components/ProjectModal';
import { useNavigate } from 'react-router-dom';


// 프로젝트 데이터 구조 정의
interface Project {
  title: string;
  category: string;
  description: string;
  image: string[];
  techStack: string[];
  features: string[];
  demoLink: string;
  githubLink: string;
  projectId: string;
  lastUpdated: string;
}

// Projects 페이지 컴포넌트
const Projects: React.FC = () => {
   const navigate = useNavigate();
  // 활성화된 필터 상태
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = ['All', 'Web App', 'Mobile'];

  const rawProjects : Project[] = [
    {
      title: "외대종강시계",
      category: "Web App",
      description: "'외대종강시계'는 약 100명의 학우들이 사용하는 크롬익스텐션 서비스입니다. 한국외국어대학교 학생들을 위해 개발된 웹 애플리케이션으로, 학기 종강까지 남은 시간을 실시간으로 시각화하여 보여줍니다. 단순한 디데이 기능을 넘어, 학사 일정 확인 및 캠퍼스 날씨 정보를 통합적으로 제공하여 학생들의 학기 말 동기 부여와 편의를 돕기 위해 기획되었습니다.",
      image: ["/hufsclock/seoul-main.png", "/hufsclock/seoul-night.png", "/hufsclock/widget.png", "/hufsclock/timeLine.png"],
      techStack: ["React.js", "FastApi", "React Query", "Zustand", "vercel", "Vite", "SCSS", "Formspree", "Axios", "Swiper.js"],
      features: [
         "파이썬의 FastAPI를 통해 데이터를 처리",
         "Swiper.js를 활용한 웹앱 스타일 UI 구현",
         "Zustand & Chrome Storage를 연동한 실시간 상태 관리",
         "React Query를 통한 데이터 캐싱 및 로딩 최적화",
         "기상청 단기예보 API를 활용한 날씨 위젯"
      ],
      demoLink: "https://hufsclock2026.vercel.app/",
      githubLink: "https://github.com/ChoRockKim/HUFS_Clock_REACT_CHROME_EXTENSION",
      projectId: "",
      lastUpdated: "Feb 2026"
    },
    {
      title : "토이 블로그 앱",
      category : "Mobile",
      description : "React Native 로 만든 토이 블로그 프로젝트입니다.",
      image : ["/RNBlog/image1.png", "/RNBlog/image2.png", "/RNBlog/image3.png", "/RNBlog/image4.png"],
      techStack : ["React Native", "Expo", "Spring Boot", "Kotlin", "Swagger", "Typescript"],
      features : [
         "Kotlin 언어로 Spring Boot 를 통해 CRUD 가능한 Rest api 설계",
         "Swagger 통해 API 명세서 작성"
      ],
      demoLink : "",
      githubLink : "https://github.com/ChoRockKim/React-Native-Toy-Blog-Project",
      projectId : "",
      lastUpdated : "Feb 2026",
    },
    {
      title : "토이 블로그 웹",
      category : "Web App",
      description : "Next.js 로 만든 토이 블로그 사이트입니다.",
      image : ["/NextBlog/image1.png", "/NextBlog/image2.png"],
      techStack : ["MongoDB", "Next.js", "oAuth", "Vercel", "JWT"],
      features : [
         "oAuth 를 통해 Github 로그인 연동 기능을 구현했습니다.",
         "JWT 방식을 통해 로그인 기능 구현, 관리자 기능 존재",
         "회원가입 및 로그인 시 유효성 검사",
         "MongoDB Atlas 를 통해 작성된 글, 댓글, 회원 DB 구성 ",
         "CRUD 기능 구현"
      ],
      demoLink : "https://next-js-toy-blog-dujeqv4dd-kim-cho-rocks-projects.vercel.app/list",
      githubLink : "https://github.com/ChoRockKim/Next.js-Toy-Blog",
      projectId : "",
      lastUpdated : "Jan 2026",
    },
    {
      title : "토이 쇼핑몰 웹",
      category : "Web App",
      description : "React.js 로 만든 토이 쇼핑몰 사이트입니다. 백엔드는 구현되지 않았습니다.",
      image : ["/reactMall/image1.png", "/reactMall/image2.png", "/reactMall/image3.png"],
      techStack : ["React.js", "Bootstrap"],
      features : [
         "Localstorage 기능으로 장바구니 구현",
         "React-Route-Dom 을 통해 라우팅 구현",
         "Redux를 통해 전역변수 관리"
      ],
      demoLink : "https://chorockkim.github.io/",
      githubLink : "https://github.com/ChoRockKim/Toy-Project-Shopping-Mall",
      projectId : "",
      lastUpdated : "Nov 2025",
    }
   ]

  const openModal = (project: Project) => {
      setSelectedProject(project);
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
      setSelectedProject(null);
  };

  const filteredProjects = activeFilter === 'All'
    ? rawProjects
    : rawProjects.filter(p => {
        if (activeFilter === 'React.js' && p.category === 'react') return true;
        if (activeFilter === 'Web App' && (p.category === 'Web App' || p.category === 'Web' || p.category === 'Web Dev')) return true;
        if (activeFilter === 'Mobile' && p.category === 'Mobile') return true;
        return p.category === activeFilter;
    });

  return (
    <div className="flex flex-col max-w-[1200px] w-full flex-1 px-6 lg:px-40 py-10">
       {/* Page Header */}
       <div className="flex flex-col gap-4 mb-10">
          <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em] text-white">
             Projects
          </h1>
          <p className="text-text-secondary text-lg font-normal leading-relaxed max-w-2xl">
            끊임없는 고민과 기술적 시도가 녹아있는 저의 성장 기록입니다.
          </p>
       </div>

       {/* Filter / Tabs */}
       <div className="flex flex-wrap gap-3 mb-8">
          {filters.map((filter) => (
             <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                   activeFilter === filter
                      ? 'bg-primary/20 text-primary border border-primary/50 font-bold'
                      : 'bg-card-dark border border-card-border text-text-secondary hover:text-white hover:border-primary/50'
                }`}
             >
                {filter}
             </button>
          ))}
       </div>

       {/* Project Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
             <article
                key={index}
                onClick={() => openModal(project)}
                className="group flex flex-col bg-card-dark rounded-xl overflow-hidden border border-card-border hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
             >
                <div className="relative w-full aspect-video overflow-hidden">
                   <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url("${project.image[0]}")` }}>
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-bold flex items-center gap-2 hover:underline">
                         View Project <span className="material-symbols-outlined text-sm">open_in_new</span>
                      </span>
                   </div>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                   <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                      <span className="px-2 py-1 rounded bg-secondary/30 text-accent text-xs font-bold uppercase tracking-wider">{project.category}</span>
                   </div>
                   <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                      {project.description}
                   </p>
                   <div className="mt-auto pt-4 flex flex-wrap gap-2">
                      {project.techStack.map((stack) => (
                         <span key={stack} className="text-xs font-medium px-2 py-1 rounded bg-background-dark text-slate-300 border border-card-border">{stack}</span>
                      ))}
                   </div>
                </div>
             </article>
          ))}
       </div>
       {/* Call to Action Area */}
       <div className="mt-12 rounded-xl bg-gradient-to-r from-card-dark to-background-dark border border-primary/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
          <div className="relative z-10 text-center md:text-left">
             <h4 className="text-2xl font-bold text-white mb-2">Want to contact me?</h4>
             <p className="text-text-secondary">함께 고민하고 성장할 수 있는 기회를 기다립니다.</p>
          </div>
          <button 
            onClick={()=>{navigate('/contact')}}
            className="relative z-10 flex items-center gap-2 bg-primary hover:bg-white text-slate-900 font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-primary/50">
             {/* <span className="material-symbols-outlined">chevron_right</span> */}
             <span>Contact</span>
          </button>
       </div>

       {/* Pagination */}
       {/* <div className="flex items-center justify-center p-8 mt-6">
          <a className="flex size-10 items-center justify-center hover:text-primary transition-colors" href="#">
             <div className="text-text-secondary">
                <span className="material-symbols-outlined">chevron_left</span>
             </div>
          </a>
          <a className="text-sm font-bold leading-normal flex size-10 items-center justify-center text-background-dark rounded-full bg-primary" href="#">1</a>
          <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-text-secondary rounded-full hover:bg-card-dark transition-colors" href="#">2</a>
          <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-text-secondary rounded-full hover:bg-card-dark transition-colors" href="#">3</a>
          <a className="flex size-10 items-center justify-center hover:text-primary transition-colors" href="#">
             <div className="text-text-secondary">
                <span className="material-symbols-outlined">chevron_right</span>
             </div>
          </a>
       </div> */}

       <ProjectModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject || undefined} />
    </div>
  );
};

export default Projects;
