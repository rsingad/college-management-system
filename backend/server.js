require('dotenv').config();
const express=require("express");
const cors=require("cors");
const app=express();


const port=process.env.PORT;
const studentRouters=require("./routes/studentRoutes");
const authoRouter=require("./routes/authoRouter")
const attendanceRoutes = require('./routes/attendance');
app.use(cors());
app.use(express.json());
app.use('/api/students', studentRouters);
app.use('/api/authontication', authoRouter);
app.use('/api', attendanceRoutes);
app.listen(port, () => {
    console.log(` Server running at http://localhost:${port}`);
  });
