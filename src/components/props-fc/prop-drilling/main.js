import React from 'react'

const Message = ({ name }) => {
  return (
    <h1>
      Welcome <span style={{ color: 'blue' }}>{name}</span>
    </h1>
  )
}

const Content = ({ name }) => {
  return <Message name={name} />
}

const Main = ({ name }) => {
  return <Content name={name} />
}

export default Main;
