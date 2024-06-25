import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
import { Button } from "react-bootstrap";

function MyNavbar() {
  //use this line to get the variables of context
  // const { user, logout } = useContext(AuthContext);
  // const handleLogout = () => {
  //   logout();
  // };

  return (
    <nav>
      <Link to="login">Login</Link> | <Link to="myprofile">My Profile</Link> |{" "}
      <Link to="register">Register</Link>
    </nav>
  );
}

export default MyNavbar;
