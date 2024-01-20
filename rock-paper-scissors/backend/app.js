const express = require('express');
const path = require('node:path')
const frontend = path.resolve(__dirname, "../frontend")
const views = path.resolve(__dirname, "views") 
const router = require(path.resolve(__dirname, "router.js"))
const app = express();
const nunjucks = require('nunjucks')



app.set('views', `${__dirname}/views`);
nunjucks.configure(views, {
    autoescape: true,
    express: app,
})
app.use(router)
app.use(express.static(frontend))

app.listen(5000, function () {
    console.log('Server started!');
});