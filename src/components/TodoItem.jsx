import React, { useState } from 'react'
import "./TodoItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
const TodoItem = ({todo, onDeleteTodo, onUpdateTodo}) => { 
  const[updateName, setUpdateName] = useState('')
  const[updateEmail, setUpdateEmail] = useState('')
  const handleDeletedTodo = async()=>{
    try{
      //delete the data
      const response = await axios.delete(`https://66920e1a26c2a69f6e915e08.mockapi.io/todos/${todo.id}`)
      onDeleteTodo && onDeleteTodo(response.data.id)
    }catch(error){
      console.error(`Failed to delete todo:${error}`)
    }
  }
  const handleUpdateTodo = async () => {
    try {
      const updatedTodo = { ...todo, name: updateName,
        email:updateEmail
       };
       //update the data
      const response = await axios.put(`https://66920e1a26c2a69f6e915e08.mockapi.io/todos/${todo.id}`, updatedTodo);
      onUpdateTodo && onUpdateTodo(response.data);
    } catch (error) {
      console.error(`Failed to update todo: ${error}`);
    }
  };
  return (
    <div>
       <div className="col-md-4">
       <div className='todo-card'>
       <div className='card-item'>
        <span>
        <p><strong>Name:</strong> {todo.name}</p>
        <p><strong>Username:</strong> {todo.username}</p>
        <p><strong>Email:</strong> {todo.email}</p>
        <p><strong>Address:</strong> {todo.address}</p>
        <p><strong>Company:</strong> {todo.company}</p>
        <p><strong>Phone:</strong>  {todo.phone}</p>
        </span>
        <span className='actions'>
            <FontAwesomeIcon className= 'delete-btn'
              icon ={faTrash}
              onClick={handleDeletedTodo}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div>
            <button className='edit-btn' type='submit'onClick={handleUpdateTodo}>Update
            </button>
            <form>
              <input type="text"
              placeholder='update the name.....'
               value={updateName}
               onChange={(e) => setUpdateName(e.target.value)}/>
                <input type="text"
              placeholder='update the email.....'
               value={updateEmail}
               onChange={(e) => setUpdateEmail(e.target.value)}/>
            </form>
           </div>
           </span>
           
                     
        </div>
        </div>
        </div> 
    </div>
  )
}

export default TodoItem