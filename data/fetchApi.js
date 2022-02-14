const url = 'https://swapi.dev/api/films';
const charactersUrl = 'https://swapi.dev/api/people';

const fetchFromApi = () => {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data.results.map((film) => {
                return {
                    title: film.title,
                    id: film.episode_id,
                    characters: film.characters,
                };
            });
        });
}

export const fetchFromCharacters = () => {
    return fetch(charactersUrl)
        .then(response => response.json())
        .then(data => data.results);
}

export const fetchAllCharacters = async () => {
    let characters = [];
    await fetch(charactersUrl)
        .then(response => response.json())
        .then(async response => {
            characters = characters.concat(response.results);
            let currentResponse = response;
            while (currentResponse.next) {
                const newResponse = await fetch(currentResponse.next)
                    .then(response => response.json())
                    .then(response => {
                        currentResponse = response;
                        characters = characters.concat(currentResponse.results);
                    })
            }
        })
    return characters;
}

export default fetchFromApi;