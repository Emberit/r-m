let dataChar = [];

const getCharacters = async function(data) {
    await fetch('https://rickandmortyapi.com/api/character?name=' + data)
    .then(response => {
        return response.json();
    })
    .then(result => {
        dataChar = result.results;
        console.log(dataChar);
        showCharacters();
    });


};

const showCharacters = function(data) {  
    let ulRemove = document.querySelector('.char_list');
    if (ulRemove) {
        ulRemove.remove(); 
    }
    
    const rickmorty = document.createElement('div');
    rickmorty.classList.add('char');

    const rickmortyRoster = document.createElement('ul');
    rickmortyRoster.classList.add('char_list')
    

    dataChar.forEach(data => {
        const itemChar = document.createElement('li');

        itemChar.innerHTML = `
        <div class="char_image"><img src="${data.image}" alt="${data.name}" /></div>
        <div class="char_name">${data.name}</div>
        <div class="char_gender">Gender: ${data.gender}</div> 
        <div class="char_species">Species: ${data.species}</div>
        <div class="char_location">location: ${data.location.name}</div>
        `;

        rickmortyRoster.appendChild(itemChar);
    });

    rickmorty.appendChild(rickmortyRoster);

    document.body.appendChild(rickmorty);

    
};


const searchButton = document.querySelector('.rm_search [name="search"]'),
      queryInput = document.querySelector('.rm_search [name="character"]');

searchButton.addEventListener('click', function() {
    let queryValue = queryInput.value || '';
    console.log(queryValue);
    getCharacters(queryValue);
});






