import React, { Component } from "react";

import Movies from "../Movies/Movies";
import Preloader from "../Preloader/Preloader";
import Search from "../Search/Search";
import "./main.css";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
    state = {
        movies: [],
        loading: true,
    };
    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=iron`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    }
    searchMovies = (str, type = "all") => {
        this.setState({ loading: true });
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
                type !== "all" ? `&type=${type}` : ""
            }`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    };

    render() {
        const { movies, loading } = this.state;
        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies} />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        );
    }
}

export default Main;
