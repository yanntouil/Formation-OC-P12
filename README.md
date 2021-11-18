
# Project 9 - Front-end Dashboard
This repo contains all the source code to run the React application for the sports analytics dashboard SportSee.

## General information


version de node 
editeur de text recommandé
version de react
mode nescéssaire

depot api + démarage

# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
and use
- React (17.0.2)
- Rechart (2.1.6)

We recommend to use [Visual Studio Code](https://code.visualstudio.com/) to edit and launch this project and lastest version of [Chrome](https://www.google.fr/chrome/) browser with [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/) plugin
## Prerequisites
- [NodeJS (version 16+)](https://nodejs.org/en/download/)
## Available Scripts

In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Install API

You can clone the API in your folder with this git command   
`$ git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git .`

*Read the documentation on readme to launch API with Docker or NPM*

## Config React App
Configuration is available in `src/config.js`
- To switch between 2 users available (12 | 18) change `currentUser`
- To change API url set your url in `apiUrl` 
- To use mocked data set `mockData` at `true` or at `false` to use data from api
- To simulate loading time in api or mocked data set `simDataLoadingTime` at `true`
