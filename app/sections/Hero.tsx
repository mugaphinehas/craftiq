export default function Hero() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6 px-8 md:px-16 items-stretch min-h-screen pt-8 pb-8 font-sans bg-[#fbfbfb] text-black select-none overflow-hidden relative">
            
            {/* COLUMN 1: Graphic Branding & Meta */}
            <div className="md:col-span-3 flex flex-col justify-between border-t border-black pt-4 h-full">
                <div className="flex flex-col gap-1 font-mono text-xs lowercase text-gray-400">
                    <span className="text-black font-medium">[ studio index // 01 ]</span>
                    <span>nairobi, ke</span>
                </div>

                <h2 className="text-7xl md:text-[8rem] font-black leading-[0.8] tracking-tighter my-6 md:my-0">
                    CR <br /> FT
                </h2>

                <div className="flex flex-col gap-4 font-mono lowercase text-xs text-gray-400 mb-4 md:mb-12">
                    <div>
                        <p className="text-black font-semibold">// core focus</p>
                        <p>brand identity & web engineering</p>
                    </div>
                </div>
            </div>

            {/* COLUMN 2: Precision Asymmetric Image Panel */}
            <div className="hidden md:flex md:col-span-5 flex-col justify-end h-full pb-12 relative group">
                <div className="w-full h-[62vh] overflow-hidden bg-zinc-100 border border-gray-200/60 relative rounded-sm">
                    <img 
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" 
                        alt="Minimal elegant architecture interior"
                        className="w-full h-full object-cover grayscale contrast-115 mix-blend-multiply transition-transform duration-700 ease-out scale-102 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                </div>
            </div>

            {/* COLUMN 3: Editorial Intent & Actions */}
            <div className="md:col-span-4 flex flex-col justify-between border-t border-black pt-4 h-full md:pl-4">
                <div className="font-mono text-xs text-right text-gray-400 lowercase hidden md:block">
                    // system active
                </div>

                <div className="flex flex-col gap-6 mt-4 md:mt-0">
                    <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-[1.15]">
                        switch up your <br />
                        <span className="font-medium italic">brand</span>
                    </h1>
                    
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-sm">
                        Backlogs don't disappear overnight. They are dismantled by an embedded WebOps team that truly owns your digital infrastructure. See how we help teams move at the speed of ideas.
                    </p>
                </div>

                {/* Interactive Action Hub */}
                <div className="flex items-center gap-3 py-2 mt-6 md:mt-0 mb-4 md:mb-12">
                    <button className="h-11 px-6 bg-[#0D131F] text-white text-xs font-mono uppercase tracking-widest rounded-full transition-transform active:scale-95 hover:bg-black">
                        our work
                    </button>

                    <button className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-sm text-black border border-gray-200 hover:bg-gray-50 transition-colors group">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </button>

                    <div 
                        className="h-11 w-20 rounded-full bg-cover bg-center bg-zinc-300 grayscale contrast-125 opacity-90 overflow-hidden hidden lg:block"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200')` }}
                    />
                </div>
            </div>

            {/* BASE BRAND SHOWCASE SECTION (With Monochromatic SVG Logos) */}
            <div className="col-span-1 md:col-span-12 border-t border-gray-200 pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-auto">
                <div className="font-mono text-[10px] uppercase text-black font-semibold tracking-wider whitespace-nowrap">
                    // vetted partners
                </div>
                
                {/* Logo Grid Row */}
                <div className="grid grid-cols-2 sm:flex sm:items-center justify-between gap-x-12 gap-y-4 w-full md:pl-24 text-black/40">
                    
                    {/* Logo 1 */}
                    <div className="h-6 flex items-center justify-start sm:justify-center hover:text-black transition-colors duration-300 cursor-crosshair">
                        <svg className="h-5 w-auto fill-current" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
                            <text x="0" y="20" className="font-sans font-black tracking-tight text-xl italic">mellow.</text>
                        </svg>
                    </div>

                    {/* Logo 2 */}
                    <div className="h-6 flex items-center justify-start sm:justify-center hover:text-black transition-colors duration-300 cursor-crosshair">
                        <svg className="h-5 w-auto fill-current" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
                            <text x="0" y="20" className="font-mono font-bold tracking-widest text-lg uppercase">MFT</text>
                            <circle cx="55" cy="14" r="3" />
                        </svg>
                    </div>

                    {/* Logo 3 */}
                    <div className="h-6 flex items-center justify-start sm:justify-center hover:text-black transition-colors duration-300 cursor-crosshair">
                        <svg className="h-5 w-auto fill-current" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
                            <text x="0" y="18" className="font-serif italic text-2xl tracking-tighter">SlimArts</text>
                        </svg>
                    </div>

                    {/* Logo 4 */}
                    <div className="h-6 flex items-center justify-start sm:justify-center hover:text-black transition-colors duration-300 cursor-crosshair">
                        <svg className="h-5 w-auto fill-current" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C18.43 8.66 19 10.74 19 13c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.26.57-4.34 1.58-6.41L5.17 5.17C3.81 7.21 3 9.78 3 13c0 4.97 4.03 9 9 9s9-4.03 9-9c0-3.22-.81-5.79-2.17-7.83z" />
                            <text x="32" y="18" className="font-mono font-medium tracking-tight text-xs uppercase">NTT DATA</text>
                        </svg>
                    </div>

                    {/* Logo 5 */}
                    <div className="h-6 flex items-center justify-start sm:justify-center hover:text-black transition-colors duration-300 cursor-crosshair">
                        <svg className="h-4 w-auto fill-current" viewBox="0 0 115 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 1.5L24 21.5H1L12.5 1.5Z" />
                            <text x="32" y="17" className="font-sans font-bold tracking-tight text-base lowercase">vercel</text>
                        </svg>
                    </div>

                </div>
            </div>

        </main>
    )
}