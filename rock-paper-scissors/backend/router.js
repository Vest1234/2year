const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Greetings form Handlebars',
        signin: true
    });
});

router.get('/signin', function(req, res){
    res.render('home', {
    player:req.query.username,
    signin: false
    })
})

module.exports = router