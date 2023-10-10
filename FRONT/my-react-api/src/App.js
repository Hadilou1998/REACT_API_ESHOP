import React/*, { useState }*/ from 'react';
import './App.css';
/*import Axios from 'axios';
import logo from './logo.svg';*/

function App()
{
  return (
    <div className="App">
      <div>
        <form method="POST">
          <div>
            <label className="username">Username</label>
            <input type="text" placeholder="Veuillez saisir votre pseudo ou identifiant" />
          </div>
          <div>
            <label className="password">Password</label>
            <input type="password" placeholder="Veuillez saisir votre mot de passe" />
          </div>
        </form>
      </div>
    </div>
  );
  /*const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [roleReg, setRoleReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [adresseReg, setAdresseReg] = useState('');
  const [codepostalReg, setCodepostalReg] = useState('');
  const [villeReg, setVilleReg] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState('');

  Axios.defaults.withCredentials = true;


  const register = () =>
  {
    Axios.post("http://localhost:8080/register",
    {
      username: usernameReg,
      password: passwordReg,
      role: roleReg,
      email: emailReg,
      adresse: adresseReg,
      codepostal: codepostalReg,
      ville: villeReg,
    }).then((response) => 
    {
      console.log(response);
    });
  };

  const login = () =>
  {
    Axios.post("http://localhost:8080/login",
    {
      username: username,
      password: password,
    }).then((response) =>
    {
      if (!response.data.message) 
      {
        setLoginStatus(response.data.message); 
      }
      else 
      {
        setLoginStatus(response.data[0].message);
      }
    });
  };

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
        <label>Password</label>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
        <label>Role</label>
        <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} /><br/>
        <label>Email</label>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
        <label>Adresse</label>
        <input type="text" placeholder="Adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} /><br/>
        <label>Codepostal</label>
        <input type="text" placeholder="Codepostal" value={codepostal} onChange={(e) => setCodepostal(e.target.value)} /><br/>
        <label>Ville</label>
        <input type="text" placeholder="Ville" value={ville} onChange={(e) => setVille(e.target.value)} /> <br />
        <button onClick={register}>Register</button>
      </div>
      <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /> <br/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={login}>Login</button>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  );*/
}

export default App;
