import React from 'react'

// draw list of users in the room
const Sidebar = ({ props }) => {
    if (props) {
        return (
            <div class="col s12 m12">
                <div id = "sidebar" className="card indigo darken-2">
                    <div class="card-content white-text">
                    <span class="card-title">In this room: </span>
                        <ul>
                        { props.map(user => (
                            <span class="card-title" key={user.id}>{ user.name }</span>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    } else {
        return (<aside></aside>)
    }
}

export default Sidebar;
