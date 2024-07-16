import axios from 'axios';
import "./Todos.css";
import { useLoaderData } from 'react-router-dom'

import TodoItem from '../components/TodoItem';
import { useState } from 'react';


export const loader = async()=>{
    const todos = await axios.get(`https://66920e1a26c2a69f6e915e08.mockapi.io/todos`)
     return todos.data
}

const Todos = () => {
    const todos= useLoaderData();
    const[isTodos, setIsTodos] = useState(todos);
    const[name, setName]= useState('')
    const[username, setUserName]=useState('')
    const[email, setEmail] = useState('')
    const[address, setAddress]=useState('')
    const[company, setCompany] =useState('')
    const[phone, setPhone]=useState('')
    
    //console.log(isTodos);
    const handleDeleteTodo = async(id)=>{
      setIsTodos(isTodos.filter(todo=>todo.id !== id));
    }
    const handleCreateTodo=async(e)=>{
      e.preventDefault();
      const newTodo ={
        name,
        username,
        email,
        address,
        company,
        phone
      }
      //create the data
      const response = await axios.post(`https://66920e1a26c2a69f6e915e08.mockapi.io/todos`, newTodo)
      
      response.data && setIsTodos([...isTodos, response.data])
      alert("todo created");
    
  }
  const hanadleUpdateTodo =(updateTodo)=>{
    setIsTodos(isTodos.map((todo)=>{(todo.id === updateTodo.id ? updateTodo : todo)}))
  }
    
    //console.log(todos);
    return (
    <>
    <div className='container p-5'>
    <div className='row'>
        <div className='col-12'>
        <div className="header text-center">
        <h1>My Todo</h1>
        <form onSubmit={handleCreateTodo}>
          <div className='form-group'>
        <div className="row">
        <div className="col">
          <label>Name: <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
           </label> &nbsp;&nbsp;
           <label>username: <input type="text"  value={username}
           onChange={(e)=> setUserName(e.target.value) }/>
           </label> 
           </div>
           </div>
           <br/>
           <div className="row">
           <div className="col">
           <label>email: <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
           </label>&nbsp;&nbsp;
           <label>address: <input type="text"value={address} onChange={(e)=>setAddress(e.target.value)}/> 
           </label>
           </div>
           </div>
         <br />
         <div className="row">
         <div className="col">
         <label>company: <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} />
           </label>&nbsp;&nbsp;
           <label>phone: <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
           </label>
         </div>
         </div> <br/>
         <button type='submit' className='btn'>Add todo</button>
         </div>
        </form>
      </div>
        </div>
          {
            todos.map(todo=>(

             <div className='col-md-4'key={todo.id}>
                <TodoItem
                todo={todo}
                onDeleteTodo={handleDeleteTodo}
                onUpdateTodo={hanadleUpdateTodo}
                />
             </div>   
            ))
          }
      </div>
      </div>
    
    </>
  )
}

export default Todos;