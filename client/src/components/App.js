import React, {Component} from 'react';
import Room from '../utls/requests';
import RoomIndexPage from './pages/RoomIndexPage';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import RoomShowPage from './pages/RoomShowPage';
import RoomNewPage from './pages/RoomNewPage';
import SignInPage from './pages/SignInPage';
import SignInPageForNew from './pages/SignInPageForNew';
import AuthRoute from './AuthRoute';
import AuthHome from './AuthHome';
import SignUpPage from './pages/SignUpPage';
import firebase from 'firebase';
import AboutPage from './pages/AboutPage'

class App extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp({
      apiKey: "AIzaSyDpu6F_gSJSDaQpBpcDzRKlZCrRolAHPNU",
      authDomain: "webchat-cd37d.firebaseapp.com",
      databaseURL: "https://webchat-cd37d.firebaseio.com",
      projectId: "webchat-cd37d",
      storageBucket: "webchat-cd37d.appspot.com",
      messagingSenderId: "844081723797"
    });

    this.state = {
      isSignedIn: false
    };
  }

  componentWillMount() {
    this.setState({
      isSignedIn: !!window.localStorage.getItem('jwt')
    })
  }

  signOut = (event) => {
    event.preventDefault();
    window.localStorage.removeItem('jwt');
    this.setState({isSignedIn: false});
    window.location.replace("/sign_in_new_user");
  }

  signIn = () => {
    this.setState({isSignedIn: true})
  }

  signUp = () => {
    this.setState({isSignedIn: true})
  }

  get currentUser() {
    const jwt = window.localStorage.getItem('jwt');
    return jwt && jwtDecode(jwt);
  }

  render() {
    const {currentUser} = this;
    const {isSignedIn} = this.state;

    return (
      <Router>
        <div className="App">
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
            <div className='container'>
            {isSignedIn
                ? ([
                  <Link className='navbar-brand' to='/'>GameUp</Link>
              ]) : (
                <Link className = 'nav-link' to='/sign_in_new_user'>GameUp</Link>
              )
            }
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className='nav-link' to='/about'>About</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to='/rooms/new'>New Room</Link>
                </li>
              </ul>
              <div className="nav-item">
                {isSignedIn
                  ? ([ < span className = "navbar-text" key = "123" > Hello, {
                    currentUser.full_name
                  }({currentUser.username})!</span>, < a key = "321" className = 'signOutNav' href onClick = {
                    this.signOut
                  } > Sign out < /a>
                ]) : (
                  <Link className = 'nav-link' to='/sign_in'>Sign In</Link>
                )
              }
            </div>
            <div className="nav-item">
              {isSignedIn
                ? (
                  <span key='3333'></span>
                )
                : (
                  <Link key='232' className='nav-link' to='/sign_up'>Sign Up</Link>
                )
              }
            </div>
            </div>
          </div>
          </nav>
          <div className='container'>
            <h1>GameUp</h1>
            <Switch>
              <Route exact isAuthenticated={isSignedIn} path='/' component={RoomIndexPage}/>
              <Route exact path='/about' component={AboutPage}/>
              <Route exact path='/sign_in' render={(props) => <SignInPage {...props} onSignIn={this.signIn}/>}/>
              <Route exact path='/sign_in_new_user' render={(props) => <SignInPageForNew {...props} onSignIn={this.signIn}/>}/>
              <Route exact path='/sign_up' render={(props) => <SignUpPage {...props} onSignIn={this.signIn}/>}/>
              <AuthRoute exact isAuthenticated={isSignedIn} path='/rooms/new' component={RoomNewPage}/>
              <Route exact path='/rooms/:id' isAuthenticated={isSignedIn} db={this.props.firebase} component={RoomShowPage}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
