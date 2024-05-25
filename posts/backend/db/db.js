import { JSONFilePreset } from 'lowdb/node'
const defaultData = { users: [] }
import path from 'node:path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const dbRoud = path.resolve(__dirname, "db.json")
console.log(__dirname)
const db = await JSONFilePreset(dbRoud, defaultData)


export default db 