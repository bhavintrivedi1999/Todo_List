import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/home.css"
const url = "http://localhost:8000";

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
    ]
  });
  // useEffect(() => {
  //   axios.get(`${url}/home`).then(res => {
  //     const { todoData, inprogressData, doneData, user } = res.data;
  //     setState({ ...state, todo: todoData, inProgress: inprogressData, done: doneData, user: user });
  //   })
  //     .catch(err => {
  //       navigate('/signin');
  //     });
  // }, []);
  // useEffect(() => {
  //   console.log('inside todo-->', state.todo);
  //   console.log('inside done-->', state.done);
  //   console.log('inside inProgress-->', state.inProgress);
  // }, [state.todo, state.inProgress, state.doneData]);
  // useEffect(()=>{
  //   // axios.post(`${url}/getData`,{userName:state.user})
  //   // .then(res=>{
  //   //   console.log(res.data);
  //   // })
  //   // .catch(err=>{
  //   //   console.log(err);
  //   // })
  // },[state.user]);
  // const handleChange = (e) => {
  //   const {name,value} = e.target;
  //   setState({...state,[name]:value});
  // }

  return (
    <>
      <div className='user-details'>
        <p>{state.user.name}</p>
        <p>{state.user.email}</p>
      </div>

      <div className='container'>
        <div className="row">
          <div className="user-details">
            <h5>ToDo List</h5>
            <input />
            <button>Add</button>
            {state.todo.map((data, i) => <div className='task-container' key={i}>
              <input type='checkbox' />
              <span>{data.task}</span>
              <button>Delete</button>
            </div>)}
          </div>
          <div className="user-details">
            <h5>In progres List</h5>
            {state.inProgress.map((data, i) => <div className='task-container' key={i}>
              <input type='checkbox' />
              <span>{data.task}</span>
              <button>Delete</button>
              <button>Undo</button>
            </div>)}
          </div>
          <div className="user-details">
            <h5>Done List</h5>
            <ul>
              {state.done.map((data, i) => <li className='task-container' key={i}>
                <span>{data.task}</span>
                <button>Delete</button>
                <button>Undo</button>
              </li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home