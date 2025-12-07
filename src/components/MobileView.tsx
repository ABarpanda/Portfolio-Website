import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export function MobileView() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      const navbarHeight = 70;

      if (element) {
        const target =
          element.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({
          top: target,
          behavior: "smooth",
        });
      }
    }, 250);
  };

  return (
    <>
      {/* MOBILE NAV */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/95 backdrop-blur-md border-b border-white/10"
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo or name */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg font-semibold text-white hover:text-[#D4AF37] transition"
          >
            
          </button>

          {/* Burger Button */}
          <button
            className="text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* DROPDOWN MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-[#121212] border-t border-white/10"
            >
              <motion.ul
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col px-6 py-3"
              >
                {["home", "about", "projects", "contact"].map((section, i) => (
                  <motion.li
                    key={section}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 0.5 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                    className="border-b border-white/10 last:border-0"
                  >
                    <button
                      onClick={() => scrollToSection(section)}
                      className="capitalize text-lg w-full text-left py-4 text-[#EAEAEA] hover:text-[#D4AF37] transition"
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

      {/* Spacer so content doesn’t hide behind navbar */}
      <div className="h-[72px]" />
    </>
  );
}
