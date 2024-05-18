let logButt = document.getElementById('logButt')
let regButt = document.getElementById('regButt')
let regNick = document.getElementById('regNick')
let regPass = document.getElementById('regPass')
let username = document.getElementById('logNick')
let password = document.getElementById('logPass')

console.log(regButt)
regButt.addEventListener('click',() => {
    regNickText = regNick.value
    regPassText = regPass.value
    regFun()
    // regNick.value = ""
    // regPass.value = ""

});

// logButt.addEventListener('click',() => {
//     usernameT = username.value
//     passwordT = password.value
//     regFun()
//     // logNick.value = ""
//     // logPass.value = ""

// });

// logButt.addEventListener('click',() => {
//     logNick = regNick.value
//     logPass = regPass.value
//     logNick.value = ""
//     logPass.value = ""
// });


async function regFun () {
    const res = await fetch('/reg',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({regNickText: regNickText, regPassText: regPassText})
    }) 
    return res

}

async function logFun () {
    const res = await fetch('/log',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({usernameT: usernameT, passwordT: passwordT})
    }) 
    return res
}