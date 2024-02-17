const { postsample } = require("./postsample.js");

class Allpost {
    constructor() {
        this.table = [
            {
                index: 1,
                name: "Матиматике",
                text: "Сделать дз по алгебре"
            },
            {
                index: 2,
                name: "Русский",
                text: "Сделать дз по русскому"
            },
            {
                index: 3,
                name: "ЕЕЕЕЕ",
                text: "ЭЩ"
            }
        ];
    }

    addPost(index,name,text) {
        this.table.push({index: 0,
                         name: name,
                         text: text
        })
    }

    deletePost(index) {
        this.table.slice
    }

}

    


let arr = [1, 3]

arr.push

// let b = {}
// let c = {}

// let arrO = [b , c]
// let arrA = [{name: "g"} , {}]

// let x = {
//     table: {
//         maths: {
//             name:"Maths",
//             text: "Сделать дз мо алгебре"
//         }
//     }
// }


const x = new Allpost();

module.exports = {
    textpost: x
}
