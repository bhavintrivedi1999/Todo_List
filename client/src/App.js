import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import axios from "axios";
const url = "http://localhost:8000";

function App() {
  // On click Links should route to respective components
  const [data, setData] = useState(20);
  // const [year,setYear] = useState(2000);
  // const [age,setAge] = useState(0);
  useEffect(() => {
    const a = async () => {
      const res = await axios.post(url);
      setData(res.data);
    };
    // setTimeout(()=>a(),2000);
    a();
  }, []);

  // useEffect(()=>{
  //   setAge(2023-year);
  // },[year]);
  // const handleChange = (e) => {
  //   setYear(e.target.value);
  // }
  return (
    <>
    <div>{data}</div>
      {/* <div>{data}</div>
     <select value={year} onChange={handleChange}>
      <option value={2000}>2000</option>
      <option value={2010}>2010</option>
      <option value={2020}>2020</option>
     </select>
     <div>Your current age is {age}</div> */}
    </>
  );
}

export default App;
