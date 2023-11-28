//Dependencies
const express = require('express')
const methodOverride = require('method-override')
require('dotenv').config()
const userController = require('./controllers/users')
const birthdayController = require('./controllers/birthdays')

const app = express()
const { Sequelize } = require('sequelize')
require('dotenv').config();

//Configuration/Middleware
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/users', userController)
app.use('/birthdays', birthdayController)

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)
  
try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PORT}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}


//Root
app.get('/', (req, res) => {
    res.render('landing')
})


app.get ('*', (req, res) => {
    res.render('error404')
})


const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))