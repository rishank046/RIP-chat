import express , {type Request , type Response}  from "express";
import { WebSocketServer } from "ws"

const app = express();

app.use((req, res, next) => {
    res.setHeader(
        "Content-Security-Policy",
        "default-src 'self'; connect-src 'self' ws://localhost:8080 http://localhost:8080;"
    );
    next();
});

app.get('/chat' , (req : Request , res : Response) => {
    res.status(200);
    res.end("Hello got your request")
})

const server = app.listen(8080 , () => {
    console.log("we are listening @8080");
})

const socket = new WebSocketServer({server});

socket.on("connection" , (socket) => {
})