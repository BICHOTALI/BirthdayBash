const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
require('dotenv').config()
const birthdayController = require('./controllers/birthday')

const app = express()

// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/birthdays', birthdayController)

// ROUTES
app.get('/', (req, res) => {
    res.render('home')
})


app.get ('*', (req, res) => {
    res.render('error404')
})


// DB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))

// npx nodemon js