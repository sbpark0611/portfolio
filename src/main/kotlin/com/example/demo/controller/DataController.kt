package com.example.demo.controller

import com.example.demo.service.DataService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController


@RestController
class DataController (val dataService: DataService) {

    @GetMapping("/api/data")
    fun getData(): ResponseEntity<Any> {
        try {
            val education = dataService.getEducation().map{it.toDTO()}
            val experience = dataService.getExperience().map{it.toDTO()}
            val projects = dataService.getProjects().map{it.toDTO()}
            val skills = dataService.getSkills().map{it.toDTO()}
            val res = mapOf(
                "education" to education,
                "experience" to experience,
                "projects" to projects,
                "skills" to skills
            )
            return ResponseEntity.ok(res)
        }
        catch (e: Error) {
            return ResponseEntity.internalServerError().build()
        }
    }
}