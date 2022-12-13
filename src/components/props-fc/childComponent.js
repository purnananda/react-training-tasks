import React, { useState } from 'react'

const ChildComponent = props => {
  const [name, setName] = useState('')

  const handleClick = () => {
    if (name && name.length >= 3) {
      props.onAddClick(name)
      setName('')
    }
  }
  return (
    <div style={{ padding: '8px' }}>
      <input
        type='text'
        value={name}
        onChange={
          evt => setName(evt.target.value)
        }
        placeholder='Enter Name'
      />
      <button 
        style={{ marginLeft: '1rem' }} 
        onClick={() => handleClick()}
      >
        Add
      </button>
    </div>
  )
}

export default ChildComponent
