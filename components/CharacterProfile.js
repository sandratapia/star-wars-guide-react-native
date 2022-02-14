import { View, Text, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import HeaderContainerApp from './HeaderContainerApp';

const CharacterProfile = ({ route }) => {
    const { character } = route.params;
    return (
        <ImageBackground source={require('../assets/background.jpg')} resizeMode="repeat" style={{ width: '100%' }} >
            <View key={Math.random()} style={styles.containerPrincipal}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <HeaderContainerApp />
                    <View style={styles.containerDetail}>
                        <Text style={styles.textDetail}>Name: {character.name}</Text>
                        <Text style={styles.textDetail}>Films: {character.films.length}</Text>
                        <Text style={styles.textDetail}>Gender: {character.gender}</Text>
                        <Text style={styles.textDetail}>Height: {character.height}</Text>
                        <Text style={styles.textDetail}>Mass: {character.mass}</Text>
                        <Text style={styles.textDetail}>Skin Color: {character.skin_color}</Text>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    containerPrincipal: {
        width: 350,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        height: '100%',
    },
    subtitle: {
        color: '#ffe81f',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    },
    contentContainer: {
        paddingVertical: 20
    },
    containerDetail: {
        color: '#ffe81f',
        borderColor: '#ffe81f',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 20,
        marginTop: 30,
        padding: 30
    },
    textDetail: {
        color: '#ffe81f',
        fontSize: 20,
        marginBottom: 10,
    }
});

export default CharacterProfile