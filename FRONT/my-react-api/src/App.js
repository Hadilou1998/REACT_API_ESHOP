import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import UserContext from './context/userContext';

function App()
{
  const [ userData, setUserData ] = useState
  ({
    token : undefined,
    user  : undefined 
  });

  useEffect(() => 
  {
    const checkLoggedIn = async () =>
    {
      let token = localStorage.getItem("my-token");
      if (token == null) 
      {
        localStorage.setItem("my-token", "");
        token = "";  
      }
      const tokenResponse = await axios.post("http://localhost:8080/customers/tokenIsValid", null, {headers: {"x-my-token": token}});
      if (tokenResponse.data) 
      {
        const userRes = await axios.get("http://localhost:8080/customers/", 
        {
          headers: { "x-my-token": token },
        });
        setUserData
        ({
          token,
          user: userRes.data
        }); 
      }
    }

    checkLoggedIn();
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Header />
        <Routes>
          <Route exact path='/' component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
