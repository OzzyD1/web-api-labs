import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { auth } from "../../auth/firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const UserAuthentication = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const { handleClose, open } = useContext(AuthContext);

    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setSuccess(true);
            setTimeout(handleClose, 2000);
            console.log("User signed in!");
        } catch (error) {
            console.error(error);
        }
    };

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess(true);
            setTimeout(handleClose, 2000);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 500,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography
                        id="modal-modal-title"
                        variant="h5"
                        component="h2"
                    >
                        {success ? (
                            <Alert
                                icon={<CheckIcon fontSize="inherit" />}
                                severity="success"
                            >
                                Success!
                            </Alert>
                        ) : (
                            "Login/Register"
                        )}
                    </Typography>
                    {!success && (
                        <>
                            <TextField
                                margin="normal"
                                fullWidth
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSignIn}
                            >
                                Sign In
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleRegister}
                                style={{ margin: "0 10px" }}
                            >
                                Register
                            </Button>
                        </>
                    )}
                </Box>
            </Modal>
        </>
    );
};

export default UserAuthentication;
