import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Top CTA band */}
      <div className="bg-gradient-to-r from-primary to-primary-glow section-padding !py-16">
        <div className="container-narrow text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-4">
            Pronto para conectar-se ao mercado global?
          </h3>
          <p className="text-primary-foreground/70 font-body mb-8 max-w-xl mx-auto">
            Fale com a Rochelle e descubra como a RSFruit Connect pode impulsionar seu negócio.
          </p>
          <a
            href="https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre a RoFruit Connect."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-body font-semibold hover:brightness-110 transition-all shadow-elevated"
          >
            Fale com a Rochelle
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Footer content */}
      <div className="bg-foreground text-background/80 section-padding !py-14">
        <div className="container-narrow">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="text-secondary-foreground font-display font-bold text-xs">RS</span>
                </div>
                <span className="text-xl font-display font-bold text-background">
                  RSFruit
                </span>
              </div>
              <p className="text-sm font-body text-background/50 leading-relaxed">
                Conectando produtores brasileiros ao mercado global com qualidade, confiança e transparência.
              </p>
            </div>

            <div>
              <h4 className="font-display font-bold text-background mb-5 text-sm uppercase tracking-widest">Navegação</h4>
              <nav className="flex flex-col gap-3">
                <Link to="/" className="text-sm font-body text-background/50 hover:text-background transition-colors">Início</Link>
                <Link to="/catalogo" className="text-sm font-body text-background/50 hover:text-background transition-colors">Catálogo</Link>
                <Link to="/sobre" className="text-sm font-body text-background/50 hover:text-background transition-colors">Sobre</Link>
                <Link to="/contato" className="text-sm font-body text-background/50 hover:text-background transition-colors">Contato</Link>
              </nav>
            </div>

            <div>
              <h4 className="font-display font-bold text-background mb-5 text-sm uppercase tracking-widest">Serviços</h4>
              <ul className="flex flex-col gap-3 text-sm font-body text-background/50">
                <li>Importação</li>
                <li>Exportação</li>
                <li>Distribuição Nacional</li>
                <li>Consultoria</li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-background mb-5 text-sm uppercase tracking-widest">Contato</h4>
              <ul className="flex flex-col gap-4 text-sm font-body text-background/50">
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-secondary flex-shrink-0" /> Bahia, Brasil</li>
                <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-secondary flex-shrink-0" /> contato@rofruit.com.br</li>
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-secondary flex-shrink-0" /> +55 (00) 0000-0000</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-background/30">
            <span>© {new Date().getFullYear()} RSFruit Connect. Todos os direitos reservados.</span>
            <span>Feito com 🍊 no Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
