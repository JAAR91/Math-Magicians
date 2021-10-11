import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <p>ROCKETS</p>
        </Route>
        <Route exact path="/missions">
          <p>MISSIONS</p>
        </Route>
        <Route exact path="/myprofile">
          <p>My profile</p>
        </Route>
      </Switch>
    </>
  );
}

export default App;
