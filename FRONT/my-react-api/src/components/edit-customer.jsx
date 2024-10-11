import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './edit-customer.css';

function EditCustomer() {
    const [customer, setCustomer] = useState({
        username: '',
        password: '',
        role: '',
        email: '',
        adresse: '',
        codepostal: '',
        ville: ''
    });
    const [msg, setMsg] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/customers/${id}`);
                setCustomer(response.data);
            } catch (error) {
                setMsg('Failed to fetch customer');
            }
        };
        fetchCustomer();
    }, [id]);

    const handleChange = (e) => {
        setCustomer({...customer, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:8080/customers/${id}`, customer);
            setMsg('Customer updated successfully');
        } catch (error) {
            setMsg('Failed to update customer');
        }
    };

    return (
        <div className="edit-customer-container">
            <div className="edit-customer-form">
                <h2>Edit Customer Information</h2>
                {msg && <div className={msg.includes('success') ? 'success-message' : 'error-message'}>{msg}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" value={customer.username} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" value={customer.password} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="role">Role:</label>
                        <input type="text" id="role" value={customer.role} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={customer.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="adresse">Adresse:</label>
                        <input type="text" id="adresse" value={customer.adresse} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="codepostal">Code Postal:</label>
                        <input type="text" id="codepostal" value={customer.codepostal} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ville">Ville:</label>
                        <input type="text" id="ville" value={customer.ville} onChange={handleChange} required />
                    </div>
                    <button type="submit" className='update-button'>Update Customer</button>
                </form>
            </div>
        </div>
    );
}

export default EditCustomer;