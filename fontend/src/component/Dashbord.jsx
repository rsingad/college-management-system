import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navaget = useNavigate()
  const role = localStorage.getItem("accountType");
  const user_name = localStorage.getItem("name");
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📚 College Management Dashboard</h1>
      <h2 className="text-primary mb-4">Welcome, {user_name}</h2>
      <button onClick={() => {
        localStorage.removeItem("accountType");
        localStorage.removeItem("enroll");
        navaget("/")
      }}>logout</button>

      <div style={styles.grid}>
        {role === 'student' && (
          <>
            <Link to="/students" style={styles.card}>Students</Link>
            <Link to="/results" style={styles.card}>View Results</Link>
            <Link to="/showAttendance" style={styles.card}>View attandance</Link>


            {/* <Students /> */}
            {/* <ViewResult /> */}
          </>
        )}
        {role === 'teacher' && (
          <>
            <Link to="/students" style={styles.card}>Students</Link>
            <Link to="/teachers" style={styles.card}>Manage Teachers</Link>

            <Link to="/attendance" style={styles.card}>Mark Attendance</Link>
            <Link to="/exams" style={styles.card}>Enter Exam Marks</Link>
            <Link to="/results" style={styles.card}>View Results</Link>
            <Link to="/showAttendance" style={styles.card}>View attandance</Link>

          </>
        )}
        {
          role === "admin" && (
            <>
              <Link to="/students" style={styles.card}>Students</Link>
              <Link to="/ManageStudents" style={styles.card}>Manage Students</Link>
              <Link to="/teachers" style={styles.card}>Manage Teachers</Link>
              <Link to="/courses" style={styles.card}>Assign Courses</Link>
              <Link to="/attendance" style={styles.card}>Mark Attendance</Link>
              <Link to="/exams" style={styles.card}>Enter Exam Marks</Link>
              <Link to="/results" style={styles.card}>View Results</Link>
              <Link to="/showAttendance" style={styles.card}>View attandance</Link>

            </>
          )
        }


      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  heading: {
    marginBottom: '30px',
    color: '#333',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '0 20px',
  },
  card: {
    padding: '20px',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '10px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '18px',
    transition: 'all 0.3s ease',
  },
};

export default Dashboard;
