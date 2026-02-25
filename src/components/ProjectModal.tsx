// React 임포트
import React from 'react';
import ImageSlider from './ImageSlider';

// ProjectModal 컴포넌트의 Props 인터페이스
interface ProjectModalProps {
  isOpen: boolean; // 모달 열기/닫기 여부
  onClose: () => void; // 모달 닫기 콜백 함수
  project?: { // 모달이 표시할 프로젝트 데이터
    title: string;
    image: string[];
    description: string;
    techStack: string[];
    features?: string[];
    demoLink?: string;
    githubLink?: string;
    projectId?: string;
    lastUpdated?: string;
  };
}

// ProjectModal 컴포넌트 - 프로젝트 상세 정보를 모달로 표시
const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  // isOpen이 false이거나 project가 없으면 누무도 렌더링 안 함
  if (!isOpen || !project) return null;

  return (
    // 모달 배경 컨테이너: 화면 중앙에 고정, z-index 100
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
       {/* 모달 배경 오버레이: 반투명 검은색 배경, 블러 효과 */}
       <div className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={onClose} aria-hidden="true"></div>
       {/* 모달 메인 컨테이너: 상대 위치, 최대 너비 4xl, 최대 높이 90vh */}
       <div className="relative w-full max-w-4xl transform overflow-hidden rounded-2xl bg-modal-bg border border-card-border text-left shadow-2xl transition-all flex flex-col max-h-[90vh]">
          {/* 모달 헤더: 제목과 닫기 버튼 */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 sm:px-8">
             {/* 프로젝트 제목 */}
             <h3 className="text-2xl font-bold text-white leading-6" id="modal-title">{project.title}</h3>
             {/* 닫기 버튼 */}
             <button
                className="rounded-full p-2 text-white/70 hover:bg-white/10 hover:text-white transition-colors focus:outline-none"
                type="button"
                onClick={onClose}
             >
                <span className="sr-only">Close</span>
                <span className="material-symbols-outlined text-2xl">close</span>
             </button>
          </div>

          {/* 모달 바디: 스크롤 가능한 컨텐츠 영역 */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
             <div className="flex flex-col gap-8">
                {/* 프로젝트 이미지: 호버 시 확대 효과 */}
                <div className="aspect-video w-full flex justify-center overflow-hidden rounded-xl bg-gray-800 relative group">
                   {/* <img
                      alt={`${project.title} preview`}
                      className="object-contain transition-transform duration-500"
                      src={project.image}
                   /> */}
                   <ImageSlider images={project.image}/>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                   {/* 왼쪽 섹션: 개요 및 주요 기능 */}
                   <div className="lg:col-span-2 flex flex-col gap-6">
                      {/* 개요 섹션 */}
                      <div className="flex flex-col gap-3">
                         <h4 className="text-lg font-bold text-primary flex items-center gap-2">
                            <span className="material-symbols-outlined text-xl">info</span> Overview
                         </h4>
                         {/* 프로젝트 설명 */}
                         <p className="text-white/80 leading-relaxed text-base">
                            {project.description}
                         </p>
                      </div>

                      {/* 주요 기능 (선택사항) */}
                      {project.features && (
                         <div className="flex flex-col gap-3">
                            <h4 className="text-lg font-bold text-primary flex items-center gap-2">
                               <span className="material-symbols-outlined text-xl">star</span> Key Features
                            </h4>
                            {/* 기능 목록 */}
                            <ul className="grid gap-3">
                               {project.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center align-middle gap-3 text-white/80">
                                     <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">check_circle</span>
                                     <span className="align-middle pt-1">{feature}</span>
                                  </li>
                               ))}
                            </ul>
                         </div>
                      )}
                   </div>

                   {/* 오른쪽 섹션: 기술스택 및 링크버튼 */}
                   <div className="flex flex-col gap-6">
                      {/* 기술 스택 카드 */}
                      <div className="bg-card-dark/50 rounded-xl p-5 border border-white/5">
                         <h4 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-4">Tech Stack</h4>
                         {/* 기술 태그들 */}
                         <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                               <span key={tech} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">{tech}</span>
                            ))}
                         </div>
                      </div>

                      {/* 링크 버튼들: 데모 및 깃허브 */}
                      <div className="flex flex-col gap-3">
                         {/* 라이브 데모 버튼 */}
                         {project.demoLink && (
                            <a className="flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 transition-all shadow-lg shadow-primary/20" href={project.demoLink} target='_blank'>
                               <span className="material-symbols-outlined text-xl">rocket_launch</span>
                               Live Demo
                            </a>
                         )}
                         {/* 깃허브 링크 버튼 */}
                         {project.githubLink && (
                            <a className="flex items-center justify-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 text-white font-bold py-3 px-4 border border-white/10 transition-colors" href={project.githubLink} target='_blank'>
                               <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                               View on GitHub
                            </a>
                         )}
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 bg-black/20 px-6 py-4 flex justify-between items-center text-sm text-white/40">
             <span>Project ID: {project.projectId || '#UNKNOWN'}</span>
             <span>Last Updated: {project.lastUpdated || 'Recently'}</span>
          </div>
       </div>
    </div>
  );
};

export default ProjectModal;
