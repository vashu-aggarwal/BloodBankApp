import React from "react";
import './Header.css'
const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand">Blood Bank App</div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <p className="nav-link">Welcome</p>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger">Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
