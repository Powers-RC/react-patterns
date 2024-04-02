
const isObject = data => typeof data == "object" && data !== null;
/*
Use Case:
    If you need to loop through and render a nest object
General Pattern: 
    A component that calls itself from inside itself
Overview:
    First create an initial stopping condition which renders 
    some base content. If the condition is not met the looping 
    continues creating another component.
*/
export const RecursiveComponent = ({ data }) => {
    if (!isObject(data)) {
        return (
            <li>{data}</li>
        )
    }

    // Returns enumerable key,value pairs
    const pairs = Object.entries(data);

    return (
        <>
            {pairs.map(([key, value]) => {
                return (
                    <li>
                        {key}:
                        <ul>
                            <RecursiveComponent data={value} />
                        </ul>
                    </li>
                )
            })}
        </>
    )
}