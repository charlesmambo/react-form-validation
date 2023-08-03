import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <fieldset>
        <h2>Sign Up</h2>

        <div className='Field'>
          <label>
            First name
          </label>
          <input placeholder='First name'/>
        </div>

        <div className='Field'>
          <label>
            Last name
          </label>
          <input placeholder='Last name'/>
        </div>

        <div className='Field'>
          <label>
           Email Address
          </label>
          <input placeholder='Email address'/>
        </div>

        <div className='Field'>
          <label>
           Password
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

        </fieldset>
      </form>
    </div>
  );
}

export default App;
