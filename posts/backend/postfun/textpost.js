import db from '../db/db.js';
const users = db.data.users;
const userData = users.find(({name}) => name == "Тут должен быть username из строки после регистрации");
let table = userData.table

class Allpost {
    constructor(table) {
        this.users = table
    }
    addPost(name,text) {
        let lastObjNomber = this.table.length-1
        let lastObj = this.table[lastObjNomber]
        this.table.push({index: lastObj.index+1,
                         name: name,
                         text: text
        })
    }

    deletePost(index) {
        let filteredNames = this.table.filter((post) => post.index !== index);
        this.table = filteredNames
        console.log(filteredNames)
        console.log(this.table)
        
    }


}


export default textpost

