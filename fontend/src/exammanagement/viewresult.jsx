import React, { useState } from 'react';

const Results = () => {
  const [results] = useState([
    {
      id: 1,
      name: 'Ravi Kumar',
      roll: '101',
      subjects: [
        { name: 'DBMS', marks: 78 },
        { name: 'DSA', marks: 65 },
        { name: 'OS', marks: 82 },
      ],
    },
    {
      id: 2,
      name: 'Priya Meena',
      roll: '102',
      subjects: [
        { name: 'DBMS', marks: 55 },
        { name: 'DSA', marks: 40 },
        { name: 'OS', marks: 35 },
      ],
    },
    {
      id: 3,
      name: 'Ankit Singh',
      roll: '103',
      subjects: [
        { name: 'DBMS', marks: 90 },
        { name: 'DSA', marks: 92 },
        { name: 'OS', marks: 88 },
      ],
    },
  ]);

  const calculateTotal = (subjects) => {
    return subjects.reduce((total, sub) => total + sub.marks, 0);
  };

  const isPass = (subjects) => {
    return subjects.every((sub) => sub.marks >= 35);
  };

  return (
    <div style={styles.container}>
      <h2>📄 Student Results</h2>
      {results.map((student) => (
        <div key={student.id} style={styles.card}>
          <h3>{student.name} ({student.roll})</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {student.subjects.map((sub, index) => (
                <tr key={index}>
                  <td>{sub.name}</td>
                  <td>{sub.marks}</td>
                </tr>
              ))}
              <tr style={{ fontWeight: 'bold' }}>
                <td>Total</td>
                <td>{calculateTotal(student.subjects)}</td>
              </tr>
              <tr style={{ fontWeight: 'bold', color: isPass(student.subjects) ? 'green' : 'red' }}>
                <td>Status</td>
                <td>{isPass(student.subjects) ? 'PASS' : 'FAIL'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: { padding: '30px' },
  card: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    marginBottom: '25px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
  },
};

export default Results;
