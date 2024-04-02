import { forwardRef } from "react"

const Input = (props, ref) => {
    return (
      <input {...props} ref={ref} className="text-input" />
    )
}

export default forwardRef(Input);