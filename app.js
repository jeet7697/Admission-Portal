const express = require('express')
const web = require('./Routes/web.js')
const app = express()
const port = 3500
var bodyParser = require('body-parser')//body parser used to take the data
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var session = require('express-session')
var cookieParser = require('cookie-parser')
app.use(cookieParser())

var flash = require('connect-flash');


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))
app.use(flash())

const connectDB = require('./db/connectDb.js')


//app.use('/api/pn',web);
app.use("/",web)
app.set("view engine","ejs")
app.use(express.static('public'))

connectDB();


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})