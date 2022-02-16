import { View, Text, StyleSheet } from 'react-native';
import HeaderContainerApp from '../components/HeaderContainerApp';
import Page from './Page.js';

const CharacterProfile = ({ route }) => {
    const { character } = route.params;
    return (
        <Page header={<HeaderContainerApp />}>
            <View style={styles.containerDetail}>
                <Text style={styles.textDetail}>Name: {character.name}</Text>
                <Text style={styles.textDetail}>Films: {character.films.length}</Text>
                <Text style={styles.textDetail}>Gender: {character.gender}</Text>
                <Text style={styles.textDetail}>Height: {character.height}</Text>
                <Text style={styles.textDetail}>Mass: {character.mass}</Text>
                <Text style={styles.textDetail}>Skin Color: {character.skin_color}</Text>
            </View>
        </Page>
    )
}

const styles = StyleSheet.create({
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