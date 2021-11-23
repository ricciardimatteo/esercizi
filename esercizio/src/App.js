import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import './App.css';

const App = ()=> {

  const [todos, setTodo] = useState([])
  const {register, handleSubmit} = useForm()


  const onSubmit = (values) => {
    
    setTodo([...todos,{id:todos.length+1,lista:values.todo}])
    console.log(todos);
  
    }


    
  const removeTodo = (id) =>{
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodo(removeItem);
    
  }

  const changeTodo = (id) =>{
   
    
  }


 
  return (
    <>
    <header>
    <h1> La mia TodoList </h1>
    </header>
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input  defaultValue={''} placeholder="Cosa devi fare?" {...register('todo')} />
        <button onClick type={'submit'}>Aggiungi</button>
      </form>
      <ul>
        {todos.map((item =>(
          <li key={item.id}> {item.lista}<button onClick={()=>removeTodo(item.id)}> Rimuovi </button>  <button className="btnchange"onClick={()=>changeTodo(item.id)}>Modifica</button> </li>
     
        )))}
      </ul>
    </div>
    </>
  )
        }
  

export default App;
