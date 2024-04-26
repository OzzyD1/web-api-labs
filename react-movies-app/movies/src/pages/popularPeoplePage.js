import React, { useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getPopularPeople } from "../api/tmdb-api";
import { CardContent, Grid, Typography } from "@mui/material";
import Header from "../components/headerMovieList";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { ListItemButton } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";

const PopularPeople = (props) => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const { data, error, isLoading, isError } = useQuery(
        ["popularPeople", { page: currentPage }],
        getPopularPeople
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const people = data.results;

    return (
        <>
            <Grid container sx={{ padding: "15px" }}>
                <Grid item xs={12}>
                    <Header title="Popular People" />
                </Grid>
                <Grid item container spacing={2}>
                    {people.map((p) => (
                        <Grid
                            key={p.id}
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            xl={2}
                        >
                            <ListItemButton
                                onClick={() => navigate(`/people/${p.id}`)}
                            >
                                <Card sx={{ display: "flex" }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={`https://image.tmdb.org/t/p/w500/${p.profile_path}`}
                                            alt={p.original_name}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src =
                                                    "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
                                            }}
                                        />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <CardContent>
                                            <Typography
                                                component="div"
                                                variant="h4"
                                            >
                                                {p.original_name}
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                color="text.secondary"
                                                component="div"
                                            >
                                                {`Known For: ${p.known_for_department}`}
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </ListItemButton>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
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
        </>
    );
};
export default PopularPeople;
