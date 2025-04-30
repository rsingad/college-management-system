import React, { useState } from 'react';

const Marks = () => {
  const [students] = useState([
    { id: 1, name: 'Ravi Kumar', roll: '101' },
    { id: 2, name: 'Priya Meena', roll: '102' },
    { id: 3, name: 'Ankit Singh', roll: '103' },
  ]);

  const [subject, setSubject] = useState('');
  const [marksData, setMarksData] = useState({});

  const handleMarkChange = (id, value) => {
    setMarksData({ ...marksData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Exam Marks:', { subject, marksData });
    alert("✅ Marks Submitted Successfully!");
  };

  return (
    <div style={styles.container}>
      <h2>📊 Enter Exam Marks</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={{ marginBottom: '10px' }}>
          Subject:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            placeholder="e.g., DBMS"
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>

        <table style={styles.table}>
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu) => (
              <tr key={stu.id}>
                <td>{stu.roll}</td>
                <td>{stu.name}</td>
                <td>
                  <input
                    type="number"
                    placeholder="Marks"
                    value={marksData[stu.id] || ''}
                    onChange={(e) => handleMarkChange(stu.id, e.target.value)}
                    required
                    style={styles.input}
                    min="0"
                    max="100"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button type="submit" style={styles.button}>Submit Marks</button>
      </form>
    </div>
  );
};

const styles = {
  container: { padding: '30px' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '15px',
  },
  input: {
    padding: '5px',
    width: '80px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    marginTop: '10px',
    width: '200px',
  },
};

export default Marks;
