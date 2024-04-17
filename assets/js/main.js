
// function convertPokemonTypesToLi(pokemonTypes){
//     return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li> `)
// }

const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');


const maxRecords = 248;
const limit = 10;
let offset = 0;


/*
//<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg" alt="${pokemon.name}"></img>

//Posso pegar a imagem assim tbm:
// img src="${pokemon.sprites.other.dream_wolrd.front_default}"


 
// pokeApi.getPokemons().then((pokemons = []) => {
//         const newHtml = pokemons.map(convertPokemonToLi).join('')
//         pokemonList.innerHTML = newHtml
      
    
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
     //})
*/
function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>`
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        
                    </ol>

                    <img src="${pokemon.photo}"
                            alt="${pokemon.name}">
                    
                </div>
            </li>`).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    //debugger
    offset += limit

    const qtdRecordsWithNextPage = offset + limit

    if(qtdRecordsWithNextPage >= maxRecords){
        const newLimit = maxRecords - offset 
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)

    } else{
        loadPokemonItens(offset, limit)

    }

})