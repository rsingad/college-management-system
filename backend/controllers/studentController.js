const db = require('../config/db');

// Get All Students
exports.getAllStudents = (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// Add Student
exports.addStudent = (req, res) => {
  const { name, roll, enroll, address, branch, birthdate, semester, studentMobile, fatherMobile, guideNumber, fatherEmail } = req.body;
  const sql = `
    INSERT INTO students (name, roll, enroll, address, branch, birthdate, semester, studentMobile, fatherMobile, guideNumber, fatherEmail)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(sql, [name, roll, enroll, address, branch, birthdate, semester, studentMobile, fatherMobile, guideNumber, fatherEmail], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send('Student added successfully');
  });
};

// Update Student
exports.updateStudent = (req, res) => {
  const id = req.params.id;
  const { name, roll, enroll, address, branch, birthdate, semester, studentMobile, fatherMobile, guideNumber, fatherEmail } = req.body;

  console.log('Updating student ID:', id); // Debug
  console.log('Data:', req.body); // Debug

  const sql = `
    UPDATE students SET name=?, roll=?, enroll=?, address=?, branch=?, birthdate=?, semester=?, studentMobile=?, fatherMobile=?, guideNumber=?, fatherEmail=?
    WHERE id=?
  `;

  db.query(sql, [name, roll, enroll, address, branch, birthdate, semester, studentMobile, fatherMobile, guideNumber, fatherEmail, id], (err, result) => {
    if (err) {
      console.error('Update Error:', err); // Print actual error
      return res.status(500).send(err);
    }
    res.send('Student updated successfully');
  });
};


// Delete Student
exports.deleteStudent = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM students WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Student deleted successfully');
  });
};
