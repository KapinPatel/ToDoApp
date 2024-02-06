import React from 'react'
import st from "./app.module.css"
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <section id={st.NavBar}>
        <Link to="/">Create-User</Link>
        <Link to="/users">User</Link>
    </section>
      )
}

export default Home