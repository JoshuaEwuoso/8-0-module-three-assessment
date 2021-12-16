import React from "react";
import "../App.css";

class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      showList: false,
    };
  }

  getLocations = () => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((res) => res.json())
      .then((data) => {
          this.setState({
              locations: data.map((location) => location.name),
          });
      });
  };
  
  componentDidMount() {
    this.getLocations();
  }

  handleClick = () => {
    this.setState({
      showList: !this.state.showList,
    });
  };

  render() {
    const { locations, showList } = this.state;
    const listItems = locations.map((location, index) => <li key={ index }>{ location }</li>);
    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <button onClick={ this.handleClick }>{ showList ? "Hide Locations" : "Show Locations" }</button>
        <ul>{ showList ? listItems : null }</ul>
      </div>
    );
  }


}


export default Locations;