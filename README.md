# GroupUs

**Smart, random groupings.**

Group Us generates groups from lists of people (well, really anything). Each time you generate groups, Group Us generates 10,000 random groupings and selects the one where people were previously in the same groups the fewest number of times (it does some fancy schmancy weighting based on group sizes too).

[![Landing Page](https://github.com/TylerAuer/nfl-wins-losses/blob/master/landing.png)](https://groupus.tylerauer.com)

[![Demo](https://github.com/TylerAuer/nfl-wins-losses/blob/master/demo.png)](https://groupus.tylerauer.com)

## Technologies

### Frontend

This is a [React](https://reactjs.org/) application that makes use of [React-Router](https://reactrouter.com/web/guides/quick-start) for routing.

### Backend

The backend is built with [Node](https://nodejs.org/en/), [Express](https://expressjs.com/), and a [PostgreSQL](https://www.postgresql.org/) database. I used [Sequelize](https://sequelize.org/) to make interacting with Postgres easier. PassportJS supports user auth through Google.

### Deployment

The site is hosted with [Heroku](https://www.heroku.com/home) which makes maintenance efficient -- pushes to `main` automatically create and deploy new builds.

## Interesting Development Tidbits

The application uses a weighted graph to easily measure the history of pairings between any two people.

## To Run Locally

1. Clone repo
2. Run `npm install` to install dependencies
3. Start backend with `nodemon server.js`
4. Start frontend with `npm start`
5. Open app in browser (use localhost port shown when you start the frontend)
6. Have fun!
