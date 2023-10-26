package com.example.demo.repository

import com.example.demo.Education
import com.example.demo.EducationId
import org.springframework.stereotype.Repository
import org.springframework.data.repository.CrudRepository

@Repository
interface EducationRepository: CrudRepository<Education, EducationId> {
}