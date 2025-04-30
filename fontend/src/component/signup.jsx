import React, { useEffect, useState } from 'react';
import axios from 'axios';


const SignupForm = () => {
  const [formData, setFormData] = useState({
    enroll: '',
    name: '',
    password: '',
    accountType: 'student'
  });
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("accountType");
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/authontication', formData);
      alert('Account created successfully!');
      setFormData({
        enroll: '',
        name: '',
        password: '',
        accountType: 'student'
      });
    } catch (err) {
      console.error(err);
      alert('Error creating account');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 col-md-6 mx-auto">
        <h3 className="text-center mb-4 text-primary">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Enrollment Number</label>
            <input type="text" name="enroll" value={formData.enroll} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Account Type</label>
            <select name="accountType" value={formData.accountType} onChange={handleChange} className="form-select">
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="btn btn-success w-100">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
