export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="max-w-7xl mx-auto text-center text-[#9a9a9a]">
        <p>© {currentYear} All rights reserved. Crafted with passion.</p>
      </div>
    </footer>
  );
}
