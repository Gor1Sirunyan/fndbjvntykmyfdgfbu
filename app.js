var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const config = require('./config/config.json').development;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');

/*const multer = require('multer');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost:3222',
    dialect: 'mysql',
});
var myModels = require('./models/files');*/

var app = express();


// view engine setup
app.engine('ejs', require('express-ejs-extend'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(session({secret:'keyboard cat',cookie:{maxAge:60000}}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//************************files

/*const MyModel = sequelize.define('myModel', {
    filePath: Sequelize.STRING,
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './app/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

app.post('/upload', multer({ storage }).single('example'), async (req, res) => {
    // This needs to be done elsewhere. For this example we do it here.
    await sequelize.sync()

    const filePath = `${req.file.destination}/${req.file.filename}`
     myModel = await MyModel.create({ filePath })
});*/
//files end#####################################
module.exports = app;
