import React from "react";
import "../App.css";

class People extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [],
      // info: {},
      error: false,
      input: "",
      age: "",
      name: "",
      gender: "",
    };
  }

  people = () => {
    fetch("https://ghibliapi.herokuapp.com/people")
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        people: data,
      });
    })
    .catch(() => {
        this.setState({
         error: true,
       });
    })
  };

  componentDidMount() {
    this.people();
  }

  getInfo = (event) => {
    const { value } = event.target;
    this.setState({
      input: value,
    });
  };

  getPerson = (event) => {
    event.preventDefault();
    const { people, input } = this.state;
    const person = people.filter((person) => person.name === input);
    if (person[0]) {
      this.setState({
        name: person[0].name,
        age: person[0].age,
        gender: person[0].gender,
        input: "",
        error: false,
      });
    } else {
      this.setState({
        error: true,
      });
    }
  };

  render() {
    const { age, name, gender, error } = this.state;
    return (
      <div className="people">
        <h1>Search for a Person</h1>
        <form onSubmit={this.getPerson}>
          <input type="text" onChange={this.getInfo} placeholder="Find a person" />
          <button type="submit">Submit</button>
        </form>
        {error ? (
          <h2>Not Found</h2>
        ) : (
          <>
            <h2>
              Name: {name}
              <br />
              Age: {age}
              <br />
              Gender: {gender}
            </h2>
          </>
        )}
      </div>
    );
  }
}

export default People;