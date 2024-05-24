let logButt = document.getElementById('logButt')
let usernameT = document.getElementById('logNick')
let passwordT = document.getElementById('logPass')

logButt.addEventListener('click',() => {
    username = usernameT.value
    password = passwordT.value
    logFun()
    // logNick.value = ""
    // logPass.value = ""

});

async function logFun () {
    const res = await fetch('/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password})
    }) 
    return res
}