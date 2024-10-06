import { useState } from "react";
import { useRef } from "react";
//간단한 회원가입 폼
//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개
const Register=()=>{
    const[input, setInput] = useState({
        name: "",
        birth: "",
        country:"",
    })
    const refObj = useRef();
    
  
    const onChange = (e) =>{
        console.log(e.target.name, e.target.value);
        setInput({
            ...input,
            [e.target.name]:e.target.value,

        })
    }
    const onChangeName = (e)=>{
        setInput({
            ...input,
            name : e.target.value
        })
    }
    const onChangeBirth = (e)=>{
        setInput({
            ...input,
            birth : e.target.value
        })
    }
    const onChangeCountry = (e)=>{
        setInput({
            ...input,
            country : e.target.value
        })
    }
    return (
    <div>
        <div>
        <input 
        name="name"
        value = {input.name}
        onChange={onChange} 
        placeholder={"이름"} />
        </div>

        <div>
        <input 
        name="birth"
        type = "date"
        value = {input.date}
        onChange={onChange} />
        </div>

        <div>
            <select
            name="country"
             value={input.country}
            onChange={onChange}>
                <option></option>
                <option value ="kr">한국</option>
                <option value="us">미국</option>
                <option value="jp">일본</option>
            </select>
        </div>
    
      
     
    </div>
    );
}
export default Register;