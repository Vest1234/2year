let logButt = document.getElementById('logButt')
let usernameT = document.getElementById('logNick')
let passwordT = document.getElementById('logPass')
let logStatus = document.getElementById('logStatus')

logButt.addEventListener('click',() => {
    let username = usernameT.value
    let password = passwordT.value
    logFun(username, password)
    renderTrue()
    logNick.value = ""
    logPass.value = ""

});

async function logFun (username, password) {
    const res = await fetch('/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password})
    })
    const text = await res.text()
    
    if (text == "ok") {
        location.href = `http://localhost:5000/user/${username}`
    } else {
        logStatus.textContent = 'Неправильно указано имя и/или пароль'
    }
}

async function renderTrue () {
    const res = await fetch('/loginRender',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return res
}

