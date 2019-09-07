import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './component/navigation';
import LoginComponent from './component/login/loginComponent';
import DevicesComponent from './component/devices/devicesComponent';


function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Switch>
          <Route path="/devices/:username" component={DevicesComponent}/>
          <Route path="/"  component={LoginComponent}/>
        </Switch>  
      </main>
    </div>
  );
}

export default App;
