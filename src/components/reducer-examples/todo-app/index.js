import React, {useReducer} from 'react'
import AddTodo from './add-todo'
import ToDoList from './todo-list'
import initialStateData from './intialStateData'
import reducer from './reducer'
import TodoListContext from './todoListContext'

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialStateData)

  const values = {
    todoItems: state.todoItems,
    inputValue: state.inputValue,
    addTodo: () => {
      dispatch({type: 'ADD_TODO', payload: {
        id: state.todoItems.length + 1,
        description: state.inputValue,
        isActive: true,
        isDeleted: false
      }})
    },
    deleteTodo: (id) => {
      dispatch({type: 'DELETE_TODO', payload: id})
    },
    completeTodo: (id) => {
      dispatch({type: 'COMPLETE_TODO', payload: id})
    },    
    setInputValue: (inputValue) => {
      dispatch({type: 'SET_INPUT_VALUE', payload: inputValue})
    }
  }

  return (
    <div className='container'>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Todo App</h3>
      </div>

      <TodoListContext.Provider value={values}>
        <AddTodo />
        <ToDoList />
      </TodoListContext.Provider>
    </div>
  )
}

export default TodoApp
