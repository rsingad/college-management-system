const db = require('../config/db');

exports.getstudents=(req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
}

exports.getAttendance = (req, res) => {
    db.query('SELECT * FROM attendance', (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  };
exports.takeAttendance=(req, res) => {
  const { date, records } = req.body;

  const values = records.map(record => [record.studentId, date, record.status]);

  const sql = "INSERT INTO attendance (student_id, date, status) VALUES ?";
  db.query(sql, [values], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Attendance marked successfully"});
  });
}