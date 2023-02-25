import React from "react";
import EmployeeList from "./employee-list";
import Posts from "./post-list";

const renderEmployeeList = () => {
  return (
    <div className="container">
      <h1 className="mt-3">Employee List</h1>
      <hr />
      <EmployeeList />
    </div>    
  )
}

const renderPostsList = () => {
  return (
    <div className="container">
      <h1 className="mt-3">Posts</h1>
      <hr />
      <Posts />
    </div>    
  )
}

const ApiCallExamples = () => {
  return (
    renderPostsList()  
  )
}

export default ApiCallExamples;
