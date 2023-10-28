import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../context/userContext";
import ErrorNotice from "./ErrorNotice";

function Register()
{
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();
    const [email, setEmail] = useState();
    const [adresse, setAdresse] = useState();
    const [codepostal, setCodepostal] = useState();
    const [ville, setVille] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useNavigate();
    
    const submit = async (e) =>
    {
        e.preventDefault();

        try 
        {
            const newUser = {username, password, role, email, adresse, codepostal, ville};
            await axios.post("http://localhost:8080/register", newUser);
            const loginResponse = await axios.post("http://localhost:8080/login", 
            {
                username, password
            });
            setUserData({
                token   :   loginResponse.data.token,
                user    :   loginResponse.data.user
            });
            localStorage.setItem("my-token", loginResponse.data.token);
            history.push("/");    
        } 
        catch(err) 
        {
            err.response.data.msg && setError(err.response.data.msg);   
        }
    };

    return (
        <div className="register">
            <h2>Register</h2>
            {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
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