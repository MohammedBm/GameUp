import React, { Component } from 'react';
import {Room} from '../utls/requests'
import RoomIndexPage from './pages/RoomIndexPage'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import RoomShowPage from './pages/RoomShowPage'
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
      <Router>
      <div className="App">
        <nav>
          <Link to='/'>Home</Link>
        </nav>
        <h1>GameUp</h1>

        <Switch>
          <Route exact path='/' component={RoomIndexPage} />
          <Route path='/rooms/:id' component={RoomShowPage} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
