import axios from 'axios';
import React,{useState} from 'react'
const url = 'http://localhost:8000';
const SignIn = () => {
  const [state,setState] = useState({
    email:'',password:'',showError:false
  });

  const handleChange = (e) => {
    setState({...state,[e.target.name]:e.target.value,showError:false});
  }

  const handleSubmit = () => {
    axios.post(`${url}/signin`,{email:state.email,password:state.password}).then(res=>{
      alert(res.data);
      window.location.href='/home';
    }).catch(err=>{
      setState({email:'',password:'',showError:true});
    });
  }
  return (
    <>
      <div>SignIn</div>
      email:<input name='email' value={state.email} onChange={handleChange}/><br/>
      password:<input name='password' value={state.password} onChange={handleChange}/><br/>
      {state.showError && <p>Invalid Credentials!</p>}
      <button onClick={handleSubmit}>SignIn</button>
    </>
  )
}

export default SignIn