import React, { useState } from 'react'
import Employee from './employee'
import EmployeeList from './employeeList'

const employeesData = [
  {
    id: 1,
    name: 'ABC',
    contactNo: '1234567891'
  },
  {
    id: 2,
    name: 'PQR',
    contactNo: '4445556667'
  },
  {
    id: 3,
    name: 'XYZ',
    contactNo: undefined
  }
]

const PropsFC = () => {
  const [employees, setEmployees] = useState(employeesData)
  
  const onAddEmployee = () => {
    const tempEmployees = employees
    const tempId = employees.length + 1
    tempEmployees.push({
      id: tempId,
      name: 'Dummy Employee ' + tempId,
      contactNo: undefined
    })

    setEmployees([...tempEmployees])
  }

  const onDeleteEmployee = id => {
    const tempEmployees = employees.filter(x => x.id !== id)

    setEmployees([...tempEmployees])
  }

  return (
    <div>

      {/* <Employee name='ABC'/> */}
      
      <EmployeeList
        employeesData={employees}
        onAddClick={onAddEmployee}
        onDeleteClick={onDeleteEmployee}
      />
    </div>
  )
}

export default PropsFC
