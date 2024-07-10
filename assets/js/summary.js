const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('id');
const detalhesPokemon = document.querySelectorAll(".bodySummary .section1 .section2")

detalhesPokemon.bodySummary