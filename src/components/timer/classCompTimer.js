import React from 'react'
import './index.css'

class ClassCompTimer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    }

    this.getTime = this.getTime.bind(this)
  }

  getTime = () => {
    const time = Date.parse(this.props.deadline) - Date.now();

    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / (1000)) % 60);

    this.setState({hours, minutes, seconds})
  }

  componentDidMount = () => {
    const interval = setInterval(() => this.getTime(this.props.deadline), 1000)
    return () => clearInterval(interval)
  }

  render = () => {
    return (
      <div>
        <div className='timer-header'>Timer (Using CC)</div>
        <div className='timer-container'>
          {this.state.hours} : {this.state.minutes} : {this.state.seconds}
        </div>
      </div>
    )
  }
}

export default ClassCompTimer;
