import bois_jolan from "../images/bois-jolan.jpeg"
import corail from "../images/corail.jpeg"
import soufriere from "../images/soufriere.jpg"




export const pageLinks = [
  { id: 1, href: "#home", text: "Acceuil" },
  { id: 2, href: "#services", text: "Services" },
  { id: 3, href: "#tours", text: "Excursion" },
  { id: 4, href: "#about", text: "à propos" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const service = [
  {
    id: 1,
    title: "saving money",
    icon: "fas fa-wallet fa-fw",
    desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "endless hxg",
    icon: "fas fa-tree fa-fw",
    desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "amazing comfort",
    icon: "fas fa-socks fa-fw",
    desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export const excursionData = [
  {
    id: 2,
    img: soufriere,
    img_desc: "Le volcan de la soufière",
    date: "aout 26th, 2023",
    h4: "Ascension à 1 467 mètres d'altitude",
    h4_desc:
      "Préparez-vous à une expérience unique en explorant la majestueuse Soufrière, le volcan emblématique de la Guadeloupe. Randonnée jusqu'au sommet, découvrez un cratère actif, et contemplez des panoramas à couper le souffle",
    location: "La Soufière",
    date: "aout 26th, 2023",
  },
  {
    id: 1,
    img: bois_jolan,
    img_desc: "plage Bois Jolan à saint-anne ",
    date: "aout 26th, 2023",
    h4: "Plage de Bois Jolan : L'Éden Caché de la Guadeloupe",
    h4_desc:
      "Rejoignez-nous sur la plage de Bois Jolan, où l'art de la détente prend tout son sens. Dégustez des cocktails exotiques préparés avec soin tout en vous prélassant sur le sable chaud. Notre pique-nique gastronomique vous attend avec des délices locaux et une vue imprenable sur l'horizon",
    location: "saint-anne",
    date: "aout 26th, 2023",
  },
  
  {
    id: 3,
    img: corail,
    img_desc:
      "guadeloupe barrière  de corail  Grand Cul-de-sac marin Ilet Caret",
    date: "aout 26th, 2023",
    h4: "Le trésor caché de L'Îlet Caret",
    h4_desc:
      "Plongez dans les eaux turquoises du Grand Cul-de-sac Marin et découvrez l'Îlet Caret, un petit paradis de sable blanc au cœur de la Guadeloupe. découvrez l'Îlet Caret, un petit paradis de sable blanc au cœur de la Guadeloupe",
    location: " Ilet Caret",
    date: "aout 26th, 2023",
  },
];
