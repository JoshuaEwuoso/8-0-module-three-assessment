import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
    <div className="NavBar">
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/people">People</Link>
      <Link to="/location">Location</Link>
    </div>
    );
  }
}

export default NavBar;