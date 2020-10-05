let dataChar = [];

const getCharacters = async _ => {
    await fetch('https://rickandmortyapi.com/api/character/')
    .then(response => {
        return response.json();
    })
    .then(result => {
        dataChar = result.results;
        showCharacters();
    });
};

getCharacters();



const showCharacters = _ => {        
    const rickmorty = document.createElement('div');
    rickmorty.classList.add('char');

    const rickmortyRoster = document.createElement('ul');
    

    dataChar.forEach(product => {
        const itemChar = document.createElement('li');

        itemChar.innerHTML = `
        <div class="char_image"><img src="${product.image}" alt="${product.name}" /></div>
        <div class="char_name">${product.name}</div>
        <div class="char_gender">Gender: ${product.gender}</div> 
        <div class="char_species">Species: ${product.species}</div>
        <div class="char_location">location: ${product.location.name}</div>
        `;

        rickmortyRoster.appendChild(itemChar);
    });

    rickmorty.appendChild(rickmortyRoster);

    document.body.appendChild(rickmorty);
};