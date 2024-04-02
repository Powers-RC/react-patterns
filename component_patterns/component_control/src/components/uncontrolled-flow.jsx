import React, { useState } from "react"

export const UncontrolledFlow = ({children, onDone}) => {
    const [data, setData] = useState({});
    const [currentStepIdx, setCurrentStepIdx] = useState(0);

    const goNext = (dataFromStep) => {
        const nextStepIndex = currentStepIdx + 1
        const newData = {
            ...data,
            ...dataFromStep
        }
        console.log(data);

        if(nextStepIndex < children.length){
            setCurrentStepIdx(nextStepIndex)
        } else {
            onDone(newData)
        }

        setData(newData);
    }

    const currentChild = React.Children.toArray(children)[currentStepIdx]
    if(React.isValidElement(currentChild)){
        return React.cloneElement(currentChild, {goNext})
    }

    return currentChild
}