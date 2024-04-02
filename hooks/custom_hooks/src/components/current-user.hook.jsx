import { useEffect, useState } from "react";
import axios from "axios";

export const useCurrentUser = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        (async () => {
            const currentUser = await axios.get("/current-user");

            setUser(currentUser.data);
        })();
    }, [])

    return user;
}