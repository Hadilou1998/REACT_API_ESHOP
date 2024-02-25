import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const submit = async (e) =>
    {
        e.preventDefault();

        try
        {
            await axios.post("http://localhost:8080/login",
            {
                email: email,
                password: password
            });
        }
        catch (error)
        {
            error.response.data.msg && setError(error.response.data.msg);
        }
    }

    return
};

export default Login;