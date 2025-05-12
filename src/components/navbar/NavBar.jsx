import React from "react";
import "./NavBar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/profile.png";

const NavBar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          src={menu_icon}
          alt=""
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
        />
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="" width={22} />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" width={22} />
        <img src={more_icon} alt="" width={22} />
        <img src={notification_icon} alt="" width={22} />
        <img className="user-icon" src={profile_icon} alt="" width={22} />
      </div>
    </nav>
  );
};

export default NavBar;
