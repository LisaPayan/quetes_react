import styles from './PokemonCard.module.css'

interface PokemonProps {
  pokemon :{
    imgSrc?: string;
    name: string;
    color?: string;
  }
}

function PokemonCard({ pokemon }: PokemonProps) {
  return (
  <figure className={styles.card} style={{backgroundColor: pokemon.color ? pokemon.color : "black"}}>
    {pokemon.imgSrc != null   ? (
    <img src={pokemon.imgSrc} alt={pokemon.name} className={styles.cardImg}></img>
    ) : (
      <p className={styles.title}>???</p>
    )}
    <figcaption>{pokemon.name}</figcaption>
  </figure>
  );
}

export default PokemonCard;
