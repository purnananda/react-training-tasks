import React, { useState } from 'react'
import { connect } from 'react-redux'
import { depositMoney } from '../actions/accountActions'
import styles from './styles'

const DepositAmount = ({ deposit }) => {
  const [amount, setAmount] = useState('')

  const handleDeposit = () => {
    deposit(Number(amount))
    setAmount('')
  }

  return (
    <div className='row' style={styles.sectionContainer}>
      <div className='col-md-6'>
        <div className='card text-primary'>
          <div className='card-body'>
            <h5 className='card-title'>Deposit Amount</h5>
            <input
              type='number'
              value={amount}
              onChange={e => setAmount(e.target.value)}
              className='form-control'
              placeholder='Enter amount'
            />
            <button
              href='#'
              className='btn btn-primary'
              style={styles.buttonContainer}
              disabled={!amount.length>0}
              onClick={() => {
                handleDeposit()
              }}
            >
              Deposit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Here the mapDispatchToProps function maps the depositMoney action to the component's props.
const mapDispatchToProps = dispatch => {
  return {
    deposit: amount => dispatch(depositMoney(amount))
  }
}

// If you want to use mapDispatchToProps without a mapStateToProps,
// then just use null for the first argument.
export default connect(null, mapDispatchToProps)(DepositAmount)
