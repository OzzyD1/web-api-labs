import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from "../../images/film-poster-placeholder.png";
import { Link } from "react-router-dom";
import { CardActionArea } from "@mui/material";

export default function MovieCard({ movie, action }) {
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: "#D4D2D5" }}>
            <CardActionArea>
                <Link
                    to={`/movies/${movie.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <CardHeader
                        title={
                            <Typography variant="h6" component="p">
                                {movie.title}{" "}
                            </Typography>
                        }
                    />

                    <CardMedia
                        sx={{ height: 500 }}
                        image={
                            movie.poster_path
                                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                                : img
                        }
                    />

                    <CardContent>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography variant="h6" component="p">
                                    <CalendarIcon fontSize="small" />
                                    {movie.release_date}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h6" component="p">
                                    <StarRateIcon fontSize="small" />
                                    {"  "} {movie.vote_average.toFixed(1)}{" "}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    {/* <CardActions disableSpacing>
                        {action(movie)}
                        <Link to={`/movies/${movie.id}`}>
                            <Button variant="outlined" size="medium">
                                More Info
                            </Button>
                        </Link>
                    </CardActions> */}
                </Link>
            </CardActionArea>
        </Card>
    );
}
