import React from 'react'
import MyClassComponent from './components/myClassComponent'
import MyFunctionComponent from './components/myFunctionComponent'
import Person from './components/person'
import Timer from './components/timer'
import FcHookCheck from './components/fcHooksCheck'


class App extends React.Component {
  render() {
    return (
      // <MyClassComponent />
      // <Person firstName='Purnananda' lastName='Behera' />
      <Timer />
      // <MyFunctionComponent start={0} />
      //<FcHookCheck start={0} />
    )
  }
}

export default App
