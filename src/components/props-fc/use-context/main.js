import React, {useContext} from 'react'
import UserContext from './user-context';

const Message = () => {
  const user = useContext(UserContext);

  return (
    <h1>
      Welcome 
        <span style={{ color: 'red' }}>
          {user?.name}!!
        </span> 
        (using useContext)
    </h1>
  )
}

const Content = () => {
  return <Message />
}

const Main = () => {
  return <Content />
}

export default Main;
