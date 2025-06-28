import './sign.css';
import Log from './log.jsx';
import {useState,useEffect} from 'react';

const api="http://localhost:5000/api/complaint";

function insert(){
  const adddata= async ()=>{
    try{
      const res=await fetch(api,{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(form),
      });
      if(!res.ok)throw new Error("failed to insert data")
        setForm({name: '',type: ''}); 
    }
    catch(err){
      console.log(err);
    }

  };
}

export default function Sign() {
  
  const arr =['select','user','admin','agent'];
  
  const [page,setpage]=useState("sign");
  const [input,setinput]=useState('');
  const home = ()=>{
    setpage("home");

  }
   function openlog(){ setpage('log');}
  
  return (
    <>

    {page === "sign" && (
      <>
      <nav> 
        <h1>online complaint management</h1>
        <button id="home" onClick={()=>{setpage('home')}}>Home</button>
        <button id="log-in"onClick={openlog}>Login</button>
        </nav>
      <section id="signin">
        <div className="signin1">
          <h2>sign in</h2>
          <form>
            <label htmlFor="text">Name:</label>
            <input type="text" id="text" name="text" required /> <br></br>
            <label>Type</label>
            <select name="type" id="type" required>
              {arr.map((i,index)=>(<option key={index} value={i}>{i} </option>))}
            </select>
            <br></br> 
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required /> <br></br>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <br></br>
            <button type="submit" onClick={insert}>Sign In</button>
          </form>
        </div>
      </section>
     </>
    )} 
    {
      page === "log" && <Log />
    }
    </>
  );
}
