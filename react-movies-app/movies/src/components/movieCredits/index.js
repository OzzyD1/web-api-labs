import React from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MovieCredits = ({ credits }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const navigate = useNavigate();

    return (
        <div>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "" : "repeat(3, 1fr)",
                    gap: 2,
                }}
            >
                {credits.cast.map((c) => (
                    <List key={c.id}>
                        <Paper sx={{ backgroundColor: "#ededed" }}>
                            <ListItemButton
                                onClick={() => navigate(`/people/${c.id}`)}
                            >
                                <ListItemAvatar>
                                    <Avatar
                                        src={`https://image.tmdb.org/t/p/w92/${c.profile_path}`}
                                        alt=""
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={c.name}
                                    secondary={c.character}
                                />
                            </ListItemButton>
                        </Paper>
                    </List>
                ))}
            </Box>
        </div>
    );
};

export default MovieCredits;
