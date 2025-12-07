import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "projects", "contact"];
      const offset = 150;
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= offset && rect.bottom >= offset;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#121212]/95 backdrop-blur-sm border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* LOGO - Hidden on mobile */}
            <button
              onClick={() => scrollToSection("home")}
              className="hidden md:block text-xl font-semibold tracking-tight hover:text-[#D4AF37] transition-colors duration-300 text-white"
            >
              Amritanshu Barpanda
            </button>
            
            {/* Empty space on mobile to push burger to right */}
            <div className="md:hidden flex-1"></div>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex gap-8">
              {["home", "about", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative capitalize transition-colors duration-300 hover:text-[#D4AF37] ${
                    activeSection === section
                      ? "text-[#D4AF37]"
                      : "text-[#EAEAEA]"
                  }`}
                >
                  {section}

                  {activeSection === section && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D4AF37]"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-white z-50 ml-auto"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-[#121212] border-t border-white/10"
            >
              <motion.ul
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
                className="flex flex-col px-6 py-4"
              >
                {["home", "about", "projects", "contact"].map((section, idx) => (
                  <motion.li
                    key={section}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className="border-b border-white/5 last:border-b-0"
                  >
                    <button
                      onClick={() => scrollToSection(section)}
                      className={`capitalize text-lg w-full text-left py-4 transition-colors duration-200 ${
                        activeSection === section
                          ? "text-[#D4AF37]"
                          : "text-[#EAEAEA] hover:text-[#D4AF37]"
                      }`}
                    >
                      {section}
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* SPACER */}
      <div className="h-[80px]" />
    </>
  );
}