import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

function App()
{
  return (
    <BrowserRouter>
      <Switch>
        <Routes>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
          <Route path='/home'>
            <Header/>
            <Home/>
          </Route>
        </Routes>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
