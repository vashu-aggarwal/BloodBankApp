import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import { UserMenu } from "./Menus/UserMenu";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "./Menus/sidebar.css";
const Sidebar = () => {
  //GET USER STATE
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (user?.role === "donar") {
  //     navigate("/organisation");
  //   }
  // }, [user?.role, navigate]);
  return (
    <div>
      <div className="sidebar">
        <div className="menu">
          {user?.role === "organisation" && (
            <>
              <div
                className={`menu-item ${location.pathname === "/" && "active"}`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/">Inventor</Link>
              </div>

              <div
                className={`menu-item ${
                  location.pathname === "/donar" && "active"
                }`}
              >
                <i className="fa-duotone fa-solid fa-hand-holding-medical"></i>
                <Link to="/donar">Donar</Link>
              </div>

              <div
                className={`menu-item ${
                  location.pathname === "/hospital" && "active"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/hospital">Hospital</Link>
              </div>
            </>
          )}
          {(user?.role === "donar" || user?.role === "hospital") && (
            <div
              className={`menu-item ${
                location.pathname === "/organisation" && "active"
              }`}
            >
              <i className="fa-solid fa-building-ngo"></i>
              <Link to="/organisation">Organisation</Link>
            </div>
          )}
          {user?.role === "hospital" && (
            <div
              className={`menu-item ${
                location.pathname === "/consumer" && "active"
              }`}
            >
              <i className="fa-solid fa-building-ngo"></i>
              <Link to="/consumer">Consumer</Link>
            </div>
          )}
          {user?.role === "donar" && (
            <div
              className={`menu-item ${
                location.pathname === "/donation" && "active"
              }`}
            >
              <i className="fa-solid fa-truck-droplet"></i>
              <Link to="/donation">Donation</Link>
            </div>
          )}

          {/* {UserMenu.map((menu) => {
            const isActive = location.pathname === menu.path;
            return (
              <div className={`menu-item ${isActive && "active"}`}
                    key={menu.name}
              >
                <i className={menu.icon}></i>
                <Link to={menu.path}>{menu.name}</Link>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
