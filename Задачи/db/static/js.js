let logButt = document.getElementById('logButt')
let regButt = document.getElementById('regButt')
let regNick = document.getElementById('regNick')
let regPass = document.getElementById('regPass')
let logNick = document.getElementById('logNick')
let logPass = document.getElementById('logPass')

regButt.addEventListener('click',() => {
    regNick = regNick.value
    regPass = regPass.value
    regFun()
    // regNick.value = ""
    // regPass.value = ""

});

logButt.addEventListener('click',() => {
    logNick = regNick.value
    logPass = regPass.value
    logNick.value = ""
    logPass.value = ""
});


async function regFun () {
    console.log(regNick)
    console.log(regPass)  
    // const res = await fetch('http://localhost:3000/reg',{
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({regNick: regNick},
    //                          {regPass: regPass})
    // }) 
    // location.reload(true) 
    // return res
}