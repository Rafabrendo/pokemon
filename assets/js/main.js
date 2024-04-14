
// function convertPokemonTypesToLi(pokemonTypes){
//     return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li> `)
// }


function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                            
                        </ol>

                        <img src="${pokemon.photo}"
                             alt="${pokemon.name}">
                        
                    </div>
                
                </li>
    
    `
}

//<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg" alt="${pokemon.name}"></img>

//Posso pegar a imagem assim tbm:
// img src="${pokemon.sprites.other.dream_wolrd.front_default}"


const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML = newHtml
      
    
        // const newList = pokemons.map((pokemon)=> convertPokemonToLi(pokemon))
        // const newList = pokemons.map(convertPokemonToLi).join('')
        
        
        // const newHtml = newList.join('')
        // passo a string vazia para não aparecer a virgula

        //diminuindo a verbosidade 
        // pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')


        //código antigo:
        // const listItems = []
        // for (let i =0; i < pokemons.length; i++) {
        //     const pokemon = pokemons[i];
        //     listItems.push(convertPokemonToLi(pokemon))
        // } 
        //     console.log(listItems)
     })