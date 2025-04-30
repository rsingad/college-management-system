import React, { useState } from 'react';

const Teachers = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, name: 'Dr. Neha Sharma', email: 'neha@college.com', subject: 'DBMS' },
    { id: 2, name: 'Mr. Anil Verma', email: 'anil@college.com', subject: 'DSA' },
  ]);

  const [newTeacher, setNewTeacher] = useState({ name: '', email: '', subject: '' });

  const accountType = localStorage.getItem('accountType'); // 👈 important

  const handleAddTeacher = (e) => {
    e.preventDefault();
    const newId = teachers.length + 1;
    setTeachers([...teachers, { id: newId, ...newTeacher }]);
    setNewTeacher({ name: '', email: '', subject: '' });
  };

  return (
    <div style={styles.container}>
      <h2>👩‍🏫 Manage Teachers</h2>

      {/* 👉 Show form only if accountType is admin */}
      {accountType === 'admin' && (
        <form onSubmit={handleAddTeacher} style={styles.form}>
          <input
            type="text"
            placeholder="Name"
            value={newTeacher.name}
            onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
            required
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            value={newTeacher.email}
            onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
            required
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Subject"
            value={newTeacher.subject}
            onChange={(e) => setNewTeacher({ ...newTeacher, subject: e.target.value })}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Add Teacher</button>
        </form>
      )}

      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.name}</td>
              <td>{teacher.email}</td>
              <td>{teacher.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: { padding: '30px' },
  form: { display: 'flex', gap: '10px', marginBottom: '20px' },
  input: {
    padding: '10px',
    flex: '1',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
  },
};

export default Teachers;
