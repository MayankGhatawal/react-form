import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const{register, handleSumbit} = useForm();
  const onSubmit = (d) =>{
    alert(JSON.stringify(d));
  }
  return (
    <>
        <div className="main">
          <form className='main2' onSubmit={}>
            <label for="name">First Name:</label>
            <input type="text" id="fname" name="fname" required />
            <label for="name">Last Name:</label>
            <input type="text" id="lname" name="lname" required />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <input type="submit" value="Submit" />
          </form>
        </div>
    </>
  )
}

export default App
