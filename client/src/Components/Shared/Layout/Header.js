import React from "react";
import { BiSolidDonateBlood, BiSolidUserCircle } from "react-icons/bi";
import "./Header.css";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate=useNavigate();

  const handleLogout =()=>{
    localStorage.clear();
    alert('logout Successfully');
    navigate('/login');
  }
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand">
            <BiSolidDonateBlood size={32} color="#8B0000" />
            <p>Blood Bank</p>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <p className="nav-link">
                <BiSolidUserCircle size={26} /> Welcome{" "}
                {user?.name.split(" ")[0] || user?.hospitalName || user?.organisationName}! &nbsp;
                <span className="badge text-bg-secondary">{user?.role}</span>
              </p>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
