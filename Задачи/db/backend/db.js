import { JSONFilePreset } from 'lowdb/node'
const { router } = require('router');

// Read or create db.json
const defaultData = { users: [] }
const db = await JSONFilePreset('db.json', defaultData)
console.log(db.data.users)

router.post('/index.html/reg', (req, res) => {
  let regNickText = req.body.regNickText;
  let regPassText = req.body.regPassText;
  console.log(regNick)
  res.send("ok")
});

let newUser = {
    "name": `${this.regNickText}`,
    "password": `${this.regPassText}`,
  }
  
db.data.users.push(newUser)
await db.write()