import React, {Component} from 'react';
import {Token} from '../../utls/requests';
import SignInForm from '../SignInForm'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class SignInPage extends Component {
  constructor(props) {
    super(props);
  }

  createToken = (params) => {
    const {
      onSignIn = () => {}
    } = this.props

    Token.post(params).then(({jwt}) => {
      window.localStorage.setItem('jwt', jwt);
      this.props.history.push('/');
      onSignIn()
    })
  }

  render() {
    return (
      <div className='SignInPage'>
        <div className='RoomIndexPage'>
          <div className='jumbotron bg'>
            <h2 className='fontJumb'>Welcome To GameUp!</h2>
            <h2 className='fontJumb'>Looking for other players? You came to the right place.</h2>
            <p className='fontJumb'>You can join any of the room below and start palying with other gamers!</p>
          </div>
          <br/>
          <h3>
            Your not signed in!! To use GameUp you need to sign in with existing account or create a new account in this <Link to='/sign_up'>Link</Link>
          </h3>
          <br/>
        </div>
        <h2>Sign In</h2>
        <SignInForm onSubmit={this.createToken}/>
      </div>
    )
  }
}

export default SignInPage;
