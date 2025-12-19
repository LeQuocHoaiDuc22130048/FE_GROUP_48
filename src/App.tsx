import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './components/auth/AuthLayout';
import Login from './components/auth/Login';
// import Register from './components/auth/Register';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    {/*<Route path="/register" element={<Register />} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
