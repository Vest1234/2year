import express, { text } from 'express';
const router = express.Router();
import db from './db/db.js' 
import { login } from './loginFun.js';
import { Allpost } from './postfun/textpost.js';

 
router.post('/logout', (req, res) => {
    res.render('post.njk', {
        signin: false
    });
});

router.get('/post', (req, res) => {
    // textpost.addPost(4,"namePost","textPost")
    res.render('post.njk')
    // {
    //     table: textpost.table,
    // };
});

router.post('/user/:username/delete', async (req, res) => {
    const users = db.data.users;
    const userData = users.find(({name}) => name == req.params.username);
    // console.log(userData)
    const textpost = new Allpost(userData)
    let butId = req.body.butId;
    butId = Number(butId)
    textpost.deletePost(butId)
    await db.write()
    res.send("ok")
});

router.post('/user/:username/create', async (req, res) => {
    const users = db.data.users;
    const userData = users.find(({name}) => name == req.params.username);
    const table = userData.table
    const textpost = new Allpost(userData)
    let namePost = req.body.namePost;
    let textPost = req.body.textPost;
    textpost.addPost(namePost,textPost)
    await db.write()
    res.send("ok")
});

router.post('/reg', async (req, res) => {
    let regNickText = req.body.regNickText;
    let regPassText = req.body.regPassText;
    let newUser = {
        "name": `${regNickText}`,
        "password": `${regPassText}`,
        "table": [
            {
                "index": 1,
                "name": "Это заголовок поста",
                "text": "Это текст поста"
            }
        ]
    }
    db.data.users.push(newUser)
    await db.write()
    res.send("ok")
  });

router.post('/login', async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  login(username, password)
  const logCheck = login(username, password)
  if (logCheck) {
    res.send("ok")
  } else {
    res.send("notok")
  }
});

router.post('/loginRender', async(req, res) => {
    res.render('post.njk', {
        signin: true
    });
  });

router.get('/user/:username', (req, res) => {
    const users = db.data.users;
    const userData = users.find(({name}) => name == req.params.username);
    const table = userData.table
    const textpost = new Allpost(userData)
    let name = req.params.username
    res.render('post.njk', {userData: userData.table, name: name})
})

export default router