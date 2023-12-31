import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar({ isOpen, setIsOpen }) {
    const { isLoggedIn, user, logout } = useAuth();
    const navigate = useNavigate();

    console.log('User object:', user);
    const handleLogout = () => {
        logout();
        navigate("/login");
        setIsOpen(false); // Close the sidebar on logout
    };

    return (
        <div className={`fixed top-0 left-0 h-screen bg-gray-800 text-white w-64 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out shadow-lg`}>
            <Link to="/">
                <h1 className="text-3xl font-bold text-center text-blue-500 py-4">SyncStart</h1>
            </Link>
            {isLoggedIn && user && (
                <div className="text-center text-sm mb-4">
                    <p>Welcome,</p>
                    <p className="text-blue-300">{user.email}</p> {/* Displaying the user's email */}
                </div>
            )}
            <nav className="px-4">
                <ul className="mt-8 space-y-4">
                    {isLoggedIn ? (
                        <>
                            <li>
                                <Link to="/profile" className="text-lg hover:text-blue-300 transition-colors flex items-center">
                                    <span className="icon mr-3">👤</span> Profile
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="text-lg hover:text-blue-300 transition-colors flex items-center w-full text-left">
                                    <span className="icon mr-3">🚪</span> Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/login" className="text-lg hover:text-blue-300 transition-colors flex items-center">
                                    <span className="icon mr-3">🔓</span> Login
                                </Link>
                            </li>
                            <li>
                                <Link to="/register" className="text-lg hover:text-blue-300 transition-colors flex items-center">
                                    <span className="icon mr-3">📝</span> Register
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
