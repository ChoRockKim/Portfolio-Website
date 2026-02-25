import React from 'react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project?: {
    title: string;
    image: string;
    description: string;
    techStack: string[];
    features?: string[];
    demoLink?: string;
    githubLink?: string;
    projectId?: string;
    lastUpdated?: string;
  };
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
       <div className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={onClose} aria-hidden="true"></div>
       <div className="relative w-full max-w-4xl transform overflow-hidden rounded-2xl bg-modal-bg border border-card-border text-left shadow-2xl transition-all flex flex-col max-h-[90vh]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 sm:px-8">
             <h3 className="text-2xl font-bold text-white leading-6" id="modal-title">{project.title}</h3>
             <button
                className="rounded-full p-2 text-white/70 hover:bg-white/10 hover:text-white transition-colors focus:outline-none"
                type="button"
                onClick={onClose}
             >
                <span className="sr-only">Close</span>
                <span className="material-symbols-outlined text-2xl">close</span>
             </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
             <div className="flex flex-col gap-8">
                {/* Image */}
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-800 relative group">
                   <img
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={project.image}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                   <div className="lg:col-span-2 flex flex-col gap-6">
                      {/* Overview */}
                      <div className="flex flex-col gap-3">
                         <h4 className="text-lg font-bold text-primary flex items-center gap-2">
                            <span className="material-symbols-outlined text-xl">info</span> Overview
                         </h4>
                         <p className="text-white/80 leading-relaxed text-base">
                            {project.description}
                         </p>
                      </div>

                      {/* Key Features (Optional) */}
                      {project.features && (
                         <div className="flex flex-col gap-3">
                            <h4 className="text-lg font-bold text-primary flex items-center gap-2">
                               <span className="material-symbols-outlined text-xl">star</span> Key Features
                            </h4>
                            <ul className="grid gap-3">
                               {project.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-white/80">
                                     <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">check_circle</span>
                                     <span>{feature}</span>
                                  </li>
                               ))}
                            </ul>
                         </div>
                      )}
                   </div>

                   <div className="flex flex-col gap-6">
                      {/* Tech Stack */}
                      <div className="bg-card-dark/50 rounded-xl p-5 border border-white/5">
                         <h4 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-4">Tech Stack</h4>
                         <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                               <span key={tech} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">{tech}</span>
                            ))}
                         </div>
                      </div>

                      {/* Links */}
                      <div className="flex flex-col gap-3">
                         {project.demoLink && (
                            <a className="flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 transition-all shadow-lg shadow-primary/20" href={project.demoLink}>
                               <span className="material-symbols-outlined text-xl">rocket_launch</span>
                               Live Demo
                            </a>
                         )}
                         {project.githubLink && (
                            <a className="flex items-center justify-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 text-white font-bold py-3 px-4 border border-white/10 transition-colors" href={project.githubLink}>
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
