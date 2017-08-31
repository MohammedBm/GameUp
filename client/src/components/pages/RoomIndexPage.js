import React, {Component} from 'react';
import {Room} from '../../utls/requests'
import RoomList from '../RoomList'

class RoomIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    }
  }
  componentDidMount() {
    Room.getRooms().then(rooms => this.setState({rooms}))
  }

  render() {
    return (
      <div className='RoomIndexPage'>
        <div className='jumbotron bg'>
          <h2 className='fontJumb'>Looking for other players? You came to the right place.</h2>
          <p className='fontJumb'>You can join any of the room below and start palying with other gamers!</p>
        </div>
        <br/>
        <h2>Rooms</h2>
        <RoomList rooms={this.state.rooms}/>
      </div>
    )
  }
}

export default RoomIndexPage
