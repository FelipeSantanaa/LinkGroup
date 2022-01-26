var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

/* Middlewares, sessions and cookies */
const session = require('express-session')
const loginMiddleware = require('./middlewares/validateLogin')

/* Routes */
const indexRouter = require('./src/routes/index')
const adminRouter = require('./src/routes/admin')
const myAccountRouter = require('./src/routes/my-account')
const loginRouter = require('./src/routes/login')
const signupRouter = require('./src/routes/signup')
const yourInformationRouter = require('./src/routes/your-information')
const logoutRouter = require('./src/routes/logout')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, './src/views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

/* Middlewares, sessions and cookies */
app.use(
  session({
    secret: 'Linktree - New Version DH',
    resave: true,
    saveUninitialized: true
  })
)

/* Routes */
app.use('/', indexRouter)
app.use('/login', loginRouter)
app.use('/register', signupRouter)

// Rotas que só podem ser acessadas se autenticadas
app.use('/my-account', loginMiddleware, myAccountRouter)
app.use('/admin', loginMiddleware, adminRouter)
app.use('/your-information', loginMiddleware, yourInformationRouter)
app.use('/logout', loginMiddleware, logoutRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
