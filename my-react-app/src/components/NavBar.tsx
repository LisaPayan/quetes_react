interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
  pokemonName: string;
}

function NavBar({ setPokemonName, pokemonList, pokemonName }: NavBarProps) {

    if (pokemonName === "pikachu") alert("pike pikachu !!!")
    
  return (
     <nav>
        {pokemonList.map((onePokemonFromTheList) => (
          <button
            key={onePokemonFromTheList.name}
            type="button"
            onClick={() => setPokemonName(onePokemonFromTheList.name)}
          >
            {onePokemonFromTheList.name}
          </button>
        ))}
      </nav>
  )

}

export default NavBar;