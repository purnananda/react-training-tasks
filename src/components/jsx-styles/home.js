import React from 'react'
import styles from './styles.module.css'

function Home (props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Header!</div>
      <div className={styles.nameTile}>My name is {props.name}</div>
    </div>
  )
}

export default Home
