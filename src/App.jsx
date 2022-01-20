import './App.css';
import React from 'react';
import Info from './components/Info';
import Word from './components/Word';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {



  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <h1 className="App">Welcome</h1>
        </Route>
        <Route exact path="/:info">
          <Info></Info>
        </Route>
        <Route path="/:info/:textcolor/:backgroundcolor">
          <Info></Info>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
