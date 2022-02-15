import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import HeaderContainerApp from './HeaderContainerApp';

const CharactersFilm = ({ route, navigation }) => {
    const { characters } = route.params;

    const onPressCharacterDetails = (character) => {
        navigation.navigate('Character Details', { character: character });
    }

    return (
        <ImageBackground source={require('../assets/background.jpg')} resizeMode="repeat" style={{ width: '100%' }} >
            <View key={Math.random()} style={styles.containerPrincipal}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <HeaderContainerApp />
                    <View style={styles.containerCharacters}>
                        {characters.map((character, index) => <Text key={`${character.id}-${index}`} style={styles.containerCharacter} onPress={() => onPressCharacterDetails(character)}>{character.name}</Text>)}
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    containerPrincipal: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        height: '100%',
        marginBottom: 40,
    },
    containerCharacters: {
        flex: 1,
        alignItems: 'center',
    },
    contentContainer: {
        paddingVertical: 20
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