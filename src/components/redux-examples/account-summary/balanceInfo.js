import React from 'react'
import { connect } from 'react-redux'
import styles from './styles'

const BalanceInfo = ({balance}) => {
  return (
    <div className='row' style={styles.sectionContainer}>
      <div className='col-md-6'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title text-primary'>My Balance</h5>
            <p className='card-text'>
              Available balance is:{' '}
              <h2
                style={{ float: 'right', alignContent: 'center' }}
                className='text-success'
              >
                ${balance}
              </h2>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// The mapStateToProps function maps the balance from the store to the component's props.
const mapStateToProps = state => {
  return {
    balance: state.balance
  }
}

// We use the connect function to connect the component to the Redux store. 
export default connect(mapStateToProps)(BalanceInfo)