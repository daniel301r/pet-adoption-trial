import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



import Header from './components/header/Header';
import SplashPage from './components/SplashPage';
import PetPage from './components/pet page/PetPage';


function App() {

  


  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={SplashPage}/>
        <Route path='/petpage/' component={PetPage}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
