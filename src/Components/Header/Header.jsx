import React, { useContext, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {

  const [mblmenu, setmblmenu] = useState(false);

  return (
    <div className="header">
      <div className="headerLeft">
        <div className="logo">
          <Link to="/">
            Cinema<span className="go">Go</span>
          </Link>
        </div>
        <div onClick={()=>setmblmenu(!mblmenu)} className="mblmenu">
          <img src="/menu.png" alt="" />
        </div>
        <div className={mblmenu?"menu active" :"menu"}>
          <Link to="/movies/popular" className="header_icon">
            Popular
          </Link>
          <Link to="/movies/top_rated" className="header_icon">
            Top Rated
          </Link>
          <Link to="/movies/upcoming" className="header_icon">
            Upcoming
          </Link>
          <div className="auth">
            <Link to="login" className="login"> Login </Link>
            <Link to="register" className="register"> Register </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
