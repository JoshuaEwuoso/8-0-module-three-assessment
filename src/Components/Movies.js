import React from "react";
import "../App.css";

class Movies extends React.Component {

    constructor() {
        super();
        this.state = {
          movies: [],
          title: "",
          releaseDate: "",
          description: "",
        };
      }
    
      
    movieList = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                movies: data,
            });
        });
    }
        
    componentDidMount() {
        this.movieList();
    }
        
    movieInfo = (event) => {
        const { value } = event.target;
        const { movies } = this.state;
            
        if (value) {
            let movie = movies.filter((movie) => movie.title === value);
            this.setState({
                title: movie[0].title,
                releaseDate: movie[0].release_date,
                description: movie[0].description,
            });
        }
    };
                
    render() {
        const { movies, title, releaseDate, description } = this.state;
            return (
                <div className="movies">
                    <h1>Select a Movie</h1>
                    <select onChange={this.movieInfo}>
                        <option></option>
                    {movies.map((movie, index) => (
                        <option value={movie.title} key={index}>
                            {movie.title}
                        </option>
                    ))}
                    </select>
                    <h2>Title: {title}</h2>
                    <h2>Release Date: {releaseDate}</h2>
                    <h2>Description: {description}</h2> 
                    </div>
            );
    }
}

export default Movies;