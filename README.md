# NTNU Timetable API

This project aims to create an api that makes it easier to work with the different systems at NTNU. Such as the a list of available courses, and events.
As a secondary goal, we want to make students be able to add what courses they are taking, and then get a timetable that is personalized for them.

## Getting started

### Prerequisites
- [Node.js](https://nodejs.org/en/)

### Installing and running
- Clone the repository
- Run `npm install` in the root folder
- Run `npm run dev` to start the server in development mode  (see next section for prisma)

- or run `npm run build` to build the project
- then run `npm start` to start the server in production mode

## Prisma ORM
This project uses prisma to interface with the db.  
to connect it to your db (*postgresql in this project*)  
run `npx prisma generate`  
a file called .env will then be created in the root directory.  
There you can set the connection string to your postgres DB.  
then you can run `npx prisma db push` to push the prisma schema to the database.   
(*might need to set the specific database in postgres with the '/mydb' string in the uri*)  


## Built with
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)

## Authors
- [Jakob Holkestad molnes](https://github.com/JakobHolkestadMolnes)

## Contributing
see [CONTRIBUTING.md](CONTRIBUTING.md)
