import React, {useState} from 'react'
import PropTypes from 'prop-types'
import EmployeeDetails from './employeeDetails'

const EmployeeList = props => {
  return (
    <div>
      <h3>Emaployee List</h3>
      <button onClick={() => props.onAddClick()}>Add Employee</button>
      <hr />
      
      {props.employeesData.map(emp => {
        return (
          <EmployeeDetails
            key={emp.id}
            id={emp.id}
            name={emp.name}
            contactNo={emp.contactNo}
            onDeleteClick={props.onDeleteClick}
          />
        )
      })}
    </div>
  )
}

EmployeeList.propType = {
  employeesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      contactNo: PropTypes.string,
    }).isRequired
  ),
  onAddClick: PropTypes.func.isRequired,
}

EmployeeList.defaultProps = {}

export default EmployeeList
