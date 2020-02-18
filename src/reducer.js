const initialState = {
    id: null,
    name: null,
    room: null,
    users: [],
    messages: []
}

let newState;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MESSAGE':
            const data = action.payload;
            newState = {...state};
            newState.messages.push(data);
            return newState;

        case 'INIT_NAME':
            newState = {...state};
            newState.name = action.payload;
            return newState;

        case 'INIT_ROOM':
            newState = {...state};
            newState.room = action.payload;
            return newState;
        
        case 'ROOM_UPDATE':
            newState = {...state};
            newState.users = action.payload.users;
            return newState;

        default:
            return state;
    }
  };
  
  export default reducer;