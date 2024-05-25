let regButt = document.getElementById('regButt')
let regNick = document.getElementById('regNick')
let regPass = document.getElementById('regPass')

console.log(regButt)
regButt.addEventListener('click',() => {
    regNickText = regNick.value
    regPassText = regPass.value
    regFun()
    regNick.value = ""
    regPass.value = ""

});

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
