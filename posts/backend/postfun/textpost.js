import db from "../db/db.js"

export class Allpost {
    constructor(userData) {
        this.userData = userData
    }
    
    addPost(name,text) {
        let lastObjNomber = this.userData.table.length-1
        let lastObj = this.userData.table[lastObjNomber]
        this.userData.table.push({index: lastObj.index+1,
                         name: name,
                         text: text
        })
    }

     deletePost(index) {
        let filteredNames = this.userData.table.filter((post) => post.index !== index);
        this.userData.table = filteredNames
        console.log(this.userData.table)
    }

}



