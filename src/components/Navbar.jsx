import React from 'react'
import {Link} from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand" style={{cursor:"pointer"}}><span class="badge bg-light text-dark fs-4">Home</span></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span span class="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item fs-4">
                    <Link to='/business' className="nav-link active" aria-current="page">Business</Link>
                    </li>
                    <li className="nav-item fs-4">
                    <Link to='/entertainment' className="nav-link active" aria-current="page">Entertainment</Link>
                    </li>
                    <li className="nav-item fs-4">
                    <Link to='/health' className="nav-link active" aria-current="page">Health</Link>
                    </li>
                    <li className="nav-item fs-4">
                    <Link to='/sports' className="nav-link active" aria-current="page">Sports</Link>
                    </li>
                    <li className="nav-item fs-4">
                    <Link to='/technology' className="nav-link active" aria-current="page">Technology</Link>
                    </li>
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
            </div>
        </nav>
    </div>
  )
}
