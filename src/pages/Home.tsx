import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full max-w-[1200px] px-6 lg:px-20 py-10 flex flex-col gap-12">
       {/* Hero Section */}
       <div className="@container">
          <div className="flex flex-col gap-8 py-10 lg:flex-row lg:items-center">
             <div className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-card-dark relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-background-dark/80 to-transparent z-10"></div>
                <img
                  alt="Abstract coding background"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSvxU1FmDRxOnrhzf2i235OyaOr70gf27xnKy43VXM0s7iA9-I1NyGOytMZl_0ga4d7lleTiPvADiP4WM_QDl_PlAjtvA5WThb7aS__dOawUxcoTglSwsvrj2sBjv-26dw0t2RDx--zP2xGGuzU8rxfyAgz4D0I7UdyfnwHfY5bT-PLVmuEghzGBR7pwnU3xASKevaJZ_u2i8y1rxKAXKUj8b6tonS4ILbUOmRvfE3IoCt6vWVQXTXFYjhIJi1OFnWb73LwON6mpMM"
                />
             </div>
             <div className="flex flex-col gap-6 lg:w-1/2 lg:pl-10 justify-center">
                <div className="flex flex-col gap-3 text-left">
                   <span className="text-primary font-bold tracking-wider uppercase text-sm">Developer Portfolio</span>
                   <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] lg:text-5xl">
                      Hello,<br/>I'm Taeheon Kim
                   </h1>
                   <p className="text-white/80 text-lg font-normal leading-relaxed mt-2">
                      A developer majoring in ELLT (English Linguistics & Language Technology) and Software at HUFS. Creating new value through the convergence of linguistic insights and software technology.
                   </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-2">
                   <Link to="/projects" className="flex items-center justify-center rounded-full h-12 px-8 bg-primary hover:bg-primary/90 transition-all text-white text-base font-bold shadow-lg shadow-primary/25">
                      View Projects
                   </Link>
                   <Link to="/blog" className="flex items-center justify-center rounded-full h-12 px-8 bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-white text-base font-bold backdrop-blur-sm">
                      Read Blog
                   </Link>
                </div>
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
                Building innovative solutions based on linguistic engineering and software development capabilities.
             </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <div className="group flex flex-col gap-4 rounded-2xl border border-card-border bg-card-dark p-6 hover:-translate-y-1 transition-transform duration-300 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                   <span className="material-symbols-outlined">code</span>
                </div>
                <div className="flex flex-col gap-2">
                   <h3 className="text-white text-xl font-bold">Web Development</h3>
                   <p className="text-white/60 text-sm leading-relaxed">
                      Developing scalable and responsive full-stack web applications utilizing React and Node.js.
                   </p>
                </div>
             </div>
             <div className="group flex flex-col gap-4 rounded-2xl border border-card-border bg-card-dark p-6 hover:-translate-y-1 transition-transform duration-300 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                   <span className="material-symbols-outlined">psychology</span>
                </div>
                <div className="flex flex-col gap-2">
                   <h3 className="text-white text-xl font-bold">Natural Language Processing</h3>
                   <p className="text-white/60 text-sm leading-relaxed">
                      Analyzing text data and extracting meaningful information utilizing Python and modern deep learning models (BERT, GPT).
                   </p>
                </div>
             </div>
             <div className="group flex flex-col gap-4 rounded-2xl border border-card-border bg-card-dark p-6 hover:-translate-y-1 transition-transform duration-300 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                   <span className="material-symbols-outlined">smartphone</span>
                </div>
                <div className="flex flex-col gap-2">
                   <h3 className="text-white text-xl font-bold">Mobile Apps</h3>
                   <p className="text-white/60 text-sm leading-relaxed">
                      Building cross-platform apps that work smoothly on both iOS and Android environments using Flutter and Native technologies.
                   </p>
                </div>
             </div>
          </div>
       </div>

       {/* Featured Projects Section */}
       <div className="flex flex-col gap-8 py-10">
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
       </div>
    </div>
  );
};

export default Home;
