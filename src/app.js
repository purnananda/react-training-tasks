import React from 'react'
//import Main from './components/props-fc/prop-drilling/main';
import Main from './components/props-fc/use-context/main'
import UserContext from './components/props-fc/use-context/user-context'

const App = () => {

  const user = {
    name: "Jack",
    role: "Admin"
  };

  return (
    //<Main name={user.name} />
    <UserContext.Provider value={user}>
      <Main />
    </UserContext.Provider>
  )
}

export default App
