import React from 'react'
import { contentStyles } from '../screens/content'
import { BarChart, Bar, XAxis, YAxis } from "recharts"


const SkillsContent = ({ skills, projects }) => {
    let dataDict = {}
    for (let project of projects) {
        const usedSkills = project.skills.split(';')
        for (let usedSkill of usedSkills) {
            if (!dataDict.hasOwnProperty(usedSkill)) {
                dataDict[usedSkill] = 0
            }
            dataDict[usedSkill] += 1
        }
    }

    let data = []
    for (let name of Object.keys(dataDict)){
        console.log(name, dataDict[name])
        data.push({
            "name": name,
            "cnt": dataDict[name]
        })
    }
    
	return (
        <div style={contentStyles.container}>
            <div style={{margin: 30}}>
                {skills.map((data) => {
                    return (
                        <div>
                            <div style={styles.title}>{data.title}</div>
                            <div style={styles.body}>⦁ {data.detail}</div>
                        </div>
                    )
                })}

                <div style={Object.assign({}, styles.title, {marginTop: 40, marginBottom: 10})}>프로젝트에 사용된 기술 빈도</div>
                <BarChart width={900} height={300} data={data}>
                    <Bar dataKey="cnt" fill="#8884d8" />
                    <XAxis height={200} angle={-90} interval={0} dataKey="name" textAnchor="end" />
                    <YAxis />
                </BarChart>
            </div>
        </div>
	)
}

const styles={
    title: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold'
    },
    body: {
        fontSize: 20
    },
}

export default SkillsContent