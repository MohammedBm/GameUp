import React, { Component } from 'react';
import {Room} from './utls/requests'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      rooms: []
    }
  }
  componentDidMount(){
    Room.getRooms().then(rooms => this.setState({rooms}))
  }

  render() {
    return (
      <div className="App">
        {
          this.state.rooms.map(room => {
            return (
              <div>
                <div>{room.title}</div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
