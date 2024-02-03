const { url } = require('./config.js')


fetch('url + /users', {
    method: 'POST', 
    body: [{
        name: 'Boris',
        password: '123',
        win: 3,
        lose: 2
    }]
})