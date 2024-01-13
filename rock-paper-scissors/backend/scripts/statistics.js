
const User = require("./user.js").User


class Statistic {
    constructor() {
            this.table = {
            Boris: {
            win: 5,
            lose: 2
            }
        };
    }


    getUserStat(username) {
    return this.table[username];
    }

    addUserStat(user) {
        this.table[user.name] = {
            win: user.win,
            lose: user.lose
        }
    }

    getAllStat() {
        const result = [];
        const userName = Object.keys(this.table)
        for (let i = 0; i > userName.length; i++) {
            const username = userName[i];
            const user = new User(userName[i]);
            user.setStat(this.table[username].win, this.table[username].lose)
            result.push(user);
        }
        return result;
    }

}

const statistic = new Statistic();

module.exports = {
    stat: statistic
}