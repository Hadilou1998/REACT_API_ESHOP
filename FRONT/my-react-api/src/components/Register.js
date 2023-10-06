import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const Register = () => 
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [adresse, setAdresse] = useState('');
    const [codepostal, setCodepostal] = useState('');
    const [ville, setVille] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const Register = async(e) =>
    {
        e.preventDefault();
        try
        {
            await axios.post('http://localhost:8080/customers', 
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
        } catch (error) 
        {
            if (error.response) 
            {
                setMessage(error.response.data.message)    
            }
        }
    }
}

export default Register