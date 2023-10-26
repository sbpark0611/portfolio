package com.example.demo

import org.springframework.boot.autoconfigure.security.servlet.PathRequest
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.http.SessionCreationPolicy


@Configuration
@EnableWebSecurity
class SecurityConfig() {
    private val allowedUrls = arrayOf("/**")

    @Bean
    fun filterChain(http: HttpSecurity) = http
        .csrf(({ csrf -> csrf.disable() }))
        .authorizeHttpRequests {
            it.requestMatchers(*allowedUrls).permitAll()
                .anyRequest().authenticated()
        }
        .sessionManagement { it.sessionCreationPolicy(SessionCreationPolicy.STATELESS) }
        .build()!!
}
