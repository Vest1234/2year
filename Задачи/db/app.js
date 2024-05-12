import { JSONFilePreset } from 'lowdb/node'

// Read or create db.json
const defaultData = { users: [] }
const db = await JSONFilePreset('db.json', defaultData)
console.log(db.data.users)
let newUser = {
    "name": "kirril",
    "password": "ertt",
  }
db.data.users.push(newUser)
console.log(db.data.users)
await db.write()