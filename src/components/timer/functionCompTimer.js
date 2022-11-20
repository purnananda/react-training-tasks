import React, {useState, useEffect} from 'react'
import './index.css'

const FunctionCompTimer = (props) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = () => {
    const time = Date.parse(props.deadline) - Date.now();

    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / (1000 * 60)) % 60));
    setSeconds(Math.floor((time / (1000)) % 60));
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(props.deadline), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <div className='timer-header'>Timer (Using FC)</div>
      <div className='timer-container-fc'>
        {hours} : {minutes} : {seconds}
      </div>
    </div>
  )
}

export default FunctionCompTimer;
