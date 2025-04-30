// src/components/ManageStudents.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageStudents = () => {
    const [students, setStudents] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        roll: '',
        enroll: '',
        address: '',
        branch: '',
        birthdate: '',
        semester: '',
        studentMobile: '',
        fatherMobile: '',
        guideNumber: '',
        fatherEmail: ''
    });
    const [editingId, setEditingId] = useState(null);

    const fetchStudents = async () => {
        const res = await axios.get('http://localhost:5000/api/students');
        setStudents(res.data);
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingId) {
            await axios.put(`http://localhost:5000/api/students/${editingId}`, formData);
            setEditingId(null);
            showToast('Student updated successfully', 'primary');
        } else {
            await axios.post('http://localhost:5000/api/students', formData);
            showToast('Student added successfully', 'success');
        }
        setFormData({
            name: '',
            roll: '',
            enroll: '',
            address: '',
            branch: '',
            birthdate: '',
            semester: '',
            studentMobile: '',
            fatherMobile: '',
            guideNumber: '',
            fatherEmail: ''
        });
        fetchStudents();
    };

    const handleEdit = (student) => {
        setFormData({
            name: student.name,
            roll: student.roll,
            enroll: student.enroll,
            address: student.address,
            branch: student.branch,
            birthdate: student.birthdate ? student.birthdate.split('T')[0] : '', // Format YYYY-MM-DD
            semester: student.semester,
            studentMobile: student.studentMobile,
            fatherMobile: student.fatherMobile,
            guideNumber: student.guideNumber,
            fatherEmail: student.fatherEmail
        });
        setEditingId(student.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this student?')) {
            await axios.delete(`http://localhost:5000/api/students/${id}`);
            showToast('Student deleted successfully', 'danger');
            fetchStudents();
        }
    };

    const showToast = (message, type) => {
        const toastEl = document.getElementById('liveToast');
        const toastBody = document.querySelector('.toast-body');
        const toastHeader = document.querySelector('.toast-header');
        toastBody.textContent = message;
        toastHeader.className = `toast-header text-bg-${type}`;
        const toast = new window.bootstrap.Toast(toastEl);
        toast.show();
    };

    return (
        <div className="container py-5">
            <div className="card shadow p-4">
                <h2 className="text-center mb-4 text-primary">Manage Students</h2>
                <form onSubmit={handleSubmit} className="row g-3">
                    {[
                        ['name', 'Student Name'],
                        ['roll', 'Roll Number'],
                        ['enroll', 'Enroll Number'],
                        ['address', 'Address'],
                        ['branch', 'Branch'],
                        ['birthdate', 'Birthdate', 'date'],
                        ['semester', 'Semester'],
                        ['studentMobile', 'Student Mobile'],
                        ['fatherMobile', 'Father Mobile'],
                        ['guideNumber', 'Guide Number'],
                        ['fatherEmail', 'Father Email', 'email']
                    ].map(([name, label, type = 'text']) => (
                        <div className="col-md-6" key={name}>
                            <label className="form-label fw-bold text-secondary">{label}</label>
                            <input
                                type={type}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                className="form-control border-primary shadow-sm"
                                required={['name', 'roll', 'enroll'].includes(name)}
                            />
                        </div>
                    ))}
                    <div className="col-12">
                        <button type="submit" className="btn btn-success w-100 fw-semibold">
                            {editingId ? 'Update Student' : 'Add Student'}
                        </button>
                    </div>
                </form>
            </div>

            <div className="table-responsive mt-5">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-primary">
                        <tr>
                            <th>Name</th>
                            <th>Roll</th>
                            <th>Enroll</th>
                            <th>Address</th>
                            <th>Branch</th>
                            <th>Birthdate</th>
                            <th>Semester</th>
                            <th>Student Mobile</th>
                            <th>Father Mobile</th>
                            <th>Guide Number</th>
                            <th>Father Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td>{student.roll}</td>
                                <td>{student.enroll}</td>
                                <td>{student.address}</td>
                                <td>{student.branch}</td>
                                <td>{student.birthdate}</td>
                                <td>{student.semester}</td>
                                <td>{student.studentMobile}</td>
                                <td>{student.fatherMobile}</td>
                                <td>{student.guideNumber}</td>
                                <td>{student.fatherEmail}</td>
                                <td>
                                    <button
                                        onClick={() => handleEdit(student)}
                                        className="btn btn-warning btn-sm me-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(student.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <strong className="me-auto">Notification</strong>
                        <small>Now</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        Student updated successfully
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageStudents;
