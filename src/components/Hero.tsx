import { motion } from "framer-motion";
import { ArrowRight, Globe, Leaf, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fruits.jpg";

const stats = [
  { icon: Globe, value: 15, suffix: "+", label: "Países atendidos" },
  { icon: Leaf, value: 30, suffix: "+", label: "Variedades de frutas" },
  { icon: TrendingUp, value: 98, suffix: "%", label: "Satisfação dos clientes" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Frutas tropicais brasileiras frescas"
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Overlay (mais forte, mas leve) */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-emerald-900/60 to-emerald-800/50" />
      </div>

      {/* Blobs decorativos (leves) */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 opacity-20 rounded-full" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/10 rounded-full opacity-20" />

      {/* Content */}
      <div className="relative z-10 container-narrow section-padding !py-32 sm:!py-40 lg:!py-48">
        <div className="max-w-3xl">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-5 py-2 rounded-full text-sm font-body font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Importação & Exportação de Frutas Tropicais
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Conectando <span className="italic">produtores</span> ao mundo com{" "}
              <span className="text-secondary">qualidade</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-white/90 font-body font-light max-w-2xl mb-10 leading-relaxed">
              A RSFruit Connect leva as melhores frutas brasileiras para o mercado global,
              com compromisso com a qualidade do campo à mesa.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre a RoFruit Connect."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-xl text-base font-body font-semibold shadow-elevated hover:brightness-110 transition-all"
              >
                Fale com a Rochelle
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/catalogo"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl text-base font-body font-medium hover:bg-white/10 transition-all"
                >
                  Ver Catálogo
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-2xl"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                
                {/* Ícone corrigido */}
                <stat.icon className="w-4 h-4 text-white/90 drop-shadow-sm hidden sm:block" />

                <span className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {stat.value}{stat.suffix}
                </span>
              </div>

              <span className="text-xs sm:text-sm text-white/80 font-body">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;