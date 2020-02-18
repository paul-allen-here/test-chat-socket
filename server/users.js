const users = [];

const addUser = ({ id, name, room }) => {
    
    const userExists = users.find((user) => user.room === room && user.name === name);

    if (userExists) {
        return {error: 'UserName is taken'};
    } else if (!name) {
        return {error: 'Enter name'}
    }

    name = name.trim();
    room = room.trim().toLowerCase();

    const user = {id, name, room };

    users.push(user);

    return { user };
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = {users, addUser, getUser, getUsersInRoom};