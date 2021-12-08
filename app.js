window.addEventListener('load', () => {
    let spawn; //RnG a Pokemon from 1-809
    let pokemonName = document.querySelector('.name');
    let pokemonSprite = document.querySelector('.sprite');

    spawn = 151;
    const api = `https://pokeapi.co/api/v2/pokemon/${spawn}`;

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then (data => {
            console.log(data);
            pokemonName.textContent = data.name;
            pokemonSprite.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${spawn}.png`);
        })
    })
