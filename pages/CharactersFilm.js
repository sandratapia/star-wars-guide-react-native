import { View, Text, StyleSheet } from 'react-native'
import HeaderContainerApp from '../components/HeaderContainerApp';
import Page from './Page.js';

const CharactersFilm = ({ route, navigation }) => {
    const { characters } = route.params;

    const onPressCharacterDetails = (character) => {
        navigation.navigate('Character Details', { character: character });
    }

    return (
        <Page header={<HeaderContainerApp />}>
            <View style={styles.containerCharacters}>
                {characters.map((character, index) => <Text key={`${character.id}-${index}`} style={styles.containerCharacter} onPress={() => onPressCharacterDetails(character)}>{character.name}</Text>)}
            </View>
        </Page>
    )
}

const styles = StyleSheet.create({
    containerCharacters: {
        flex: 1,
        alignItems: 'center',
    },
    containerCharacter: {
        backgroundColor: 'black',
        color: '#ffe81f',
        fontSize: 20,
        width: 250,
        textAlign: 'center',
        marginTop: 30,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 15,
    },
});

export default CharactersFilm;