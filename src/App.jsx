import React from 'react'
import styles from "./App.module.css"
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Projects from './Components/Projects/Projects'
import  Contact  from './Components/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
const App = () => {
  return (
    <div className={styles.App}>
      {/* <Navbar/> */}
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App