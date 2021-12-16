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
                        src="https://cdn.onebauer.media/one/media/5fac/0224/ceb4/e33d/d05b/2527/howls-moving-castle.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill"
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