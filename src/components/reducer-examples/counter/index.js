import React, { useReducer } from 'react'

const reducer = (state, action) => {
  let newState
  switch (action.type) {
    case 'increase':
      newState = { counter: state.counter + 1 }
      break
    case 'decrease':
      newState = { counter: state.counter - 1 }
      break
    default:
      throw new Error()
  }
  return newState
}

const initialState = {
  counter: 0
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const increaseAction = {type: 'increase'}
  const decreaseAction = {type: 'decrease'}

  return (
    <div>
      <h1>Counter</h1>
      <hr />
      <div>
        <button onClick={() => dispatch(decreaseAction)}>Decrease</button>
        <h1>{state.counter}</h1>
        <button onClick={() => dispatch(increaseAction)}>Increase</button>
      </div>
    </div>
  )
}

export default Counter
