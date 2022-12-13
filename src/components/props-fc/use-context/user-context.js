import React from 'react';
 

const user = {name: null, role: null};

// Creating the context object and passing the default values.
const userContext = React.createContext(user);
 
export default userContext;