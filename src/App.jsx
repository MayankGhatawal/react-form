import { useForm, SubmitHandler } from "react-hook-form"
import './App.css'

function App() {
  const{register, handleSumbit} = useForm();

  return (
    <>
        <div className="main">
          <form className='main2' onSubmit={}>
            <label for="name">First Name:</label><br />
            <input type="text" id="fname" name="fname" required /><br />
            <label for="name">Last Name:</label><br />
            <input type="text" id="lname" name="lname" required /><br />
            <label for="email">Email:</label><br />
            <input type="email" id="email" name="email" required /><br />
            <input type="submit" value="Submit" />
          </form>
        </div>
    </>
  )
}

export default App
