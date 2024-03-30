const express = require('express');
const router = express.Router();
const { textpost } = require('./postfun/textpost');

 
router.get('/', (req, res) => {
    res.render('post.njk', {
        table: textpost.table,
    });
});

router.get('/post', (req, res) => {
    // textpost.addPost(4,"namePost","textPost")
    res.render('post.njk', {
        table: textpost.table,
    });
});

router.post('/delete', (req, res) => {
    let butId = req.body.butId;
    butId = Number(butId)
    textpost.deletePost(butId) 
    res.send("ok")
});

router.post('/create', (req, res) => {
    let namePost = req.body.namePost;
    let textPost = req.body.textPost;
    console.log(namePost)
    console.log(textPost)
    textpost.addPost(4,namePost,textPost)
    console.log(req.body)
    res.send("ok")
});

module.exports = router;