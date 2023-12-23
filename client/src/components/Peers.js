import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const url = "http://localhost:8000";

const Peers = () => {
  const navigate = useNavigate();
  const [state,setState] = useState({
    msg:''
  });
  useEffect(()=>{
    axios.get(`${url}/peers`).then(res=>{
      setState({...state,msg:'Peers'});
     }).catch(err=>{
      navigate('/signin');
    });
  },[]);
  return (
    <>
    {state.msg}
    </>
  )
}

export default Peers