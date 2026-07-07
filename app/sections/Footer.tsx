"use client"
import React from 'react'
import Link from 'next/link'

export default function Footer() {
    const internalLinks = [
        { name: 'usecases', href: '/usecases', index: '01' },
        { name: 'services', href: '#services', index: '02' },
        { name: 'company', href: '#company', index: '03' },
        { name: 'get quote', href: '#quote', index: '04' }
    ];

    const ecosystemLinks = [
        { name: 'mellow ecosystem', href: '#' },
        { name: 'muga farm tech', href: '#' },
        { name: 'vercel detailing system', href: '#' },
        { name: 'craftiq labs', href: '#' }
    ];

    return (
        <footer className="bg-[#fbfbfb] px-8 md:px-16 pt-20 pb-12 font-sans text-black border-t-2 border-black">
            
            {/* Main Directory Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 items-start mb-24">
                
                {/* Brand Frame (Cols 1-4) */}
                <div className="md:col-span-4 flex flex-col justify-between h-full min-h-[160px]">
                    <div>
                        <h3 className="font-black tracking-tighter text-2xl uppercase leading-none mb-2">
                            craftiq
                        </h3>
                        <p className="font-mono text-xs text-gray-400 lowercase">
                            [ design &amp; software engineering matrix ]
                        </p>
                    </div>
                    
                    <p className="text-gray-500 text-xs leading-relaxed max-w-xs font-mono mt-4">
                        High-contrast structural frameworks built for digital and physical deployment.
                    </p>
                </div>

                {/* Directory Node 01: Core System (Cols 5-6) */}
                <div className="md:col-span-2">
                    <div className="font-mono text-[10px] uppercase text-gray-400 tracking-wider mb-6">
                        // directory
                    </div>
                    <ul className="space-y-3 text-sm">
                        {internalLinks.map((link, i) => (
                            <li key={i}>
                                <Link 
                                    href={link.href} 
                                    className="flex items-baseline gap-1 text-black/80 hover:text-black transition-colors lowercase"
                                >
                                    <span className="font-mono text-[9px] text-gray-300">[{link.index}]</span>
                                    <span>{link.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Directory Node 02: Ecosystem Projects (Cols 7-9) */}
                <div className="md:col-span-3">
                    <div className="font-mono text-[10px] uppercase text-gray-400 tracking-wider mb-6">
                        // operational nodes
                    </div>
                    <ul className="space-y-3 text-sm">
                        {ecosystemLinks.map((link, i) => (
                            <li key={i}>
                                <Link 
                                    href={link.href} 
                                    className="text-black/80 hover:text-black transition-colors lowercase block hover:underline underline-offset-4 decoration-1"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Directory Node 03: Contact Index (Cols 10-12) */}
                <div className="md:col-span-3 font-mono text-xs text-right md:text-left">
                    <div className="text-[10px] uppercase text-gray-400 tracking-wider mb-6">
                        // local node
                    </div>
                    <div className="space-y-4 text-black lowercase">
                        <div>
                            <span className="text-gray-400 block mb-1">HQ coordinate //</span>
                            <span className="font-sans font-medium text-sm">nairobi, kenya</span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-1">secure signal //</span>
                            <a href="mailto:ops@craftiq.space" className="underline hover:text-zinc-500 transition-colors">
                                ops@craftiq.space
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Meta Bar */}
            <div className="border-t border-gray-200/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[10px] text-gray-400">
                <div className="flex items-center gap-4">
                    <span>© 2026 craftiq. space</span>
                    <span>//</span>
                    <span>all systems operational</span>
                </div>
                <div className="flex gap-6 lowercase">
                    <a href="#" className="hover:text-black transition-colors">[ github ]</a>
                    <a href="#" className="hover:text-black transition-colors">[ read.cv ]</a>
                    <a href="#" className="hover:text-black transition-colors">[ linkedin ]</a>
                </div>
            </div>

        </footer>
    );
}