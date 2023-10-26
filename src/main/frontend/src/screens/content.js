import React from 'react'
import EducationContent from '../contents/educationContent'
import ExperienceContent from '../contents/experienceContent';
import ProjectsContent from '../contents/projectsContent';
import SkillsContent from '../contents/skillsContent';
import HomeContent from '../contents/homeContent';


const Content = ({ page, data }) => {
	let content = <div style={{margin:40, fontSize:100, fontWeight:'bold'}}>Loading...</div>
	if(data !== null){
		switch (page) {
			case 'Education':
				content = <EducationContent education={data.education} />
				break
			case 'Experience':
				content = <ExperienceContent experience={data.experience} />
				break
			case 'Projects':
				content = <ProjectsContent projects={data.projects} />
				break
			case 'Skills':
				content = <SkillsContent skills={data.skills} projects={data.projects} />
				break
			default:
				content = <HomeContent />
		}
	}
	
	return (
		<div>
			{content}
		</div>
	)
}

export const contentStyles = {
	container: {
		height: '90vh',
        width: '70vw',
        display: 'flex',
        flexDirection: 'column',
        margin: 30,
        borderRadius: 7,
        backgroundColor: '#F9F7F7'
	}
}  

export default Content
