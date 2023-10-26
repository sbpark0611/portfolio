package com.example.demo.service

import com.example.demo.Education
import com.example.demo.Experience
import com.example.demo.Project
import com.example.demo.Skill
import com.example.demo.repository.EducationRepository
import com.example.demo.repository.ExperienceRepository
import com.example.demo.repository.ProjectRepository
import com.example.demo.repository.SkillRepository
import org.springframework.stereotype.Service

@Service
class DataService (
    val educationRepository: EducationRepository,
    val experienceRepository: ExperienceRepository,
    val projectRepository: ProjectRepository,
    val skillRepository: SkillRepository,
) {
    fun getEducation(): MutableIterable<Education> {
        return educationRepository.findAll()
    }
    fun getExperience(): MutableIterable<Experience> {
        return experienceRepository.findAll()
    }
    fun getProjects(): MutableIterable<Project> {
        return projectRepository.findAll()
    }
    fun getSkills(): MutableIterable<Skill> {
        return skillRepository.findAll()
    }
}