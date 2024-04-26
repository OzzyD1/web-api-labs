import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavoritesIcon = ({ movie, onAdd }) => {
    const context = useContext(MoviesContext);
    const { favorites } = useContext(MoviesContext);

    if (favorites.find((id) => id === movie.id)) {
        movie.favorite = true;
    } else {
        movie.favorite = false;
    }

    const handleAddToFavorites = (e) => {
        e.preventDefault();
        context.addToFavorites(movie);
        onAdd();
    };

    return (
        <IconButton
            aria-label="add to favorites"
            onClick={handleAddToFavorites}
        >
            <FavoriteIcon
                color={movie.favorite ? "secondary" : "primary"}
                fontSize="large"
            />
        </IconButton>
    );
};

export default AddToFavoritesIcon;
