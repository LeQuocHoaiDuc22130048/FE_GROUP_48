import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';

const Register: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
        // Xóa lỗi khi người dùng bắt đầu nhập lại
        if (error) setError(null);
    };

    const validateForm = () => {
        if (!formData.fullName.trim()) return "Vui lòng nhập họ và tên.";
        if (!formData.email.includes('@')) return "Email không hợp lệ.";
        if (formData.password.length < 6) return "Mật khẩu phải có ít nhất 6 ký tự.";
        if (formData.password !== formData.confirmPassword) return "Mật khẩu xác nhận không khớp.";
        return null;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            // Giả lập gọi API đăng ký (Delay 1.5s)
            await new Promise(resolve => setTimeout(resolve, 1500));

            console.log('Register Success:', formData);
            // Có thể thêm logic lưu token hoặc thông báo thành công ở đây

            // Chuyển hướng sang trang login sau khi đăng ký thành công
            navigate('/login');
        } catch (err) {
            setError('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="auth-header">
                <h2 className="auth-title">Tạo tài khoản</h2>
                <p className="auth-subtitle">Bắt đầu hành trình của bạn ngay hôm nay</p>
            </div>

            {error && <div style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '0.9rem', padding: '0.5rem', background: '#fee2e2', borderRadius: '0.5rem' }}>{error}</div>}

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
                        disabled={isLoading}
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
                        disabled={isLoading}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="password">Mật khẩu</label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                        placeholder="Tạo mật khẩu (tối thiểu 6 ký tự)"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
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
                        disabled={isLoading}
                    />
                </div>

                <button
                    type="submit"
                    className="submit-btn"
                    disabled={isLoading}
                    style={{ opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}
                >
                    {isLoading ? 'Đang xử lý...' : 'Đăng ký'}
                </button>
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
