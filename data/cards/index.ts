export interface Card {
  slug: string;
  title: string;
  content: string;
}

export const CARDS: Card[] = [
  {
    slug: "beef-hot-dog",
    title: "Beef hot dog",
    content: "Bring a pot of water to a boil. Reduce heat to low, place hot dog in water, and cook 5 minutes or until done. Remove hot dog and set aside. Carefully place a steamer basket into the pot and steam the hot dog bun 2 minutes or until warm.",
  },
  {
    slug: "hot-dog-bun",
    title: "Hot dog bun",
    content: "Place hot dog in the steamed bun.",
  },
  {
    slug: "toppings",
    title: "Dill pickle spear, pickle-relish, sport peppers",
    content: "Pile on the toppings in this order: yellow mustard, sweet green pickle relish, onion, tomato wedges, pickle spear, sport peppers, and celery salt. The tomatoes should be nestled between the hot dog and the top of the bun.",
  }
];

export const getCardBySlug = (slug?: string | string[]) =>
  CARDS.find((card) => card.slug === slug);
