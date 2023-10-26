import React from 'react'
import { contentStyles } from '../screens/content'


const EducationContent = ({ education }) => {
	return (
        <div style={contentStyles.container}>
            <div style={{margin: 30}}>
                {education.map((data) => {
                    return (
                        <div>
                            <img style={styles.image} alt="eduimg" src={"image/"+data.image}/>
                            <div style={styles.title}>{data.title}</div>
                            <div style={styles.body}>{data.department}</div>
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
    image: {
        height: 100,
        objectFit: 'cover',
        borderRadius: 10
    },
    title: {
        marginTop: 5,
        fontSize: 30,
        fontWeight: 'bold',
    },
    body: {
        fontSize: 20
    },
}

export default EducationContent
