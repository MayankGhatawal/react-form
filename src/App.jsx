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
          <form className='main2' onSubmit={handleSumbit(onSubmit)}>
            <label>First Name:</label>
            <input {...register("firstname")} />
            <label>Last Name:</label>
            <input {...register("lastname")} />
            <label>Email:</label>
            <input {...register("email")} />
            <input type="submit" value="Submit" />
          </form>
        </div>
    </>
  )
}

export default App
