import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Students = () => {
  // const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const [students,setStudents]=useState([]);
  const fetchStudents = async () => {
    const res = await axios.get('http://localhost:5000/api/students');
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);
  

  return (
    <div style={styles.container}>
      <h2>👨‍🎓 Manage Students</h2>



      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>enroll no</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu) => (
            <tr key={stu.id}>
              <td>{stu.id}</td>
              <td>{stu.name}</td>
              <td>{stu.enroll}</td>
              <td>{stu.branch}</td>
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
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
  },
  th: {
    border: '1px solid #ddd',
    padding: '10px',
    backgroundColor: '#f2f2f2',
  },
  td: {
    border: '1px solid #ddd',
    padding: '10px',
  },
};

export default Students;
