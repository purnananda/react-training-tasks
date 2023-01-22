import React from 'react'
//import Main from './components/props-fc/prop-drilling/main';
// import Main from './components/props-fc/use-context/main'
// import UserContext from './components/props-fc/use-context/user-context'
// import FormExamples from './components/form-examples'
import BootstrapExamples from './components/bootstrap-examples'
import RoutingExamples from './components/routing-examples';

const App = () => {

  const user = {
    name: "Jack",
    role: "Admin"
  };

  return (
    //<Main name={user.name} />
    // <UserContext.Provider value={user}>
    //   <Main />
    // </UserContext.Provider>
    // <FormExamples />
    // <BootstrapExamples />
    <RoutingExamples />
  )
}

export default App
