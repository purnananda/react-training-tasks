import React, { useRef, useState } from 'react'

const UncontrolledComponent = () => {
  const nameRef = useRef()
  const [name, setName] = useState('')

  const handleSubmit = evt => {
    evt.preventDefault()
    console.log(nameRef.current.value)
    setName(nameRef.current.value)    
  }

  return (
    <>
      <div className='page-header'>Uncontrolled Component</div>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <label>
            Enter your name:
            <input 
                ref={nameRef}
                defaultValue='' 
                type='text' 
                placeholder='Enter name'
                className='name-control' 
            />
          </label>

          <input type='submit' value='Submit' />

          <br />
          <div className='result-text'>{name}</div>
        </form>
      </div>
    </>
  )
}
export default UncontrolledComponent
