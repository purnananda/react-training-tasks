import React from 'react'
import PropTypes from 'prop-types'

const EmployeeDetails = props => {
  return (
    <div>
      <h5>My name is {props.name}</h5>
      <h5>Contact: {props.contactNo}</h5>
      <button onClick={() => props.onDeleteClick(props.id)}>Delete</button>
    </div>
  )
}

EmployeeDetails.propType = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    contactNo: PropTypes.string,
    onDeleteClick: PropTypes.func,
}

EmployeeDetails.defaultProps = {
    contactNo: 'NA',
    onDeleteClick: () => {},
}

export default EmployeeDetails
