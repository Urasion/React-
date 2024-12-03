import { useState, useRef } from 'react';
import Editer from './components/Editer';
import Header from './components/Header';
import List from './components/List';
import './App.css';
const mockData = [{
  id : 0,
  isDone: false,
  content : "React 공부하기",
  date: new Date().getTime(),
},{
  id : 1,
  isDone: false,
  content : "React 공부하기",
  date: new Date().getTime(),
},{
  id : 2,
  isDone: false,
  content : "React 공부하기",
  date: new Date().getTime(),
},]
function App() {
 
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);
  console.log(todos)
  const onCreate = (content)=>{
    const newTodo = {
      id : idRef.current++,
      isDone:false,
      content:content,
      date:new Date().getTime(),
    }
    setTodos([newTodo, ...todos])
  };
  const onUpdate = (targetId)=>{
    setTodos(todos.map((todo)=>{
      if(todo.id === targetId){
        return{
          ...todo,idDone: !todo.isDone
        }
      }
      return todo
    }))
  }
  const onDelete = (targetId)=>{
    setTodos(todos.map((todo)=>{
      if(todo.id === targetId){
        return{
          ...todo,idDone: !todo.isDone
        }
      }
      return todo
    }))
  }

  return (
   
    <div className='App'>
    <Header/>
    <Editer onCreate={onCreate} />
    <List todos={todos} onUpdate={onUpdate}/>
    </div>

  )
}

export default App
