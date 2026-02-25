import type { WhatDoIDoType } from '../../types/Home/WhatDoIDo';

export default function WhatDoIDo({ datas } : { datas : WhatDoIDoType}) {
    return(
            <div className="group flex flex-col gap-4 rounded-2xl border border-card-border bg-card-dark p-6 hover:-translate-y-1 transition-transform duration-300 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                   <span className="material-symbols-outlined">{datas.icon}</span>
                </div>
                <div className="flex flex-col gap-2">
                   <h3 className="text-white text-xl font-bold">{datas.title}</h3>
                   <div className="text-white/60 text-sm leading-relaxed" >
                    {datas.explain.map((line, idx) => {
                        return <div key={idx}>{line}</div>
                    })}
                   </div>
                </div>
             </div>
    )
}