import React from 'react';
import {Link} from 'react-router-dom'

function RoomSummary(props) {
  const {id, title, game, creater, activity, limit, time} = props;

  return (
    <div className='RoomSummary'>
          <div>
            <Link to={`/rooms/${id}`}><strong>{title}</strong></Link>
            <div>Game: {game}</div>
            <div>Username: {creater}</div>
            <div>Activity: {activity}</div>
            <div>Time: {time}</div>
            <div>Player Limit: {limit}</div>
            <hr/>
          </div>
    </div>
  )
}

export default RoomSummary;
