import { ScrollView, StyleSheet, View, ImageBackground } from 'react-native';

const Page = ({ header, children }) => {
    return (
        <ImageBackground source={require('../assets/background.jpg')} resizeMode="repeat" style={{ width: '100%' }}>
            <View style={styles.containerPrincipal} >
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {header}
                    {children}
                </ScrollView>
            </View>
        </ImageBackground >

    )
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

export default Page