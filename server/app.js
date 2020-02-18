const express = require('express');
const router = require('./router');
const cors = require('cors');
const { addUser, getUser, getUsersInRoom } = require('./users');
const { addZeroToDate, getDate } = require('./date');

const PORT = process.env.PORT || 5000;

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(router);
app.use(cors());

io.on('connection', socket => {
    console.log("User connected!");

    socket.on('join', ({ name, room }) => {
        const user = addUser({ id: socket.id, name: name, room : room});
        socket.join(room, () => {
            io.to(room).emit('room-data', { 
                room: room, 
                users: getUsersInRoom(room) });
            socket.emit('message', {
                user: 'Admin', 
                text: `${name}, welcome to the room ${room}`, 
                date: getDate()
            });
        });
    });

    socket.on('sendMessage', (message) => {
        const user = getUser(socket.id);
        if (user) { 
            io.to(user.room).emit('message', { 
                user: user.name, 
                text: message, 
                date: getDate()
            });
        } else {
            console.log("No such user");
        }
    })

    socket.on('disconnect', () => {
        const user = getUser(socket.id);
        if ( user ) {
            let room = user.room;
            user.room = null;
            io.to(room).emit('room-data', { 
                room: room, 
                users: getUsersInRoom(room) 
            });
            console.log('User had left!');
        }
    })
});

server.listen(PORT, () => console.log(`Server started in port ${PORT}`));