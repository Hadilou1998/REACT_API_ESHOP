import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/login", {
                email: email,
                password: password
            });
            navigate("/home");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Welcome Back</h2>
                <p>Please login to your account</p>
                {msg && <div className="error-message">{msg}</div>}
                <form onSubmit={Auth}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="register-link">
                    Don't have an account? <a href="/register">Register here</a>
                </p>
            </div>
        </div>
    );
}

export default Login;