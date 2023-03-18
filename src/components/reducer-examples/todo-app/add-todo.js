import React, {useContext} from 'react'
import TodoListContext from './todoListContext'

const AddTodo = () => { 
  const {inputValue, setInputValue, addTodo} = useContext(TodoListContext) 
  const handleInputValueChange = (event) => {
    setInputValue(event.target.value)
  }
  const addToDoClick = () => {
    addTodo()
  }
  return (
    <div>
      <div className='card'>
        <div className='card-header'>
          <strong>Add Todo</strong>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-6'>
              <input
                type='text'
                className='form-control'
                placeholder='Add a new Todo'
                value={inputValue}
                onChange={handleInputValueChange}
              />
            </div>
            <div className='col-md-4'>
              <button disabled={inputValue?.length > 2 ? false : true} className='btn btn-primary' onClick={addToDoClick}>
                + Add Todo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTodo
