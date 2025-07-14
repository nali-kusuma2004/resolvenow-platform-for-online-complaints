import "./sign.css";
import { useState, useEffect } from "react";
import Complaintpage from "./complaintpage.jsx";
export default function Status({ username }) {
  const api = "http://localhost:3000/api/dataretrieve";
  const addcards = async () => {
    //  e.preventDefault();
    try {
      const res = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      // localStorage.setItem(data.data);
      setcomplaint(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    addcards();
  }, []);
  const back = () => {
    window.location.reload();
  };

  const complaintpage = () => {
    setpage("complaintpage");
  };

  const [page, setpage] = useState("status");
  const [complaint, setcomplaint] = useState([]);
  const user = { username };

  console.log(complaint);
  return (
    <>
      {page === "status" && (
        <>
          <nav id="complaintnav">
            <h3>Hello,{username}</h3>
            {/* <button id="reg">Register complaint</button> */}
            <button id="status" onClick={complaintpage}>
              New Complaint
            </button>
            <button onClick={back}>Log out</button>
          </nav>
          <section id="status2">
            <div id="status1">
              <div id="cards">
                {complaint.map((item, index) => (
                  <div className="card" key={index}>
                    <table>
                      <tr>
                        <td className="title">Name</td>
                        <td>: {item.name}</td>
                      </tr>
                      <tr>
                        <td className="title">Address</td>
                        <td>: {item.address}</td>
                      </tr>
                      <tr>
                        <td className="title">City</td>
                        <td>: {item.city}</td>
                      </tr>
                      <tr>
                        <td className="title">State</td>
                        <td>: {item.state}</td>
                      </tr>
                      <tr>
                        <td className="title">Pincode</td>
                        <td>: {item.pincode}</td>
                      </tr>
                      <tr>
                        <td className="title">Complaint</td>
                        <td>: {item.description}</td>
                      </tr>
                     </table>
                    <button>{item.status}</button>
                   
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      {page === "complaintpage" && <Complaintpage username={username} />}
    </>
  );
}
