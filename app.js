window.addEventListener('load', () => {
    setInterval(() => {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
      }
    
    let spawn = getRandomInt(1, 810); //RnG a Pokemon from 1-809
    let pokemonName = document.querySelector('.name');
    let pokemonSprite = document.querySelector('.sprite');

    
    const api = `https://pokeapi.co/api/v2/pokemon/${spawn}`;

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then (data => {
            pokemonName.textContent = data.name[0].toUpperCase() + data.name.substring(1);
            pokemonSprite.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${spawn}.png`);
        })
    }, 1000)
})

