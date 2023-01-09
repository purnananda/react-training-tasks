import React, { useState } from 'react'

const ControlledComponent = () => {
  const [name, setName] = useState('')

  const handleChange = evt => {
    setName(evt.target.value);
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    console.log(name)
  }

  return (
    <>
      <div className='page-header'>Controlled Component</div>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <label>
            Enter your name:
            <input 
                type='text'
                value={name}
                name="name"
                onChange={handleChange}
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

export default ControlledComponent
