// src/components/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <h1>Welcome to SyncStart</h1>
            <h2>
                <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to get started!
            </h2>
        </div>
    );
}

export default HomePage;
