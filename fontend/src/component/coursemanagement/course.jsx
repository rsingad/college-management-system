import React, { useState } from 'react';

const Courses = () => {
  const [assignments, setAssignments] = useState([
    { id: 1, teacher: 'Dr. Neha Sharma', course: 'DBMS' },
    { id: 2, teacher: 'Mr. Anil Verma', course: 'DSA' },
  ]);

  const [newAssign, setNewAssign] = useState({ teacher: '', course: '' });

  const handleAssign = (e) => {
    e.preventDefault();
    const newId = assignments.length + 1;
    setAssignments([...assignments, { id: newId, ...newAssign }]);
    setNewAssign({ teacher: '', course: '' });
  };

  return (
    <div style={styles.container}>
      <h2>📘 Assign Courses</h2>

      <form onSubmit={handleAssign} style={styles.form}>
        <input
          type="text"
          placeholder="Teacher Name"
          value={newAssign.teacher}
          onChange={(e) => setNewAssign({ ...newAssign, teacher: e.target.value })}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Course Name"
          value={newAssign.course}
          onChange={(e) => setNewAssign({ ...newAssign, course: e.target.value })}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Assign</button>
      </form>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Teacher</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.teacher}</td>
              <td>{item.course}</td>
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
    backgroundColor: '#17a2b8',
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

export default Courses;
