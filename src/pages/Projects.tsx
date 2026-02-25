import React, { useState } from 'react';
import ProjectModal from '../components/ProjectModal';

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  techStack: string[];
  features: string[];
  demoLink: string;
  githubLink: string;
  projectId: string;
  lastUpdated: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = ['All', 'Web App', 'Mobile', 'Data Analysis'];

  const rawProjects = [
    {
       title: "HUFS Semester Clock",
       category: "Web App",
       description: "A real-time countdown service for HUFS students to track semester progress and holidays. Built to enhance academic planning.",
       tags: ["React", "TypeScript", "Styled Components"],
       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSwXx-VKfvxKP422VIigW78_qCTti3M0Eh3MvJMRb0cOOszBbF5BT5LCa6Cn3H1ELGY3Gxauu8hL6V8dtxMDzrjmsk4VYCvJveiNkQ8D9y8EwMpR-vMlRYhgakHcwgZ9hLPNCr8-LDLauOKtbk-W63KVyFR3ls5fG_V_ENBCsRW7qHfQ8DAkpnj5EatK-3XUMJpaHi5iNa_U1ZdwKrnLexiuI_Wl5VNSnp99NVanvNKNrilPo9LMH9zzhG-jVDHc8rEsJWXyR1k_vG"
    },
    {
       title: "Fullstack Blog",
       category: "Web Dev",
       description: "A personal blog platform built from scratch supporting markdown rendering, comments, and admin dashboard.",
       tags: ["Next.js", "Node.js", "PostgreSQL"],
       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9d_KPdN3pGsqQ_HlztbQljuE9gATJseHt5C1NkiXyPfsgjYfO43p4AB-QdAOk0L65qw081XLcyuvsIw86L4ixOMMgUZLTkilNkvFGKrXhI_jtEpF_dfVg-ApXZHHrB51YlwaMJDYFq4sqN8n-tDxT75NpANCdQzI65mcMwEJUWAuJDbsv8Xako_-CscXdOqEaM1Bb6ghTVhX_QInhiPW6PKuZqFFo8ZFNI16WPeupnmW5_n_W9GvQRDtYOGwhETxbK5P_7aD_-OAm"
    },
    {
       title: "Daily Task Master",
       category: "Mobile",
       description: "Productivity mobile application focused on gesture-based task management and daily routine tracking.",
       tags: ["Flutter", "Firebase", "Dart"],
       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiIbv1SJr0w8Oh8FHGijgAazRJT9pCaeUDf-2MP2BtxWP_1DpO5nKjKVhqtCCNwkR4iZj_takQZkovzuBpxukrOvvW6uc6OLS17PdKRDRlk6z9CLQsFtZNbsf_jGJI3Rr6JtQe8GlRWtQzWJcvsSLxvNTFplZxTlQZnH6xQJCh-03KGtO4Gs2Vlf57mgijjGhOhEZuwlh4lwSHQd73WdrRZ4m9qsRYl8RhHYAbmxTcy03XTwfQ9iriq6kGtbBBNILpgADihxcnpokq"
    },
    {
       title: "Sales Trend Analyzer",
       category: "Data",
       description: "Analyzing e-commerce sales trends using Python to predict future demand and optimize inventory.",
       tags: ["Python", "Pandas", "Jupyter"],
       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5ZztE5zTy0BKTGl5C3WGUwNhP6m64YXhuPxGufxSSSOKiz2q3fX0k3K8KSiwfIORXVaOM_ATTozXQKt8vr_0kTlU3MSuOnvRwoaGryWfpwCMQ2lVIjc_uyDcyF-UqeWL9rNFU2OWcS_GE46040AoH3hrv4Z5m9-Gi7R6Z5YRjLKCq73xmvrXgxiJrtttFa7gUeF6UlQhN84z0Hg5g5jCZQ7G36812xkxHMiZ-PtlZX7OdPqROXdANUf9sVjdY4UDw4gWx_hP1OkLp"
    },
    {
       title: "NLP Sentiment Analysis",
       category: "AI/ML",
       description: "Research project focusing on sentiment analysis of Korean movie reviews using Transformer models.",
       tags: ["PyTorch", "HuggingFace", "KoBERT"],
       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeUIZfVrhZLxDdi2u5T6GtyRIi31O4FYginLg45UOOO4UEy4nojEYJFVPQz57kEESAOSwkRz4tJOqTk6B0jG-LOo-xGVj0-sMdQNZ4cFBh5kHv81f_3DSCXXjleGtg15AkM5VdH5MZdOgPWoUVVfWzB8ty9DeN-WcFTd8vKyMKskqNcgYYw2Xj8U-pNdJYRKpljdZeS1juBP4geBMkNi6eAFnuaA2KxCsS1Un-gnVGyn9tsasmHb6qjkjTkPTLIkwFOKXVyNHrjOnF"
    },
    {
       title: "Personal Portfolio",
       category: "Web",
       description: "The website you are currently viewing. Designed with a modern dark theme and responsive layout.",
       tags: ["HTML/CSS", "Tailwind", "UI/UX"],
       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZY5Yqth9Cax_27YpmE-di2x3bak--ZPbYWS7f91wtBsbCV5cq76rbjkJswll9fVA4AI1OFn_-1hEBfyLDKvNlDKTcaZjDc_GSSo9S3Z5y9suVtDmYkG6JTj-R2kvBvFKCw69gsaszHpfMMvi4ZGJArCXo9_EVC4_hIQyIX0xFWB6SGBv98TCLy3z0zPO_NCGY0LkuXdad5oCOPU1W6TaeipxNvqdkMzCqC5i1ALvUJubzm9VoClaZzd83J-Ld7WQceB98zjUtdHkx"
    }
  ];

  const enrichedProjects: Project[] = rawProjects.map((p, index) => ({
      ...p,
      techStack: p.tags,
      features: [
          "Real-time data synchronization",
          "Responsive user interface",
          "Secure authentication system",
          "Interactive dashboard visualization"
      ],
      demoLink: "#",
      githubLink: "#",
      projectId: `#PRJ-${202300 + index}`,
      lastUpdated: "Dec 2023"
  }));

  const openModal = (project: Project) => {
      setSelectedProject(project);
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
      setSelectedProject(null);
  };

  const filteredProjects = activeFilter === 'All'
    ? enrichedProjects
    : enrichedProjects.filter(p => {
        if (activeFilter === 'Data Analysis' && p.category === 'Data') return true;
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
             A curated selection of my work in software development, showcasing full-stack capabilities and innovative solutions.
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
                   <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url("${project.image}")` }}>
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
                      {project.tags.map((tag) => (
                         <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-background-dark text-slate-300 border border-card-border">{tag}</span>
                      ))}
                   </div>
                </div>
             </article>
          ))}
       </div>

       {/* Pagination */}
       <div className="flex items-center justify-center p-8 mt-6">
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
       </div>

       <ProjectModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject || undefined} />
    </div>
  );
};

export default Projects;
