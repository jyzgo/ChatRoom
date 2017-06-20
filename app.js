var express = require('express');
var path = require('path');

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var about = require('./routes/about');


var app = express();

app.locals.points = "8,713";
app.locals.title = "default";


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/about',about);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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



var fs = require('fs');



var http = require('http');


var server = http.createServer(function (req,res) {
   console.log('request was made:'+req.url);


   if(req.url === '/home' || req.url === '/')
   {
       res.writeHead(200,{'Content-Type': 'text/html'});
       fs.createReadStream(__dirname + '/index.html').pipe(res);
   }else if(req.url === '/contact-me')
   {
       res.writeHead(200,{'Content-Type': 'text/html'});
       fs.createReadStream(__dirname + '/contact.html').pipe(res);
   }else if(req.url === '/api/ninjas')
   {
        var ninjas = [{name:'ryu',age:29},{name:'yoshi',age:32}];
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(ninjas));
   }else
   {
       res.writeHead(404,{'Content-Type': 'text/html'});
       fs.createReadStream(__dirname + '/404.html').pipe(res);
   }



});

server.listen(8000,'127.0.0.1');
console.log("listening");



module.exports = app;

