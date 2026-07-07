"use client"
import React from 'react'
import Navbar from "../sections/Navbar"

interface CaseBlockProps {
    num: string;
    title: string;
    italicSubtitle: string;
    description: string;
    techStack: string[];
    imageSrc: string;
    altText: string;
    alignment: "left" | "right";
}

function CaseBlock({ num, title, italicSubtitle, description, techStack, imageSrc, altText, alignment }: CaseBlockProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-black/40 pt-16 pb-20 group">
            
            {/* TEXT SYSTEM ENGINE */}
            <div className={`md:col-span-5 flex flex-col justify-between h-full ${alignment === 'right' ? 'md:order-last md:col-start-8' : ''}`}>
                <div>
                    <div className="font-mono text-xs text-gray-400 mb-6 flex justify-between items-center">
                        <span>[ case_vector // {num} ]</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black font-semibold">// active</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
                        {title} <br />
                        <span className="font-light italic lowercase tracking-tight block mt-1 text-gray-700">{italicSubtitle}</span>
                    </h2>
                    
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-6 max-w-md">
                        {description}
                    </p>
                </div>

                {/* TECH STRUCT METADATA */}
                <div className="mt-8 pt-6 border-t border-gray-100 font-mono text-[11px] text-gray-500">
                    <span className="text-black block font-semibold mb-2 uppercase tracking-wider">// system parameters:</span>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 lowercase">
                        {techStack.map((tech, idx) => (
                            <span key={idx}>[{tech}]</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* VISUAL IMAGE INTERFACE CONTAINER */}
            <div className={`md:col-span-6 ${alignment === 'left' ? 'md:col-start-7' : ''} overflow-hidden bg-zinc-100 border border-gray-200/60 relative aspect-[4/3] rounded-none shadow-sm`}>
                <img 
                    src={imageSrc} 
                    alt={altText}
                    className="w-full h-full object-cover grayscale contrast-115 mix-blend-multiply group-hover:grayscale-0 group-hover:contrast-100 group-hover:mix-blend-normal transition-all duration-700 ease-out scale-102 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent pointer-events-none transition-colors duration-500" />
            </div>

        </div>
    );
}

export default function UsecasesPage() {
    const vectors = [
        {
            num: "01",
            title: "Performance Web Systems",
            italicSubtitle: "headless architecture & application design",
            description: "Engineered web architectures focusing on sub-second loading states and rigid visual layouts. We eliminate bloated component styling libraries to construct lightweight platforms utilizing React, Next.js, and pure asset caching loops.",
            techStack: ["next.js", "react", "tailwind css", "vercel deployment", "webops"],
            imageSrc: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRI2IwzmIbvGCIIEorzU7bP8xB7ZAY29YYCfijSnkFOuByRykBelvj6U0h7EZawY6eqN4sim-moDhGKo24",
            altText: "Minimalist brutalist web user interface layout with strict structural boundaries",
            alignment: "left" as const
        },
        {
            num: "02",
            title: "Typographic Print Systems",
            italicSubtitle: "monochrome grids & physical layouts",
            description: "High-contrast visual identities engineered for large-format physical manifestation. Strict adherence to baseline grids, asymmetric vertical text blocks, and brutalist geometric layout mechanics optimized for UV and DTF production machinery.",
            techStack: ["coreldraw", "adobe indesign", "uv print output", "vector scaling"],
            imageSrc: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTaqA5J9duha3LIDb25tuE9urDhH5YJzOkJLiKOtp5WdmX6kY-x6-3SnzwuEFZM7MoSDyb4w1bwNvqblxM",
            altText: "Swiss typography poster graphic layout with heavy black and red geometric shapes",
            alignment: "right" as const
        },
        {
            num: "03",
            title: "Mobile Interface Nodes",
            italicSubtitle: "mellow ecosystem runtime frameworks",
            description: "Clean mobile viewports tracking strict interaction points. Visual states leverage clean, borderless list dividers and high-contrast metadata markers to ensure content navigation takes place at maximum execution speed.",
            techStack: ["ios interface", "figma blueprints", "ux core design", "variable sizing"],
            imageSrc: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTddMJdlKX6FQhRCS03YWi3Hx4QMfaP7UBOPx__ibvmIZvfzhbIvzjgtELXWPrATKq4jOFPwdeeF0DlWKw",
            altText: "Minimal mobile application interface design showing clean login inputs and simple grid items",
            alignment: "left" as const
        },
        {
            num: "04",
            title: "Structural Editorial Identity",
            italicSubtitle: "brutalist design & brand mockups",
            description: "Holistic brand infrastructure blueprints. We map abstract identity requirements directly into predictable structural components, using raw wireframes and layered grid layouts to communicate core technical authority.",
            techStack: ["brand layout", "adobe illustrator", "print assets", "vector grids"],
            imageSrc: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQlfNdT2DIFqC3yifCPV5Nr-RWdx5Bad4vClDevmQY5hr5LmY_YwlnkwvVCF1RMbxvJNS2pFzdG5Q4HZ94",
            altText: "Brutalist editorial printed layout design using dense technical grids and star elements",
            alignment: "right" as const
        }
    ];

    return (
        <main className="bg-[#fbfbfb] min-h-screen text-black font-sans border-t border-black">
            <Navbar />
            <div className="px-8 md:px-16 pt-32 pb-24">
            
            {/* Header Identity System */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-28">
                <div className="md:col-span-3 font-mono text-xs uppercase font-semibold tracking-wider text-black pt-1">
                    // system capabilities
                </div>
                <div className="md:col-span-9">
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-6">
                        architectural <br />
                        <span className="font-light italic lowercase tracking-tight block mt-2">application usecases.</span>
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base font-mono max-w-xl leading-relaxed mt-8">
                        [ catalog matrix ] cross-discipline production frameworks bridging technical software compilation with physical design execution.
                    </p>
                </div>
            </div>

            {/* Alternating Core Matrix Grid */}
            <div className="flex flex-col">
                {vectors.map((vector, i) => (
                    <CaseBlock 
                        key={i}
                        num={vector.num}
                        title={vector.title}
                        italicSubtitle={vector.italicSubtitle}
                        description={vector.description}
                        techStack={vector.techStack}
                        imageSrc={vector.imageSrc}
                        altText={vector.altText}
                        alignment={vector.alignment}
                    />
                ))}
            </div>

            {/* Terminal Block End */}
            <div className="border-t border-black mt-12 pt-8 flex justify-between font-mono text-[9px] text-gray-400 uppercase tracking-widest">
                <span>[ end of capability index ]</span>
                <span>craftiq framework // 2026</span>
            </div>

            </div>
        </main>
    );
}