import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import projectKua from "../../assets/projects/Project-kua.webp";
import projectKaryzen from "../../assets/projects/Project-karyzenstore.png";
import projectBuberta from "../../assets/projects/project-buberta.png";
import projectAlpa from "../../assets/projects/Project-alpa.webp";
import projectSmartphi from "../../assets/projects/Project-smartphi.webp";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "KUA Tebing Tinggi Website",
      subtitle: "Official institutional web portal and public religious service platform",
      link: "https://kuatebingtinggi.pages.dev/",
      image: projectKua,
      gridClass: "md:col-span-7 h-[420px]",
    },
    {
      id: 2,
      title: "Karyzen Store",
      subtitle: "Modern e-commerce platform with intuitive catalog, cart, and checkout",
      link: "https://5173-e68e5aa9-197d-452a-adc0-e391cbe0392d.daytonaproxy01.net/",
      image: projectKaryzen,
      gridClass: "md:col-span-5 h-[420px]",
    },
    {
      id: 3,
      title: "Buberta Finance",
      subtitle: "Financial analytics and bookkeeping application for budgeting and tracking",
      link: "https://buberta.pages.dev",
      image: projectBuberta,
      gridClass: "md:col-span-4 h-[380px]",
    },
    {
      id: 4,
      title: "ALPA Apps",
      subtitle: "Specialized administrative reporting platform for Islamic Religious Counselors",
      link: "https://penyuluhagama.akun4939.workers.dev/",
      image: projectAlpa,
      gridClass: "md:col-span-4 h-[380px]",
    },
    {
      id: 5,
      title: "SmartPHI Mobile Apps",
      subtitle: "Interactive mobile-first digital platform for public information & services",
      link: "https://smartphi.pages.dev",
      image: projectSmartphi,
      gridClass: "md:col-span-4 h-[380px]",
    },
  ];

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left">
          Selected <span className="text-gradient-primary">Works</span>
        </h2>
        <p className="text-muted-foreground text-center md:text-left max-w-2xl text-lg">
          A showcase of scalable web applications, public portals, and digital platforms I've engineered.
        </p>
      </motion.div>

      {/* 12-Column Full-Width Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        {projects.map((project, i) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative overflow-hidden rounded-[2.25rem] block shadow-xl border border-foreground/10 ${project.gridClass}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 bg-neutral-950">
              <img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 transform-gpu"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
              <div className="flex items-end justify-between gap-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 transform-gpu">
                <div className="z-10 max-w-lg">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base font-medium text-white/80 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {project.subtitle}
                  </p>
                </div>
                
                {/* Arrow Action Icon */}
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 opacity-80 group-hover:opacity-100 group-hover:bg-white group-hover:text-black transition-all duration-300 rotate-45 group-hover:rotate-0 z-10 shadow-lg">
                  <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
