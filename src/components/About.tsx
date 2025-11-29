import { motion } from "motion/react";
import { Code2, Palette, Zap, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const skills = [
    {
      icon: Code2,
      title: "Development",
      description: "Building scalable web applications with modern technologies and best practices.",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating beautiful, intuitive interfaces that users love to interact with.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing every detail for speed, accessibility, and user experience.",
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl mb-12">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Photo Placeholder */}
            <div className="relative w-64 h-64 mx-auto md:mx-0">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full overflow-hidden rounded-sm border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors duration-300"
              >
                <ImageWithFallback
                  src="/path/to/your/photo.jpg"
                  alt="Amritanshu Barpanda"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 to-transparent pointer-events-none" />
              </motion.div>
              {/* Gold accent corner */}
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-[#D4AF37] rounded-sm -z-10" />
            </div>

           <p className="text-lg text-[#EAEAEA] mb-6 leading-relaxed">
              I'm an aspiring AI engineer dedicated to creating practical, human-centered technology that integrates naturally 
              into daily life. I care about building systems that are not just intelligent, but also intuitive and accessible.
            </p>
            <p className="text-lg text-[#9a9a9a] mb-6 leading-relaxed">
              Beyond AI, I'm interested in embedded systems and IoT, working at the intersection of smart hardware and 
              intelligent software. I also build front-end applications with React and contribute to open-source projects 
              with solid Git proficiency. My goal is to combine thoughtful design with reliable engineering to make a 
              meaningful impact.
            </p>

            {/* Resume Download Button */}
            <motion.a
              href="src/assets/resume.pdf"
              download="Amritanshu_Barpanda_resume.pdf"
              className="inline-flex items-center gap-3 px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-sm hover:bg-[#D4AF37] hover:text-[#121212] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 border border-white/15 rounded-sm hover:border-[#D4AF37] transition-all duration-300"
              >
                <skill.icon className="w-8 h-8 text-[#D4AF37] mb-4" />
                <h3 className="text-xl mb-2">{skill.title}</h3>
                <p className="text-[#9a9a9a]">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}