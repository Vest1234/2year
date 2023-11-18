import http from 'node:http'

const port = 2000

function mainHandler(request, responce) {
    console.log(request.url)
    responce.end(`Request ${request.url} was handler`)
}

const server = http.createServer(mainHandler)
server.listen(port)