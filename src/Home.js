import React ,{useState, useEffect} from 'react'

const Home = () => {
  // let name = "Teni"

 const [name , setname] = useState("Teni")
 const [inp , setinp] = useState("")
 const [inp2, setinp2] = useState("")
 const [alluser, setalluser] = useState(JSON.parse(localStorage.getItem("allusers")) || [])
 const [oneuser, setoneuser] = useState({})
 const [index, setindex] = useState("")
 const [count, setcount] = useState(1)
 const [count2, setcount2] = useState(1)


  useEffect(() => {
    localStorage.setItem("allusers", JSON.stringify(alluser))
      setcount(count  * count2)
    
  },[alluser] )
  

  const gender = "female"
  const users = [
    {name:"Tola", class:"react"},
    {name:"Tola", class:"react"},
    {name:"Tola", class:"react"}
  ]

  const click = () =>{
    // name = "Esther"
    // setname("Esther")
    // console.log(name);
    // console.log(inp);
    setcount2(count2 + 1)
    let user = {
      username:inp,
      email:inp2
    }
    setalluser([...alluser, user])
    console.log(alluser);
  }
  const deletetodo = (i) =>{
    console.log(i);
    alluser.splice(i, 1)
    setalluser([...alluser])
  }
   const edittodo = (i , el) =>{
     console.log(i, el);
     setindex(i)
     setoneuser({...el})

   }
   const Save = () =>{
    alluser[index] = oneuser
    console.log(alluser);
    setalluser([...alluser])
   }
  // {conditional expression ? "true" : "false"}

  return (
    <>
    <h1>{count}</h1>
    <h1>{count2}</h1>
    
      <h1>{Math.random()}</h1>
      <h1 className={gender == "male" ? "text-primary" : "text-danger"} >{gender == "female" ? name : "man"}</h1>
      <button onClick={click}>Click</button>

       <input onChange={(e)=> setinp(e.target.value)} type="text" />
       <input onChange={(e)=> setinp2(e.target.value)} type="text" />
      <table>
         <tr>
          <th>Name</th>
          <th>Class</th>
         </tr>
         <tr>
           {users.map((el)=>(
            <>
            <td>{el.name}</td>
            <td>{el.class}</td>
            </>
           ))}
         </tr>
      </table>

      {alluser.length ==  0 ? "No user available at the moment" :  alluser.map((el, i)=>(
        <div key={i}>
              <h1>{i + 1}</h1>
            <h1>{el.username}</h1>
            <h1>{el.email}</h1>
            <button onClick={()=>deletetodo(i)} >Delete</button>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>edittodo(i, el)}>Edit</button>
        </div>
      ))}
         


{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body form-group">
        <input value={oneuser.username} onChange={(e)=> setoneuser({...oneuser, username:e.target.value})} className='form-control mt-3' type="text" />
        <input value={oneuser.email} onChange={(e)=>setoneuser({...oneuser, email:e.target.value})} className='form-control mt-3' type="text" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={Save}  class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
    
  )
}

export default Home