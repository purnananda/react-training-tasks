import React from 'react'
import { Provider } from 'react-redux'
import AccountSummary from './account-summary'
import accountStore from './store'

const ReduxExamples = () => {
  return (
    // The <Provider> component is a special component provided by the react-redux package
    // that allows your React components to access the Redux store.
    // You should wrap your entire application in this component,
    // passing in the Redux store as a prop.
    <Provider store={accountStore}>
      <AccountSummary />
    </Provider>
  )
}

export default ReduxExamples
