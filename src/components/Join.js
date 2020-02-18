import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Sing in screen

const Join = ({state, initName}) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    
    return (
        <div className = "row join-container">
            <div className = "input-field col s12">
                <div>
                    <input placeholder = "Enter your name"
                    className = "joinInput" 
                    type = "text" 
                    onChange = {(e) => setName(e.target.value)} />
                </div>
                <div>
                    <input placeholder = "Room" 
                    className = "joinInput"
                    type = "text" 
                    onChange = {(e) => setRoom(e.target.value.trim().toLowerCase().replace(/ /g, ""))} />
                </div>
                <Link 
                    onClick = {e => (!name || !room) ? e.preventDefault() : initName(name)}
                    to = {`/${room}`}>
                    <button className = "waves-effect indigo darken-2 btn" type = "submit">Sign In</button>
                </Link>
            </div>
        </div>
    )
} 

const mapStateToProps = (state) => {
  return {
    state
  };
};

export default connect(mapStateToProps, actions)(Join);