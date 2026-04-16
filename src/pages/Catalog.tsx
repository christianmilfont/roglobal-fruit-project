import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X, MapPin, Leaf, ArrowRightLeft, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { fruits, fruitTypes, fruitOrigins, fruitAvailabilities, type Fruit } from "@/data/fruits";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
const Catalog = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [originFilter, setOriginFilter] = useState("");
  const [availFilter, setAvailFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState<Fruit | null>(null);

  const activeFilters = [typeFilter, originFilter, availFilter].filter(Boolean).length;

  const filtered = useMemo(() => {
    return fruits.filter((f) => {
      const matchSearch = f.name.toLowerCase().includes(search.toLowerCase());
      const matchType = !typeFilter || f.type === typeFilter;
      const matchOrigin = !originFilter || f.origin === originFilter;
      const matchAvail = !availFilter || f.availability === availFilter;
      return matchSearch && matchType && matchOrigin && matchAvail;
    });
  }, [search, typeFilter, originFilter, availFilter]);

  const clearFilters = () => {
    setSearch("");
    setTypeFilter("");
    setOriginFilter("");
    setAvailFilter("");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 sm:pt-24">
        <section className="section-padding relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/3 blob animate-blob-morph blur-3xl" />

          <div className="container-narrow relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-14"
            >
              <span className="text-sm font-body font-semibold text-secondary uppercase tracking-[0.2em]">
                Nosso Catálogo
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4">
                Catálogo de <span className="italic text-gradient">Frutas</span>
              </h1>
              <p className="text-muted-foreground font-body mt-5 max-w-xl mx-auto text-lg">
                Explore nossa seleção de frutas tropicais e cítricas, prontas para importação e exportação.
              </p>
              <div className="section-divider mt-6" />
            </motion.div>

            {/* Search + Filter bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-10 space-y-4"
            >
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Buscar fruta..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-border bg-card font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 px-5 py-3.5 rounded-xl border font-body text-sm font-medium transition-all ${
                    showFilters || activeFilters > 0
                      ? "border-primary bg-primary-light text-primary"
                      : "border-border bg-card text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filtros
                  {activeFilters > 0 && (
                    <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                      {activeFilters}
                    </span>
                  )}
                </button>
              </div>

              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col sm:flex-row gap-3 p-4 bg-card rounded-xl border border-border">
                      <select
                        value={typeFilter}
                        onChange={(e) => setTypeFilter(e.target.value)}
                        className="flex-1 px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      >
                        <option value="">Todos os tipos</option>
                        {fruitTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <select
                        value={originFilter}
                        onChange={(e) => setOriginFilter(e.target.value)}
                        className="flex-1 px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      >
                        <option value="">Todas as origens</option>
                        {fruitOrigins.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                      <select
                        value={availFilter}
                        onChange={(e) => setAvailFilter(e.target.value)}
                        className="flex-1 px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      >
                        <option value="">Disponibilidade</option>
                        {fruitAvailabilities.map((a) => <option key={a} value={a}>{a}</option>)}
                      </select>
                      {activeFilters > 0 && (
                        <button
                          onClick={clearFilters}
                          className="flex items-center gap-1 px-4 py-3 rounded-lg text-sm font-body text-destructive hover:bg-destructive/10 transition-colors"
                        >
                          <X className="w-3.5 h-3.5" />
                          Limpar
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Results count */}
            <div className="mb-6">
              <span className="text-sm font-body text-muted-foreground">
                {filtered.length} {filtered.length === 1 ? "fruta encontrada" : "frutas encontradas"}
              </span>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <AnimatePresence mode="popLayout">
                {filtered.map((fruit, i) => (
                  <motion.div
                    key={fruit.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: i * 0.03 }}
                    className="card-premium group cursor-pointer"
                    onClick={() => setSelectedFruit(fruit)}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-3 left-3 right-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-xs font-body font-medium text-white bg-foreground/60 backdrop-blur-sm px-4 py-1.5 rounded-full">
                          Clique para ver detalhes
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-xs font-body font-medium bg-primary-light text-accent-foreground px-3 py-1 rounded-full">
                          {fruit.type}
                        </span>
                        <span className="text-xs font-body font-medium bg-secondary-light text-secondary px-3 py-1 rounded-full">
                          {fruit.availability}
                        </span>
                      </div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-1.5">
                        {fruit.name}
                      </h3>
                      <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        {fruit.origin}
                      </p> 
                      <p className="text-sm text-muted-foreground font-body leading-relaxed line-clamp-3">
                        {fruit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-muted-foreground font-body text-lg">
                  Nenhuma fruta encontrada com os filtros selecionados.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-primary font-body font-medium hover:text-primary-glow transition-colors"
                >
                  Limpar filtros
                </button>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />

     {/* Detail Sheet */}
<Sheet
  open={!!selectedFruit}
  onOpenChange={(open) => !open && setSelectedFruit(null)}
>
  <SheetContent
    side="right"
    className="w-full sm:max-w-lg overflow-y-auto p-0 border-l border-border"
  >
    {selectedFruit && (
      <div className="flex flex-col">
        {/* Hero carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {selectedFruit.image.map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={img}
                    alt={`${selectedFruit.name}-${index}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        <div className="absolute top-[240px] left-6 right-6 z-10">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="text-xs font-body font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full">
              {selectedFruit.type}
            </span>
            <span className="text-xs font-body font-semibold bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
              {selectedFruit.availability}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            {selectedFruit.name}
          </h2>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 mt-6">
          <SheetHeader className="p-0 space-y-0">
            <SheetTitle className="sr-only">
              {selectedFruit.name}
            </SheetTitle>
            <SheetDescription className="sr-only">
              Detalhes sobre {selectedFruit.name}
            </SheetDescription>
          </SheetHeader>

          <p className="text-base font-body text-muted-foreground leading-relaxed">
            {selectedFruit.description}
          </p>

          {/* Info cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-primary-light/50 border border-primary/10">
              <Leaf className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <span className="text-xs font-body text-muted-foreground uppercase tracking-wider">
                  Tipo
                </span>
                <p className="text-sm font-body font-semibold text-foreground">
                  {selectedFruit.type}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary-light/50 border border-secondary/10">
              <MapPin className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
              <div>
                <span className="text-xs font-body text-muted-foreground uppercase tracking-wider">
                  Origem
                </span>
                <p className="text-sm font-body font-semibold text-foreground">
                  {selectedFruit.origin}
                </p>
              </div>
            </div>

            <div className="col-span-2 flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border">
              <ArrowRightLeft className="w-5 h-5 text-accent-foreground mt-0.5 shrink-0" />
              <div>
                <span className="text-xs font-body text-muted-foreground uppercase tracking-wider">
                  Disponibilidade
                </span>
                <p className="text-sm font-body font-semibold text-foreground">
                  {selectedFruit.availability}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/5500000000000?text=Olá! Tenho interesse na fruta: ${selectedFruit.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-primary-foreground font-body font-semibold text-sm hover:brightness-110 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Solicitar Cotação
          </a>
        </div>
      </div>
    )}
  </SheetContent>
</Sheet>
    </div>
  );
};

export default Catalog;
