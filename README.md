# Star Wars - The Guide

This app is made with React Native (Expo). Its operation is to request data from the API https://swapi.dev/api/ and paint the movies of the saga.

When pressed on any movie, it shows the characters that appear in that movie. In turn, pressing on each character shows their details.

Now we will see the different folders and components of the app.

## Assets

Here you can find the images used by the app.

## Data
  
In this folder you find the file fetchFromApi.js, you can find the different API calls.

 - fetchFilms. Requests the data of the movies to the API.
 - fetchAllCharacters. Requests the data of all the characters in the saga.

## Routes
  
In this file are the routes to be able to change from one view to another. For this, the https://reactnavigation.org/ library has been used. If you need more documentation, you can visit this link with the official https://reactnavigation.org/docs/getting-started

## Components

The components that make up the app are:


 1. FilmList. This component receives through props the information passed to it by the Home component and through map, it passes the information to the FilmCard component through props, which will paint each movie.
 2. FilmCard. This component paint the title of each movie and through the id, we can know which characters we have to pass to it.
 3. HeaderContainerApp. It is not a logic component, just some lines that are repeated throughout the app. This way it can be reused.

## Pages

The pages through which you can navigate are:

 1. Home. It is the main component of the application. From here, the movies and the characters are set in the state with the useEffect and useState hooks and through props, the information it needs to paint the characters of each movie is passed to the FilmList component.
 2. CharactersFilm. When you click on each filmCard, the characters in the movie where you clicked are passed through the props to this component.
 3. CharacterProfile. The CharactersFilm component passes the data of each character to this component through props, which shows the details of each character.
 4. Page. As the "HeaderContainerApp, it is not a logic component, its function is to render the header of the app and the component that is needed on each page.

## Project dependencies
In this React Native project, Expo has been used, which gives you the ease of being able to launch the app on both Android, iOs and web devices. If you need the documentation of Expo, you can visit the next link, create your account and your new app: https://expo.dev/. To do this you need to install the following dependencies:

    npm i -g expo-cli
    expo init your-name-app

For this project, the React Navigation library, mentioned above, has been used. To install it globally, use the following command:

    npm  install @react-navigation/native

## Start Project
  
When downloading or cloning this repository, the following command will need to be run to install the project dependencies:

    npm install
    expo start

⌨️ With ❤️ by [SandraTapia](https://github.com/sandratapia)  😊

