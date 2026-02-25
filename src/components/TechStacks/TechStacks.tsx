import type { TechStackType } from "../../types/TechStack/TechStack"

export default function TechStacks({ datas } : {datas : TechStackType}) {
    return (
        <>
            <div className="group relative flex flex-col gap-4 rounded-2xl bg-glass border border-glass-border p-6 backdrop-blur-sm transition-all duration-300 hover:bg-glass/20 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative z-10 flex items-start justify-between">
                   <div className="p-3 rounded-lg bg-slate-800 text-[#61DAFB]">
                      <span className="text-3xl">
                        <svg fill={datas.color} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ">
                        <title>{datas.framework}</title>
                            <path d={datas.path}/>
                        </svg>
                      </span>
                   </div>
                   {/* <span className="text-xs font-medium text-slate-500 bg-slate-900/50 px-2 py-1 rounded">V 18.2</span> */}
                </div>
                <div className="relative z-10">
                   <h3 className="text-xl font-bold text-white mb-1">{datas.framework}</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">{datas.explain}</p>
                </div>
             </div>
        </>
    )
}