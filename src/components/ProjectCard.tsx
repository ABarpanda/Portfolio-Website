import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  onClick: () => void;
}

export function ProjectCard({ title, description, image, tags, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden border border-white/15 rounded-sm hover:border-[#D4AF37] transition-all duration-300 h-full">
        <div className="aspect-video overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-6">
          <h3 className="text-2xl mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[#9a9a9a] mb-4">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm border border-white/15 rounded-sm text-[#EAEAEA]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
