import React from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
const Navbar = () => {
    const navigate = useNavigate()
    const logout = () => {

        console.log("logout")
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        navigate("/loginRegister")
        window.location.reload();
    }

    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Events</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#!navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/events'>Events</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/createEvent'>Create Event</Link>
                    </li>
                    {localStorage.getItem("token") == null && <li className="nav-item">
                    <Link className="nav-link" to='/loginRegister'>Login/Register</Link>
                    </li>}
                    {localStorage.getItem("token") != null && <li className="nav-item">
                    <button className="nav-link" onClick={logout}>logout</button>
                    </li>}
                </ul>
                </div>
            </div>
        </nav>
        </div>
       
    )
}

export default Navbar