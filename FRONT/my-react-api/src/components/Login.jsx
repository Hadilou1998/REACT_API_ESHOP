import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const Auth = async (e) =>
    {
        e.preventDefault();

        try
        {
            await axios.post("http://localhost:8080/login",
            {
                email: email,
                password: password
            });
            history.push("/home")
        }
        catch (error)
        {
            if (error.response)
            {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={Auth}>
                <label>Username: </label>
                <input type="text" id="username" onChange={e => setUsername(e.target.value)} placeholder="Enter your username" />
                <label>Password: </label>
                <input type="password" id="password" onChange={e => setPassword(e.target.value)} placeholder="Enter your password" />

                <input type="submit" value="Login" className="btn btn-success w-100 rounded-0" />
            </form>
        </div>
    )
};

export default Login;