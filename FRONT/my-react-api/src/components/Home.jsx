import React, { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router-dom";

const Home = () =>
{
    const [username, setUsername] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() => 
    {
        refreshToken();
        getUsers();
    }, []);

    const refreshToken = async () =>
    {
        try
        {
            const response = await axios.get("http://localhost:8080/token");
            setToken(response.data.accessToken);
            setUsername(decoded.username);
            setExpire(decoded.exp);
        } 
        catch (error)
        {
            if (error.response)
            {
                history.push("/");
            } 
        }
    }

    const axiosJWT = axios.create();
};

export default Home;