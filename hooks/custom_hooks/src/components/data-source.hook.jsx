import { useEffect, useState } from "react";

export const useDataSource = (callback) => {
    const [resource, setResource] = useState();

    useEffect(() => {
        (async () => {
            const data = await callback();
            setResource(data);
        })();
    }, [callback])

    return resource;
}