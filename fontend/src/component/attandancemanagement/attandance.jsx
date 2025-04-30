import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Attendance = () => {
  const styles = {
    container: { padding: '30px' },
    form: { display: 'flex', flexDirection: 'column', gap: '15px' },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '15px',
    },
    select: {
      padding: '5px',
      borderRadius: '5px',
    },
    button: {
      padding: '10px 15px',
      backgroundColor: '#ffc107',
      color: '#000',
      border: 'none',
      borderRadius: '5px',
      fontWeight: 'bold',
      marginTop: '10px',
      width: '200px',
    },
  };
  
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [date, setDate] = useState('');

  // Fetch students from backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/students')
      .then(res => setStudents(res.data))
      .catch(err => console.error('Error fetching students:', err));
  }, []);

  const handleStatusChange = (studentId, status) => {
    setAttendance({ ...attendance, [studentId]: status });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const attendanceData = {
      date,
      records: students.map((s) => ({
        studentId: s.id,
        status: attendance[s.id] || 'Absent',
      }))
    };

    axios.post('http://localhost:5000/api/attendance', attendanceData)
      .then(() => alert("✅ Attendance Marked Successfully!"))
      .catch(err => alert("❌ Error marking attendance!"));
  };

  return (
    <div style={styles.container}>
      <h2>🗓️ Mark Attendance</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          Select Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>

        <table style={styles.table}>
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu) => (
              <tr key={stu.id}>
                <td>{stu.roll}</td>
                <td>{stu.name}</td>
                <td>
                  <select
                    value={attendance[stu.id] || ''}
                    onChange={(e) => handleStatusChange(stu.id, e.target.value)}
                    required
                    style={styles.select}
                  >
                    <option value="">Select</option>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button type="submit" style={styles.button}>Submit Attendance</button>
      </form>
    </div>
  );
};
export default Attendance;