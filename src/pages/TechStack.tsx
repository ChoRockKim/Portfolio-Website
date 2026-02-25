import React from 'react';

const TechStack: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col items-center py-10 px-6 lg:px-20 w-full max-w-7xl mx-auto">
       {/* Hero Section */}
       <div className="w-full flex flex-col gap-6 mb-16 items-center text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider">
             <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
             My Arsenal
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
             Technological <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-primary">Proficiency</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
             A curated list of the tools, languages, and frameworks I use to build robust, scalable, and user-friendly applications.
          </p>
       </div>

       {/* Frontend Section */}
       <section className="w-full mb-16">
          <div className="flex items-center gap-4 mb-8">
             <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-blue-200">
                <span className="material-symbols-outlined text-3xl">devices</span>
             </div>
             <div>
                <h2 className="text-2xl font-bold text-white">Frontend Development</h2>
                <p className="text-slate-400 text-sm">Building responsive & interactive UIs</p>
             </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* Card: React */}
             <div className="group relative flex flex-col gap-4 rounded-2xl bg-glass border border-glass-border p-6 backdrop-blur-sm transition-all duration-300 hover:bg-glass/20 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative z-10 flex items-start justify-between">
                   <div className="p-3 rounded-lg bg-slate-800 text-[#61DAFB]">
                      <span className="material-symbols-outlined text-3xl">code_blocks</span>
                   </div>
                   <span className="text-xs font-medium text-slate-500 bg-slate-900/50 px-2 py-1 rounded">V 18.2</span>
                </div>
                <div className="relative z-10">
                   <h3 className="text-xl font-bold text-white mb-1">React</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">Component-based architecture for dynamic web applications.</p>
                </div>
             </div>
             {/* Card: Next.js */}
             <div className="group relative flex flex-col gap-4 rounded-2xl bg-glass border border-glass-border p-6 backdrop-blur-sm transition-all duration-300 hover:bg-glass/20 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative z-10 flex items-start justify-between">
                   <div className="p-3 rounded-lg bg-slate-800 text-white">
                      <span className="material-symbols-outlined text-3xl">layers</span>
                   </div>
                </div>
                <div className="relative z-10">
                   <h3 className="text-xl font-bold text-white mb-1">Next.js</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">Server-side rendering and static site generation for performance.</p>
                </div>
             </div>
             {/* Card: TypeScript */}
             <div className="group relative flex flex-col gap-4 rounded-2xl bg-glass border border-glass-border p-6 backdrop-blur-sm transition-all duration-300 hover:bg-glass/20 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative z-10 flex items-start justify-between">
                   <div className="p-3 rounded-lg bg-slate-800 text-[#3178C6]">
                      <span className="material-symbols-outlined text-3xl">integration_instructions</span>
                   </div>
                </div>
                <div className="relative z-10">
                   <h3 className="text-xl font-bold text-white mb-1">TypeScript</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">Static typing for safer, scalable, and more maintainable code.</p>
                </div>
             </div>
             {/* Card: Tailwind CSS */}
             <div className="group relative flex flex-col gap-4 rounded-2xl bg-glass border border-glass-border p-6 backdrop-blur-sm transition-all duration-300 hover:bg-glass/20 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative z-10 flex items-start justify-between">
                   <div className="p-3 rounded-lg bg-slate-800 text-[#38BDF8]">
                      <span className="material-symbols-outlined text-3xl">palette</span>
                   </div>
                </div>
                <div className="relative z-10">
                   <h3 className="text-xl font-bold text-white mb-1">Tailwind CSS</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">Utility-first CSS framework for rapid and custom UI development.</p>
                </div>
             </div>
          </div>
       </section>

       {/* Backend Section */}
       <section className="w-full mb-16">
          <div className="flex items-center gap-4 mb-8">
             <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-green-200">
                <span className="material-symbols-outlined text-3xl">dns</span>
             </div>
             <div>
                <h2 className="text-2xl font-bold text-white">Backend Engineering</h2>
                <p className="text-slate-400 text-sm">Server-side logic & database management</p>
             </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* Card: Spring Boot */}
             <div className="group relative flex flex-col gap-4 rounded-2xl bg-glass border border-glass-border p-6 backdrop-blur-sm transition-all duration-300 hover:bg-glass/20 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative z-10 flex items-start justify-between">
                   <div className="p-3 rounded-lg bg-slate-800 text-[#6DB33F]">
                      <span className="material-symbols-outlined text-3xl">eco</span>
                   </div>
                   <span className="text-xs font-medium text-slate-500 bg-slate-900/50 px-2 py-1 rounded">Java</span>
                </div>
                <div className="relative z-10">
                   <h3 className="text-xl font-bold text-white mb-1">Spring Boot</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">Comprehensive framework for production-ready Java applications.</p>
                </div>
             </div>
             {/* Card: Node.js */}
             <div className="group relative flex flex-col gap-4 rounded-2xl bg-glass border border-glass-border p-6 backdrop-blur-sm transition-all duration-300 hover:bg-glass/20 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative z-10 flex items-start justify-between">
                   <div className="p-3 rounded-lg bg-slate-800 text-[#68A063]">
                      <span className="material-symbols-outlined text-3xl">javascript</span>
                   </div>
                </div>
                <div className="relative z-10">
                   <h3 className="text-xl font-bold text-white mb-1">Node.js</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">Efficient JavaScript runtime for scalable network applications.</p>
                </div>
             </div>
             {/* Card: MySQL */}
             <div className="group relative flex flex-col gap-4 rounded-2xl bg-glass border border-glass-border p-6 backdrop-blur-sm transition-all duration-300 hover:bg-glass/20 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative z-10 flex items-start justify-between">
                   <div className="p-3 rounded-lg bg-slate-800 text-[#4479A1]">
                      <span className="material-symbols-outlined text-3xl">database</span>
                   </div>
                </div>
                <div className="relative z-10">
                   <h3 className="text-xl font-bold text-white mb-1">MySQL</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">Reliable relational database management system.</p>
                </div>
             </div>
             {/* Card: Redis */}
             <div className="group relative flex flex-col gap-4 rounded-2xl bg-glass border border-glass-border p-6 backdrop-blur-sm transition-all duration-300 hover:bg-glass/20 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative z-10 flex items-start justify-between">
                   <div className="p-3 rounded-lg bg-slate-800 text-[#DC382D]">
                      <span className="material-symbols-outlined text-3xl">memory</span>
                   </div>
                </div>
                <div className="relative z-10">
                   <h3 className="text-xl font-bold text-white mb-1">Redis</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">In-memory data structure store for caching and real-time analytics.</p>
                </div>
             </div>
          </div>
       </section>

       {/* DevOps Section */}
       <section className="w-full mb-10">
          <div className="flex items-center gap-4 mb-8">
             <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-orange-200">
                <span className="material-symbols-outlined text-3xl">cloud_sync</span>
             </div>
             <div>
                <h2 className="text-2xl font-bold text-white">DevOps & Tools</h2>
                <p className="text-slate-400 text-sm">Deployment, containerization & version control</p>
             </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* Card: AWS */}
             <div className="group relative flex flex-col gap-4 rounded-2xl bg-glass border border-glass-border p-6 backdrop-blur-sm transition-all duration-300 hover:bg-glass/20 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative z-10 flex items-start justify-between">
                   <div className="p-3 rounded-lg bg-slate-800 text-[#FF9900]">
                      <span className="material-symbols-outlined text-3xl">cloud</span>
                   </div>
                </div>
                <div className="relative z-10">
                   <h3 className="text-xl font-bold text-white mb-1">AWS</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">Cloud computing services for scalable infrastructure.</p>
                </div>
             </div>
             {/* Card: Docker */}
             <div className="group relative flex flex-col gap-4 rounded-2xl bg-glass border border-glass-border p-6 backdrop-blur-sm transition-all duration-300 hover:bg-glass/20 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative z-10 flex items-start justify-between">
                   <div className="p-3 rounded-lg bg-slate-800 text-[#2496ED]">
                      <span className="material-symbols-outlined text-3xl">view_in_ar</span>
                   </div>
                </div>
                <div className="relative z-10">
                   <h3 className="text-xl font-bold text-white mb-1">Docker</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">Containerization platform for consistent development environments.</p>
                </div>
             </div>
             {/* Card: Git */}
             <div className="group relative flex flex-col gap-4 rounded-2xl bg-glass border border-glass-border p-6 backdrop-blur-sm transition-all duration-300 hover:bg-glass/20 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative z-10 flex items-start justify-between">
                   <div className="p-3 rounded-lg bg-slate-800 text-[#F05032]">
                      <span className="material-symbols-outlined text-3xl">call_merge</span>
                   </div>
                </div>
                <div className="relative z-10">
                   <h3 className="text-xl font-bold text-white mb-1">Git & GitHub</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">Version control system for tracking changes and collaboration.</p>
                </div>
             </div>
          </div>
       </section>
    </div>
  );
};

export default TechStack;
