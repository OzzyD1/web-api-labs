import React, { useState, useContext } from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlist";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import SnackbarComponent from "../components/addedToSnackbar";
import Box from "@mui/material/Box";
import { AuthContext } from "../contexts/authContext";

const HomePage = (props) => {
    const context = useContext(AuthContext);

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const { data, error, isLoading, isError } = useQuery(
        ["discover", { page: currentPage }],
        getMovies
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const movies = data;

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
                title="Discover Movies"
                movies={movies}
                action={(movie) => {
                    return context.isAuthenticated ? (
                        <>
                            <AddToFavoritesIcon
                                onAdd={handleClick}
                                movie={movie}
                            />
                            <AddToWatchlistIcon
                                onAdd={handleClick}
                                movie={movie}
                            />
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
                message="Movie Added"
            />
        </>
    );
};
export default HomePage;
