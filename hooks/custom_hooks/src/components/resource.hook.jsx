import { useEffect, useState } from "react";
import axios from "axios";

export const useResource = (resourceUrl) => {
    const [resource, setResource] = useState();

    useEffect(() => {
        (async () => {
            const currentResource = await axios.get(`${resourceUrl}`);
            setResource(currentResource.data);
        })();
    }, [resourceUrl])

    return resource;
}