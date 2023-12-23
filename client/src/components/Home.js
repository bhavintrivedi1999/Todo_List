import React,{useState,useEffect} from 'react'
import axios from 'axios';
const url = "http://localhost:8000";

const Home = () => {

  const [state,setState] = useState({
    user:'Bhavin',data:[]
  });
 
  useEffect(()=>{
    axios.post(`${url}/getData`,{userName:state.user})
    .then(res=>{
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
  },[state.user]);
  const handleChange = (e) => {
    const {name,value} = e.target;
    setState({...state,[name]:value});
  }

  return (
    <>
      <select name='user' value={state.user} onChange={handleChange}>
        <option value="Bhavin">Bhavin</option>
        <option value="Mayank">Mayank</option>
        <option value="Ronak">Ronak</option>
      </select>
    </>
  )
}

export default Home