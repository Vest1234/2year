import { JSONFilePreset } from 'lowdb/node'
import router from './router.js';
// Read or create db.json
const defaultData = { users: [] }
import path from 'node:path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const dbRoud = path.resolve(__dirname, "db.json")
console.log(__dirname)
const db = await JSONFilePreset(dbRoud, defaultData)

  // function login(req, res) {
  //   const users = db.data.users;
  //   try {
  //     let username = req.body.usernameT;
  //     let password = req.body.passwordT;
  //     const user = db.data.users.find(user => user.username === username);
  //     if (!user) {
  //         return res.status(404).send('User not found');
  //     }
  //     if (checkPassword(username, password)) {
  //         res.status(200).json({ token: generateToken(username) });
  //     } else {
  //         res.status(401).send('Invalid password');
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     res.status(500).send('An error occurred');
  // }
// }
export default db 