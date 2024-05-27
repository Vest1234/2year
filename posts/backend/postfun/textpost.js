import db from "../db/db.js"

export class Allpost {
    constructor(table) {
        this.table = table
    }
    addPost(name,text) {
        let lastObjNomber = this.table.length-1
        let lastObj = this.table[lastObjNomber]
        this.table.push({index: lastObj.index+1,
                         name: name,
                         text: text
        })
    }

    async deletePost(index) {
        console.log(this.table)
        let filteredNames = this.table.filter((post) => post.index !== index);
        this.table = filteredNames
        console.log(this.table)
        await db.write()
    }

}



