import { handleMessage } from './handleMessage.ts';
import { socketMap } from './socketMap.ts';

export const handleConnection = (socket : any) => {
    socketMap.set(socket.id, socket);
    socket.on('message', (message : string) => {
        handleMessage(socket , message);
    });
}