import { getAuth } from "firebase/auth";
import app from "./firebase/firebase.init";
import './App.css';
const auth = getAuth(app);
function App() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='email' name="email" placeholder="Email" />
        <br></br>
        <input type='password' name="password" placeholder="password" />
        <br></br>
        <button type="submit">Register</button>
      </form>

    </div>
  );
}

export default App;
