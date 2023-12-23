import React,{useState} from 'react';
import axios from 'axios';
const url = 'http://localhost:8000';
const Signup = () => {
  const [state,setState] = useState({
    username:'',email:'',password:''
  });
  const handleChange = (e) => {
    setState({...state,[e.target.name]:e.target.value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${url}/signup`,{name:state.username,email:state.email,password:state.password})
    .then(res=>{
      alert(res.data);
      window.location.href='/signin';
    })
    .catch(err=>{
      alert(err.response.data.error);
    });
  }
  return (
    <>
      <div>Signup</div>
      <div>
        UserName:<input name='username' value={state.username} onChange={handleChange}/><br/>
        Email:<input name='email' value={state.email} onChange={handleChange}/><br/>
        Password:<input name='password' value={state.password} onChange={handleChange}/><br/>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default Signup