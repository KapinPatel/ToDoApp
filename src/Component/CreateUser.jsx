import React, { useState } from 'react'
import st from './app.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreateUser = () => {
  let [name,setName]=useState('')
  let [com,setCom]=useState('')
  let [salary,setSalary]=useState('')
  let nameFirst=(e)=>{
    setName(e.target.value)
  }
  let compunyName=(x)=>{
    setCom(x.target.value)
  }
  let sal=(y)=>{
    setSalary(y.target.value)
  }
  let navigate=useNavigate()
  let createuser=(z)=>{
    z.preventDefault()
    let payload={
      ename:name,
      ecompuny:com,
      esal:salary
    }
    axios.post("http://localhost:3000/emp",payload)
    .then(()=>{alert("Data has been Stored")})
    .catch(()=>{alert("Error Somthing Wronge")})
    navigate('/users')
  }
  return (
    <div id={st.Createuser}>
        <form>
            <label htmlFor="">Name</label>
            <input type="text" onChange={nameFirst} />
            <label htmlFor="">Compuny</label>
            <input type="text" onChange={compunyName} />
            <label htmlFor="">Salary</label>
            <input type="text" onChange={sal} />
            <button onClick={createuser}>Submit</button>
        </form>
    </div>
  )
}

export default CreateUser