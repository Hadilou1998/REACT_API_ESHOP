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
}