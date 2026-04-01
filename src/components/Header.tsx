import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Início", path: "/" },
  { label: "Catálogo", path: "/catalogo" },
  { label: "Sobre", path: "/sobre" },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong border-b border-border/50 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow section-padding !py-0 flex items-center justify-between h-16 sm:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
            <span className="text-primary-foreground font-display font-bold text-sm">RF</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-display font-bold text-foreground leading-none">
              Ro<span className="text-gradient-warm">Fruit</span>
            </span>
            <span className="text-[10px] font-body text-muted-foreground tracking-widest uppercase">Connect</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-sm font-body font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                location.pathname === item.path
                  ? "text-primary bg-primary-light"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre a RoFruit Connect."
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 bg-primary text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-body font-semibold hover:bg-primary-glow hover:shadow-glow transition-all duration-300"
          >
            Fale com a Rochelle
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 rounded-xl text-foreground hover:bg-muted/50 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-b border-border/50 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-5 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-body font-medium py-3 px-4 rounded-xl transition-all ${
                    location.pathname === item.path
                      ? "text-primary bg-primary-light"
                      : "text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre a RoFruit Connect."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-5 py-3.5 rounded-xl text-sm font-body font-semibold text-center mt-3"
              >
                Fale com a Rochelle
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
