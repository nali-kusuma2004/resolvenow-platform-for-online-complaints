
import './sign.css';
export default function Log(){
    return(      
         <>
        <section id="login">
            <div className="login1">
                <h2>Log in</h2>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email1" name="email" required /> <br />
                    <label>Type:</label>
                      <select>
                        {arr.map((i,index)=>(<option key={index} value={i}>{i} </option>))}
                      </select>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password1" name="password" required />
                    <br />
                    <button type="submit">Log In</button>
                </form>
            </div>
        </section>
        </>
    )
}