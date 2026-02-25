import React from 'react';

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col max-w-[960px] flex-1 w-full px-6 lg:px-40 py-10">
       {/* Page Title Section */}
       <div className="flex flex-col gap-4 pb-12 pt-4">
          <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
             Experience & <span className="text-primary">Journey</span>
          </h1>
          <p className="text-text-secondary text-lg font-normal leading-relaxed max-w-2xl">
             A timeline of my academic achievements, professional milestones, and personal growth as a software engineer.
          </p>
       </div>

       {/* Timeline Container */}
       <div className="relative grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-10 pl-2">
          {/* Vertical Line (Absolute) */}
          <div className="absolute left-[19px] top-4 bottom-10 w-[2px] bg-gradient-to-b from-primary via-card-dark to-transparent"></div>

          {/* Item 1: Personal Project */}
          <div className="relative flex flex-col items-center pt-1 z-10">
             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-card-dark border-2 border-primary shadow-[0_0_15px_rgba(37,144,244,0.4)] transition-transform hover:scale-110">
                <span className="material-symbols-outlined text-primary !text-[20px]">rocket_launch</span>
             </div>
          </div>
          <div className="flex flex-col pb-12 group">
             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-white text-xl font-bold leading-normal group-hover:text-primary transition-colors">Personal Project Launch</h3>
                <span className="text-primary text-sm font-bold bg-primary/10 px-3 py-1 rounded-full w-fit mt-1 sm:mt-0">Sep 2023</span>
             </div>
             <p className="text-text-secondary text-base font-normal leading-relaxed mb-4">
                Designed and deployed a full-stack application focusing on real-time data visualization. Implemented CI/CD pipelines and achieved 99% uptime during the initial launch phase.
             </p>
             <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-card-dark text-slate-300 text-xs rounded border border-primary/20">React</span>
                <span className="px-2 py-1 bg-card-dark text-slate-300 text-xs rounded border border-primary/20">Node.js</span>
                <span className="px-2 py-1 bg-card-dark text-slate-300 text-xs rounded border border-primary/20">AWS</span>
             </div>
          </div>

          {/* Item 2: Internship */}
          <div className="relative flex flex-col items-center pt-1 z-10">
             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-card-dark border-2 border-primary/50 group-hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-white !text-[20px]">apartment</span>
             </div>
          </div>
          <div className="flex flex-col pb-12 group">
             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-white text-xl font-bold leading-normal group-hover:text-primary transition-colors">Software Engineering Intern</h3>
                <span className="text-text-secondary text-sm font-medium mt-1 sm:mt-0">Jun 2023 - Aug 2023</span>
             </div>
             <p className="text-text-secondary text-base font-normal leading-relaxed mb-4">
                Collaborated with a cross-functional team to optimize database queries, reducing load times by 40%. Participated in daily stand-ups and contributed to the migration of legacy code to modern frameworks.
             </p>
             <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-card-dark text-slate-300 text-xs rounded border border-primary/20">Python</span>
                <span className="px-2 py-1 bg-card-dark text-slate-300 text-xs rounded border border-primary/20">SQL</span>
                <span className="px-2 py-1 bg-card-dark text-slate-300 text-xs rounded border border-primary/20">Agile</span>
             </div>
          </div>

          {/* Item 3: Freelance */}
          <div className="relative flex flex-col items-center pt-1 z-10">
             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-card-dark border-2 border-primary/50 group-hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-white !text-[20px]">code</span>
             </div>
          </div>
          <div className="flex flex-col pb-12 group">
             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-white text-xl font-bold leading-normal group-hover:text-primary transition-colors">Freelance Web Developer</h3>
                <span className="text-text-secondary text-sm font-medium mt-1 sm:mt-0">Jan 2022 - Dec 2022</span>
             </div>
             <p className="text-text-secondary text-base font-normal leading-relaxed mb-4">
                Delivered custom website solutions for 5+ small business clients. Managed the entire lifecycle from requirements gathering to deployment and maintenance, ensuring high client satisfaction.
             </p>
             <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-card-dark text-slate-300 text-xs rounded border border-primary/20">WordPress</span>
                <span className="px-2 py-1 bg-card-dark text-slate-300 text-xs rounded border border-primary/20">HTML/CSS</span>
                <span className="px-2 py-1 bg-card-dark text-slate-300 text-xs rounded border border-primary/20">JavaScript</span>
             </div>
          </div>

          {/* Item 4: University */}
          <div className="relative flex flex-col items-center pt-1 z-10">
             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-card-dark border-2 border-primary/50 group-hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-white !text-[20px]">school</span>
             </div>
          </div>
          <div className="flex flex-col pb-6 group">
             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-white text-xl font-bold leading-normal group-hover:text-primary transition-colors">HUFS - ELLT & Software Major</h3>
                <span className="text-text-secondary text-sm font-medium mt-1 sm:mt-0">Mar 2020 - Present</span>
             </div>
             <p className="text-text-secondary text-base font-normal leading-relaxed mb-4">
                Pursuing a double major in English Linguistics & Language Technology and Computer Science. Active member of the university coding club and participant in annual hackathons.
             </p>
             <div className="p-4 bg-card-dark/50 rounded-lg border border-primary/10">
                <p className="text-sm text-slate-300 font-medium mb-2">Key Coursework:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-text-secondary list-disc pl-4">
                   <li>Data Structures & Algorithms</li>
                   <li>Natural Language Processing</li>
                   <li>Database Systems</li>
                   <li>Object-Oriented Programming</li>
                </ul>
             </div>
          </div>
       </div>

       {/* Call to Action Area */}
       <div className="mt-12 rounded-xl bg-gradient-to-r from-card-dark to-background-dark border border-primary/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
          <div className="relative z-10 text-center md:text-left">
             <h4 className="text-2xl font-bold text-white mb-2">Want to know more?</h4>
             <p className="text-text-secondary">Download my resume to see the full details of my journey.</p>
          </div>
          <button className="relative z-10 flex items-center gap-2 bg-primary hover:bg-white text-slate-900 font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-primary/50">
             <span className="material-symbols-outlined">download</span>
             <span>Download Resume</span>
          </button>
       </div>
    </div>
  );
};

export default Experience;
