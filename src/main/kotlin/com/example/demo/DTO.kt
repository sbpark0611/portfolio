package com.example.demo

data class EducationDTO (
    val title: String,
    val department: String,
    val details: String,
    val image: String
)

data class ExperienceDTO (
    val title: String,
    val position: String,
    val details: String
)

data class ProjectDTO (
    val title: String,
    val details: String,
    val skills: String,
    val links: String?
)

data class SkillDTO (
    val title: String,
    val detail: String
)