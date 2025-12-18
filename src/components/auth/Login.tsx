import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './auth.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log('Login:', { email, password });
    };

    return (
        <>
            <div className="auth-header">
                <h2 className="auth-title">AppChat</h2>
                <p className="auth-subtitle">Vui lòng nhập thông tin để đăng nhập</p>
            </div>
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder="Nhập email của bạn"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="password">Mật khẩu</label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                        placeholder="Nhập mật khẩu của bạn"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="form-options">
                    <label className="remember-me">
                        <input type="checkbox"/>
                        <span>Ghi nhớ đăng nhập</span>
                    </label>
                    <a href="#" className="forgot-password">Quên mật khẩu?</a>
                </div>

                <button type="submit" className="submit-btn">Đăng nhập</button>
            </form>


        </>
    );
};

export default Login;
