import {useState} from 'react';
import './sign.css';
export default function Complaintpage(){
   const back=()=>{
    window.location.reload();
   } 

    const [page,setpage]=useState("complaintpage");
    return (
        <>
        {page === 'complaintpage' && (
            <>
            <nav id="complaintnav">
                <h3>Hello User </h3>
                <button style="background-color:yellow; color:blue; ">Register complaint</button>
                <button style="background-color:red;color:blue;">Check Status</button>
                <button onClick={back}>Log out</button>
                </nav>
            <section id="complaint">
                <div className="complaint1">
                    <form>
                        <label htmlFor="complaint">Your Complaint:</label>
                        <textarea id="complaint" name="complaint" required></textarea>
                        <br />
                        <button type="submit">Submit Complaint</button>
                    </form>
                </div>
            </section>
            </> )}

        </>
    )
}

