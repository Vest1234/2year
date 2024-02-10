const express = require('express');
const path = require('node:path')
const frontend = path.resolve(__dirname, "../frontend")
const layouts = path.resolve(__dirname, "layouts") 
const router = require('./router.js');
const app = express();
const nunjucks = require('nunjucks')
// const { textpost } = require('./postfun/textpost')


// console.log(textpost.result)

app.set('layouts', `${__dirname}/layouts`);
nunjucks.configure(layouts, {
    autoescape: true,
    express: app,
})
app.use(router)
app.use(express.static(frontend))

app.listen(4000, function () {
    console.log('Server started!');
});