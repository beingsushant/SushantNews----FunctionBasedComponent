import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ()=> {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="home">SushantNews</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar me-auto">
                            <li className="nav-item">
                                    <Link className="list" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="list" to="/general">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="list" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="list" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="list" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="list" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="list" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="list" to="/technology">Technology</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
}

export default Navbar;
