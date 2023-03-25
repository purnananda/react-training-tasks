const initialState = {
  balance: 1000
}

// This reducer handles the DEPOSIT and WITHDRAW actions by updating the balance property in the state.
const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return {
        ...state,
        balance: state.balance + action.payload
      }
    case 'WITHDRAW':
      return {
        ...state,
        balance: state.balance - action.payload
      }
    default:
      return state
  }
}

export default accountReducer
