import React, {useState} from "react"

const MyFunctionComponent = (props) => {
  const [count, setCount] = useState(props.start)
  
  const logEvent = () => {
    setCount(count + 1)
  }
  
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => logEvent()}>Click me</button>
    </div>
  )
}
export default MyFunctionComponent
