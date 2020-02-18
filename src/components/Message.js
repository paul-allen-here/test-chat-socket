import React from 'react'

const Message = ({ props }) => {
  console.log(props);
  return (
  <div class="col s12 m12">
    <div class="card indigo darken-2">
      <div class="card-content white-text">
        <span class="card-title">{ props.user }</span>
        <p>{ props.text }</p>
      </div>
    </div>
    <p class = "date right">{ props.date }</p>
  </div>
  );
}

export default Message;
