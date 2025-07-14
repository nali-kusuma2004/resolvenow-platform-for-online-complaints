import Sign from "./componets/sign.jsx";
import Log from "./componets/log.jsx";
import {useState} from 'react';



function App() {
  // document.getElementById("sign-in").addEventListener("click",()=>{
  //   document.getElementById("signin").style.display="block";})
  const [currentpage,setcurrentpage]=useState('home');
  

  function opensign(){

    setcurrentpage('sign');
    console.log(currentpage);
    // {return ( <Sign/>)}
}
function openlog(){
   setcurrentpage('log')
}


  return (
    <>
    {currentpage === 'home' && (
      <>
      <nav>
        <h1>online complaint management</h1>
        <button className="sign-in" onClick={opensign} >signin</button>
        <button className="log-in" onClick={openlog}>login</button>
      </nav>
        <section id="main">
          <p>Complaint Management System</p>
        </section>
      <footer>
        <p> complaint care </p>
        <p>&copy; 2025 All rights reserved </p>
      </footer>
      </>
    )
    }
      {currentpage ==='sign' && <Sign/>}
      {currentpage === 'log' && <Log/>}
      </>
  );
}


export default App;
