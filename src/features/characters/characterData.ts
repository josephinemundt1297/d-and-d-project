export type Character = {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  profileUrl: string;
  cropImage: boolean;
};

export const characters: Character[] = [
  {
    id: "avra",
    name: "Avra",
    description:
      "Ich bin Avra, eine Hüterin des Dark Willow Woods und Bardin der schwebenden Pfade...",
    imageSrc: "./assets/avra.webp",
    imageAlt: "Portrait von der Satir-Badin Avra",
    profileUrl: "https://www.dndbeyond.com/characters/46519789",
    cropImage: false,
  },
  {
    id: "lahar",
    name: "Lahar",
    description:
      "Ich bin Lahar, ein Dieb aus den Schatten der Stadt, der sich den flammenden Hügeln anschließt...",
    imageSrc: "./assets/lahar.webp",
    imageAlt: "Portrait von dem Dieb Lahar mit feuerrotem Haar",
    profileUrl: "https://www.dndbeyond.com/characters/59411193/s5ESAj",
    cropImage: true,
  },
  {
    id: "acnologika",
    name: "Acnologika",
    description:
      "Ich bin Acnologika, ein Drachengeborener, der sich den Toren anschließt, um Rinaboth zu retten...",
    imageSrc: "./assets/acnologika.webp",
    imageAlt:
      "Portrait von Acnologika einem Drachengeborenen mit weißen Schuppen",
    profileUrl: "https://www.dndbeyond.com/characters/60583566/yJmuaL",
    cropImage: true,
  },
];
