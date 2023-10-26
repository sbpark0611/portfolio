import React from 'react'
import { contentStyles } from '../screens/content'


const ExperienceContent = ({ experience }) => {
	return (
        <div style={contentStyles.container}>
            <div style={{margin: 30}}>
                {experience.map((data) => {
                    return (
                        <div>
                            <div style={styles.title}>{data.title}</div>
                            <div style={styles.body}>{data.position}</div>
                            {data.details.split(';').map((detail) => {
                                return (
                                    <div style={styles.body}>⦁ {detail}</div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
	)
}

const styles = {
    title: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold'
    },
    body: {
        fontSize: 20
    },
}

export default ExperienceContent

