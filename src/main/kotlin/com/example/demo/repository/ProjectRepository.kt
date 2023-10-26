package com.example.demo.repository

import com.example.demo.Project
import com.example.demo.ProjectId
import org.springframework.stereotype.Repository
import org.springframework.data.repository.CrudRepository

@Repository
interface ProjectRepository: CrudRepository<Project, ProjectId> {
}