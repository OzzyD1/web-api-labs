import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getGenres, searchMovies } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";

const formControl = {
    margin: 1,
    minWidth: 220,
};

export default function FilterMoviesCard(props) {
    const [selectedYear, setSelectedYear] = useState("");

    const { data, error, isLoading, isError } = useQuery("genres", getGenres);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const genres = data.genres;
    if (genres[0].name !== "All") {
        genres.unshift({ id: "0", name: "All" });
    }

    const handleChange = (e, type, value) => {
        e.preventDefault();
        props.onUserInput(type, value);
    };

    // Searches movies but does not render movies to the screen
    const handleTextChange = (e) => {
        const searchTerm = e.target.value;
        handleChange(e, "name", e.target.value);
        const results = searchMovies(["queryKey", searchTerm]);
    };

    const handleGenreChange = (e) => {
        handleChange(e, "genre", e.target.value);
    };

    const handleYearChange = (e) => {
        setSelectedYear(e, "year", e.target.value);
    };

    return (
        <Card
            sx={{
                maxWidth: 345,
                backgroundColor: "#D4D2D5",
            }}
            variant="outlined"
        >
            <CardContent>
                <Typography variant="h5" component="h1">
                    <SearchIcon sx={{ margin: "0 0.2em 0 0.2em" }} />
                    Filter
                </Typography>
                <TextField
                    sx={{ ...formControl }}
                    id="fullWidth"
                    label="Search field"
                    type="search"
                    variant="outlined"
                    value={props.titleFilter}
                    onChange={handleTextChange}
                />
                <FormControl sx={{ ...formControl }}>
                    <InputLabel id="genre-label">Genre</InputLabel>
                    <Select
                        labelId="genre-label"
                        id="genre-select"
                        defaultValue=""
                        value={props.genreFilter}
                        onChange={handleGenreChange}
                    >
                        {genres.map((genre) => {
                            return (
                                <MenuItem key={genre.id} value={genre.id}>
                                    {genre.name}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
                <FormControl sx={{ ...formControl }}>
                    <InputLabel id="genre-label">Year</InputLabel>
                </FormControl>
            </CardContent>
        </Card>
    );
}
