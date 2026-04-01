import { motion } from "framer-motion";
import { Globe, Ship, Truck, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Importação",
    description: "Trazemos as melhores frutas do mundo para o mercado brasileiro, com logística eficiente e controle de qualidade rigoroso.",
    color: "from-primary/10 to-primary/5",
    iconBg: "bg-primary",
  },
  {
    icon: Globe,
    title: "Exportação",
    description: "Levamos frutas tropicais brasileiras para mercados internacionais, com certificações e padrões globais de excelência.",
    color: "from-secondary/10 to-secondary/5",
    iconBg: "bg-secondary",
  },
  {
    icon: Truck,
    title: "Distribuição Nacional",
    description: "Rede de distribuição por todo o Brasil, garantindo frescor e qualidade do campo à mesa do consumidor.",
    color: "from-primary-glow/10 to-primary/5",
    iconBg: "bg-primary-glow",
  },
];

const Services = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 blob animate-blob-morph blur-2xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 blob-alt animate-blob-morph blur-2xl" style={{ animationDelay: "-3s" }} />

      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-body font-semibold text-secondary uppercase tracking-[0.2em]">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4 text-balance">
            Do campo ao mundo
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`card-premium p-8 lg:p-10 bg-gradient-to-br ${service.color} group cursor-default`}
            >
              <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300`}>
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
