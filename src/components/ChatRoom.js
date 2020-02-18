import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import MessagesList from './MessagesList';
import Sidebar from './Sidebar';

// main chat room
const ChatRoom = ({ state, join, connect, send, initRoom, initName, location }) => {

    const [room, setRoom] = useState('');
    const [name, setName] = useState(state.name);
    const [message, setMessage] = useState('');

    useEffect(() => {
        connect();
    }, [connect]);

    useEffect(() => {
        setRoom(location.pathname.slice(1));
        if (room) initRoom(room);
        if (state.name) {
            join(state.name, room);
        }
    }, [ location, state.name, room, join, initRoom, initName])

    const sendMessage = (message) => {
        if (message) {
            send(state.name, state.room, message);
            setMessage("");
        }
    }

    if (!state.name) {
        return (
            <div className = "row join-container">
                <div className = "input-field col s12">
                    <div>
                        <input placeholder = "Enter your name"
                        className = "joinInput" 
                        type = "text" 
                        onChange = {(e) => setName(e.target.value)} />
                    </div>
                    <button className = "waves-effect indigo darken-2 btn" 
                    onClick = {e => (!name) ? e.preventDefault() : initName(name)}>Sign In</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className = "row chat-container">
                <div className = "input-field col s12">
                    <div className = 'halved-container'>
                        <div className = 'half3'>
                            <Sidebar props = { state.users }/>
                        </div>
                        <div className = 'half5'>
                            <MessagesList props = { state.messages }/>
                        </div>
                        <div id = 'message-box' class = "container">
                            <i class="material-icons prefix">textsms</i>
                            <input 
                                value = { message }
                                onChange = {(e) => setMessage(e.target.value)}
                                onKeyPress = {(e) => e.key === 'Enter' ? sendMessage(message) : null }/>
                            <button className = "indigo darken-2 btn" 
                            onClick = {(e) => sendMessage(message)}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state
    };
};

export default connect(mapStateToProps, actions)(ChatRoom);