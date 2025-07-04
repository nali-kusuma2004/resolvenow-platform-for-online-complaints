import "./sign.css";
import Complaintpage from "./complaintpage.jsx";
import Sign from "./sign.jsx";
import { useState } from "react";
export default function Log() {
  const api = "http://localhost:3000/api/userlog";
  const verifydata = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(api, {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      console.log(form);
      if (!res.ok) throw new Error("failed to verify data");
      const data = await res.json();
      console.log(data);
      if (data.message === "User found") {
        alert("Login Successful");
        setForm({ email: "", password: "", usertype: "" });
        setpage("complaintpage");
      } else {
        alert("User not found, please sign up");
        setpage("sign");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const back=()=>{
    window.location.reload();
  }
  const arr = ["select", "user", "admin", "agent"];
  const [page, setpage] = useState("log");
  const [form, setForm] = useState({ name:" ",email: "", password: "", usertype: "" });
  return (
    <>
      {page === "log" && (
        <>
        <nav> 
        <h1>Resolve Now</h1>
        <button id="home" onClick={back}>Home</button>
        <button id="log-in"onClick={openlog}>Login</button>
        </nav>
          <section id="login">
            <div className="login1">
              <h2>Log in</h2>
              <form onSubmit={verifydata}>
                <label>Type</label><br></br>
                <select
                  value={form.usertype}
                  onChange={(e) =>
                    setForm({ ...form, usertype: e.target.value })
                  }
                  required
                >
                  {arr.map((i, index) => (
                    <option key={index} value={i}>
                      {i}{" "}
                    </option>
                  ))}
                </select>
                <br></br>
                <label htmlFor="email">Email:</label><br></br>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />{" "}
                <br></br>
                <label htmlFor="password">Password:</label><br></br>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  required
                />
                <p onClick={()=>{setpage("sign")}}> Don't have an account? {"sign up" }</p>
                <br></br>
                <button type="submit">Log In</button>
              </form>
            </div>
          </section>
        </>
      )}
      {page === "complaintpage" && <Complaintpage  />}
      {page === "sign" && <Sign />}
    </>
  );
}
