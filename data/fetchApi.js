const url = 'https://swapi.dev/api/films';
const charactersUrl = 'https://swapi.dev/api/people';

export const fetchFilms = () => {
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

const syncFetchCharacters = async (url) => {
    const response = await fetch(url).then(response => response.json());
    return response;
}

export const fetchAllCharacters = async () => {
    let response = await syncFetchCharacters(charactersUrl);
    let characters = response.results;
    while (response.next) {
        response = await syncFetchCharacters(response.next);
        characters = characters.concat(response.results);
    }
    return characters;
}