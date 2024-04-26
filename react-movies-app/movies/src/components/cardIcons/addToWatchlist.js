import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToWatchlistIcon = ({ movie, onAdd }) => {
    const context = useContext(MoviesContext);

    const handleAddtoWatchlist = (e) => {
        e.preventDefault();
        context.addToWatchlist(movie);
        onAdd();
    };

    return (
        <IconButton
            aria-label="add to watchlist"
            onClick={handleAddtoWatchlist}
        >
            <PlaylistAddIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToWatchlistIcon;
