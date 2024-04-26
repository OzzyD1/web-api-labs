import React from "react";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const PeopleDetails = ({ details, credits }) => {
    const root = {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 1.5,
        margin: "0.9em 0 .5em 0",
        backgroundColor: "#D4D2D5",
    };
    const chip = { margin: 0.5 };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const navigate = useNavigate();

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Paper sx={{ ...root }}>
                        <Avatar
                            src={`https://image.tmdb.org/t/p/w500/${details.profile_path}`}
                            alt={details.name}
                            sx={{ width: "80%", height: "80%" }}
                            variant="square"
                        />
                    </Paper>
                </Grid>

                <Grid item xs={7}>
                    <Paper sx={{ ...root }}>
                        <Typography variant="h3">{details.name}</Typography>
                        <Divider />
                    </Paper>

                    <Paper sx={{ ...root }}>
                        <Typography variant="body1">
                            {details.biography}
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper sx={{ ...root }}>
                        <Chip label="Born" sx={{ ...chip }} color="primary" />
                        <Chip label={details.birthday} sx={{ ...chip }} />
                        {details.deathday ? (
                            <>
                                <Chip
                                    label="Died"
                                    sx={{ ...chip }}
                                    color="primary"
                                />
                                <Chip
                                    label={details.deathday}
                                    sx={{ ...chip }}
                                />
                            </>
                        ) : null}
                    </Paper>
                    <Paper sx={{ ...root }}>
                        <Chip
                            label="Know For"
                            sx={{ ...chip }}
                            color="primary"
                        />
                        <Chip
                            label={details.known_for_department}
                            sx={{ ...chip }}
                        />
                    </Paper>
                </Grid>

                <Grid item xs={12}></Grid>

                <Grid item xs={12}>
                    <Paper sx={{ ...root }}>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: isMobile
                                    ? ""
                                    : "repeat(3, 1fr)",
                                gap: 2,
                            }}
                        >
                            {credits.cast.map((c) => (
                                <List key={c.id}>
                                    <Paper>
                                        <ListItemButton
                                            onClick={() =>
                                                navigate(`/movies/${c.id}`)
                                            }
                                        >
                                            <ListItemAvatar>
                                                <Avatar
                                                    src={`https://image.tmdb.org/t/p/w92/${c.poster_path}`}
                                                    alt=""
                                                />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={c.title}
                                                secondary={c.character}
                                            />
                                        </ListItemButton>
                                    </Paper>
                                </List>
                            ))}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default PeopleDetails;
