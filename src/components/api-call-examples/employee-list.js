import React, { useState, useEffect } from 'react'
import axios from 'axios';

const example_data = [
  {
    id: 1,
    employee_name: 'ABC XYZ',
    employee_salary: 320800,
    employee_age: 61,
    profile_image: 'images/dummy_user.jpeg'
  },
  {
    id: 2,
    employee_name: 'PQR EFG',
    employee_salary: 170750,
    employee_age: 63,
    profile_image: 'images/dummy_user.jpeg'
  }
]

const EmployeeList = () => {
  const [data, setData] = useState(example_data)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const renderGrid = () => {
    return (
      <div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Age</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <th scope='row'>{item.id}</th>
                <td>{item.employee_name}</td>
                <td>{item.employee_salary}</td>
                <td>{item.employee_age}</td>
                <td>
                  <img
                    src='images/dummy_user.jpeg'
                    alt={item.employee_name}
                    style={{ width: '30px' }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  const fetchDataWithAxios_2 = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://dummy.restapiexample.com/api/v1/employees");
      const jsonData = res.data;
      setData(jsonData.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  const fetchDataWithAxois = () => {
    setLoading(true);
    axios.get("https://dummy.restapiexample.com/api/v1/employees")
      .then(res => {
        const jsonData = res.json()
        setData(jsonData.data)
        setLoading(false)
      }).catch(err=>{
        setError(err)
        console.log(err);
      })
}

  const fetchData = () => { 
    setLoading(true);
    fetch("https://dummy.restapiexample.com/api/v1/employees")
      .then(res => {
        const jsonData = res.json()
        setData(jsonData.data)
        setLoading(false)
      }).catch(err=>{
        setError(err)
        console.log(err);
      })
  }

  useEffect(() => {
    fetchDataWithAxois();
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (data) {
    return renderGrid()
  }

  return <div>Nothing to show yet</div>
}

export default EmployeeList
