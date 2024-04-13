const { postsample } = require("./postsample.js");

class Allpost {
    constructor() {
        this.users = [
            {
                name:
            }
        ]
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

const x = new Allpost();

module.exports = {
    textpost: x
}

// this.table = [
//                 {
//                     index: 1,
//                     name: "Матиматике",
//                     text: "Сделать дз по алгебре"
//                 },
//                 {
//                     index: 2,
//                     name: "Русский",
//                     text: "Сделать дз по русскому"
//                 },
//                 {
//                     index: 3,
//                     name: "ЕЕЕЕЕ",
//                     text: "ЭЩ"
//                 }
//             ]