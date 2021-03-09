import MoviesCards from "../MoviesCards/MoviesCards";
import "./movies.css";

function Movies(props) {
    const { movies = [] } = props;
    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => {
                    return <MoviesCards key={movie.imdbID} {...movie} />;
                })
            ) : (
                <h4>Nothing found</h4>
            )}
        </div>
    );
}

export default Movies;
