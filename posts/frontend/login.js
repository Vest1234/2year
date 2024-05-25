let logButt = document.getElementById('logButt')
let usernameT = document.getElementById('logNick')
let passwordT = document.getElementById('logPass')

logButt.addEventListener('click',() => {
    let username = usernameT.value
    let password = passwordT.value
    logFun(username, password)
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
    } 
}