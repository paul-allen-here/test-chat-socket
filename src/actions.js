export const toggle = () => {
    return {
        type: 'TOGGLE'
    };
};

export const join = (name, room) => {
    return {
        type: "JOIN",
        payload: { name, room }
    };
};

export const send = (name, room, message) => {
    return {
        type: "SEND",
        payload: message
    };
};

export const connect = () => {
    return {
        type: "CONNECT"
    };
};

export const initName = (name) => {
    return {
        type: "INIT_NAME",
        payload: name
    };
};

export const initRoom = (room) => {
    return {
        type: "INIT_ROOM",
        payload: room
    };
};