
import Movies from "../components/Movies.js";
import React, { Component } from "react";

class PageFavourites extends Component {
  constructor() {
    super();
    this.state = { movies: null };
  }
  componentDidMount() {
    this.fetchMovies();
  }
  fetchMovies = () => {
    var keys = Object.keys(localStorage);
    let data = [];
    keys.forEach((key) => {
      data.push(JSON.parse(localStorage.getItem(key)));
    });
    this.setState({ movies: data });
  };

  render() {
    return (
      <section className="favs-page">

        {this.state.movies !== null && this.state.movies.length > 0 ? (
          <Movies moviesData={this.state.movies} />
        ) : (
          <h3 className="p-4">
            You have no favourite movies. Please add some movies to your list by clicking on the like button. 
          </h3>
        )}
      </section>
    );
  }
}

export default PageFavourites;
