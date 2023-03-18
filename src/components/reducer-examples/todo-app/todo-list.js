import React, { useContext } from 'react'
import TodoListContext from './todoListContext'

const ToDoList = () => {
  const {todoItems, completeTodo, deleteTodo} = useContext(TodoListContext)  
  const deleteTodoClick = id => {
    deleteTodo(id)
  }
  const completeTodoClick = id => {
    completeTodo(id)
  }
  const getCssClassForAlert = isActive => {
    return isActive
      ? 'alert alert-success alert-dismissible fade show'
      : 'alert alert-secondary alert-dismissible fade show'
  }
  const renderTodo = todoItem => {
    return (
      <div className='row'>
        <div className='col-md-9'>
          <div className={getCssClassForAlert(todoItem.isActive)} role='alert'>
            {todoItem.isDeleted ? (
              <strong>
                <del>{todoItem.description}</del>
              </strong>
            ) : (
              <strong>{todoItem.description}</strong>
            )}
            <div
              style={{ paddingLeft: '1rem' }}
              className='btn-group mr-2'
              role='group'
              aria-label='Second group'
            >
              <button
                type='button'
                className={
                  todoItem.isActive ? 'btn btn-success' : 'btn btn-secondary'
                }
                onClick={() => completeTodoClick(todoItem.id)}
              >
                <span aria-hidden='true'>&#x2713;</span>
              </button>
              <button
                type='button'
                className={
                  !todoItem.isDeleted ? 'btn btn-danger' : 'btn btn-secondary'
                }
                onClick={() => deleteTodoClick(todoItem.id)}
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>

      <div style={{ marginTop: '1rem' }}>
        {todoItems.length > 0 && (
          <div className='card'>
            <div className='card-header'>
              <strong>ToDo List</strong>
            </div>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-12'>
                  {todoItems?.map(todoItem => {
                    return <div>{renderTodo(todoItem)}</div>
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ToDoList
