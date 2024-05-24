import express from 'express';
const router = express.Router();
import db from './db.js' 
import { login } from './loginFun.js';


router.post('/reg', async (req, res) => {
    let regNickText = req.body.regNickText;
    let regPassText = req.body.regPassText;
    console.log(regNickText)
    let newUser = {
        "name": `${regNickText}`,
        "password": `${regPassText}`,
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
    res.send("ok")
  });
  

export default router