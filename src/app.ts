import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import loadRouter from './routes/api/t1_load';
import splitRouter from './routes/api/t2_split';
import truncateRouter from './routes/api/truncate';
import queryRouter from './routes/api/t4_query';
import { Request, Response, NextFunction } from 'express';
import Singleton from './classes/Singleton';
import t3_embed from './routes/api/t3_embed';
const singletonInstance = Singleton.getInstance();

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/load', loadRouter(singletonInstance));
app.use('/api/split', splitRouter(singletonInstance));
app.use('/api/embed', t3_embed(singletonInstance));
app.use('/api/truncate', truncateRouter);
app.use('/api/query', queryRouter(singletonInstance));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
interface Error {
  status?: number;
  message?: string;
}

app.use(function(err: Error, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;