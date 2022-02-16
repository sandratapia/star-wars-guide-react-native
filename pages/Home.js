import { useState, useEffect } from 'react';
import { fetchFilms, fetchAllCharacters } from '../data/fetchApi.js';
import FilmsList from '../components/FilmsList.js';
import HeaderContainerApp from '../components/HeaderContainerApp.js';
import Page from './Page.js';


const Home = ({ navigation }) => {

    const [films, setFilms] = useState([]);
    const [characterList, setCharacterList] = useState([]);

    useEffect(() => {
        fetchFilms().then(data => {
            setFilms(data);
        });
        fetchAllCharacters().then(characters => setCharacterList(characters));
    }, []);

    const onPressFilm = (filmId) => {
        const charactersToSend = characterList.filter(character => {
            return character.films.includes(`https://swapi.dev/api/films/${filmId}/`);
        });
        navigation.navigate("Characters Film", { characters: charactersToSend });
    }

    return (
        <Page header={<HeaderContainerApp />}>
            <FilmsList films={films} handleOnPress={onPressFilm} />
        </Page>
    );
}

export default Home