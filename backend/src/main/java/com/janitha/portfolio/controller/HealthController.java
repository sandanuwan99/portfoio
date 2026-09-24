package com.janitha.portfolio.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Map;

@RestController
@RequestMapping("/api/health")
@Tag(name = "Health & System", description = "Liveness probe and system runtime diagnostics")
public class HealthController {

    @GetMapping
    @Operation(summary = "System health check", description = "Returns active runtime status, framework versions, and database engine type")
    public ResponseEntity<Map<String, Object>> getHealth() {
        return ResponseEntity.ok(Map.of(
                "status", "UP",
                "service", "Janitha Portfolio Enterprise Backend",
                "framework", "Spring Boot 3.3.4",
                "runtime", "Java 17/21",
                "database", "Microsoft SQL Server",
                "timestamp", LocalDateTime.now()
        ));
    }
}
