const items = [
    {
      id: 1,
      description: 'Have to go to Hospital for routine checkup.',
      isActive: true,
      isDeleted: false
    },
    {
      id: 2,
      description: 'I have a meeting with US client.',
      isActive: true,
      isDeleted: false
    }
  ]

  const initialStateData = {
    todoItems: items,
    inputValue: ''
  }

  export default initialStateData