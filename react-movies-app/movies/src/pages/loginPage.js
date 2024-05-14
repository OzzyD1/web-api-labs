import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Alert from "@mui/material/Alert";

const LoginPage = (props) => {
    const context = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const login = async () => {
        try {
            await context.authenticate(userName, password);
        } catch (error) {
            setError("User not found");
        }
    };

    let location = useLocation();

    // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
    const { from } = location.state
        ? { from: location.state.from.pathname }
        : { from: "/" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }

    return (
        <Grid container spacing={3}>
            <Paper>
                <Box component="form">
                    <Grid xs={10}>
                        <TextField
                            id="username"
                            label="Username"
                            variant="outlined"
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                        />
                    </Grid>
                    <Grid xs={10}>
                        <TextField
                            id="password"
                            type="password"
                            label="Password"
                            variant="outlined"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </Grid>
                    <Grid xs={10}>
                        <Button
                            color="inherit"
                            variant="outlined"
                            onClick={login}
                        >
                            Log in
                        </Button>
                    </Grid>
                    <Grid>
                        <Typography>
                            Not Registered?
                            <Link to="/signup">Sign Up!</Link>
                        </Typography>
                    </Grid>
                </Box>
            </Paper>
        </Grid>
    );
};

export default LoginPage;
