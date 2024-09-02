import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sonia Singh</h1>
        <p className={styles.description}>Motivated, and result-oriented full stack developer with 3 years of experience.
          I bring experties in building a scalable, and maintainable applications.
          <br/>
          Reach out if you'd like to learn more! 
        </p>
        <a href="mailto:sonia.singh0409@gmail.com" className={styles.contactBtn}> Contact Me</a>
    </div>
    {/* <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/> */}
    <img src={getImageUrl("hero/sonia.png")} alt="Hero image of me" className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur} />

  </section>
    
  
}

export default Hero