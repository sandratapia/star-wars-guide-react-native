import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const FilmCard = ({ id, title, characters, image, handleOnPress }) => {

    return (
        <View key={id}>
            <Text style={styles.containerTitle} onPress={() => handleOnPress(id)}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerTitle: {
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

export default FilmCard