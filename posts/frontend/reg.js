let regButt = document.getElementById('regButt')
let regNick = document.getElementById('regNick')
let regPass = document.getElementById('regPass')
let regStatus = document.getElementById('regStatus')

console.log(regButt)
regButt.addEventListener('click',() => {
    let regNickText = regNick.value
    let regPassText = regPass.value
    regFun(regNickText, regPassText)
    regNick.value = ""
    regPass.value = ""
    regStatus.textContent = 'Вы успешно зарегестрировались! Нажмите сюда, чтобы войти в ваш новый аккаунт'
});

async function regFun (regNickText, regPassText) {
    const res = await fetch('/reg',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({regNickText: regNickText, regPassText: regPassText})
    }) 
    return res
    // location.href = `http://localhost:5000/post?User=${regNickText}`
}
