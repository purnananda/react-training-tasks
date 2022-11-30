import React from 'react'
class Person extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: props.firstName + ' ' + props.lastName
    }
  }
  render () {
    return <h1>I am {this.state.name}</h1>
  }
}

export default Person;

