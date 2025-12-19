import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
};

export default Register;