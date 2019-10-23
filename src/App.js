import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import SplashPage from './components/SplashPage';
import PetPage from './components/petsPage/PetPage';
import RequestedPet from './requestedPet/RequestedPet';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={SplashPage}/>
        <Route path='/petpage' component={PetPage}/>
        <Route path='/singlepet/:pet_id' component={RequestedPet}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
