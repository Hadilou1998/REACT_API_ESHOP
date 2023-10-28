import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

function App()
{
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Login/>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
        <Route path='/home'>
          <Navbar/>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
