import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { fruits } from "@/data/fruits";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const FeaturedFruits = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="section-padding gradient-section-bg relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />

      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-sm font-body font-semibold text-secondary uppercase tracking-[0.2em]">
              Catálogo
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4">
              Frutas em{" "}
              <span className="italic text-gradient">Destaque</span>
            </h2>
            <div className="section-divider !mx-0 mt-6" />
          </div>
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 text-sm font-body font-semibold text-primary hover:text-primary-glow transition-colors group"
          >
            Ver catálogo completo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplayPlugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4 lg:-ml-6">
            {fruits.map((fruit) => (
              <CarouselItem
                key={fruit.id}
                className="pl-4 lg:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="card-premium group h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={fruit.image[0]}
                      alt={fruit.name}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <span className="inline-block bg-secondary text-secondary-foreground text-xs font-body font-semibold px-3 py-1.5 rounded-lg">
                        {fruit.availability}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-body font-medium bg-primary-light text-accent-foreground px-3 py-1 rounded-full">
                        {fruit.type}
                      </span>
                      <span className="text-xs font-body text-muted-foreground">
                        {fruit.origin}
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-bold text-foreground">
                      {fruit.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2 font-body leading-relaxed">
                      {fruit.description}
                    </p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-5 lg:-left-14 border-border bg-background/80 backdrop-blur-sm hover:bg-card shadow-card" />
            <CarouselNext className="-right-5 lg:-right-14 border-border bg-background/80 backdrop-blur-sm hover:bg-card shadow-card" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedFruits;
