import React, { useEffect, useState } from 'react'
import st from './app.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Users = () => {
  let [getdata,setGetdata]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/emp")
    .then((ele)=>{ 
      setGetdata(ele.data)
   })
    .catch(()=>{alert('Error')})
  },[])

  let deleteUser=(x)=>{
    axios.delete(`http://localhost:3000/emp/${x}`)
    window.location.assign('/users')
  }
  return (
    <div id={st.userHome}>
        {getdata.map((x)=>{
          return(
            <div>
              <table>
                <tr><th colSpan={2}>Employee : {x.id}</th>
                </tr>
                <tr>
                  <td>Name :</td>
                  <td>{x.ename}</td>
                </tr>
                <tr>
                  <td>Salary :</td>
                  <td>{x.esal}</td>
                </tr>
                <tr><td>Company: </td>
                <td>{x.ecompuny}</td></tr>
                <tr>
                  <td><button><Link to={`/Edit/${x.id}`}>Edit</Link></button></td>
                  <td><button onClick={()=>{deleteUser(x.id)}}>Delete</button></td>
                </tr>
              </table>            
            </div>
          )
        })}
    </div>
  )
}

export default Users