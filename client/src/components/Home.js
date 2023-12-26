import React, { useState, useEffect } from 'react'
import DeleteIcon from "@material-ui/icons/Delete";
import UndoIcon from '@material-ui/icons/Undo';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import {DeleteIcon } from '@mui/icons-material';
// import DeleteIcon from '@mui/icons-material/Delete';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/home.css"
const url = "http://localhost:8000";
const ToDo = 'ToDo';
const InProgress = 'InProgress';
const Done = 'Done';
// Importing material UI icons



const Home = () => {

  const navigate = useNavigate();
  const [state, setState] = useState({
    user: { name: 'Mayank', email: 'mayank@email.com' }, todo: [
      { task: 'Running', user: 'Mayank', state: 'ToDo' },
      { task: 'Running1', user: 'Mayank', state: 'ToDo' },

    ], inProgress: [
      { task: 'Coding', user: 'Mayank', state: 'InProgress' },
      { task: 'Coding1', user: 'Mayank', state: 'InProgress' },
    ], done: [
      { task: 'Skipping', user: 'Mayank', state: 'Done' },
      { task: 'Skipping1', user: 'Mayank', state: 'Done' },
    ], task: ''
  });
  const getData = () => {
    axios.get(`${url}/home`).then(res => {
      const { todoData, inprogressData, doneData, user } = res.data;
      setState({ ...state, todo: todoData, inProgress: inprogressData, done: doneData, user: user, task: '' });
    })
      .catch(err => {
        err.response.data.msg === 'auth fail' && navigate('/signin');
        alert(err.response.data.error);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  // useEffect(()=>{
  //   // axios.post(`${url}/getData`,{userName:state.user})
  //   // .then(res=>{
  //   //   console.log(res.data);
  //   // })
  //   // .catch(err=>{
  //   //   console.log(err);
  //   // })
  // },[state.user]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  const handleAdd = (e) => {
    axios.post(`${url}/addTodo`, { task: state.task })
      .then(res => {
        getData();
      })
      .catch(err => {
        alert('Error while adding the task....');
      });
  }

  const handleRemove = (id) => {
    console.log('inside remove', id);
    axios.patch(`${url}/remove/${id}`)//why delete method did not work....
      .then(res => {
        getData();
      })
      .catch(err => {
        console.log(err);
        // alert(err);
      });
  }

  const handleUndo = (id,state)=>{
    axios.patch(`${url}/undo/${id}`,{state})
    .then(res => {
      getData();
    })
    .catch(err => {
      console.log(err);
      // alert(err);
    });
  }

  const handleCheckBox = (id,state) => {
    axios.patch(`${url}/move/${id}`,{state})
    .then(res => {
      getData();
    })
    .catch(err => {
      console.log(err);
      // alert(err);
    });
  }
  return (
    <>
      {/* Will set this in navbar */}
      {/* <div className='user-details'>
        <p>{state.user.name}</p>
        <p>{state.user.email}</p>
      </div> */}

      <div className='container'>
        {/* <div className="row"> */}
        <div className="user-details">
          <h5>ToDo List</h5>
          <input name='task' value={state.task} onChange={handleChange} />
          <AddCircleIcon className="button" onClick={handleAdd}/>
          {state.todo.map((data, i) => <div className='task-container' key={i}>
            <CheckCircleOutlineIcon  onClick={()=>handleCheckBox(data._id,InProgress)}/>
            <span>{data.task}</span>
            <DeleteIcon className="button" onClick={() => handleRemove(data._id)} />
          </div>)}
        </div>
        <div className="user-details">
          <h5>In progres List</h5>
          {state.inProgress.map((data, i) => <div className='task-container' key={i}>
            <CheckCircleOutlineIcon  onClick={()=>handleCheckBox(data._id,Done)}/>
            <span>{data.task}</span>
            <DeleteIcon className="button" onClick={() => handleRemove(data._id)} />
            <UndoIcon className="button" onClick={() => handleUndo(data._id,ToDo)} />
          </div>)}
        </div>
        <div className="user-details">
          <h5>Done List</h5>
          <ol>
            {state.done.map((data, i) => <li className='task-container' key={i}>
              <span>{data.task}</span>
              <DeleteIcon className="button" onClick={() => handleRemove(data._id)} />
              <UndoIcon className="button" onClick={() => handleUndo(data._id,InProgress)} />
            </li>)}
          </ol>
        </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default Home