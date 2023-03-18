const getUpdatedTodoItems = (items, id, type) => {
  const updatedItems = []
  items.forEach(todoItem => {
    if (todoItem.id === id) {
      if (type === 'COMPLETE_TODO') {
        todoItem.isActive = false
      } else if (type === 'DELETE_TODO') {
        todoItem.isActive = false
        todoItem.isDeleted = true
      }
    }
    updatedItems.push(todoItem)
  })

  return updatedItems
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todoItems: [action.payload, ...state.todoItems],
        inputValue: ''
      }
    case 'COMPLETE_TODO':
      return {
        ...state,
        todoItems: getUpdatedTodoItems(
          state.todoItems,
          action.payload,
          'COMPLETE_TODO'
        )
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todoItems: getUpdatedTodoItems(
          state.todoItems,
          action.payload,
          'DELETE_TODO'
        )
      }
    case 'SET_INPUT_VALUE':
      return {
        ...state,
        inputValue: action.payload
      }
    default:
      throw new Error()
  }
}

export default reducer