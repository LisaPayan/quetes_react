interface PokemonProps {
  pokemon :{
    imgSrc?: string;
    name: string;
  }
}

function PokemonCard({ pokemon }: PokemonProps) {
  return (
  <figure>
    {pokemon.imgSrc != null   ? (
    <img src={pokemon.imgSrc} alt={pokemon.name}></img>
    ) : (
      <p>???</p>
    )}
    <figcaption>{pokemon.name}</figcaption>
  </figure>
  );
}

export default PokemonCard;