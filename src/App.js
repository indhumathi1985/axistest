import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './component/navigation';
import LoginComponent from './component/login/loginComponent';
import DevicesComponent from './component/devices/devicesComponent';
import DeviceDetailcomponent from './component/devices/deviceDetailComponent';


function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Switch>
          <Route path="/devices/:id" component={DevicesComponent}/>
          <Route path="/deviceDetails/:id"  component={DeviceDetailcomponent}/>
          <Route path="/"  component={LoginComponent}/>
        </Switch>  
      </main>
    </div>
  );
}

export default App;
