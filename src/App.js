import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Locations from "./Components/Locations";
import Movies from "./Components/Movies";
import NavBar from "./Components/NavBar";
import People from "./Components/People";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/people" component={People} />
          <Route path="/locations" component={Locations} />
        </Switch>
      </div>
    );
  }
}

export default App;
