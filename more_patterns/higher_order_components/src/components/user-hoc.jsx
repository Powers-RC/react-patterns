import { useEffect, useState } from "react";
import axios from "axios";

export const userHOC = (Component, id) => {
    return (props) => {
        const [user, setUser] = useState();

        useEffect(() => {
            (async () => {
                const response = await axios.get(`/users/${id}`);
                setUser(response.data);
            })();
        }, [])

        return <Component {...props} user={user} />
    }
}