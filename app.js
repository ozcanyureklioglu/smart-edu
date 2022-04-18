const express = require('express');
const mongoose = require('mongoose');
const MongoStore=require('connect-mongo');
const session=require('express-session');
const pageRouter = require('./routes/pageRoute');
const courseRouter = require('./routes/courseRoute');
const categoryRouter = require('./routes/categoryRoute');
const userRouter = require('./routes/userRoute');

const app = express();

//MONGODB CONNECTİON
mongoose
  .connect('mongodb://localhost/smartedu-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Conection is succesfuly');
  });

global.userID = null;

//MIDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/smartedu-db' })
  })
);

//TEMPLATE ENGİNE
app.set('view engine', 'ejs');

//ROUTE
app.use('*', (req, res, next) => {
  userID=req.session.userID;
  next();
});
app.use('/', pageRouter);
app.use('/courses', courseRouter);
app.use('/categories', categoryRouter);
app.use('/users', userRouter);

//LISTEN SERVER ON 3000 PORT
const port = 3000;

app.listen(port, () => {
  console.log(port + ' bağlantı oldu');
});
