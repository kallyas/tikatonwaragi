const bodyParser = require('body-parser')
const express = require('express');
const colors = require('colors');

// import morgan from 'morgan';

const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors=require('cors')
dotenv.config();

const mysql=require('./models/db');
// Routes
const customerRoutes=require('./routes/routes.customer');
const userRoutes=require('./routes/userRoutes');
const materialRoutes=require('./routes/materialRoutes');
const loginRoutes=require('./routes/loginRoutes');
const productRoutes=require('./routes/productRoutes');

// port on which the server is running

const port=process.env.PORT||5000;

const app = express(); 


//Express session
const expressSession =require('express-session')({
  secret: 'secret',
  cookie: {maxAge : 60000},
  resave: false,
  saveUninitialized: false
});

// Handle form data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
}))

// cors middle ware to allow cross site
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(expressSession);
app.use(cookieParser());
// app.use(cors({
//   origin: 'http://localhost:3000/'
// }))
app.use('/',loginRoutes);
app.use('/tikaton', customerRoutes);
app.use('/tkUser', userRoutes);
app.use('/tkMaterial', materialRoutes);
app.use('/tkProduct', productRoutes);

const server = app.listen(port, () => {
    const { address, port } = server.address();
    console.log(`Listening at http://localhost:${port}`.magenta.bold);
  });
  
  module.exports = app;