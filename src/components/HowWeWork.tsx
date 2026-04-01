import { motion } from "framer-motion";
import { Search, ShieldCheck, Truck, Handshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Seleção de Produtores",
    description: "Visitamos fazendas e selecionamos parceiros que compartilham nossos padrões de qualidade e sustentabilidade.",
  },
  {
    icon: ShieldCheck,
    title: "Controle de Qualidade",
    description: "Inspeção rigorosa em todas as etapas — do cultivo à embalagem — garantindo frutas perfeitas para exportação.",
  },
  {
    icon: Truck,
    title: "Logística Integrada",
    description: "Cadeia logística refrigerada e rastreável, do campo ao porto, com agilidade e cuidado.",
  },
  {
    icon: Handshake,
    title: "Parcerias Duradouras",
    description: "Construímos relacionamentos de longo prazo com produtores e clientes, baseados em transparência e confiança.",
  },
];

const HowWeWork = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 gradient-warm-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />

      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-body font-semibold text-secondary uppercase tracking-[0.2em]">
            Nosso Processo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4">
            Como <span className="italic text-gradient">Trabalhamos</span>
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-px">
            <div className="w-full h-full bg-gradient-to-b from-primary/30 via-secondary/30 to-primary/30" />
          </div>

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-6 lg:gap-0 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Number badge on line */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-glow z-10">
                  <step.icon className="w-7 h-7" />
                </div>

                {/* Content card */}
                <div className={`ml-28 lg:ml-0 lg:w-[calc(50%-3rem)] ${i % 2 === 0 ? "lg:pr-0" : "lg:pl-0"}`}>
                  <div className="card-premium p-6 lg:p-8">
                    <div className="text-xs font-body font-semibold text-secondary uppercase tracking-widest mb-2">
                      Etapa {i + 1}
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground font-body leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
