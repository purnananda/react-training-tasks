import React from 'react';

const CreateAccount = () => {
  // Declare state variables to store the form values
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mobile, setMobile] = React.useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate the form values here
    // If the form is valid, submit the values to the server
  };

  // Function to validate the form values
  const validateForm = () => {
    // Validate the name field
    if (name.trim().length === 0) {
      return 'Please enter a valid name';
    }
    // Validate the username field
    if (username.trim().length === 0) {
      return 'Please enter a valid username';
    }
    // Validate the email field
    if (email.trim().length === 0 || !email.includes('@')) {
      return 'Please enter a valid email address';
    }
    // Validate the mobile field
    if (mobile.trim().length === 0 || isNaN(mobile)) {
      return 'Please enter a valid mobile number';
    }
    // If all fields are valid, return true
    return true;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Mobile:
        <input
          type="text"
          value={mobile}
          onChange={(event) => setMobile(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Create Account</button>
    </form>
  );
};

export default CreateAccount;
