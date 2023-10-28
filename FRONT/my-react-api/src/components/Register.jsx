import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../context/userContext";

const Register = () =>
{
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="username"><strong>Username</strong></label>
                        <input type="text" placeholder="Enter your username" name="username" className="form-control rounded-0" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter your password" name="password" className="form-control rounded-0" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="role"><strong>Role</strong></label>
                        <input type="text" placeholder="Enter your role" name="role" className="form-control rounded-0" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter your email" name="email" className="form-control rounded-0" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="adresse"><strong>Adresse</strong></label>
                        <input type="text" placeholder="Enter your address" name="adresse" className="form-control rounded-0" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="codepostal"><strong>Codepostal</strong></label>
                        <input type="text" placeholder="Enter your zip code" name="codepostal" className="form-control rounded-0" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ville"><strong>Ville</strong></label>
                        <input type="text" placeholder="Enter your city" name="ville" className="form-control rounded-0" />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default Register