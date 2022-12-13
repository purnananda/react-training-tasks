import React, { useState } from 'react'
import ChildComponent from './childComponent'

const styles = {
  container: {
    padding: '24px',
    maxWidth: '250px',
    fontFamily: 'system-ui'
  },
  pageHeading: {
    fontSize: '20px',
    fontWeight: 'bold',
    padding: '8px',
    color: 'blue'
  },
  subHeading: {
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '8px',
    color: 'blue'
  },
  nameItem: {
    fontSize: '14px',
    fontWeight: 'bold',
    paddingTop: '4px',
    paddingLeft: '8px',
    color: 'orange'
  }
};

const ParentComponent = () => {
  const [names, setNames] = useState([])  

  const handleCallback = newName => {
    setNames([...names, newName])
  }

  return (
    <div style={styles.container}>
      <div 
        style={styles.pageHeading}>
          Add name
      </div>

      <div>
        <ChildComponent 
          onAddClick={handleCallback} 
        />
      </div>
      
      <div 
        style={styles.subHeading}>
          List of names:
      </div>
      <div>
        {names?.map(name => {
          return (
          <div style={styles.nameItem}>
            {name}
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default ParentComponent
