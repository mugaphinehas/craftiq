"use client"
import React from 'react'
import Navbar from "../sections/Navbar"

interface ServiceSectionProps {
    id: string;
    category: string;
    title: string;
    italicTitle: string;
    intro: string;
    deliverables: string[];
    technicalSpecifications: string[];
    imageSrc: string;
    imageAlt: string;
}

function ServiceBlock({ 
    id, category, title, italicTitle, intro, deliverables, technicalSpecifications, imageSrc, imageAlt 
}: ServiceSectionProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-16 pb-24 border-t border-black/40 group items-start">
            
            {/* Meta Segment Column (Cols 1-3) */}
            <div className="md:col-span-3 font-mono text-xs text-gray-400 space-y-2">
                <div>[ service_id // {id} ]</div>
                <div className="text-black font-semibold uppercase tracking-wider">// {category}</div>
            </div>

            {/* Core Technical Specifications (Cols 4-8) */}
            <div className="md:col-span-5 space-y-8">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
                        {title} <br />
                        <span className="font-light italic lowercase tracking-tight block mt-1 text-gray-700">{italicTitle}</span>
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-6">
                        {intro}
                    </p>
                </div>

                {/* Sub-grids for deeper breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                    <div>
                        <span className="font-mono text-[10px] uppercase text-black font-bold block mb-3">// core deliverables</span>
                        <ul className="space-y-2 text-xs text-gray-500 lowercase">
                            {deliverables.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <span className="text-black font-mono">_</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <span className="font-mono text-[10px] uppercase text-black font-bold block mb-3">// system protocol</span>
                        <ul className="space-y-2 text-xs text-gray-500 lowercase">
                            {technicalSpecifications.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <span className="text-gray-400 font-mono">[{index + 1}]</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Visual Engineering Column (Cols 9-12) */}
            <div className="md:col-span-4 overflow-hidden bg-zinc-100 border border-gray-200/60 relative aspect-[11/14] rounded-none mt-4 md:mt-0">
                <img 
                    src={imageSrc} 
                    alt={imageAlt}
                    className="w-full h-full object-cover grayscale contrast-110 mix-blend-multiply group-hover:grayscale-0 group-hover:contrast-100 group-hover:mix-blend-normal transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent pointer-events-none transition-colors duration-500" />
            </div>

        </div>
    );
}

export default function ServicesPage() {
    const servicesList = [
        {
            id: "01",
            category: "identity & asset architecture",
            title: "Corporate Blueprinting",
            italicTitle: "business cards, typography & stationary arrays",
            intro: "We configure physical brand touchpoints with strict structural calculation. Corporate stationary and business cards are engineered using precise multi-column grids, balanced typographic scale parameters, and high-contrast monochrome color spaces to guarantee immediate executive authority.",
            deliverables: [
                "minimalist business cards",
                "letterhead frameworks",
                "modular design guidelines",
                "vector asset packages"
            ],
            technicalSpecifications: [
                "exact typographic grid systems",
                "3.5 x 2.0 print margin math",
                "monochrome ink formulas",
                "coreldraw master alignment"
            ],
            imageSrc: "https://mockups-design.com/wp-content/uploads/2025/01/Business_Card_Mockup_1.jpg",
            imageAlt: "Minimalist business card mockup displaying sharp asymmetric typography sitting on raw concrete texture"
        },
        {
            id: "02",
            category: "print production engineering",
            title: "Mechanical Graphics",
            italicTitle: "uv, dtf & large-format machinery optimization",
            intro: "Direct hardware configuration for heavy graphic outputs. We provide advanced production setup mapping, prepping structural layouts specifically for specialized UV printbeds, Direct-to-Film textile substrates, and architectural large-format plotting equipment.",
            deliverables: [
                "uv machine setup maps",
                "large-format blueprints",
                "dtf textile print beds",
                "vector asset packages"
            ],
            technicalSpecifications: [
                "rip raster optimization",
                "cmyk ink-density profiles",
                "vector pass configurations",
                "zero-bleed bleed setups"
            ],
            imageSrc: "https://dekatronics.co.ke/assets/images/products/yinghe-slightly-used-18m-eco-solvent-large-format-printer-with-epson-xp600-head-default.jpeg",
            imageAlt: "Industrial scale large format printing machine running active roll output inside an operations workspace"
        },
        {
            id: "03",
            category: "software framework buildout",
            title: "Application Interface",
            italicTitle: "next.js web systems & core backend nodes",
            intro: "Developing clean frontend web systems optimized for instantaneous loading responses. We write semantic code frameworks backed by rigid styling guidelines to design lightweight web structures that render perfectly across complex browser platforms.",
            deliverables: [
                "next.js web platforms",
                "tailwind layout styling",
                "restful endpoint hooks",
                "vercel platform scaling"
            ],
            technicalSpecifications: [
                "semantic react code parsing",
                "performance file caching",
                "lighthouse core metrics",
                "headless design routing"
            ],
            imageSrc: "https://www.yankodesign.com/images/design_news/2025/03/brutalist-aluminum-office-stationery-set-is-the-perfect-prop-for-severance/lumon-stationery-set-05.jpg",
            imageAlt: "Brutalist desk stationaries showing metallic folders and accessories laid out on a stark grey surface"
        }
    ];

    return (
        <main className="bg-[#fbfbfb] min-h-screen text-black font-sans border-t border-black">
            <Navbar />
            <div className="px-8 md:px-16 pt-32 pb-24">
            
            {/* Header Matrix System */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-28">
                <div className="md:col-span-3 font-mono text-xs uppercase font-semibold tracking-wider text-black pt-1">
                    // capabilities catalog
                </div>
                <div className="md:col-span-9">
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-6">
                        operational <br />
                        <span className="font-light italic lowercase tracking-tight block mt-2">service protocols.</span>
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base font-mono max-w-xl leading-relaxed mt-8">
                        [ structural index ] a detailed breakdown of core agency capabilities spanning physical industrial printing machinery setup and multi-tier digital system engineering.
                    </p>
                </div>
            </div>

            {/* Dense Service Loop */}
            <div className="flex flex-col">
                {servicesList.map((service, i) => (
                    <ServiceBlock 
                        key={i}
                        id={service.id}
                        category={service.category}
                        title={service.title}
                        italicTitle={service.italicTitle}
                        intro={service.intro}
                        deliverables={service.deliverables}
                        technicalSpecifications={service.technicalSpecifications}
                        imageSrc={service.imageSrc}
                        imageAlt={service.imageAlt}
                    />
                ))}
            </div>

            {/* Ending Document Marker Rule */}
            <div className="border-t border-black mt-12 pt-8 flex justify-between font-mono text-[9px] text-gray-400 uppercase tracking-widest">
                <span>[ documentation transmission complete ]</span>
                <span>craftiq systems // 2026</span>
            </div>

            </div>
        </main>
    );
}