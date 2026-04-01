import { motion } from "framer-motion";
import { ArrowRight, Leaf, Globe, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-fruits.jpg";
import { useEffect, useState } from "react";

const stats = [
  { icon: Globe, value: 15, suffix: "+", label: "Países atendidos" },
  { icon: Leaf, value: 30, suffix: "+", label: "Variedades de frutas" },
  { icon: TrendingUp, value: 98, suffix: "%", label: "Satisfação dos clientes" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 30));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [target]);
  return <>{count}{suffix}</>;
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Frutas tropicais brasileiras frescas"
          className="w-full h-full object-cover scale-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
        {/* Decorative grain overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 animate-blob-morph blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-glow/10 animate-blob-morph blur-3xl" style={{ animationDelay: "-4s" }} />

      <div className="relative z-10 container-narrow section-padding !py-32 sm:!py-40 lg:!py-48">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 text-primary-foreground px-5 py-2 rounded-full text-sm font-body font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Importação & Exportação de Frutas Tropicais
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-8 tracking-tight">
              Conectando{" "}
              <span className="italic">produtores</span> ao mundo com{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-secondary">qualidade</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute bottom-1 left-0 right-0 h-3 bg-secondary/20 -z-0 origin-left"
                />
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-primary-foreground/80 font-body font-light max-w-2xl mb-10 leading-relaxed">
              A RoFruit Connect leva as melhores frutas brasileiras para o mercado global,
              com compromisso com a qualidade do campo à mesa.
            </p>

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
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="/catalogo"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-xl text-base font-body font-medium backdrop-blur-sm hover:bg-primary-foreground/10 transition-all"
              >
                Ver Catálogo
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-2xl"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.15 }}
              className="text-center sm:text-left"
            >
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                <stat.icon className="w-4 h-4 text-secondary hidden sm:block" />
                <span className="text-2xl sm:text-3xl font-display font-bold text-primary-foreground">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <span className="text-xs sm:text-sm text-primary-foreground/60 font-body">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
