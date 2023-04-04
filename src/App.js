import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar.js';
import HomeScreen from './screens/HomeScreen.js';
import TeamsScreen from './screens/TeamsScreen.js';
import PlayersScreen from './screens/PlayersScreen.js';
import GamesScreen from './screens/GamesScreen.js';


function App() {
  return (
    <Router>
      <div className = "App">
        <NavBar />
        <Routes>
          <Route path = "/" exact component  = {<HomeScreen/>} />
          <Route path = "/teams" exact component = {<TeamsScreen/>} />
          <Route path = "/players" exact component = {<PlayersScreen/>}/>
          <Route path = "/games" exact component = {<GamesScreen/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
