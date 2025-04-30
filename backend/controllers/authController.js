const db = require('../config/db');

// Get All Students
exports.getAllauth = (req, res) => {
  db.query('SELECT * FROM authProfile', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// add acount ya create new account
exports.postAuthUser = (req, res) => {
  const { enroll, name, password, accountType } = req.body;
  db.query(
    "INSERT INTO authProfile(enroll, name, password, accountType) VALUE(?,?,?,?)",
    [enroll, name, password, accountType],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).send('Successfully created user account');
    }
  );
};

// POST: /api/authontication/login

exports.loginAuthUser = (req, res) => {
  const { enroll, password } = req.body;

  db.query("SELECT * FROM authProfile WHERE enroll = ?", [enroll], (err, results) => {
    if (err) return res.status(500).send("Database error");

    if (results.length === 0) {
      return res.status(401).json({ message: "Enrollment not found" });
    }

    const user = results[0];

    if (user.password === password) {
      return res.status(200).json({
        message: "Login successful",
        user: {
          id: user.id,
          name: user.name,
          accountType: user.accountType,
          enroll: user.enroll
        }
      });
    } else {
      return res.status(401).json({ message: "Incorrect password" });
    }
  });
};
