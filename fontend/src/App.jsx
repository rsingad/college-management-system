import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/login';
import Dashboard from './component/Dashbord';
import Students from './component/studentmanagement/student';
import Teachers from './component/teachermanagement/teachers';
import Courses from './component/coursemanagement/course';
import Attendance from './component/attandancemanagement/attandance';
import Marks from './exammanagement/ExamMarks';
import Results from './exammanagement/viewresult';
import ManageStudents from './component/studentmanagement/studentmang';
import SignupForm from './component/signup';
import ShowAttendance from './component/attandancemanagement/showattendance';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/students' element={<Students />} />
        <Route path='/ManageStudents' element={<ManageStudents/>}/>
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/attendance' element={<Attendance />} />
        <Route path='/showAttendance' element={<ShowAttendance/>} />
        <Route path='/exams' element={<Marks/>} />
        <Route path='/results' element={<Results />} />
      </Routes>

      {/* <Home /> */}

    </Router>
  );
}
export default App;