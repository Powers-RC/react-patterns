/*
Use Case:
    Similar to composition, we want to restrict or create
    some default configuration for a component base on 
    another.
General Pattern: 
    Uses an HOC and composition pattern to obtain part of a component.
Overview:
    Create a function that accepts a component and props
    and returns that component with those props uniquely
    defined as a new component.
*/
export const partialComponent = (Component, partialProps) => {
    return (props) => {
        return <Component {...partialProps} {...props} />
    }
}

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

export const RedButton = partialComponent(Button, { color: "crimson" });
export const SmallRedButton = partialComponent(RedButton, { size: "small" });