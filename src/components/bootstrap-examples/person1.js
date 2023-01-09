import React, { useState } from 'react'

// Example for Bootstrap CDN
const Person1 = () => {
  const [name, setName] = useState('')
  const [city, setCity] = useState('')

  const handleChange = event => {
    const { name, value } = event.target

    if (name === 'name') {
      setName(value)
    }

    if (name === 'city') {
      setCity(value)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    // Add your submit logic here

    console.log('name: ', name)
    console.log('city: ', city)
  }

  return (
    <div className='container'>
      <h2>Using Bootstrap CDN</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            className='form-control'
            value={name}
            onChange={handleChange}
          />
        </div> 
        <div className='form-group'>
          <label htmlFor='city'>City:</label>
          <input
            type='text'
            id='city'
            name='city'
            className='form-control'
            value={city}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-primary mt-3'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Person1
