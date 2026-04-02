import { motion } from "framer-motion";
import { Eye, Award, Heart, Quote, Star } from "lucide-react";

const values = [
  { icon: Eye, title: "Transparência", description: "Processos claros e comunicação aberta em cada etapa do negócio." },
  { icon: Award, title: "Qualidade", description: "Padrões internacionais de excelência em cada fruta que selecionamos." },
  { icon: Heart, title: "Compromisso", description: "Dedicação genuína ao sucesso de produtores e clientes." },
];

const testimonials = [
  {
    text: "A RSFruit Connect transformou a forma como exportamos nossas mangas. Profissionalismo e cuidado em cada detalhe.",
    author: "Carlos Silva",
    role: "Produtor — Bahia",
    stars: 5,
  },
  {
    text: "Parceria sólida e transparente. As frutas chegam sempre no padrão que precisamos para nossos clientes europeus.",
    author: "Ana Martins",
    role: "Importadora — Portugal",
    stars: 5,
  },
  {
    text: "A Rochelle conhece o mercado como ninguém. Confiança total na curadoria e na logística.",
    author: "Pedro Mendes",
    role: "Distribuidor — São Paulo",
    stars: 5,
  },
];

const Trust = () => {
  return (
    <section className="section-padding gradient-section-bg relative overflow-hidden">
      
      {/* Decorative (leve e sem blur pesado) */}
      <div className="absolute -top-20 right-0 w-72 h-72 bg-secondary/5 rounded-full opacity-30" />

      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-body font-semibold text-secondary uppercase tracking-[0.2em]">
            Nossos Valores
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4">
            Confiança e <span className="italic text-gradient">Credibilidade</span>
          </h2>

          <p className="text-muted-foreground font-body mt-5 max-w-2xl mx-auto text-lg">
            Construímos relacionamentos duradouros com produtores e clientes, fundamentados em valores sólidos.
          </p>

          <div className="section-divider mt-6" />
        </motion.div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 lg:p-10 card-premium group"
            >
              
              {/* Ícone corrigido */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                <v.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {v.title}
              </h3>

              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
            O que dizem nossos parceiros
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-premium p-7 lg:p-8 relative group"
            >
              
              {/* Quote visível */}
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>

              <p className="text-foreground font-body text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                
                {/* Avatar corrigido */}
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold text-sm">
                  {t.author[0]}
                </div>

                <div>
                  <p className="font-body font-semibold text-foreground text-sm">
                    {t.author}
                  </p>
                  <p className="text-xs text-muted-foreground font-body">
                    {t.role}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;