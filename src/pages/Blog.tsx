import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="flex flex-col max-w-[1200px] w-full flex-1 gap-12 px-6 lg:px-20 py-10">
       {/* Hero Section */}
       <div className="flex flex-col gap-6 items-start border-b border-white/10 pb-10">
          <div className="flex flex-col gap-2">
             <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white">
                Blog & Insights
             </h1>
             <p className="text-white/60 text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
                Thoughts on software engineering, language technology, and my journey as a developer at HUFS.
             </p>
          </div>
          {/* Search and Filter */}
          <div className="w-full flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mt-4">
             <div className="flex flex-wrap gap-2">
                <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-primary text-background-dark px-4 transition-transform hover:scale-105 active:scale-95">
                   <span className="text-sm font-bold">All</span>
                </button>
                <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-card-dark hover:bg-white/10 text-white/80 px-4 transition-colors">
                   <span className="text-sm font-medium">Development</span>
                </button>
                <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-card-dark hover:bg-white/10 text-white/80 px-4 transition-colors">
                   <span className="text-sm font-medium">ELLT</span>
                </button>
                <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-card-dark hover:bg-white/10 text-white/80 px-4 transition-colors">
                   <span className="text-sm font-medium">University</span>
                </button>
             </div>
             <div className="relative w-full md:w-auto">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white/50">
                   <span className="material-symbols-outlined !text-[20px]">search</span>
                </span>
                <input
                   className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg bg-card-dark border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                   placeholder="Search articles..."
                   type="text"
                />
             </div>
          </div>
       </div>

       {/* Featured Post */}
       <article className="group relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 rounded-xl bg-card-dark p-4 lg:p-6 shadow-sm border border-card-border hover:border-primary/50 transition-colors">
          <div className="w-full h-64 lg:h-full min-h-[280px] bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdhHOCCvCklFJoul3p9L0UZkTe-FbVoeF_hxIRpC3lrS73BIPTWdELz7w5t_CCsOPZJqoUsv9pF7Fg2MNe8RFNvuY--UV4pQkTAxL6e7xsxL02BhDOCNf-hXZ2RCTpAOWSQQfmkx8xRpme4QnSFxbbBrqQ46HNhMzrtBfGRvWKLqfJAFno2mJxFsl9DVE_fvskRCQA62758qvKQ60cHYtnmlDOUSiv5asnJ5rXvT969-h5-t_Q2y8UNgs7Ox29nbxaPqXnZ7M7GzWg")' }}></div>
             <div className="absolute top-4 left-4">
                <span className="inline-flex items-center rounded-md bg-primary/90 px-2.5 py-1 text-xs font-bold text-background-dark ring-1 ring-inset ring-primary/20">Featured</span>
             </div>
          </div>
          <div className="flex flex-col justify-center gap-4">
             <div className="flex items-center gap-3 text-xs font-medium text-white/60">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined !text-[16px]">calendar_today</span> Oct 24, 2023</span>
                <span>•</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined !text-[16px]">schedule</span> 5 min read</span>
             </div>
             <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                Optimizing React Performance for Large Scale Applications
             </h3>
             <p className="text-white/70 leading-relaxed line-clamp-3">
                Exploring advanced techniques such as memoization, virtualization, and code splitting to ensure your React applications remain snappy even as they grow in complexity. A deep dive into the practical application of useMemo and useCallback.
             </p>
             <div className="flex items-center gap-2 mt-2">
                <span className="inline-flex items-center rounded-full bg-background-dark px-2.5 py-0.5 text-xs font-medium text-white/80 border border-white/10">React</span>
                <span className="inline-flex items-center rounded-full bg-background-dark px-2.5 py-0.5 text-xs font-medium text-white/80 border border-white/10">Performance</span>
             </div>
             <a className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline" href="#">
                Read Article <span className="material-symbols-outlined !text-[18px]">arrow_forward</span>
             </a>
          </div>
       </article>

       {/* Regular Posts Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Post 1 */}
          <a className="group flex flex-col gap-3 rounded-xl bg-card-dark p-3 border border-card-border hover:border-primary/50 transition-all hover:-translate-y-1 shadow-sm" href="#">
             <div className="w-full aspect-video bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden relative bg-slate-800">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCwvGGNkgjKC8cUM69xrdfMthCHSCT_BroFUnR8knQtAC5wWM8rm78JmHMLs91Kgy1np6flyVEBtQLSX-jioLUVNlY3LA5Aq5Xe_vDDSa_fjoeJrgFqyo67URVAvjK0ucRDl0RllCXJAshq3j8-0ztH-7e7Cv2zGw13HmcQy11SimgtSjb3iXkIdQkkvEPIl_b5uAcagAGhpXTtPSEL10ylq9ljSOHVyhDn6dvXft6qlCy0iABFj077ovgFZahwH_9BUHCm5HUmEnY")' }}></div>
             </div>
             <div className="flex flex-col gap-2 p-2">
                <div className="flex justify-between items-center text-xs text-white/50">
                   <span>Oct 10, 2023</span>
                   <span>8 min read</span>
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                   Understanding Natural Language Processing Basics
                </h4>
                <p className="text-sm text-white/60 line-clamp-2">
                   Breaking down tokenization, stemming, and lemmatization for beginners interested in computational linguistics.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                   <span className="text-[10px] font-semibold tracking-wide uppercase text-white/40">NLP</span>
                   <span className="text-[10px] font-semibold tracking-wide uppercase text-white/40">AI</span>
                </div>
             </div>
          </a>
          {/* Post 2 */}
          <a className="group flex flex-col gap-3 rounded-xl bg-card-dark p-3 border border-card-border hover:border-primary/50 transition-all hover:-translate-y-1 shadow-sm" href="#">
             <div className="w-full aspect-video bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden relative bg-slate-800">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRFRq4CLV17I88S4tTZjh-Y0ccAf9is4OUUZMWRP7Ma4qKpKRzlgF6tP02QeJ-MGw-wKPZ6bV34MgGOMepwf7U83GztOTnpWVJHtF7snZKMQjtblLvUH9wbYlObacNQlJb_p8BPhqGlVXHhol1H7B8B9CWifG6P8MXvtXRqjKg8lnJN0U5cA-VAWvkY2sig39otQXQQJHoVQ868_7z4azLAikfiY56136wjTj9uhpiAynBnSTIWvOn0564ofa00OupVJDxT6TxsTOn")' }}></div>
             </div>
             <div className="flex flex-col gap-2 p-2">
                <div className="flex justify-between items-center text-xs text-white/50">
                   <span>Sep 28, 2023</span>
                   <span>4 min read</span>
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                   My Journey as a Dual Major at HUFS
                </h4>
                <p className="text-sm text-white/60 line-clamp-2">
                   Balancing coursework between ELLT and Software Engineering. Challenges, triumphs, and advice for fellow students.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                   <span className="text-[10px] font-semibold tracking-wide uppercase text-white/40">University</span>
                   <span className="text-[10px] font-semibold tracking-wide uppercase text-white/40">Personal</span>
                </div>
             </div>
          </a>
          {/* Post 3 */}
          <a className="group flex flex-col gap-3 rounded-xl bg-card-dark p-3 border border-card-border hover:border-primary/50 transition-all hover:-translate-y-1 shadow-sm" href="#">
             <div className="w-full aspect-video bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden relative bg-slate-800">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCg9IULah8fkGLgBknTAZprz07gveGoNjKYC-vT4pJP2VhrIGgUUhYGLESLl9Q6UU5ei3z3nkSariWzQg79COaeFwtMvGvqHgQGXSW2EJFnM0G5mE9w8Hs650egHzTxsG1RjFfSeB_pYwzycmhxkLpYcXlbMw90IBUM9bS2XDxjn7kQJwpVxMBedv03hXrbNYm5_Lu2mlhNl6IqdRkuqjDbtdQErUsyMPhab_XIpRZNlAaNHtG8TYbYYcGT0wyixGuYCL6-4f_CmfbX")' }}></div>
             </div>
             <div className="flex flex-col gap-2 p-2">
                <div className="flex justify-between items-center text-xs text-white/50">
                   <span>Sep 15, 2023</span>
                   <span>6 min read</span>
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                   Building Accessible Web Interfaces
                </h4>
                <p className="text-sm text-white/60 line-clamp-2">
                   Why accessibility matters and how to implement ARIA labels, keyboard navigation, and semantic HTML properly.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                   <span className="text-[10px] font-semibold tracking-wide uppercase text-white/40">A11Y</span>
                   <span className="text-[10px] font-semibold tracking-wide uppercase text-white/40">Frontend</span>
                </div>
             </div>
          </a>
          {/* Post 4 */}
          <a className="group flex flex-col gap-3 rounded-xl bg-card-dark p-3 border border-card-border hover:border-primary/50 transition-all hover:-translate-y-1 shadow-sm" href="#">
             <div className="w-full aspect-video bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden relative bg-slate-800">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAY_ELCabQ3ldfF9QOKpvSBRJW1VX7WzGFqcsXfk8zCEmUjQaK_7Aw_39lJeZUzJvpfGjMPYqN4EVj78S9stK3-1G5U42Km9UD-D92clOyuXMU_WE0MswSeSO2xU-fR9jURTSAEASWR1n_MJVgWIMS_bGV__fVExiJ-1VruZlVOY6Rv6xaEtoXcC4Gcg8Ka383R0r_DsGz_GNUhf-XyDoN2DELMkt0PghVqrvclZbRKdLVMB2HpR_DRmBtAHs1hiU9Cs-yJxZAVkmVg")' }}></div>
             </div>
             <div className="flex flex-col gap-2 p-2">
                <div className="flex justify-between items-center text-xs text-white/50">
                   <span>Aug 30, 2023</span>
                   <span>7 min read</span>
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                   The Future of Software in Language Learning
                </h4>
                <p className="text-sm text-white/60 line-clamp-2">
                   How AI and machine learning are revolutionizing the way we learn new languages.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                   <span className="text-[10px] font-semibold tracking-wide uppercase text-white/40">EdTech</span>
                   <span className="text-[10px] font-semibold tracking-wide uppercase text-white/40">Trends</span>
                </div>
             </div>
          </a>
          {/* Post 5 */}
          <a className="group flex flex-col gap-3 rounded-xl bg-card-dark p-3 border border-card-border hover:border-primary/50 transition-all hover:-translate-y-1 shadow-sm" href="#">
             <div className="w-full aspect-video bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden relative bg-slate-800">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAANsHq14POh0qfQFOkhVCMMUy2ctjtP0C2NprqdYKy2fCpLwoF0xri3MW5mt1m748MmZrZuA2zgSH2PAYGnS1AU7AjfYA848Z1OVjTf2MxE44VM2uOmXucNWG6Sr10aTwam5LMgWMcqb2U41vcKy9YT2bXxO6-pqk0e676DmIZyokL9QzbJzepctjV6U3Wn0ax1-YzNsSRpJeIub2YjmR6cn0E6ghZ8gESuiIpcTrWcCkaRSYNflatneHnB2qdEMpUHxU278PuJ5Zk")' }}></div>
             </div>
             <div className="flex flex-col gap-2 p-2">
                <div className="flex justify-between items-center text-xs text-white/50">
                   <span>Aug 12, 2023</span>
                   <span>5 min read</span>
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                   Git Workflow Best Practices
                </h4>
                <p className="text-sm text-white/60 line-clamp-2">
                   Keeping your history clean and managing large teams with efficient branching strategies.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                   <span className="text-[10px] font-semibold tracking-wide uppercase text-white/40">Git</span>
                   <span className="text-[10px] font-semibold tracking-wide uppercase text-white/40">DevOps</span>
                </div>
             </div>
          </a>
       </div>

       {/* Pagination */}
       <div className="flex items-center justify-center pt-8 border-t border-white/10">
          <div className="flex items-center gap-2">
             <a className="flex size-10 items-center justify-center rounded-full text-white/50 hover:bg-white/10 transition-colors disabled:opacity-50" href="#">
                <span className="material-symbols-outlined">chevron_left</span>
             </a>
             <a className="text-sm font-bold flex size-10 items-center justify-center text-background-dark rounded-full bg-primary" href="#">1</a>
             <a className="text-sm font-medium flex size-10 items-center justify-center text-white/70 rounded-full hover:bg-white/10 transition-colors" href="#">2</a>
             <a className="text-sm font-medium flex size-10 items-center justify-center text-white/70 rounded-full hover:bg-white/10 transition-colors" href="#">3</a>
             <span className="text-white/50 px-1">...</span>
             <a className="text-sm font-medium flex size-10 items-center justify-center text-white/70 rounded-full hover:bg-white/10 transition-colors" href="#">8</a>
             <a className="flex size-10 items-center justify-center rounded-full text-white/50 hover:bg-white/10 transition-colors" href="#">
                <span className="material-symbols-outlined">chevron_right</span>
             </a>
          </div>
       </div>
    </div>
  );
};

export default Blog;
