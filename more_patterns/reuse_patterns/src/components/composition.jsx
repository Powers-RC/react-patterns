/*
Use Case:
    You have some basic styling which you want to extend 
    to other components.
General Pattern: 
    Extend a component and pass in specific props to 
    construct a new unique component.
Overview:
    You define a basic component. Build other components
    using that basic component, but you pass in a 
    "composition" (various combinations) of the props to
    construct a unique useful component.
*/
export const Button = ({ size, color, text, ...props }) => {
    return (
        <button
            style={{
                fontSize: size === "small" ? '8px' : '32px',
                backgroundColor: color
            }}
        >
            {text}
        </button>
    )
}

export const RedButton = (props) => {
    return <Button {...props} color={"crimson"} />;
}

export const GreenButton = (props) => {
    return <Button {...props} color={"green"} size={'small'} />
}
