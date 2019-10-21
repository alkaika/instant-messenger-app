import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './login/login';
import Signup from './signup/signup';
import Dashboard from './dashboard/dashboard';

const firebase = require('firebase');
require('firebase/firestore')

firebase.initializeApp({
  apiKey: "AIzaSyAzbkmHJCrp-AkGxCDPSM1oXfC23BsfQlU",
  authDomain: "instant-messenger-app-95d67.firebaseapp.com",
  databaseURL: "https://instant-messenger-app-95d67.firebaseio.com",
  projectId: "instant-messenger-app-95d67",
  storageBucket: "instant-messenger-app-95d67.appspot.com",
  messagingSenderId: "877508171207",
  appId: "1:877508171207:web:3094107761f065fc0e75e2",
  measurementId: "G-Z86TQC90EL"
});

const routing = (
    <Router>
        <div id='routing-container'>
            <Route path='/login' component={Login}></Route>
            <Route path='/signup' component={Signup}></Route>
            <Route path='/dashboard' component={Dashboard}></Route>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
