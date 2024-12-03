import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";
const List = ({todos, onUpdate}) => {
    const[search, setSearch] = useState("");
    const onChangeSearch = (e) =>{
        setSearch(e.target.value);
    }
    const getFilteredData = ()=>{
        if(search ===""){
            return todos;
        }
        return todos.filter((todo)=> todo.content.toLowerCase().includes(search.toLowerCase()))
    }
    const filteredTodos = getFilteredData();
    return <div className="List">
        <h3>Todo List 😊</h3>
        <input placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}/>
        <div className="todos_wrapper">
            {filteredTodos.map((todo)=>{
                return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate}/>;
            })}
        </div>
    </div>
}
export default List;