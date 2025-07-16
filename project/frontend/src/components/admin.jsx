import {useState,useEffect} from 'react';
import "./sign.css";
export default function Admin({username}){
    const api="http://localhost:3000/api/admin";
    const api2="http://localhost:3000/api/adminreply";
    const sendmessage=async (e)=>{
      e,preventDefault();
      try{
         const res=await fetch(api2,{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(form),
         })
          

      }
      catch(err){
        console.log(err);
      }
    }
    const usercomplaint= async ()=>{
        // e.preventDefault();
        try{
            const res=await fetch(api,{
                method:"GET",              
            })
            const data=await res.json();
            setcomplaint(data.data);
            console.log(complaints);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        usercomplaint()
    },[]);


    // document.getElementById("message").addEventListener("click",()=>{
    //           document.getElementById("reply").style.display="block";
    //  }
    //  )
     
    const [page,setpage]=useState("admin");
    const [form,setform]=useState({message:" "});
    const [complaints,setcomplaint]=useState([]);
    const [isopen,setisopen]=useState(null);
    return(
        <>
        {page ==="admin" && (
            <>
        <nav id="complaintnav">
            <h3>Hello,{username}</h3>
            {/* <button id="reg">Register complaint</button> */}
          </nav>
          <section id="status2">
            <div id="status1">
              <div id="cards">
                {complaints.map((item)=>(
                  <div className="card" key={item.id}>
                    <table>
                      <tr>
                        <td className="title"><img src="https://icon-library.com/images/name-icon-png/name-icon-png-2.jpg " width="30px" height="30px" /></td>
                        <td>: {item.name}</td>
                      </tr>
                      <tr>
                        <td className="title"><img src="https://cdn-icons-png.flaticon.com/512/4942/4942069.png " width="30px" height="30px" /></td>
                        <td>: {item.address}</td>
                      </tr>
                      <tr>
                        <td className="title"><img src="https://cdn-icons-png.flaticon.com/512/2451/2451474.png " width="40px" height="40px" /></td>
                        <td>: {item.city}</td>
                      </tr>
                      <tr>
                        <td className="title"><img src="https://e7.pngegg.com/pngimages/647/766/png-clipart-state-government-computer-icons-others-miscellaneous-blue-thumbnail.png" width="30px" height="30px" /></td>
                        <td>: {item.state}</td>
                      </tr>
                      <tr>
                        <td className="title"><img src="https://png.pngtree.com/png-clipart/20220521/ourmid/pngtree-red-location-icon-sign-png-image_4644037.png " width="30px" height="30px" /></td>
                        <td>: {item.pincode}</td>
                      </tr>
                      <tr>
                        <td className="title"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwoLK8Utu4B1ZsfE5X0N7CgOLwRgThRnWa9g&s " width="30px" height="30px" /></td>
                        <td id="complaintwidth">: {item.description}</td>
                      </tr>
                      <tr> 
                        <td className="title">Status</td>
                        <td>
                        <button>{item.status}</button>
                        </td>
                    </tr>
                    <tr>
                      <td colSpan="2"><button  className="message" onClick={()=>{setisopen(item._id)}}> message</button></td>
                    </tr>
                    {isopen === item._id && (
                       <tr>
                        <td colSpan="2">
                          <div id="reply">
                      <form onSubmit={sendmessage}>
                        <input type="text" placeholder="type message" onChange={(e)=>{setform({...form,[e.target.name]:e.target.value});}}/>
                        <button id="send"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdzson5nnt3at2eH9CcsLIxLl5o_ZCvhXkkg&s"  width="30px" height="30px"/></button>
                      </form>
                      </div>
               
                </td>
                </tr>
                    )}
                    </table>

                  </div>
                ))};
              </div> 
               
            </div>
          </section>
          
           </>
      )}
      
        </>
    )
}

{/* location:https://png.pngtree.com/png-clipart/20220521/ourmid/pngtree-red-location-icon-sign-png-image_4644037.png */}
{/* name:https://icon-library.com/images/name-icon-png/name-icon-png-2.jpg */}
{/* city:https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEsObXplzefCmUusu6IerwC6ZXXnytvOpFQ&s */}
{/* state:https://e7.pngegg.com/pngimages/647/766/png-clipart-state-government-computer-icons-others-miscellaneous-blue-thumbnail.png */}
{/* complaint : https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwoLK8Utu4B1ZsfE5X0N7CgOLwRgThRnWa9g&s */}