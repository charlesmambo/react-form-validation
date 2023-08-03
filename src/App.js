import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false
  });
  const [role, setRole] = useState("role");





  return (
    <div className="App">
      <form>
        <fieldset>
        <h2>Sign Up</h2>

        <div className='Field'>
          <label>
            First name <sup>*</sup>
          </label>
          <input placeholder='First name'/>
        </div>

        <div className='Field'>
          <label>
            Last name <sup>*</sup>
          </label>
          <input placeholder='Last name'/>
        </div>

        <div className='Field'>
          <label>
           Email Address <sup>*</sup>
          </label>
          <input placeholder='Email address'/>
        </div>

        <div className='Field'>
          <label>
           Password <sup>*</sup>
          </label>
          <input placeholder='Password'/>
        </div>

        <div className="Field"> 
        <label> 
          Role <sup>*</sup> 
        </label> 
        <select> 
          <option value="role">Role</option> 
          <option value="individual">Individual</option> 
          <option value="business">Business</option> 
        </select> 
        </div> 

        <button type="submit"> 
           Create account 
         </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
