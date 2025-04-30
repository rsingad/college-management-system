
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("accountType");
        if (isLoggedIn) {
          navigate("/dashboard");
        }
      }, []);
      
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">MyCollege</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="container text-center my-5">
                <h1 className="display-4 fw-bold">Welcome to MyCollege</h1>
                <p className="lead">Your journey to success starts here.</p>
                <NavLink
                    to="/login"
                    className="btn btn-light btn-lg mt-3"
                    activeClassName="active"
                >
                    log in
                </NavLink>
                <NavLink
                    to="/signup"
                    className="btn btn-light btn-lg mt-3"
                    activeClassName="active"
                >
                    Signup
                </NavLink>
            </div>

        </div>
    );
}
export default Home;