import React from "react";
import { BiSolidDonateBlood, BiSolidUserCircle } from "react-icons/bi";
import "./Header.css";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    alert("logout Successfully");
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand">
            {/* <BiSolidDonateBlood size={32} color="#8B0000" /> */}
            <img
              src="https://150132389.v2.pressablecdn.com/wp-content/uploads/2014/03/Screen-shot-2013-11-04-at-11.38.20-AM.png"
              alt="Blood Bank"
              style={{
                width: "30px",
                height: "30px",
                marginRight: "10px",
                borderRadius: "50%",
              }}
            />
            <p>Blood Bank</p>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <p className="nav-link">
                <BiSolidUserCircle size={26} /> Welcome{" "}
                {user?.name.split(" ")[0] ||
                  user?.hospitalName ||
                  user?.organisationName}
                ! &nbsp;
                <span className="badge text-bg-secondary">{user?.role}</span>
              </p>
            </li>
            {location.pathname === "/" ||
            location.pathname === "/donar" ||
            location.pathname === "/hospital" ? (
              <li className="nav-item">
                <Link to="/analytics" className="nav-link">
                  Analytics
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
            )}
            <li className="nav-item">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
