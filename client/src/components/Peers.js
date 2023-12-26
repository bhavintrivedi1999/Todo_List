import React,{useState,useEffect} from 'react'
import axios from 'axios'
import "../styles/home.css";
import { useNavigate } from 'react-router-dom';
const url = "http://localhost:8000";

const Peers = () => {
  const navigate = useNavigate();
  const [state,setState] = useState({
    msg:'',peers:[],data:[]
  });
  useEffect(()=>{
    axios.get(`${url}/peers`).then(res=>{
      console.log(res.data);
      setState({...state,msg:'Peers',peers:res.data.peers,data:res.data.obj});
     }).catch(err=>{
      navigate('/signin');
    });
  },[]);
  return (
    <>
    {state.peers.map((user,i)=><div className='div1' key={i}>
      <h3>{user}</h3>
      {["ToDo","InProgress","Done"].map((state1,j)=><div className='user-details' key={j}>
          <h5>{state1}</h5>
          {state.data[i][state1].map((curr,k)=><div className='task-container' key={k}>
            <span>{curr}</span>
          </div>)}
      </div>)}
    </div>)}
    </>
  )
}

export default Peers