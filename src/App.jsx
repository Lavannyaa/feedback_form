import {useState} from 'react'
function App(){
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [rating,setrating]=useState("");
   const [comment,setComment]=useState("");
  return (
    <div>
<h1>Feedback Form</h1>
<input
type="text"
value={name}
placholder="Enter name"
onChange={e=>(e.target.value)}></input>
<input


placholder="Enter Email"
onChange={e=>(e.target.value)}></input>

<button onClick={()=>{name}}>Name</button>

<button onClick={()=>email.includes("@")? 'Valid':'Invalid'}>Email</button>
<h3>Comment:{comment}</h3>
<h3>Rating:{rating}</h3>


    </div>
   
  )
}
export default App;