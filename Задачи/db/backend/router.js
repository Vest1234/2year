import express from 'express';
import { JSONFilePreset } from 'lowdb/node'
const router = express.Router();
import db from './db.js' 


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
  
//   router.post('/log', (req, res) => {
//     let usernameT = req.body.regNickText;
//     let passwordT = req.body.regPassText;
//     console.log(usernameT)
//     res.send("ok")
//   });

export default router