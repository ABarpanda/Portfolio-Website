import { useState } from "react";
import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import projectsData from './projects.json' assert { type: 'json' };

// console.log(projectsData);

// MinimalANN
// ml-flow

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
