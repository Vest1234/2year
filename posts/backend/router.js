const express = require('express');
const router = express.Router();
const { Allpost } = require('./postfun/textpost');

router.get('/posttable', (req, res) => {
    res.render('post.njk', {
        Allpost
    });
});



module.exports = router;