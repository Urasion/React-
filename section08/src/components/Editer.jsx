import "./Editer.css"
import { useState } from "react";

const Editer = ({onCreate}) => {
    const [content, setContent] = useState("");
    const onChangeContent = (e) =>{
        setContent(e.target.value);
    }
    const onSubmit = ()=>{
        if(content === ""){
            return;
        }
        onCreate(content);
    }
    return <div className="Editer">
        <input
        value={content}
        onChange={onChangeContent}
         placeholder="새로운 Todo..."/>
        <button onClick={onSubmit}>추가</button>
    </div>
}
export default Editer;