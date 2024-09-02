import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">

        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img
                src={getImageUrl("contact/emailIcon.png")}
                alt="Email icon"
                />
                <a href="mailto:sonia.singh0409@gmail.com">sonia.singh0409@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="Linkedin icon"
                />
                <a href="https://www.linkedin.com/in/sonia0409/">linkedin.com/sonia0409</a>
            </li>
            <li className={styles.link}>
                <img
                src={getImageUrl("contact/githubIcon.png")}
                alt="Github icon"
                />
                <a href="https://github.com/sonia0409">github.com/sonia0409</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact