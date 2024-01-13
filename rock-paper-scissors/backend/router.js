const express = require('express');
const router = express.Router()
const stat = require('./scripts/statistics.js').stat
const User  = require('./scripts/user').User

router.get('/', (req, res) => {
    const user = new User('User');
    res.render('home', {
        user,
        signin: true
    });
});

router.get('/signin', function(req, res){
    const username = req.query.username;
    const userStat = stat.getUserStat(username)
    const user = new User(username)
    res.render('home', {
    player:req.query.username,
    signin: false
    })
})

module.exports = router;