import manga1 from "@/assets/manga.jpeg";
import melancia from "@/assets/melancia.jpeg";
import maracuja from "@/assets/maracuja.jpeg";
import manga2 from "@/assets/manga2.jpeg"
import melao from "@/assets/melao.jpeg"
import coco from "@/assets/coco.png"
export interface Fruit {
  id: string;
  name: string;
  type: string;
  origin: string;
  availability: string;
  image: string[];
  description: string;
}

export const fruits: Fruit[] = [
  {
    id: "manga",
    name: "Manga",
    type: "Tropical",
    origin: "Bahia",
    availability: "Exportação",
    image: [manga1, manga2],
    description: "Manga Tommy, Manga Palmer, Manga Keit, Manga Kenth e Manga Rosa — selecionadas com rigor para o mercado internacional.",
  },
  {
    id: "coco",
    name: "Coco",
    type: "Tropical",
    origin: "Bahia",
    availability: "Importação",
    image: [coco],
    description: "Coco — Coletados da melhor maneira possível, mantendo o frescor.",
  },
  {
    id: "melao",
    name: "Melão",
    type: "Tropical",
    origin: "Bahia",
    availability: "Importação e Exportação",
    image: [melao],
    description: "Mleão — cultivados com técnicas sustentáveis.",
  },
  {
    id: "melancia",
    name: "Melancia",
    type: "Tropical",
    origin: "Rio Grande do Norte",
    availability: "Importação",
    image: [melancia],
    description: "Melancias de polpa vermelha intensa, selecionadas por tamanho e doçura.",
  },
    {
    id: "maracuja",
    name: "Maracujá",
    type: "Tropical",
    origin: "Bahia",
    availability: "Exportação",
    image: [maracuja],
    description: "Maracujá azedo e doce — sabor intenso reconhecido mundialmente.",
  },

];

export const fruitTypes = [...new Set(fruits.map((f) => f.type))];
export const fruitOrigins = [...new Set(fruits.map((f) => f.origin))];
export const fruitAvailabilities = [...new Set(fruits.map((f) => f.availability))];
