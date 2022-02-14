import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import CharacterProfile from '../components/CharacterProfile.js';
import CharactersFilm from '../components/CharactersFilm.js'
import Home from '../components/Home.js';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'black',
                },
                headerTintColor: '#ffe81f',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen name="Star Wars - The Guide" component={Home} />
            <Stack.Screen name="Characters Film" component={CharactersFilm} />
            <Stack.Screen name="Character Details" component={CharacterProfile} />

        </Stack.Navigator>
    )
}

export default MyStack