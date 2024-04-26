import React, { useState } from "react";

export const AuthContext = React.createContext(null);

const AuthContextProvider = (props) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <AuthContext.Provider value={{ open, handleOpen, handleClose }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
