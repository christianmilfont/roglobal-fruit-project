import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, MessageCircle, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 sm:pt-24">
        <section className="section-padding relative overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/3 blob animate-blob-morph blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-secondary/5 blob-alt animate-blob-morph blur-2xl" style={{ animationDelay: "-3s" }} />

          <div className="container-narrow relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <span className="text-sm font-body font-semibold text-secondary uppercase tracking-[0.2em]">
                Fale Conosco
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4">
                Entre em <span className="italic text-gradient">Contato</span>
              </h1>
              <p className="text-muted-foreground font-body mt-5 max-w-xl mx-auto text-lg">
                Quer saber mais sobre nossos serviços? Fale diretamente com a Rochelle ou envie uma mensagem.
              </p>
              <div className="section-divider mt-6" />
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
              {/* Form */}
              <motion.form
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onSubmit={handleSubmit}
                className="lg:col-span-3 card-premium p-8 lg:p-10 space-y-6"
              >
                <div>
                  <label className="text-sm font-body font-semibold text-foreground mb-2 block">Nome</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="text-sm font-body font-semibold text-foreground mb-2 block">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={255}
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-body font-semibold text-foreground mb-2 block">Mensagem</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    maxLength={1000}
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none transition-shadow"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-xl font-body font-semibold hover:bg-primary-glow hover:shadow-glow transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensagem
                </motion.button>
              </motion.form>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-2 space-y-6"
              >
                <a
                  href="https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre a RoFruit Connect."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground rounded-2xl shadow-glow hover:brightness-110 transition-all group"
                >
                  <MessageCircle className="w-8 h-8 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-display font-bold text-lg">Fale com a Rochelle</p>
                    <p className="text-sm opacity-80 font-body">Resposta rápida pelo WhatsApp</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>

                <div className="card-premium p-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-foreground text-sm">Localização</p>
                      <p className="text-sm text-muted-foreground font-body">Bahia, Brasil</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-foreground text-sm">Email</p>
                      <p className="text-sm text-muted-foreground font-body">contato@rofruit.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-foreground text-sm">Telefone</p>
                      <p className="text-sm text-muted-foreground font-body">+55 (00) 0000-0000</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
