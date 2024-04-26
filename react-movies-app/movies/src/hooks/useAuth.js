import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const useAuth = (auth) => {
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const stateObserver = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserEmail(user.email);
            } else {
                setUserEmail(null);
            }
        });

        // This is a cleanup function, place before dependency array (Can it be used somewhere else?)
        // https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/
        return () => stateObserver();
    }, [auth]);

    return userEmail;
};

export default useAuth;
