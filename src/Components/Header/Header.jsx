import React, { useContext, useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";

function Header() {
  const [mblmenu, setmblmenu] = useState(false);
  const { user, logout } = UserAuth();
  const nav = useNavigate();

  const handleLogout = async () =>{
    try{
      await logout()
      nav("/")
    }
    catch(err){
      alert(err.message)
    }
  }

  return (
    <div className="header">
      <div className="headerLeft">
        {/* logo */}
        <div className="logo">
          <Link to="/">
            Cinema<span className="go">Go</span>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div onClick={() => setmblmenu(!mblmenu)} className="mblmenu">
           <img src="/menu.png" alt="" />
        </div>

      {/* Menu Items */}
        <div className={mblmenu ? "menu active" : "menu"}>
            <Link to="/movies/popular" className="header_icon">
              Popular
            </Link>
            <Link to="/movies/top_rated" className="header_icon">
              Top Rated
            </Link>
            <Link to="/movies/upcoming" className="header_icon">
              Upcoming
            </Link>

          {/* Auth Menu */}
          {
            user? 
            (
              <div className="auth">
                <Link to="profile">
                  Profile
                </Link>
                  <button className="logout" onClick={handleLogout}>Logout</button>
               </div>
            )
            :
            (
              <div className="auth">
                <Link to="login" className="login">
                  Login
                </Link>
                <Link to="register" className="register">
                  Register
                </Link>
               </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Header;
