import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

const HeaderContainerApp = () => {
    return (
        <View>
            <Image source={require('../assets/logo.png')} style={{ width: 350, height: 150 }} />
            <Text style={styles.subtitle}>The Guide</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        color: '#ffe81f',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    }
});

export default HeaderContainerApp