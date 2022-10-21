import React from "react";
import logo from "../images/ha-logo.png";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="app_container">
        <header className="navbar">
          <div className="HA">
            <img
              // src={require("./images/ha-logo.png").default}
              src={logo}
              alt="Hebbale Academy logo"
              width="300px"
              height="150px"
            />
          </div>
          <div className="nav_menubtns">
            <div className="socialmedia">
              <div>
                <img
                  className="soc_icon"
                  src="https://storage.googleapis.com/ha-website/navbar/linked-in-icon.png"
                  alt="linkedIn"
                  width="25px"
                  height="25px"
                />

                <img
                  className="soc_icon"
                  src="https://storage.googleapis.com/ha-website/navbar/youtube-icon.png"
                  alt="youtube"
                  width="25px"
                  height="25px"
                />

                <img
                  className="soc_icon"
                  src="https://storage.googleapis.com/ha-website/navbar/instagram-icon.png"
                  alt="instagram"
                  width="25px"
                  height="25px"
                />

                <img
                  className="soc_icon"
                  src="https://storage.googleapis.com/ha-website/navbar/twitter-con.png"
                  alt="twitter"
                  width="25px"
                  height="25px"
                />

                <img
                  className="soc_icon"
                  src="https://storage.googleapis.com/ha-website/navbar/facebook-icon.png"
                  alt="facebook"
                  width="25px"
                  height="25px"
                />
              </div>
              <span className="secondary_btns">
                <span className="nav_secbtns">
                  <a href="#">FAQ</a>
                  {/* <link to="/Faq">FAQ</link> */}
                </span>
                <span className="nav_secbtns color">
                  <a href="">Contact Us</a>
                  {/* <link to="/ContactUs">Contact Us</link> */}
                </span>
              </span>
              <button className="login">Login</button>
            </div>
            <div className="nav_menu">
              <span className="nav_menu_items">Home</span>
              <span className="nav_menu_items">Catalog</span>
              <span className="nav_menu_items">Individual</span>
              <span className="nav_menu_items">Institutions</span>
              <span className="nav_menu_items">Employer</span>
              <span className="nav_menu_items">About Us</span>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
