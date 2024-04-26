import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getNowPlayingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlist";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import { auth } from "../auth/firebase";
import useAuth from "../hooks/useAuth";
import SnackbarComponent from "../components/addedToSnackbar";
import Box from "@mui/material/Box";

const NowPlayingMoviesPage = (props) => {
    const userEmail = useAuth(auth);

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const { data, error, isLoading, isError } = useQuery(
        ["now playing", { page: currentPage }],
        getNowPlayingMovies
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const movies = data.results;

    const handleClick = () => {
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setSnackbarOpen(false);
    };

    return (
        <>
            <PageTemplate
                title="Now Playing"
                movies={movies}
                action={(movie) => {
                    return userEmail ? (
                        <>
                            <AddToFavoritesIcon
                                onAdd={handleClick}
                                movie={movie}
                            />
                            <AddToWatchlistIcon movie={movie} />
                        </>
                    ) : null;
                }}
            />
            <Paper>
                <Box display="flex" justifyContent="center">
                    <Pagination
                        count={data.total_pages}
                        page={currentPage}
                        onChange={(event, value) => setCurrentPage(value)}
                        size="large"
                        sx={{
                            margin: ".2em",
                            padding: ".2em",
                        }}
                    />
                </Box>
            </Paper>
            <SnackbarComponent
                open={snackbarOpen}
                handleClose={handleSnackbarClose}
                message="Movie added to favorites!"
            />
        </>
    );
};

export default NowPlayingMoviesPage;
