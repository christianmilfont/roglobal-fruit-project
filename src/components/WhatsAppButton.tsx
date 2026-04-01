import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
  initial={{ scale: 0, opacity: 0 }}
  animate={{ 
    scale: [1, 1.2, 1], // efeito de pulo
    opacity: 1 
  }}
  transition={{ 
    delay: 3.5,
    scale: {
      duration: 0.6,
      repeat: Infinity,
      repeatDelay: 1 // aqui controla o tempo entre os pulos (~1s total)
    },
    type: "spring",
    stiffness: 600
  }}
  href="https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre a RoFruit Connect."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground w-14 h-14 rounded-2xl flex items-center justify-center shadow-glow hover:bg-primary-glow hover:scale-110 transition-all duration-300"
>
  <MessageCircle className="w-6 h-6" />
</motion.a>
  );
};

export default WhatsAppButton;
