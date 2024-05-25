import express from 'express';
const router = express.Router();
import db from './db/db.js' 
import { login } from './loginFun.js';

 
router.get('/', (req, res) => {
    res.render('post.njk')
    //     table: textpost.table,
    // });
});

router.get('/post', (req, res) => {
    // textpost.addPost(4,"namePost","textPost")
    res.render('post.njk')
    // , {
    //     table: textpost.table,
    // });
});

router.post('/delete', (req, res) => {
    let butId = req.body.butId;
    butId = Number(butId)
    // textpost.deletePost(butId) 
    res.send("ok")
});

router.post('/create', (req, res) => {
    let namePost = req.body.namePost;
    let textPost = req.body.textPost;
    console.log(namePost)
    console.log(textPost)
    // textpost.addPost(namePost,textPost)
    console.log(req.body)
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
                "name": "Пост",
                "text": "Текст поста"
            }
        ]
    }
    console.log(db.data.users)
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

router.get('/login/:username', (req, res) => {
    console.log(req.params.username);
    res.render()
})

export default router