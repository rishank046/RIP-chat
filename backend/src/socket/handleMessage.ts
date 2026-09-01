import { socketMap } from '../socket/socketMap.ts';

export const handleMessage = (socket : any , message : string) => {
    const userId = socket.id;

    const messageJSON = JSON.parse(message);
    const recipientId = messageJSON.recipientId;
    const textMessage = messageJSON.message;

    const recipientSocket = socketMap.get(recipientId);
    if (recipientSocket) {
        recipientSocket.send(JSON.stringify({
            senderId : userId,
            message : textMessage
        }));
    }
}