const express = require('express');
const router = express.Router();
// const db = require('../db');
const { getstudents, takeAttendance, getAttendance } = require('../controllers/attendController');

// GET all students
router.post('/attendance', takeAttendance);
router.get('/attendance', getAttendance);

router.get('/students', getstudents);
// POST attendance

module.exports = router;
