const createError = require('http-errors');
const express = require('express');

const indexRouter = require('./routes/index');
const keysRouter = require('./routes/keys');
const usersRouter = require('./routes/users');

const app = express();

app.use(express.json());
const authorizationMiddleware = require('./middlewares/authorizationMiddleware')

app.use('/', indexRouter);
app.use('/keys', keysRouter);
app.use('/users', authorizationMiddleware, usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500); 
});

module.exports = app;
