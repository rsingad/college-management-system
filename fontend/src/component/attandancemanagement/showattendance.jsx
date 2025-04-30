import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowAttendance = () => {
  const [records, setRecords] = useState([]);
//   student ke api get krre dono ko comapir krnavana h or comapair hone vale data element ko store krke 
// attendande mai name or rolno show krvana hai vo bad mai kruga .....

  useEffect(() => {
    axios.get('http://localhost:5000/api/attendance')
      .then(res => setRecords(res.data))
      .catch(err => console.error('Error fetching attendance:', err));
  }, []);

  return (
    <div style={{ padding: '30px' }}>
      <h2>📋 Attendance Records</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {records.map((rec, index) => (
            <tr key={index}>
              <td>{rec.roll}</td>
              <td>{rec.name}</td>
              <td>{new Date(rec.date).toLocaleDateString()}</td>
              <td>{rec.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowAttendance;
