import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

const Register: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle registration logic here
        console.log('Register:', formData);
    };

    return (
        <>
            <div className="auth-header">
                <h2 className="auth-title">Tạo tài khoản</h2>
                <p className="auth-subtitle">Bắt đầu hành trình của bạn ngay hôm nay</p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="fullName">Họ và tên</label>
                    <input
                        type="text"
                        id="fullName"
                        className="form-input"
                        placeholder="Nhập họ và tên của bạn"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder="Nhập email của bạn"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="password">Mật khẩu</label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                        placeholder="Tạo mật khẩu"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="confirmPassword">Xác nhận mật khẩu</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="form-input"
                        placeholder="Nhập lại mật khẩu"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="submit-btn">Đăng ký</button>
            </form>

            <div className="auth-footer">
                <p>Đã có tài khoản?
                    <Link to="/login" className="auth-link">Đăng nhập ngay</Link>
                </p>
            </div>
        </>
    );
};

export default Register;
