import React, {useState} from 'react'
import { connect } from 'react-redux'
import {withdrawMoney} from '../actions/accountActions'
import styles from "./styles"

const WithdrawAmount = ({withdraw}) => {
  const [amount, setAmount] = useState('')
  const handleWithdraw = () => {
    withdraw(Number(amount))
    setAmount('')
  }

  return (
    <div className='row' style={styles.sectionContainer}>
      <div className='col-md-6'>
        <div className='card text-primary'>
          <div className='card-body'>
            <h5 className='card-title'>Withdraw Amount</h5>
            <input
              type='number'
              className='form-control'
              value={amount}
              onChange={e => setAmount(e.target.value)}
              placeholder='Enter amount'
            />
            <button
              href='#'
              className='btn btn-primary'
              disabled={!amount.length>0}
              style={styles.buttonContainer}
              onClick={() => {
                handleWithdraw()
              }}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Here the mapDispatchToProps function maps the withdrawMoney action to the component's props.
const mapDispatchToProps = dispatch => {
  return {
    withdraw: (amount) => dispatch(withdrawMoney(amount))
  }
}

// If you want to use mapDispatchToProps without a mapStateToProps, 
// then just use null for the first argument.
export default connect(null, mapDispatchToProps)(WithdrawAmount)
