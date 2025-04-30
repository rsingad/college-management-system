import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ enroll: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("accountType");
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/authontication/login', formData);
      alert(res.data.message);
      // You can save user info in localStorage or context
      const actype=localStorage.setItem("accountType", res.data.user.accountType);
      const userid=localStorage.setItem("name", res.data.user.name);
      console.log(actype,userid);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 col-md-6 mx-auto">
        <h3 className="text-center mb-4 text-primary">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Enrollment Number</label>
            <input type="text" name="enroll" value={formData.enroll} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" required />
          </div>
          <button type="submit" className="btn btn-success w-100">Login</button>
          {message && <p className="text-danger text-center mt-2">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
