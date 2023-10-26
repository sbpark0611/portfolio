import React from 'react'
import { contentStyles } from '../screens/content'


const ProjectsContent = ({ projects }) => {
	return (
        <div style={Object.assign({},contentStyles.container, {overflow: 'scroll'})}>
            <div style={{margin: 30}}>
                {projects.map((data) => {
                    return (
                        <div>
                            <div style={styles.title}>{data.title}</div>
                            {data.details.split(';').map((detail) => {
                                return (
                                    <div style={styles.body}>⦁ {detail}</div>
                                )
                            })}
                            <div style={styles.body}>⦁ 사용된 기술: {data.skills.replaceAll(';', ', ')}</div>
                            {data.links !== null ? data.links.split(';').map((link) => {
                                return (
                                    <div style={{display: 'flex', flexDirection: 'row'}}>
                                        <div style={styles.body}>⦁&nbsp;</div>
                                        <div style={Object.assign({}, styles.body, {cursor: 'pointer', textDecoration: 'underline'})} onClick={()=>{window.open(link)}}>{link.replace(/https:\/\/github.com\/[^/]+\//, '')}</div>
                                    </div>
                                )
                            }) : null}
                        </div>
                    )
                })}
            </div>
        </div>
	)
}

const styles={
    container: {
        height: '90vh',
        width: '70vw',
        display: 'flex',
        flexDirection: 'column',
        margin: 30,
        backgroundColor: '#8E8FFA',
        
    },
    title: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold',
    },
    body: {
        fontSize: 20
    },
}

export default ProjectsContent
