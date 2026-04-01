import fruitMango from "@/assets/fruit-mango.jpg";
import fruitOrange from "@/assets/fruit-orange.jpg";
import fruitPineapple from "@/assets/fruit-pineapple.jpg";
import fruitPapaya from "@/assets/fruit-papaya.jpg";
import fruitWatermelon from "@/assets/fruit-watermelon.jpg";
import fruitGrape from "@/assets/fruit-grape.jpg";
import fruitPassionfruit from "@/assets/fruit-passionfruit.jpg";
import fruitLime from "@/assets/fruit-lime.jpg";
import fruitBanana from "@/assets/fruit-banana.jpg";

export interface Fruit {
  id: string;
  name: string;
  type: string;
  origin: string;
  availability: string;
  image: string;
  description: string;
}

export const fruits: Fruit[] = [
  {
    id: "manga",
    name: "Manga",
    type: "Tropical",
    origin: "Bahia",
    availability: "Exportação",
    image: fruitMango,
    description: "Manga Tommy, Palmer e Espada — selecionadas com rigor para o mercado internacional.",
  },
  {
    id: "laranja",
    name: "Laranja",
    type: "Cítrica",
    origin: "São Paulo",
    availability: "Exportação",
    image: fruitOrange,
    description: "Laranjas Pêra e Valência com alto teor de suco e coloração vibrante.",
  },
  {
    id: "abacaxi",
    name: "Abacaxi",
    type: "Tropical",
    origin: "Tocantins",
    availability: "Exportação",
    image: fruitPineapple,
    description: "Abacaxi Pérola — doçura intensa e polpa suculenta para exportação premium.",
  },
  {
    id: "mamao",
    name: "Mamão",
    type: "Tropical",
    origin: "Bahia",
    availability: "Exportação",
    image: fruitPapaya,
    description: "Mamão Papaya e Formosa — cultivados com técnicas sustentáveis.",
  },
  {
    id: "melancia",
    name: "Melancia",
    type: "Tropical",
    origin: "Rio Grande do Norte",
    availability: "Importação",
    image: fruitWatermelon,
    description: "Melancias de polpa vermelha intensa, selecionadas por tamanho e doçura.",
  },
  {
    id: "uva",
    name: "Uva",
    type: "Temperada",
    origin: "Vale do São Francisco",
    availability: "Exportação",
    image: fruitGrape,
    description: "Uvas de mesa sem semente — Arra 15, Sweet Globe e Cotton Candy.",
  },
  {
    id: "maracuja",
    name: "Maracujá",
    type: "Tropical",
    origin: "Bahia",
    availability: "Exportação",
    image: fruitPassionfruit,
    description: "Maracujá azedo e doce — sabor intenso reconhecido mundialmente.",
  },
  {
    id: "limao",
    name: "Limão",
    type: "Cítrica",
    origin: "São Paulo",
    availability: "Importação",
    image: fruitLime,
    description: "Limão Tahiti — o cítrico brasileiro mais exportado do mundo.",
  },
  {
    id: "banana",
    name: "Banana",
    type: "Tropical",
    origin: "Bahia",
    availability: "Exportação",
    image: fruitBanana,
    description: "Banana Nanica e Prata — qualidade certificada para exportação.",
  },
];

export const fruitTypes = [...new Set(fruits.map((f) => f.type))];
export const fruitOrigins = [...new Set(fruits.map((f) => f.origin))];
export const fruitAvailabilities = [...new Set(fruits.map((f) => f.availability))];
