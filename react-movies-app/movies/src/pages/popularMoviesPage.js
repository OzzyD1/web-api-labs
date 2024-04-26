import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getPopularMovies } from "../api/tmdb-api";
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlist";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import useAuth from "../hooks/useAuth";
import SnackbarComponent from "../components/addedToSnackbar";
import Box from "@mui/material/Box";

const PopularMoviesPage = (props) => {
    // const userEmail = useAuth(auth);

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const { data, error, isLoading, isError } = useQuery(
        ["popular", { page: currentPage }],
        getPopularMovies
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
                title="Popular Movies"
                movies={movies}
                // action={(movie) => {
                //     return userEmail ? (
                //         <>
                //             <AddToFavoritesIcon
                //                 onAdd={handleClick}
                //                 movie={movie}
                //             />
                //             <AddToWatchlistIcon movie={movie} />
                //         </>
                //     ) : null;
                // }}
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
export default PopularMoviesPage;
