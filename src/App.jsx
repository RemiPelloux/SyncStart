import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import Sidebar from "./components/Sidebar";

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <Router>
            <div className="flex">
                <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}/>

                <div
                    className={`flex-1 transition-margin duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
                    {/* Toggle button */}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="fixed bottom-4 left-4 z-30 bg-blue-500 hover:bg-blue-700 text-white rounded-full p-2 focus:outline-none focus:ring transition ease-in-out duration-300"
                        aria-label="Toggle Sidebar"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>

                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
