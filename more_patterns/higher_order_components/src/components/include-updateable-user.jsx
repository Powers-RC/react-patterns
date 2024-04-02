import axios from "axios";
import { useEffect, useState } from "react"

export const includeUpdateableUser = (Component, userId) => {
    return (props) => {
        const [initalUser, setInitialUser] = useState();
        const [user, setUser] = useState();

        useEffect(() => {
            (async () => {
                const response = await axios.get(`/users/${userId}`);
                setInitialUser(response.data);
                setUser(response.data);
            })();
        }, [])

        const onChangeUser = (updates) => {
            setUser({ ...user, ...updates });
        };

        const onPostUser = async () => {
            const response = await axios.post(`/users/${userId}`, { user });
            setInitialUser(response.data);
            setUser(response.data);
        };

        const onResetUser = () => {
            setUser(initalUser);
        };

        return <Component {...props} user={user} onChangeUser={onChangeUser} onPostUser={onPostUser} onResetUser={onResetUser} />
    }
}