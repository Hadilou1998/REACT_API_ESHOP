import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        role: '',
        email: '',
        adresse: '',
        codepostal: '',
        ville: '',
    });
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ 
            ...prevData, 
            [id]: value 
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/register", formData);
            navigate("/login");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Create an Account</h2>
                            {msg && <div className="alert alert-danger">{msg}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="role" className="form-label">Role</label>
                                    <input type="text" className="form-control" id="role" name="role" value={formData.role} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="adresse" className="form-label">Adresse</label>
                                    <input type="text" className="form-control" id="adresse" name="adresse" value={formData.adresse} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="codepostal" className="form-label">Code Postal</label>
                                    <input type="text" className="form-control" id="codepostal" name="codepostal" value={formData.codepostal} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ville" className="form-label">Ville</label>
                                    <input type="text" className="form-control" id="ville" name="ville" value={formData.ville} onChange={handleChange} required />
                                </div>
                                <button type="submit" className="btn btn-primary">Create Account</button>
                            </form>
                            <p className="mt-3 text-center">
                                Already have an account? <Link to="/login">Login Here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    );
}

export default Register;