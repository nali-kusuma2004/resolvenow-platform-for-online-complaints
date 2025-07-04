import './sign.css';
import Log from './log.jsx';
import {useState,useEffect} from 'react';
import Complaintpage from './complaintpage.jsx';


//   const adddata= async ()=>{
//     try{
//       const res=await fetch(api,{
        // method:"POST",
        // headers:{'Content-Type':'application/json'},
        // body:JSON.stringify(form),
//       });
//       if(!res.ok)throw new Error("failed to insert data")
//         setForm({name: '',type: ''}); 
//     }
//     catch(err){
//       console.log(err);
//     }

//   };

export default function Sign() {

  const api="http://localhost:3000/api/users";
  const [form,setForm]=useState({name:'',email:'',password:'', usertype:'' });
const senddata=async (e)=>{
      e.preventDefault();
    try{
       const res=await fetch(api,{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(form),
         });
      if(!res.ok)throw new  Error('failed to add data');
      setForm({name:'',email:'',password:'', usertype:''}); 
      console.log(form); 
      const data=await res.json();
      if(data.message === 'user saved successfully'){
        alert("Signed In Successfully");
        setpage('complaintpage');
      }
      else{
         alert("User already exists, please log in");
        setpage('log');
      }
     

    }
    catch(err){
      console.log(err);
    }
  }
  
  const arr =['select','user','admin','agent'];
  
  const [page,setpage]=useState("sign");
  const [cards,setcards]=useState();
 
  
function insert(){


}
function back(){ 
  window.location.reload();}
function openlog(){ setpage('log'); }
  return (
    <>

    {page === "sign" && (
      <>
      <nav> 
        <h1>Resolve Now</h1>
        <button id="home" onClick={back}>Home</button>
        <button id="log-in"onClick={openlog}>Login</button>
        </nav>
      <section id="signin">
        <div className="signin1">
          <h2>sign in</h2>
          <form onSubmit={senddata}>
            <label htmlFor="text">Name:</label>
            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value})} required/>
            <br></br>
            <label>Type</label>
            <select value={form.usertype} onChange={(e) => setForm({ ...form,usertype:e.target.value })} required >
              {arr.map((i,index)=>(<option key={index} value={i}>{i} </option>))} 
            </select>
            <br></br> 
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={form.email}
             onChange={(e) => setForm({ ...form, email: e.target.value})
            } required /> <br></br>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password"
            value={form.password}
            onChange={(e)=>setForm({...form,password:e.target.value})}
             required />
            <br></br>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </section>
     </>
    )} 
    {
      page === "log" && <Log />
    }
    {page === "complaintpage" && <Complaintpage username={form.name} />}
    </>
  );
}
