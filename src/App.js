import { getAuth } from "firebase/auth";
import app from "./firebase/firebase.init";
import './App.css';
const auth = getAuth(app);

// target full form
const handleSubmit = (event) => {
  const email = event.target.email.value
  const password = event.target.password.value
  event.preventDefault()
  console.log(email, password)
}

// target email form
const handleEmailOnBlur = event => {
  console.log(event.target.value)
}
// target password form
const handlePasswordOnBlur = event => {
  console.log(event.target.value)
}

function App() {
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onBlur={handleEmailOnBlur} type='email' name="email" placeholder="Email" />
        <br></br>
        <input onBlur={handlePasswordOnBlur} type='password' name="password" placeholder="password" />
        <br></br>
        <button type="submit">Register</button>
      </form>

    </div>
  );
}

export default App;
