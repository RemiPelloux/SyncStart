// src/components/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function HomePage() {
    const { isLoggedIn } = useAuth();

    return (
        <div>
            <h1>Welcome to SyncStart</h1>
            <h2>
                {isLoggedIn ? (
                    <p>You are logged in!</p>
                ) : (
                    <p>
                        <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to get started.
                    </p>
                )}
            </h2>
        </div>
    );
}

export default HomePage;
