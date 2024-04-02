import { useEffect, useState } from "react";
import axios from "axios";

export const useUser = ({ userId }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        (async () => {
            const currentUser = await axios.get(`/users/${userId}`);
            setUser(currentUser.data);
        })();
    }, [])

    return user;
}