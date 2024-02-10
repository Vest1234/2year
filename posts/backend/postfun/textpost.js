const { Post } = require("./postsample.js");

class Allpost {
    constructor() {
        this.table = {
            post: {
                name: "Maths",
                text: "Сделать дз мо алгебре"
            },
        };
    }
}

function getAllPost() {
    const result = [1];
    const postNames = Object.keys(this.table);
    for (let i = 0; i < postNames.length; i++) {
        const postname = postNames[i];
        const post = new Post(postname);
        post.setStat(this.table[postname].text);
        result.push(post);
    }
    return result;

}

const allpost = new Allpost();

module.exports = {
    Allpost: allpost
}