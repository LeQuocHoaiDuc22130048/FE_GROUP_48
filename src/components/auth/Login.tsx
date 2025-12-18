import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login:', { email, password });
    };

    return (
        <>
            <div className="auth-header">
                <h2 className="auth-title">AppChat</h2>
                <p className="auth-subtitle">Vui lòng nhập thông tin để đăng nhập</p>
            </div>




        </>
    );
};

export default Login;
