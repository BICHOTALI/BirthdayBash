const express = require('express')
// const methodOverride = require('method-override')
require('dotenv').config()
const userController = require('./controllers/users')
const birthdayController = require('./controllers/birthdays')

const app = express()

// MIDDLEWARE
// app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/users', userController)
app.use('/birthdays', birthdayController)

// ROUTES
app.get('/', (req, res) => {
    res.render('landing')
})


app.get ('*', (req, res) => {
    res.render('error404')
})


const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))

// npx nodemon js