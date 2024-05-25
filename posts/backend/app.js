import express from 'express';
import path from 'node:path'
import {dirname} from 'node:path'
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const frontend = path.resolve(__dirname, "../frontend")
const layouts = path.resolve(__dirname, "layouts") 
import router from './router.js';
const app = express();
import nunjucks from 'nunjucks'

// const { textpost } = require('./postfun/textpost')



app.use(express.json());

// console.log(textpost.result)

app.set('layouts', `${__dirname}/layouts`);
nunjucks.configure(layouts, {
    autoescape: true,
    express: app,
})
app.use(router)
app.use(express.static(frontend))

app.listen(5000, function () {
    console.log('Server started!');
});