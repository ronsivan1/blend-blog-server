# Fullstack App README Template

Dewin developed this server as part of a **Blog App** for a school project,
together with Ron Sivan who helped with refactoring and fixing bugs.

![InKurz App demo](https://media.giphy.com/media/WOBoyXbPUD2RWjEuQc/giphy.gif)

## Table of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Setup](#setup)
- [Acknowledgements](#Acknowledgements)
- [Images](#images)

## Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Technologies

The app was built [create-react-app](https://create-react-app.dev/) and:

- PostgreSQL
- Express
- React
- Node.js

### Additional dependencies

- argon2
- body-parser
- class-validator
- cors
- express
- express-session
- jsonwebtoken
- jwt-decode
- morgan
- passport
- passport-jwt
- pg
- reflect-metadata
- typeorm
- typescript
- typescript-rest

### Dev dependencies

- nodemon
- ts-node

## Setup

To run the app, you need to clone the project. Then run

```
npm install
```

You need to setup the database to get the news articles. So go to file newsAPIRoute.js which is located in

```
src/server/routes/newsAPIRoute.js
```

Change the country according to your needs and change in fetch request url as well. For example :

```
  https://newsapi.org/v2/top-headlines?country=in&apiKey=020b3817a9ee4c8387dd3bcfac3eb12e&category=science
```

You need to install MongoDB or already installed. It can reachable by default port [http://localhost:27017](http://localhost:27017)

Once the database containe the articles, you can run the app using the command

```
npm start
```

You can skip the login page and start reading the news but comments are read-only. If you want to comment on news articles, you need register and login to make comments enable.

You can also watch a small glimpse of the app video above on how to use the app.

You can see the documentation of the app by running:

```
npm run storybook
```

As of now, only a small part of the app is documented.

## Acknowledgements

- I would like to thank the team of neuefische for teaching us all the above concepts. I had a lot of fun.
- I also would like to thank my fellow bootcampers. They are a gem of people and really helpful.

## Images

|                     Light mode                      |                     Dark mode                      |
| :-------------------------------------------------: | :------------------------------------------------: |
| <img src="./public/Homepage_light.png" width="200"> | <img src="./public/Homepage_dark.png" width="200"> |
| <img src="./public/Reviews_light.png" width="200">  | <img src="./public/Reviews_dark.png" width="200">  |
