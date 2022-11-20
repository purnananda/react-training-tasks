import React, { useEffect, useState } from 'react'

const FcHookCheck = props => {
  const [count, setCount] = useState(props.start)
  const [flipColor, setFlipColor] = useState(true)

  const logEvent = () => {
    setCount(count + 1)
  }

  //called only once
  useEffect(() => {
    console.log('counter initial: ', count)
  }, [])

  //   called when the dependencies change
  //   useEffect(() => {
  //     console.log('counter click: ', count)
  //   }, [count])

  // called every time
  //   useEffect(() => {
  //     console.log('counter check: ', count)
  //   })

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => logEvent()}>Click me</button>
      <br />
      <br />
      <button
        style={{ backgroundColor: flipColor ? 'lightpink' : 'lightgreen' }}
        onClick={() => setFlipColor(!flipColor)}
      >
        Click To Change Color
      </button>
    </div>
  )
}
export default FcHookCheck
