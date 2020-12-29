require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.static('./app/public'));
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.urlencoded({extended:true}));

const session = require('express-session');
app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized : true
}));

app.use((req, res, next) => {
    if(req.session.login) res.locals.login = req.session.login;
    next();
});

const router = require('./app/router');
app.use(router);


app.listen(process.env.PORT || 3000);