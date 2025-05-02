import React from "react";
import "./SideBar.css";
import home_icon from "../../assets/home.png";
import game_icon from "../../assets/game.png";
import automobile_icon from "../../assets/automobile.png";
import sports_icon from "../../assets/sports.png";
import entertainment_icon from "../../assets/entertainment.png";
import tech_icon from "../../assets/tech.png";
import music_icon from "../../assets/music.png";
import blogs_icon from "../../assets/blogs.png";
import news_icon from "../../assets/news.png";
import simon from "../../assets/simon.png";
import vik from "../../assets/vik.png";
import talia from "../../assets/talia.png";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="shortcut-links">
        <div className="side-links">
          <img src={home_icon} alt="" />
          <p>Home</p>
        </div>
        <div className="side-links">
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div className="side-links">
          <img src={automobile_icon} alt="" />
          <p>Automobiles</p>
        </div>
        <div className="side-links">
          <img src={sports_icon} alt="" />
          <p>Sports</p>
        </div>
        <div className="side-links">
          <img src={entertainment_icon} alt="" />
          <p>Entertainment</p>
        </div>
        <div className="side-links">
          <img src={tech_icon} alt="" />
          <p>Technology</p>
        </div>
        <div className="side-links">
          <img src={music_icon} alt="" />
          <p>Music</p>
        </div>
        <div className="side-links">
          <img src={blogs_icon} alt="" />
          <p>Blogs</p>
        </div>
        <div className="side-links">
          <img src={news_icon} alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-links">
          <img src={simon} alt="" />
          <p>Miniminter</p>
        </div>
        <div className="side-links">
          <img src={vik} alt="" />
          <p>Vikkstar123</p>
        </div>
        <div className="side-links">
          <img src={talia} alt="" />
          <p>Talia Mar</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
