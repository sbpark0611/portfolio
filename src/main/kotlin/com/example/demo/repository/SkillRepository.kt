package com.example.demo.repository

import com.example.demo.Skill
import com.example.demo.SkillId
import org.springframework.stereotype.Repository
import org.springframework.data.repository.CrudRepository

@Repository
interface SkillRepository: CrudRepository<Skill, SkillId> {
}