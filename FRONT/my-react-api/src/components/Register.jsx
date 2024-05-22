import React, { useState } from "react";
import axios from "axios";

function Register()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [adresse, setAdresse] = useState('');
    const [codepostal, setCodepostal] = useState('');
    const [ville, setVille] = useState('');
    const [msg, setMsg] = useState('');
    
    const Register = async (e) =>
    {
        e.preventDefault();

        try 
        {
            const newUser = {username, password, role, email, adresse, codepostal, ville};
            await axios.post("http://localhost:8080/register", 
            {
                username: username,
                password: password,
                role: role,
                email: email,
                adresse: adresse,
                codepostal: codepostal,
                ville: ville
            });
            history.push("/");   
        } 
        catch (error) 
        {
            if (error.response)
            {
                setMsg(error.response.data.msg);    
            }  
        }
    };

    return (
        <div className="register">
            <h2>Register</h2>
            <form onSubmit={submit}>
                <label>Username: </label>
                <input type="text" id="username" onChange={e => setUsername(e.target.value)} placeholder="Enter your username" />
                <label>Password: </label>
                <input type="password" id="password" onChange={e => setPassword(e.target.value)} placeholder="Enter your password" />
                <label>Role: </label>
                <input type="text" id="role" onChange={e => setRole(e.target.value)} placeholder="Enter your role" />
                <label>Email: </label>
                <input type="email" id="email" onChange={e => setEmail(e.target.value)} placeholder="Enter your email" />
                <label>Adresse: </label>
                <input type="text" id="adresse" onChange={e => setAdresse(e.target.value)} placeholder="Enter your address" />
                <label>Codepostal: </label>
                <input type="text" id="codepostal" onChange={e => setCodepostal(e.target.value)} placeholder="Enter your zip code" />
                <label>Ville: </label>
                <input type="text" id="ville" onChange={e => setVille(e.target.value)} placeholder="Enter your city" />
                
                <input type="submit" value="Register" className="btn btn-success w-100 rounded-0" />
            </form>
        </div>
    );
}

export default Register;