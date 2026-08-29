import {handleMessage} from './handleMessage.ts';

export const handleConnection = (socket : any) => {
    socket.on('message', (message : string) => {
        handleMessage(socket , message);
    });
}