import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Logout = () => {
    const [flag,setFlag] = useState(false);
    useEffect(()=>{
        axios.post('http://localhost:8000/logout').then(res=>{
            setFlag(true);
        }).catch(err=>{
            alert('logout failed...');
        });
    },[]);
  return (
    flag && <div>Logout successfully</div>
  )
}

export default Logout