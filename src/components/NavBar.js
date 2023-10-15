import React from 'react';
import "./style/NavBar.css"


function NavBar() {
  return (
    <div className="navbar">
      <div className="header-left">
        <img src="ericsson_codeFlow.png" alt="Stack Overflow Logo" width="50px" height="50px"/>
        <h4>Questions</h4>
        <h4>Trending</h4>
        <h4>About</h4>
      </div>

      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="signin">
      <div className="logIn">
        <button className="logIn">Login</button>
      </div>
      
      <div className="signUp">
        <button className="signUp">SignUp</button>
      </div>
      </div>
    </div>
  );
}

export default NavBar;