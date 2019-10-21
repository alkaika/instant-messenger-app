import React from 'react';
import Signup from './Signup/signup';
import Dashboard from './Dashboard/dashboard';
const firebase = require("firebase");
require("firebase/firestore"); 

class AppContainer extends React.Component {

  componentWillMount() {
    this.checkForSavedAuth();
  }

  render() {
    if(this.state.user)
      return <Dashboard user={this.state.user}></Dashboard>
    else
      return <Signup loginFn={this.loggedIn}></Signup>
  }

  checkForSavedAuth = () => {
    console.log(firebase.auth().currentUser);
  };

  loggedIn = (user) => this.setState({ user: user });

}

export default AppContainer;