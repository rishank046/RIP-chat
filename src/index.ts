import http from "node:http";
import { WebSocketServer } from "ws"

const server = http.createServer((req , res) => {
    console.log("new request came");
})

const socket = new WebSocketServer({server});

socket.on("connection" , (socket) => {
})

server.listen(8080 , () => {
    console.log("Server listening on port 8080");
})