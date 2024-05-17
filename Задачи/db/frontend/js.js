let logButt = document.getElementById('logButt')
let regButt = document.getElementById('regButt')
let regNick = document.getElementById('regNick')
let regPass = document.getElementById('regPass')
let logNick = document.getElementById('logNick')
let logPass = document.getElementById('logPass')

regButt.addEventListener('click',() => {
    regNickText = regNick.value
    regPassText = regPass.value
    console.log(regNick)
    regFun()
    // regNick.value = ""
    // regPass.value = ""

});

// logButt.addEventListener('click',() => {
//     logNick = regNick.value
//     logPass = regPass.value
//     logNick.value = ""
//     logPass.value = ""
// });


async function regFun () {
    const res = await fetch('http://localhost:5000/index.html/reg',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({regNickText: regNickText, regPassText: regPassText})
    }) 
    location.reload(true) 
    console.log(regNick)
    return res
}