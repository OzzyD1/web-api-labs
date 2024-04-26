import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getMovieCredits } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const MoviePage = (props) => {
    const { id } = useParams();

    const {
        data: movie,
        error: movieError,
        isLoading: movieLoading,
        isError: movieErrorOccurred,
    } = useQuery(["movie", { id: id }], getMovie);

    const {
        data: credits,
        error: creditsError,
        isLoading: creditsLoading,
        isError: creditsErrorOccurred,
    } = useQuery(["credits", { id: id }], getMovieCredits);

    if (movieLoading || creditsLoading) {
        return <Spinner />;
    }

    if (movieErrorOccurred) {
        return <h1>{movieError.message}</h1>;
    }

    if (creditsErrorOccurred) {
        return <h1>{creditsError.message}</h1>;
    }

    return (
        <>
            {movie ? (
                <>
                    <PageTemplate movie={movie}>
                        <MovieDetails movie={movie} credits={credits} />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for movie details</p>
            )}
        </>
    );
};

export default MoviePage;
