"use client"
import React from 'react'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="bg-[#fbfbfb] px-8 md:px-16 pt-32 pb-24 font-sans text-black border-t border-black">
            
            {/* Split System Terminal Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                
                {/* Column Left: High Impact Framing */}
                <div className="md:col-span-7 flex flex-col justify-between h-full">
                    <div>
                        <div className="font-mono text-xs uppercase font-semibold tracking-wider text-black mb-8">
                            // initial engagement matrix
                        </div>
                        <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-black">
                            let&apos;s build <br />
                            <span className="font-light italic lowercase tracking-tight block mt-4">the infrastructure.</span>
                        </h2>
                    </div>
                    
                    <p className="text-gray-500 text-sm md:text-base font-mono mt-12 max-w-md leading-relaxed">
                        [ connection open ] ready to deploy specialized graphic ecosystems, performance-driven web systems, and custom automation nodes.
                    </p>
                </div>

                {/* Column Right: Action Matrix Terminal */}
                <div className="md:col-span-5 border border-black p-8 md:p-10 bg-white rounded-none flex flex-col justify-between group relative overflow-hidden">
                    {/* Tiny grid design detail inside the box */}
                    <div className="absolute top-0 right-0 font-mono text-[9px] p-2 text-gray-300 pointer-events-none select-none">
                        sys.cfg_rev_04
                    </div>

                    <div>
                        <div className="font-mono text-xs text-gray-400 mb-6 flex justify-between">
                            <span>[ core_node ]</span>
                            <span className="text-black font-semibold">// select route</span>
                        </div>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-12">
                            Skip the standard account executive discovery loops. Connect directly with operational designers and software engineers to scope architecture timelines instantly.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {/* Primary Interaction Path */}
                        <Link 
                            href="#quote"
                            className="w-full block text-center font-mono text-xs uppercase tracking-widest border border-black bg-black text-white hover:bg-transparent hover:text-black py-4 rounded-none transition-all duration-300"
                        >
                            book free strategy call
                        </Link>

                        {/* Secondary Index Path */}
                        <Link 
                            href="/usecases"
                            className="w-full block text-center font-mono text-xs uppercase tracking-widest border border-gray-200 text-gray-500 hover:border-black hover:text-black py-4 rounded-none transition-all duration-300"
                        >
                            browse architectural usecases
                        </Link>
                    </div>
                </div>

            </div>

            {/* Micro Grid Closing Rule */}
            <div className="mt-32 flex justify-between items-center font-mono text-[10px] text-gray-400">
                <span>[ craftiq engine // 2026 ]</span>
                <span>all parameters initialized</span>
            </div>

        </section>
    );
}