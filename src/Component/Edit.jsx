import React, { useEffect, useState } from 'react'
import st from './app.module.css'
import axios from 'axios'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
const Edit = () => {
  let [nam,setNam]=useState('')
  let [comp,setComp]=useState('')
  let [sl,setSl]=useState('')
  let obj=useParams()
  let navi=useNavigate()
  let fhandle=(e)=>{
    e.preventDefault()
    let payload={
      ename:nam,
      ecompuny:comp,
      esal:sl
    }
    axios.put(`http://localhost:3000/emp/${obj.ab}`,payload)
    .then(()=>{alert('Data is updated')})
    .catch(()=>{alert("Error")})

    navi('/users')
  }
  let namData=(e)=>{
    setNam(e.target.value)
  }
  let compData=(e)=>{
    setComp(e.target.value)
  }
  let salData=(e)=>{
    setSl(e.target.value)
  }
  useEffect(()=>{
    axios.get(`http://localhost:3000/emp/${obj.ab}`)
    .then((res)=>{
      setNam(res.data.ename);
      setComp(res.data.ecompuny)
      setSl(res.data.esal)
    })
    .catch(()=>{console.log('Erroor');})
  },[])
  return (
    <div>
        <div id={st.Createuser}>
        <form>
            <h4>Edit User</h4>
            <label htmlFor="">Name</label>
            <input type="text" value={nam} onChange={namData}/>
            <label htmlFor="">Compuny</label>
            <input type="text" value={comp} onChange={compData}/>
            <label htmlFor="">Salary</label>
            <input type="text" value={sl} onChange={salData}/>
            <button onClick={fhandle}>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Edit