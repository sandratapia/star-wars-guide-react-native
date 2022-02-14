import FilmCard from './FilmCard.js'
import { View, StyleSheet } from 'react-native'

const FilmsList = ({ films, handleOnPress }) => {
    return (
        <View style={styles.containerFilms}>
            {films.map(film => {
                return (
                    <FilmCard
                        key={film.id}
                        id={film.id}
                        title={film.title}
                        characters={film.characters}
                        image={film.image}
                        handleOnPress={handleOnPress}
                    />
                )
            })}
        </View>

    )
}

const styles = StyleSheet.create({
    containerFilms: {
        flex: 1,
        alignItems: 'center',
    }
});


export default FilmsList