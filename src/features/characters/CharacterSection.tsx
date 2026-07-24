import {
  characters,
  type Character,
} from "./characterData";

type CharacterCardProps = {
  character: Character;
};

function CharacterCard({ character }: CharacterCardProps) {
  const imageClassName = [
    "rounded-xl",
    character.cropImage ? "object-cover" : "",
    "h-40 w-40 md:h-52 md:w-52 shadow-md",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className="gap-4 p-6 bg-base-100 rounded-3xl shadow-xl border border-primary/10 flex flex-col">
      <figure className="flex items-center justify-center">
        <img
          src={character.imageSrc}
          alt={character.imageAlt}
          className={imageClassName}
        />
      </figure>
      <div className="text-center self-start flex-1">
        <h3 className="text-3xl font-serif text-secondary mb-2">
          {character.name}
        </h3>
        <p className="text-md opacity-80 leading-relaxed">
          {character.description}
        </p>
      </div>
      <div className="pt-4 mt-auto">
        <a
          href={character.profileUrl}
          aria-label={`Erfahre mehr über den Charakter ${character.name} auf D&D Beyond`}
          rel="noopener noreferrer"
          target="_blank"
          className="btn btn-warning btn-block btn-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning"
        >
          Erfahre mehr
        </a>
      </div>
    </article>
  );
}

export function CharacterSection() {
  return (
    <section
      id="heroes"
      aria-labelledby="heroes-heading"
      className="min-h-screen py-16 bg-base-200 flex justify-center items-center"
    >
      <div className="container mx-auto px-4 md:px-50">
        <h2
          id="heroes-heading"
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-secondary tracking-tighter"
        >
          Die Helden von Rinaboth
        </h2>
        <div
          className="divider w-55 mb-16 divider-primary mx-auto"
          aria-hidden="true"
        ></div>

        <div className="w-full flex flex-col lg:flex-row gap-10">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </section>
  );
}
