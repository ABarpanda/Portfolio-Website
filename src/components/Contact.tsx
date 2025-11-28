import { motion } from "motion/react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/ABarpanda",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/amritanshu-barpanda/",
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://x.com/IamABarpanda",
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl mb-6">Let's Work Together</h2>
          <p className="text-xl text-[#9a9a9a] mb-12 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>

          <motion.a
            href="mailto:abarpanda05@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-[#121212] rounded-sm hover:bg-[#C0A062] transition-colors duration-300 mb-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            abarpanda05@gmail.com
          </motion.a>

          <div className="flex justify-center gap-6 mt-8">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-white/15 rounded-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Icon className="w-6 h-6" />
                  <span className="sr-only">{link.label}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
