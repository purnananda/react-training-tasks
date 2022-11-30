import React from "react";

const employees = [{name: 'Ram'}, {name: 'Shyam'}, {name: 'Hari'}];

const Employees = () => {
    return (
        employees.map(x => {
            return <h1>{x.name}</h1>
        })
    );
}

export default Employees