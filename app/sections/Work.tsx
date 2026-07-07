interface ProjectCardProps {
    span: string;
    index: string;
    title: string;
    category: string;
    imageSrc: string;
    aspectRatio: string;
}

function ProjectCard({ span, index, title, category, imageSrc, aspectRatio }: ProjectCardProps) {
    return (
        <div className={`${span} flex flex-col justify-between group cursor-crosshair border-b border-gray-100 pb-6`}>
            {/* Visual Container */}
            <div className={`w-full ${aspectRatio} overflow-hidden bg-zinc-100 border border-gray-200/60 relative rounded-sm mb-4`}>
                <img 
                    src={imageSrc} 
                    alt={`${title} project thumbnail`}
                    className="w-full h-full object-cover grayscale contrast-115 mix-blend-multiply group-hover:grayscale-0 group-hover:contrast-100 group-hover:mix-blend-normal transition-all duration-700 ease-out scale-102 group-hover:scale-100"
                />
                {/* Subtle dark tint that lifts on hover */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent pointer-events-none transition-colors duration-500" />
            </div>

            {/* Project Meta Information */}
            <div className="flex justify-between items-baseline font-mono text-xs mt-2">
                <div className="flex items-center gap-2">
                    <span className="text-gray-400">[{index}]</span>
                    <span className="text-black font-medium uppercase tracking-tight">{title}</span>
                </div>
                <span className="text-gray-400 lowercase">{category}</span>
            </div>
        </div>
    );
}

export default function Work() {
    const projects = [
        {
            span: "md:col-span-7",
            index: "01",
            title: "Mellow Ecosystem",
            category: "Product Architecture & iOS Design",
            imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200",
            aspectRatio: "aspect-[16/10]"
        },
        {
            span: "md:col-span-5",
            index: "02",
            title: "Muga Farm Technologies",
            category: "Automation Framework & Interface",
            imageSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
            aspectRatio: "aspect-[4/3]"
        },
        {
            span: "md:col-span-5",
            index: "03",
            title: "Slim Arts Studio",
            category: "Identity Blueprint & Web Engine",
            imageSrc: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
            aspectRatio: "aspect-[4/3]"
        },
        {
            span: "md:col-span-7",
            index: "04",
            title: "Vercel Detailing System",
            category: "WebOps Infrastructure & Core Design",
            imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
            aspectRatio: "aspect-[16/10]"
        }
    ];

    return (
        <section className="bg-[#fbfbfb] px-8 md:px-16 pt-24 pb-20 font-sans text-black border-t border-black">
            
            {/* Section Header Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 items-start">
                <div className="md:col-span-3 font-mono text-xs uppercase font-semibold tracking-wider text-black pt-1">
                    // selected case studies
                </div>
                <div className="md:col-span-9 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                        selected <br /> index
                    </h2>
                    <div className="font-mono text-xs lowercase text-gray-400 pb-2">
                        [ total entries // 04 ]
                    </div>
                </div>
            </div>

            {/* Asymmetric Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16 items-start">
                {projects.map((project, i) => (
                    <ProjectCard 
                        key={i}
                        span={project.span}
                        index={project.index}
                        title={project.title}
                        category={project.category}
                        imageSrc={project.imageSrc}
                        aspectRatio={project.aspectRatio}
                    />
                ))}
            </div>

        </section>
    );
}