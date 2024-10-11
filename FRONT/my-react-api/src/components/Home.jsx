import React, { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [username, setUsername] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        refreshToken();
        getUsers();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get("http://localhost:8080/token");
            setToken(response.data.accessToken);
            const decoded = jwtDecode(response.data.accessToken);
            setUsername(decoded.username);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                navigate("/");
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get("http://localhost:8080/token");
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwtDecode(response.data.accessToken);
            setUsername(decoded.username);
            setExpire(decoded.exp);       
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    const getUsers = async () => {
        try {
            const response = await axiosJWT.get("http://localhost:8080/users", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }

    return (
        <div>
            <h1>Welcome, {username}!</h1>
            <button onClick={() => navigate("/logout")}>Logout</button>
            <h2>User List:</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;