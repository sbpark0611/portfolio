package com.example.demo

import jakarta.persistence.Entity
import jakarta.persistence.IdClass
import jakarta.persistence.Id
import java.io.Serializable


data class EducationId(
    val title: String = "",
    val department: String = "",
    val details: String = ""
) : Serializable

@Entity
@IdClass(EducationId::class)
data class Education(
    @Id
    val title: String = "",
    @Id
    val department: String = "",
    @Id
    val details: String = "",
    val image: String = ""
) {
    fun toDTO(): EducationDTO {
        return EducationDTO(
            title=title,
            department=department,
            details=details,
            image=image
        )
    }
}

data class ExperienceId(
    val title: String = "",
    val position: String = "",
    val details: String = ""
) : Serializable

@Entity
@IdClass(ExperienceId::class)
data class Experience(
    @Id
    val title: String = "",
    @Id
    val position: String = "",
    @Id
    val details: String = ""
) {
    fun toDTO(): ExperienceDTO {
        return ExperienceDTO(
            title=title,
            position=position,
            details=details
        )
    }
}

data class ProjectId(
    val title: String = "",
    val details: String = "",
    val skills: String = ""
) : Serializable

@Entity
@IdClass(ProjectId::class)
data class Project(
    @Id
    val title: String = "",
    @Id
    val details: String = "",
    @Id
    val skills: String = "",
    val links: String? = null
) {
    fun toDTO(): ProjectDTO {
        return ProjectDTO(
            title=title,
            details=details,
            skills=skills,
            links=links
        )
    }
}

data class SkillId(
    val title: String = "",
    val detail: String = ""
) : Serializable

@Entity
@IdClass(SkillId::class)
data class Skill(
    @Id
    val title: String = "",
    @Id
    val detail: String = ""
) {
    fun toDTO(): SkillDTO {
        return SkillDTO(
            title=title,
            detail=detail
        )
    }
}