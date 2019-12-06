import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './components/GameScreen';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/game">
              <Game/>
            </Route>
            <Redirect from="/" to="/home"/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
