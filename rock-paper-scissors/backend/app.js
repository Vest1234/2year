const express = require('express');
const handlebars = require('express-handlebars');
const path = require('node:path')
const frontend = path.resolve(__dirname, "../frontend")
const router = require(path.resolve(__dirname, "router.js"))
const app = express();


app.engine(
    '.hbs',
    handlebars.engine({
        extnme: '.hbs',
        defaultLayout: 'main',
    })
);
app.set('views', `${__dirname}/views`);
app.set('view engine', '.hbs');

app.use(router)
app.use(express.static(frontend))

app.listen(5000, function () {
    console.log('Server started!');
});