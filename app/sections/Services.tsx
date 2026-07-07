interface ServiceRowProps {
    index: string;
    title: string;
    description: string;
    capabilities: string[];
    imageSrc: string;
    reverse?: boolean;
}

function ServiceRow({ index, title, description, capabilities, imageSrc, reverse = false }: ServiceRowProps) {
    return (
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} justify-between items-stretch gap-12 md:gap-24 border-t border-black/10 pt-8 pb-20 group`}>
            
            {/* Text Content Column */}
            <div className="w-full md:w-1/2 flex flex-col justify-between tracking-tighter">
                <div>
                    {/* Index & Section Indicator */}
                    <div className="flex justify-between items-center font-mono text-xs lowercase text-gray-400 mb-12">
                        <span>[ phase // {index} ]</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black">
                            // system optimized
                        </span>
                    </div>

                    {/* Core Title */}
                    <h3 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight">
                        {title.split(' ')[0]} <span className="font-medium italic">{title.split(' ').slice(1).join(' ')}</span>
                    </h3>

                    {/* Editorial Description */}
                    <p className="text-gray-600 text-base leading-relaxed max-w-md tracking-normal mb-12">
                        {description}
                    </p>
                </div>

                {/* Micro-Grid Capability Index */}
                <div className="border-t border-gray-100 pt-6">
                    <p className="font-mono text-[10px] uppercase font-semibold text-black tracking-wider mb-3">// capabilities</p>
                    <div className="grid grid-cols-2 gap-2 font-mono text-xs text-gray-400 lowercase">
                        {capabilities.map((cap, i) => (
                            <span key={i} className="flex items-center gap-1.5 hover:text-black transition-colors">
                                <span className="w-1 h-1 bg-black rounded-full inline-block" />
                                {cap}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Structured Image Column */}
            <div className="w-full md:w-1/2 flex flex-col justify-center relative">
                <div className="w-full aspect-[16/10] overflow-hidden bg-zinc-100 border border-gray-200/60 relative rounded-sm">
                    <img 
                        src={imageSrc} 
                        alt={`${title} context visual`}
                        className="w-full h-full object-cover grayscale contrast-115 mix-blend-multiply transition-transform duration-700 ease-out scale-102 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                </div>
            </div>

        </div>
    );
}

export default function Services() {
    const servicesList = [
        {
            index: "01",
            title: "brand system architecture",
            description: "Dismantling erratic layouts to deploy absolute structural clarity. We craft strict design languages, uncompromising typographic grid scales, and modular identity toolkits that scale across physical machinery and high-fidelity digital interfaces.",
            capabilities: ["identity engineering", "swiss layout grids", "vector core design", "print production ready"],
            imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200",
            reverse: false
        },
        {
            index: "02",
            title: "digital web engineering",
            description: "Building bleeding-edge web platforms designed to execute at the speed of thought. By integrating robust production rendering frameworks with lightweight backend pipelines, your digital application operates flawlessly with pixel-perfect control.",
            capabilities: ["react & next.js core", "tailwind architecture", "api asset infrastructure", "performance audits"],
            imageSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
            reverse: true
        }
    ];

    return (
        <section className="bg-[#fbfbfb] px-8 md:px-16 pt-24 pb-12 font-sans text-black border-t border-black">
            
            {/* Section Header Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 items-start">
                <div className="md:col-span-3 font-mono text-xs uppercase font-semibold tracking-wider text-black pt-1">
                    // capabilities & execution
                </div>
                <div className="md:col-span-9">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                        engineered <br /> solutions
                    </h2>
                </div>
            </div>

            {/* Alternating Flow List */}
            <div className="flex flex-col">
                {servicesList.map((service, index) => (
                    <ServiceRow 
                        key={index}
                        index={service.index}
                        title={service.title}
                        description={service.description}
                        capabilities={service.capabilities}
                        imageSrc={service.imageSrc}
                        reverse={service.reverse}
                    />
                ))}
            </div>

        </section>
    );
}