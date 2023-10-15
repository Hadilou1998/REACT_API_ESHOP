import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Register, Login } from './components';
import Home from './components/Home';

function App()
{
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>    
    </div>
  );
}

export default App;
