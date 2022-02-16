import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import CharacterProfile from '../pages/CharacterProfile.js';
import CharactersFilm from '../pages/CharactersFilm.js'
import Home from '../pages/Home.js';

const Stack = createStackNavigator();

const StarWarsNavigation = () => {
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

export default StarWarsNavigation;