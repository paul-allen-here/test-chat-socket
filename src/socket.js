import io from 'socket.io-client';

const ENDPOINT = 'localhost:5000';
let socket;

const middleware = store => next => action => {
    switch (action.type) {
        case 'CONNECT':
            socket = io(ENDPOINT);
            // Attach the callbacks
            socket.on('message', message => store.dispatch({ type: 'MESSAGE', payload: message }));
            socket.on('users-update', users => store.dispatch({ type: 'UPDATE', payload: users }));
            socket.on('room-data', data => store.dispatch({type: 'ROOM_UPDATE', payload: data}));
            break;
        // User request to join room
        case 'JOIN':
            socket.emit('join', action.payload);
            break;
        // User request to send message
        case 'SEND':
            socket.emit('sendMessage', action.payload);
            break;
        // User request to disconnect
        case 'DISCONNECT':
            socket.emit('disconnect');
            socket.off();
            break;

        default:
            break;
    };

    return next(action);
};

export default middleware;