import React from 'react'
import BalanceInfo from './balanceInfo'
import DepositAmount from './depositAmount'
import WithdrawAmount from './withdrawAmount'

const sectionContainer = {
  marginTop: '1rem',
  width: '100%'
}
const buttonContainer = {
  marginTop: '0.5rem'
}

const AccountSummary = () => {
  return (
    <div className='container' style={sectionContainer}>
      <div className='row'>
        <div className='col'>
          <h3>Account Summary</h3>
        </div>
      </div>

      <BalanceInfo />
      <DepositAmount />
      <WithdrawAmount />
    </div>
  )
}

export default AccountSummary
