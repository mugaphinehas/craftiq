"use client"
import React from 'react'
import Navbar from "../sections/Navbar"

export default function CompanyPage() {
    const stats = [
        { metric: "Vect.01", label: "core framework", value: "graphic design" },
        { metric: "Vect.02", label: "engine stack", value: "software dev" },
        { metric: "Vect.03", label: "hq terminal", value: "nairobi, ke" },
        { metric: "Vect.04", label: "deployment runtime", value: "24/7 ops" }
    ];

    const milestones = [
        { year: "2026.03", title: "Brand Metamorphosis", desc: "Consolidated operational architecture under the unified CraftiQ matrix, transitioning from localized assets to full-scale interface engineering." },
        { year: "2026.01", title: "AI Project Training Integration", desc: "Successfully onboarded remote freelance system frameworks (Project 215 via Tarmack) to train and optimize advanced visual systems." },
        { year: "2025.07", title: "Mellow Protocol Initiation", desc: "Initialized product development blueprints for the Mellow application, establishing mobile interface standards." },
        { year: "2024.11", title: "Core Architecture Foundations", desc: "Assembled initial deployment stacks, focusing on strict Swiss-grid visual layout configurations and modular backend engines." }
    ];

    return (
        <main className="bg-[#fbfbfb] min-h-screen text-black font-sans border-t border-black">
            <Navbar />
            <div className="px-8 md:px-16 pt-32 pb-24">
            
            {/* Header / Identity Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
                <div className="md:col-span-3 font-mono text-xs uppercase font-semibold tracking-wider text-black pt-1">
                    // entity profile
                </div>
                <div className="md:col-span-9">
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-6">
                        operational <br />
                        <span className="font-light italic lowercase tracking-tight block mt-2">manifesto blueprint.</span>
                    </h1>
                </div>
            </div>

            {/* Split Grid: Manifesto Text & Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16 items-start border-b border-black pb-24">
                
                {/* Editorial Column */}
                <div className="md:col-span-7 space-y-8 text-base md:text-lg text-gray-800 leading-relaxed tracking-normal">
                    <p className="font-mono text-xs uppercase text-gray-400 tracking-wider">
                        [ thesis statement ]
                    </p>
                    <p className="text-xl md:text-2xl font-light text-black">
                        CraftiQ operates at the convergence of pure graphic structure and functional software architecture. We treat interfaces not as decoration, but as high-performance layout engines.
                    </p>
                    <p className="text-sm md:text-base text-gray-500">
                        Rooted in the mathematical precision of the Swiss design school, we design unbreakable typographic systems, rigid structural grid arrays, and deeply optimized technical backends using React, Next.js, and Rust. 
                    </p>
                    <p className="text-sm md:text-base text-gray-500">
                        Whether deploying physical print mechanics across UV and large-format arrays or generating headless digital frameworks, our design logic remains absolute: eliminate friction, prioritize clarity, and engineer with strict intentionality.
                    </p>
                </div>

                {/* Hard Metrics Column */}
                <div className="md:col-span-4 md:col-start-9 grid grid-cols-2 gap-x-6 gap-y-12 font-mono border-t md:border-t-0 md:border-l border-black/10 pt-12 md:pt-0 md:pl-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col justify-between min-h-[90px]">
                            <div>
                                <span className="text-[10px] text-gray-400 block mb-1">[{stat.metric}]</span>
                                <span className="text-xs text-black lowercase block">{stat.label}</span>
                            </div>
                            <span className="text-sm font-semibold tracking-tight text-black uppercase mt-4">
                                {stat.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Historical Sequence / Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-24 items-start">
                
                {/* Label */}
                <div className="md:col-span-3 font-mono text-xs uppercase font-semibold tracking-wider text-black pt-1 mb-8 md:mb-0">
                    // system chronological trace
                </div>

                {/* Sequence Entries */}
                <div className="md:col-span-9 space-y-12">
                    {milestones.map((event, i) => (
                        <div key={i} className="grid grid-cols-1 sm:grid-cols-12 gap-4 border-t border-gray-200/60 pt-6 group">
                            
                            {/* Year Indicator */}
                            <div className="sm:col-span-3 font-mono text-sm font-semibold text-black tracking-tight">
                                // {event.year}
                            </div>
                            
                            {/* Content Block */}
                            <div className="sm:col-span-9 space-y-2">
                                <h3 className="text-xl font-bold uppercase tracking-tight text-black group-hover:text-zinc-500 transition-colors">
                                    {event.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
                                    {event.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

            {/* System Termination Node */}
            <div className="mt-32 border-b border-black w-full" />
            <div className="mt-4 flex justify-between font-mono text-[9px] text-gray-400 uppercase tracking-widest">
                <span>[ document matrix end ]</span>
                <span>craftiq.space // internal copy</span>
            </div>

            </div>
        </main>
    );
}