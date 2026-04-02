import { motion } from "framer-motion";
import { Target, Eye, Heart, Leaf, Users, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import rochellePhoto from "@/assets/rochelle-photo.jpeg";

const mvv = [
  {
    icon: Target,
    title: "Missão",
    text: "Conectar produtores brasileiros ao mercado global, promovendo frutas de excelência com ética, transparência e cuidado em cada etapa.",
    color: "from-primary to-primary-glow",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser referência nacional e internacional em exportação de frutas tropicais, reconhecida pela qualidade e pelo impacto positivo nas comunidades produtoras.",
    color: "from-secondary to-secondary",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Confiança, qualidade, sustentabilidade, respeito ao produtor e compromisso com o cliente.",
    color: "from-primary-glow to-primary",
  },
];

const highlights = [
  { icon: Leaf, label: "Sustentabilidade" },
  { icon: Users, label: "Comunidade" },
  { icon: Globe, label: "Alcance Global" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 sm:pt-24">
        {/* Hero */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 gradient-warm-bg" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 blob animate-blob-morph blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/5 blob-alt animate-blob-morph blur-2xl" style={{ animationDelay: "-4s" }} />

          <div className="container-narrow max-w-4xl relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <span className="text-sm font-body font-semibold text-secondary uppercase tracking-[0.2em]">
                Nossa História
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4 mb-4">
                Sobre a <span className="italic text-gradient-warm">Rochelle</span>
              </h1>
              <div className="section-divider mt-4 mb-12" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="card-premium p-8 lg:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex-shrink-0 mx-auto md:mx-0"
                  >
                    <div className="w-48 h-48 lg:w-100 lg:h-56 rounded-2xl overflow-hidden shadow-elevated ring-4 ring-primary/10">
                      <img
                        src={rochellePhoto}
                        alt="Rochelle - Fundadora da RoFruit Connect"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <p className="text-center mt-3 font-display font-semibold text-foreground text-sm">Rochelle</p>
                    <p className="text-center font-body text-muted-foreground text-xs">Fundadora & CEO</p>
                  </motion.div>
                  <div className="flex-1">
                <p className="text-lg font-body text-muted-foreground leading-relaxed mb-6">
                  Nascida no interior Cearense, Rochelle cresceu cercada pelo aroma das frutas tropicais e pelo
                  ritmo do campo. Desde cedo, aprendeu com a família o valor da terra e o potencial que cada
                  fruta carrega — não apenas como alimento, mas como conexão entre pessoas e culturas.
                </p>
                <p className="text-lg font-body text-muted-foreground leading-relaxed mb-6">
                  Com formação em comércio exterior e anos de experiência no agronegócio, Rochelle fundou a
                  <strong className="text-foreground font-semibold"> RSFruit Connect</strong> com um propósito claro: criar pontes entre
                  pequenos e médios produtores brasileiros e compradores internacionais, garantindo que a
                  qualidade das frutas brasileiras chegue ao mundo com o respeito que merece.
                </p>
                <p className="text-lg font-body text-muted-foreground leading-relaxed">
                  Hoje, a RoFruit Connect opera em diversos mercados, exportando mangas, mamões, uvas, abacaxis
                  e muitas outras frutas. Mas o coração do negócio permanece o mesmo: a conexão humana, o
                  olhar atento à qualidade e o compromisso com quem planta e quem consome.
                </p>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap justify-center gap-4">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="inline-flex items-center gap-2 bg-primary-light text-accent-foreground px-5 py-2.5 rounded-full font-body font-medium text-sm"
                  >
                    <h.icon className="w-4 h-4" />
                    {h.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* MVV */}
        <section className="section-padding gradient-section-bg">
          <div className="container-narrow">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {mvv.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="card-premium text-center p-8 lg:p-10 group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300`}>
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
