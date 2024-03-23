const express = require('express');
const router = express.Router();
const { textpost } = require('./postfun/textpost');

 
router.get('/', (req, res) => {
    res.render('post.njk', {
        table: textpost.table,
    });
});

router.get('/post', (req, res) => {


    
    res.render('post.njk', {
        table: textpost.table,
    });
});

router.post('/post', (req, res) => {
    let butId = req.body.butId;
    butId = Number(butId)
    console.log(butId)
    textpost.deletePost(butId) 
    console.log(req.body)
    res.send("ok")
});

module.exports = router;