import axios from "axios";
import { useEffect, useState } from "react"

const capitalizeResource = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const includeUpdateableResource = (Component, resourceURL, resourceName) => {
    return (props) => {
        const [initalResource, setInitialResource] = useState();
        const [resource, setResource] = useState();

        useEffect(() => {
            (async () => {
                const response = await axios.get(resourceURL);
                setInitialResource(response.data);
                setResource(response.data);
            })();
        }, [])

        const onChange = (updates) => {
            setResource({ ...resource, ...updates });
        };

        const onPost = async () => {
            const response = await axios.post(resourceURL, { [resourceName]: resource });
            setInitialResource(response.data);
            setResource(response.data);
        };

        const onReset = () => {
            setResource(initalResource);
        };

        const componentProps = {
            ...props,
            [resourceName]: resource,
            [`onChange${capitalizeResource(resourceName)}`]: onChange,
            [`onPost${capitalizeResource(resourceName)}`]: onPost,
            [`onReset${capitalizeResource(resourceName)}`]: onReset,
        }
        return <Component {...componentProps} />
    }
}