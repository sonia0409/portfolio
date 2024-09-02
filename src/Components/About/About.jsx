import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img
            src={getImageUrl("about/aboutImage1.png")}
            alt='Me sitting with the laptop'
            className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                    src={getImageUrl("about/cursorIcon.png")}
                    alt="Cursor icon"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>
                            Full stack developer 
                        </h3>
                        <p>
                            I'm a full stack developer with experience in both client-side and server-side.
                            I have a background in Engineering. I have completed research based Masters degree from University of Ottawa.
                            While pursuing my Masters I discovered my passion for software application development.

                        </p>
                    </div>
                </li>
                {/* <li className={styles.aboutItem}>
                    <img 
                    src={getImageUrl("about/cursorIcon.png")}
                    alt="Cursor icon"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>
                           Engineering Assistant
                        </h3>
                        <p>
                            Engineering Assistant
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                    src={getImageUrl("about/cursorIcon.png")}
                    alt="Cursor icon"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>
                           Engineering 
                        </h3>
                        <p>
                            Engineering 
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                    src={getImageUrl("about/cursorIcon.png")}
                    alt="Cursor icon"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>
                           Junior Engineer
                        </h3>
                        <p>
                        Junior Engineer
                        </p>
                    </div>
                </li> */}
            </ul>
        </div>

    </section>
  )
}

export default About