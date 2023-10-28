import React from "react";
import ReactDOM from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";


axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render
(
    <React.StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </React.StrictMode>
);