interface ValueCardProps {
    num: string;
    title: string;
    italicTitle?: string;
    description: string;
}

function ValueCard({ num, title, italicTitle, description }: ValueCardProps) {
    return (
        <div className="md:col-span-4 flex flex-col justify-between border-t border-black pt-6 pb-12 group h-full transition-all">
            <div>
                {/* Numeric Index Line */}
                <div className="flex justify-between items-center font-mono text-xs text-gray-400 mb-12">
                    <span>// protocol {num}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black">
                        [ strict ]
                    </span>
                </div>

                {/* Value Heading */}
                <h3 className="text-4xl font-light tracking-tight text-black leading-none uppercase mb-6">
                    {title} <br />
                    {italicTitle && <span className="font-medium italic lowercase tracking-wide block mt-1">{italicTitle}</span>}
                </h3>
            </div>

            {/* Value Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed tracking-normal max-w-sm border-l-2 border-transparent group-hover:border-black pl-0 group-hover:pl-4 transition-all duration-300">
                {description}
            </p>
        </div>
    );
}

export default function Values() {
    return (
        <section className="bg-[#fbfbfb] px-8 md:px-16 pt-24 pb-16 font-sans text-black border-t border-black">
            
            {/* Section Header Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 items-start">
                <div className="md:col-span-3 font-mono text-xs uppercase font-semibold tracking-wider text-black pt-1">
                    // operational principles
                </div>
                <div className="md:col-span-9">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                        foundational <br /> parameters
                    </h2>
                </div>
            </div>

            {/* 3-Column Values Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12 items-stretch">
                
                <ValueCard 
                    num="01"
                    title="absolute"
                    italicTitle="trust"
                    description="Transparent infrastructure by default. We do away with agency ambiguity by integrating clients directly into our WebOps deployment timelines, code repositories, and asset loops. No hand-waving, no backlogs."
                />

                <ValueCard 
                    num="02"
                    title="radical"
                    italicTitle="precision"
                    description="Good enough is an infrastructure failure. From strict typographic vertical grid alignments to modular backend optimization, every system line is engineered to act with extreme intent and clear performance logic."
                />

                <ValueCard 
                    num="03"
                    title="creative"
                    italicTitle="autonomy"
                    description="We build tools and architectures that liberate marketing teams. By setting up rigid, unbreakable design frameworks on the frontend, your content creators move freely at the absolute speed of their best ideas."
                />

            </div>

            {/* Accent Footer Rule */}
            <div className="mt-12 border-b border-gray-200/60 w-full" />
            
        </section>
    );
}