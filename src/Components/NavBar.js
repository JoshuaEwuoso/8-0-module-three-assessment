import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <nav className="NavBar">
                <Link to="/">
                    <img
                        className="logo"
                        src="https://thedailyaztec.com/wp-content/uploads/2020/01/SG-1-e1580191326367.jpg"
                        alt="logo"
                    />
                </Link>
                <Link to="/movies">Movies</Link>
                <Link to="/people">People</Link>
                <Link to="/locations">Locations</Link>
    </nav>
    );
  }
}

export default NavBar;