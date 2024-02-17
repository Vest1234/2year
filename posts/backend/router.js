const express = require('express');
const router = express.Router();
const { textpost } = require('./postfun/textpost');

router.get('/', (req, res) => {
    res.render('post.njk', {
        table: textpost.table,
    });
});

router.get('/post', (req, res) => {
    textpost.addPost(4,"Добавил пост","Пост")
    console.log(textpost.table)
    res.render('post.njk', {
        table: textpost.table,
    });
});

module.exports = router;