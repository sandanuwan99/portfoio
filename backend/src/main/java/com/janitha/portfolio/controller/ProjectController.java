package com.janitha.portfolio.controller;

import com.janitha.portfolio.dto.ApiResponse;
import com.janitha.portfolio.dto.ProjectResponseDto;
import com.janitha.portfolio.service.ProjectService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
@Tag(name = "Projects", description = "Endpoints for querying enterprise projects, architecture topologies, and case studies")
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping
    @Operation(summary = "List all projects", description = "Retrieve all enterprise projects, optionally filtered by featured status")
    public ResponseEntity<ApiResponse<List<ProjectResponseDto>>> getAllProjects(
            @Parameter(description = "Filter only featured showcase projects")
            @RequestParam(name = "featured", required = false) Boolean featured) {

        List<ProjectResponseDto> projects = (featured != null && featured)
                ? projectService.getFeaturedProjects()
                : projectService.getAllProjects();

        return ResponseEntity.ok(ApiResponse.ok(projects));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get project by ID", description = "Retrieve complete project details, database schema highlights, and API contract specifications by numeric ID")
    public ResponseEntity<ApiResponse<ProjectResponseDto>> getProjectById(
            @Parameter(description = "Database primary key ID") @PathVariable("id") Long id) {
        ProjectResponseDto project = projectService.getProjectById(id);
        return ResponseEntity.ok(ApiResponse.ok(project));
    }

    @GetMapping("/slug/{slug}")
    @Operation(summary = "Get project by Slug", description = "Retrieve complete technical case study by URL slug (e.g. 'insta360-insurance-erp')")
    public ResponseEntity<ApiResponse<ProjectResponseDto>> getProjectBySlug(
            @Parameter(description = "Project URL slug identifier") @PathVariable("slug") String slug) {
        ProjectResponseDto project = projectService.getProjectBySlug(slug);
        return ResponseEntity.ok(ApiResponse.ok(project));
    }
}
