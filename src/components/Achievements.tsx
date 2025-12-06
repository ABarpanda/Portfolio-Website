import { motion } from "motion/react";
import { Code2, Palette, Zap, Download } from "lucide-react";

export function Achievements() {
  const achievements = [
    // Participated successfully in Hacktoberfest 23 24
    // Organised HackNITR 7.0
    // RSP Iot project
    // GRID INDIA 
    // Facial recognition in IIITA
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
    <section id="achievements" className="min-h-screen flex items-center py-20 px-6">
      
    </section>
  );
}