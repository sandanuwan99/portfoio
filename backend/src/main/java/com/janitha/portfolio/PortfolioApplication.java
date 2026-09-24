package com.janitha.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

/**
 * Enterprise Portfolio Backend for Janitha Sandanuwan
 * Software Engineer | Full-Stack Developer
 * Tech Stack: Java 17/21, Spring Boot 3, Spring Data JPA, MS SQL Server
 */
@SpringBootApplication
@EnableAsync
public class PortfolioApplication {

    public static void main(String[] args) {
        SpringApplication.run(PortfolioApplication.class, args);
    }
}
