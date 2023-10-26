package com.example.demo.repository

import com.example.demo.Experience
import com.example.demo.ExperienceId
import org.springframework.stereotype.Repository
import org.springframework.data.repository.CrudRepository

@Repository
interface ExperienceRepository: CrudRepository<Experience, ExperienceId> {
}