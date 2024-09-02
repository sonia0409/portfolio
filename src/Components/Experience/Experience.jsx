import React from 'react'
import skills from "../../data/skills.json"
import { getImageUrl } from '../../utils'
import history from '../../data/history.json'
import styles from './Experience.module.css'

const Experience = () => {
  return <section className={styles.container} id="experience">

    <div className={styles.content}>
        <h2 className={styles.title}>
            Skills
        </h2>
        <br/>
        <div className={styles.skills}>
            {
                skills.map((skill,id) => {
                    return (
                    <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}><img src={getImageUrl(skill.imageSrc)} 
                        alt={skill.title}/>
                        </div>
                        <p>{skill.title}</p>
                    </div>
                    )
                })
            }
        </div>
        <h2 className={styles.title}>
            Experience
        </h2>
        <ul>
            {
                history.map((historyItem,id) =>{
                    return(
                        <li key={id} className={styles.historyItem}>
                            <img
                                src={getImageUrl(historyItem.imageSrc)}
                                alt={`${historyItem.organisation} Logo`}
                            />
                            <div className={styles.historyItemDetails}>
                                <h3>
                                    {`${historyItem.role}, ${historyItem.organisation}`}
                                </h3>
                                <p>
                                    {`${historyItem.startDate}-${historyItem.endDate}`}
                                </p>
                                <ul>
                                    {historyItem.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>
                                    })}
                                </ul>
                            </div>

                        </li>

                    )
                })
            }
        </ul>
    </div>
    </section>
}

export default Experience