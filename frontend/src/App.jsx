import './App.css';
import Home from "./components/Home";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Add from "./components/Add";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
