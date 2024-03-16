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
    textpost.deletePost(2)
    
    res.render('post.njk', {
        table: textpost.table,
    });
});

router.post('/post', (req, res) => {
    const butId = req.body.butId;
    textpost.deletePost(butId) 
    console.log(req.body)
    res.send("ok")
});

module.exports = router;