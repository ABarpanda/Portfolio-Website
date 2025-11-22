import { useState } from "react";
import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with seamless checkout experience",
    image: "https://images.unsplash.com/photo-1676792519027-7c42006d7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2Rlcm58ZW58MXx8fHwxNzYzMTMxODcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "TypeScript", "Stripe"],
    fullDescription:
      "A full-featured e-commerce platform built with modern web technologies, featuring a smooth user experience, secure payment processing, and responsive design that works perfectly on all devices.",
    features: [
      "Integrated payment processing with Stripe",
      "Real-time inventory management",
      "Advanced product filtering and search",
      "Mobile-optimized shopping cart",
      "Customer reviews and ratings system",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Mobile App Dashboard",
    description: "Clean and intuitive dashboard for mobile application analytics",
    image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzMTQ5NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Charts", "API"],
    fullDescription:
      "An analytics dashboard that provides real-time insights into mobile app performance. Features interactive charts, customizable widgets, and comprehensive reporting tools.",
    features: [
      "Real-time data visualization",
      "Customizable dashboard widgets",
      "Export reports in multiple formats",
      "User behavior tracking",
      "Performance metrics and KPIs",
    ],
    liveUrl: "https://example.com",
  },
  {
    title: "Developer Portfolio",
    description: "Minimalist portfolio showcasing development work and skills",
    image: "https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzMjA4NzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Next.js", "Tailwind", "Motion"],
    fullDescription:
      "A personal portfolio website designed to showcase development projects and skills. Features smooth animations, dark theme, and responsive design.",
    features: [
      "Smooth scroll animations",
      "Project showcase with detailed views",
      "Responsive design for all devices",
      "Contact form integration",
      "Fast loading times and SEO optimization",
    ],
    githubUrl: "https://github.com",
  },
  {
    title: "Creative Agency Site",
    description: "Bold and vibrant website for a digital creative agency",
    image: "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjMxODM1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "GSAP", "WebGL"],
    fullDescription:
      "An interactive website for a creative agency featuring stunning animations, 3D elements, and an immersive user experience that showcases their creative capabilities.",
    features: [
      "Interactive 3D graphics and animations",
      "Parallax scrolling effects",
      "Case study showcases",
      "Team member profiles",
      "Client testimonials carousel",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="projects" className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl mb-4">Projects</h2>
            <p className="text-xl text-[#9a9a9a] mb-16">
              A selection of my recent work and side projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </>
  );
}
