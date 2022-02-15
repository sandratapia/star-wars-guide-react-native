import { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, ImageBackground } from 'react-native';
import fetchFromApi, { fetchAllCharacters } from '../data/fetchApi.js';
import FilmsList from './FilmsList.js';
import HeaderContainerApp from './HeaderContainerApp';

const Home = ({ navigation }) => {

    const [films, setFilms] = useState([]);
    const [characterList, setCharacterList] = useState([]);

    useEffect(() => {
        fetchFromApi().then(data => {
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

        <ImageBackground source={require('../assets/background.jpg')} resizeMode="repeat" style={{ width: '100%' }}>
            <View style={styles.containerPrincipal} >
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <HeaderContainerApp />
                    <FilmsList films={films} handleOnPress={onPressFilm} />
                </ScrollView>
            </View>
        </ImageBackground >
    );
}

const styles = StyleSheet.create({
    containerPrincipal: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        height: '100%',
    },
    contentContainer: {
        paddingVertical: 20
    }


});

export default Home