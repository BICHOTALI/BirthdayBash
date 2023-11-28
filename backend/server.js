//Dependencies

const { Sequelize } = require('sequelize')
require('dotenv').config();

//Configuration/Middleware

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)
  
try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PORT}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}


//Root

//Listen