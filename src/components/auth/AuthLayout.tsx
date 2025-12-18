import React from 'react';
import { Outlet } from 'react-router-dom';
import './auth.css';

const AuthLayout: React.FC = () => {
    return (
        <div className="auth-container">
            <div className="auth-left">
                <div className="auth-card">
                    <Outlet/>
                </div>
            </div>
            <div className="auth-right">
                <div className="auth-right-content">
                    <h2 className="auth-right-title">Kết nối với bạn bè</h2>
                    <p className="auth-right-text">
                        Tham gia cộng đồng của chúng tôi và trải nghiệm cách tốt nhất để kết nối với mọi người trên khắp
                        thế giới. An toàn, nhanh chóng và thú vị.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AuthLayout;
