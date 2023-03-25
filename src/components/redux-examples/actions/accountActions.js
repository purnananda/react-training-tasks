// In the accountActions.js file, we can define the depositMoney and withdrawMoney actions.
// These actions simply return an object with a type and a payload property, 
// where type is action type and payload is the amount to be deposited or withdrawn.
export const depositMoney = (amount) => {
    return {
      type: 'DEPOSIT',
      payload: amount,
    };
  };
  
  export const withdrawMoney = (amount) => {
    return {
      type: 'WITHDRAW',
      payload: amount,
    };
  };