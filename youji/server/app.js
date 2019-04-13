var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let addRouter = require('./routes/addUser');
let findRouter = require('./routes/find');
let pwdRouter = require('./routes/update');
let loginRouter = require('./routes/login');
let addScenic = require('./routes/jingdian/add');
let scenicQuery = require('./routes/jingdian/query');
let priceRouter = require('./routes/price/add');
let queryRouter = require('./routes/price/query');
let addStraRouter = require('./routes/strategy/add');
let queryStategyRouter = require('./routes/strategy/strategy');
let senceSearchRouter = require('./routes/jingdian/searchSence');
let ticketAddRouter = require('./routes/ticket/add');
let dingdanRouter = require('./routes/center/menpiao');
let pictureRouter = require('./routes/tupiao');
let youjiAddRouter = require('./routes/youji/add')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",'3.2.1')
  if(req.method=="OPTIONS") res.send(200);
  else next();
  });
 
// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/add', addRouter);
app.use('/find',findRouter);
app.use('/',pwdRouter);
app.use('/login',loginRouter);
app.use('/scenic',addScenic);
app.use('/scenic/query',scenicQuery);
app.use('/price',priceRouter);
app.use('/price/query',queryRouter);
app.use('/strategy/add',addStraRouter);
app.use('/strategy/query',queryStategyRouter);
app.use('/sencesearch',senceSearchRouter);
app.use('/ticket',ticketAddRouter);
app.use('/center/ticket',dingdanRouter);
app.use('/picture',pictureRouter);
app.use('/youji',youjiAddRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
